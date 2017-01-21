//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.apply(this, arguments);
        this.isThemeLoadEnd = false;
        this.isResourceLoadEnd = false;
    }
    var d = __define,c=Main,p=c.prototype;
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //Config loading process interface
        //设置加载进度界面
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        // initialize the Resource loading library
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
     * Loading of configuration file is complete, start to pre-load the theme configuration file and the preload resource group
     */
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    /**
     * 主题文件加载完成,开始预加载
     * Loading of theme configuration file is complete, start to pre-load the
     */
    p.onThemeLoadComplete = function () {
        this.isThemeLoadEnd = true;
        this.createScene();
    };
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.createScene();
        }
    };
    p.createScene = function () {
        if (this.isThemeLoadEnd && this.isResourceLoadEnd) {
            this.startCreateScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    p.startCreateScene = function () {
        //创建主布局
        var scroller = new eui.Scroller();
        scroller.percentWidth = 100;
        scroller.percentHeight = 100;
        this.addChild(scroller);
        var mainGroup = new eui.Group();
        var mainLayout = new eui.VerticalLayout();
        mainLayout.gap = 8;
        mainGroup.layout = mainLayout;
        scroller.viewport = mainGroup;
        scroller.addChild(mainGroup);
        //创建文本
        var label = new eui.Label();
        label.text = "测试文本,今天天气真不错啊，不是吗？Yes, what a great day.";
        label.width = 600;
        label.height = 300;
        label.fontFamily = "Microsoft Yahei, Tahama";
        label.textColor = 0xffeeaa;
        label.size = 36;
        label.bold = false;
        label.italic = false;
        label.textAlign = egret.HorizontalAlign.CENTER;
        label.verticalAlign = egret.VerticalAlign.MIDDLE;
        label.lineSpacing = 8;
        mainGroup.addChild(label);
        //自定义styley以及创建按钮
        var button = new eui.Button();
        EXML.load("resource/skins/MyLabelSkin.exml", function (clazz, url) {
            button.skinName = clazz;
            button.labelDisplay.text = "Good";
            button.labelDisplay.size = 49;
            button.enabled = true;
        }, this);
        mainGroup.addChild(button);
        //创建图片
        var image = new eui.Image();
        image.source = "resource/assets/egret_icon.png";
        //九宫格的四个参数分别是：区域1的宽高，区域5的宽高
        image.scale9Grid = new egret.Rectangle(10, 10, 80, 80);
        // image.width = 200;
        // image.height = 200;
        mainGroup.addChild(image);
        // 创建复选框
        var cbx = new eui.CheckBox();
        cbx.label = "选择1";
        mainGroup.addChild(cbx);
        cbx.addEventListener(eui.UIEvent.CHANGE, function (e) {
            egret.log(e.target.selected);
        }, this);
        var cbx2 = new eui.CheckBox();
        cbx2.label = "选择2";
        mainGroup.addChild(cbx2);
        var cbx3 = new eui.CheckBox();
        cbx3.label = "选择3";
        mainGroup.addChild(cbx3);
        cbx3.enabled = false;
        //创建单选框
        // let rdb: eui.RadioButton = new eui.RadioButton();
        // rdb.label = "单选1";
        // rdb.value = 1;
        // rdb.groupName = "group1";
        // rdb.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler, this);
        // this.addChild(rdb);
        // let rdb2: eui.RadioButton = new eui.RadioButton();
        // rdb2.label = "单选2";
        // rdb2.value = 2;
        // rdb2.groupName = "group1";
        // rdb2.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler, this);
        // this.addChild(rdb2);
        // let rdb3: eui.RadioButton = new eui.RadioButton();
        // rdb3.label = "单选3";
        // rdb3.value = 3;
        // rdb3.groupName = "group1";
        // rdb3.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler, this);
        // this.addChild(rdb3);
        //使用RadioGroup
        var rdbGroup = new eui.RadioButtonGroup();
        rdbGroup.addEventListener(eui.UIEvent.CHANGE, function (e) {
            var rdbGroup = e.target;
            egret.log(rdbGroup.selectedValue);
        }, this);
        var rdb = new eui.RadioButton();
        rdb.label = "单选1";
        rdb.value = 1;
        rdb.group = rdbGroup;
        mainGroup.addChild(rdb);
        var rdb2 = new eui.RadioButton();
        rdb2.label = "单选2";
        rdb2.value = 2;
        rdb2.group = rdbGroup;
        mainGroup.addChild(rdb2);
        var rdb3 = new eui.RadioButton();
        rdb3.label = "单选3";
        rdb3.value = 3;
        rdb3.group = rdbGroup;
        mainGroup.addChild(rdb3);
        //使用状态切换按钮
        var switchButton = new eui.ToggleSwitch();
        switchButton.label = "ToggleSwitch";
        switchButton.addEventListener(eui.UIEvent.CHANGE, function (e) {
            var switchButton = e.target;
            egret.log(switchButton.selected);
        }, this);
        mainGroup.addChild(switchButton);
        var toggleGroup = new eui.Group();
        var toggleGroupLayout = new eui.HorizontalLayout();
        toggleGroupLayout.verticalAlign = egret.VerticalAlign.CONTENT_JUSTIFY;
        toggleGroup.layout = toggleGroupLayout;
        mainGroup.addChild(toggleGroup);
        //使用ToggleButton
        var toggleBtns = [];
        for (var i = 0; i < 4; i++) {
            var btn = new eui.ToggleButton();
            btn.label = i + 1 + "";
            btn.addEventListener(eui.UIEvent.CHANGE, function (e) {
                for (var i = 0; i < toggleBtns.length; i++) {
                    var btn = toggleBtns[i];
                    btn.selected = (btn == e.target);
                }
            }, this);
            toggleBtns.push(btn);
            toggleGroup.addChild(btn);
        }
        //使用滑动选择器,水平滑动HSlider, 竖直滑动VSlider
        var hSlider = new eui.HSlider();
        hSlider.width = 200;
        hSlider.x = 20;
        hSlider.y = 20;
        hSlider.minimum = 0;
        hSlider.maximum = 100;
        hSlider.value = 10;
        hSlider.addEventListener(eui.UIEvent.CHANGE, function (e) {
            console.log(e.target.value);
        }, this);
        mainGroup.addChild(hSlider);
        //使用进度条
        var progressBar = new eui.ProgressBar();
        progressBar.maximum = 200;
        progressBar.minimum = 20;
        progressBar.width = 400;
        progressBar.height = 40;
        progressBar.value = 40;
        //定义进度条的方向
        progressBar.direction = eui.Direction.BTT;
        mainGroup.addChild(progressBar);
        var timer = new egret.Timer(1000, 0);
        timer.addEventListener(egret.TimerEvent.TIMER, function () {
            progressBar.value += 10;
            if (progressBar.value >= progressBar.maximum) {
                timer.stop();
            }
        }, this);
        timer.start();
        //使用文本输入控件
        var inputGroup = new eui.Group();
        inputGroup.layout = new eui.BasicLayout();
        mainGroup.addChild(inputGroup);
        var editBackground = new eui.Image();
        var editText = new eui.EditableText();
        editBackground.source = "resource/assets/bg_edit.png";
        editBackground.scale9Grid = new egret.Rectangle(2, 2, 20, 20);
        editBackground.width = 500;
        editBackground.height = 200;
        editBackground.verticalCenter = 0;
        editBackground.horizontalCenter = 0;
        inputGroup.addChild(editBackground);
        editText.text = "请输入文本";
        editText.textColor = 0x2233aa;
        editText.multiline = true;
        editText.verticalCenter = 0;
        editText.horizontalCenter = 0;
        editText.displayAsPassword = false;
        editText.wordWrap = true;
        editText.width = editBackground.width - 16;
        editText.height = editBackground.height - 16;
        editText.left = 0;
        inputGroup.addChild(editText);
        //使用TextInput
        var textInput = new eui.TextInput();
        textInput.prompt = "请输入文字";
        mainGroup.addChild(textInput);
    };
    p.radioChangeHandler = function (e) {
        egret.log(e.target.value);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Main;
}(eui.UILayer));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map