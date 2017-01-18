///音频要求：
///采样率：44100Hz, 比特率：96bps
var AAudio = (function (_super) {
    __extends(AAudio, _super);
    function AAudio() {
        _super.call(this);
        this.loadWay = LoadWay.SOUND;
        this.once(egret.Event.ADDED_TO_STAGE, this.onLoad, this);
    }
    var d = __define,c=AAudio,p=c.prototype;
    p.onLoad = function (e) {
        var _this = this;
        var playBtn = new egret.TextField();
        playBtn.text = "点击赏乐";
        playBtn.background = true;
        playBtn.width = 160;
        playBtn.height = 60;
        playBtn.x = this.stage.stageWidth / 2 - playBtn.width / 2;
        playBtn.y = this.stage.stageHeight / 3 - playBtn.height / 2;
        playBtn.backgroundColor = 0xccccee;
        playBtn.textAlign = egret.HorizontalAlign.CENTER;
        playBtn.verticalAlign = egret.VerticalAlign.MIDDLE;
        playBtn.touchEnabled = true;
        playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.play();
        }, this);
        this.addChild(playBtn);
    };
    p.play = function () {
        switch (this.loadWay) {
            case LoadWay.RES:
                this.playByRes();
                break;
            case LoadWay.SOUND:
                this.playBySound();
                break;
            case LoadWay.URL_LOADER:
                this.playByUrlLoader();
                break;
        }
    };
    //通过RES加载音频
    p.playByRes = function () {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, function () {
            var sound = RES.getRes("Sealed_With_A_Kiss_mp3");
            sound.play();
        }, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    //通过URLLoader加载音频
    p.playByUrlLoader = function () {
        var loader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE, function () {
            var sound = loader.data;
            sound.play();
        }, this);
        loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
        loader.load(new egret.URLRequest("http://14.215.93.18/m10.music.126.net/20170118151759/94169455bd475be0bec8734e0046afd5/ymusic/d99c/c7ed/82d1/59de1c789700c6ff39e3234af8410fa7.mp3?wshc_tag=0&wsts_tag=587f10cb&wsid_tag=7144ce25&wsiphost=ipdbm"));
    };
    //通过Sound加载音频
    p.playBySound = function () {
        var _this = this;
        var sound = new egret.Sound();
        var soundChannel;
        sound.addEventListener(egret.Event.COMPLETE, function () {
            console.log("loaded complete!");
            //开始播放，参数一为播放位置，参数二为循环次数
            soundChannel = sound.play(0, 1);
            //获取音频长度
            console.log("音频长度：" + sound.length.toFixed(3) + "s");
            //监听播放结束
            soundChannel.addEventListener(egret.Event.SOUND_COMPLETE, function () {
                // soundChannel.stop();
                console.log("play complete!");
            }, _this);
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function () {
            console.log("loaded error!");
        }, this);
        sound.load("resource/sound/Sealed_With_A_Kiss.mp3");
    };
    return AAudio;
}(egret.DisplayObjectContainer));
egret.registerClass(AAudio,'AAudio');
var LoadWay;
(function (LoadWay) {
    LoadWay[LoadWay["SOUND"] = 0] = "SOUND";
    LoadWay[LoadWay["URL_LOADER"] = 1] = "URL_LOADER";
    LoadWay[LoadWay["RES"] = 2] = "RES";
})(LoadWay || (LoadWay = {}));
//# sourceMappingURL=AAudio.js.map