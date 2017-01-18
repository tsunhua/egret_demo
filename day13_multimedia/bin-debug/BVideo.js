var BVideo = (function (_super) {
    __extends(BVideo, _super);
    function BVideo() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=BVideo,p=c.prototype;
    p.onAddToStage = function (e) {
        var _this = this;
        this.video = new egret.Video();
        this.video.x = 0;
        this.video.y = 0;
        this.video.height = 320;
        this.video.width = 640;
        this.video.fullscreen = false;
        this.video.poster = "resource/assets/egret_icon.png"; //loading图
        this.video.load("http://media.w3.org/2010/05/sintel/trailer.mp4");
        this.addChild(this.video);
        this.video.once(egret.Event.COMPLETE, function (e) {
            //播放按钮
            var btnPlay = new eui.Button();
            btnPlay.label = "播放";
            btnPlay.x = _this.video.x + 20;
            btnPlay.y = _this.video.y + _this.video.height + 20;
            _this.addChild(btnPlay);
            btnPlay.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.video.play();
            }, _this);
            //暂停
            var btnPause = new eui.Button();
            btnPause.label = "暂停";
            btnPause.x = btnPlay.x + btnPlay.width + 20;
            btnPause.y = btnPlay.y;
            _this.addChild(btnPause);
            btnPause.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.video.pause();
            }, _this);
            //音量调节
            var volume = new eui.HSlider();
            volume.x = btnPlay.x;
            volume.y = btnPlay.y + btnPlay.height + 20;
            _this.addChild(volume);
            volume.value = 100;
            volume.maximum = 100;
            volume.minimum = 0;
            volume.width = 200;
            volume.addEventListener(egret.Event.CHANGE, function (e) {
                _this.video.volume = e.target.value / 100;
            }, _this);
            //全屏
            var screenSwitcher = new eui.ToggleSwitch();
            screenSwitcher.label = "全屏";
            screenSwitcher.x = btnPause.x + btnPause.width + 20;
            screenSwitcher.y = btnPause.y;
            screenSwitcher.addEventListener(egret.Event.CHANGE, function (e) {
                _this.video.fullscreen = e.target.selected;
            }, _this);
            _this.addChild(screenSwitcher);
            //滑动播放位置
            var position = new eui.Label();
            position.x = btnPlay.x;
            position.y = volume.y + volume.height + 20;
            _this.addChild(position);
            position.addEventListener(egret.Event.ENTER_FRAME, function () {
                e.target.text = "播放时间：" + _this.video.position;
            }, _this);
            //截图
            var btnScreenShot = new eui.Button();
            btnScreenShot.label = "截图";
            btnScreenShot.x = screenSwitcher.x + screenSwitcher.width + 40;
            btnScreenShot.y = btnPlay.y;
            _this.addChild(btnScreenShot);
            btnScreenShot.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                var bmd = _this.video.bitmapData;
                var bitmap = new egret.Bitmap();
                bitmap.bitmapData = bmd;
                bitmap.x = _this.video.x;
                bitmap.y = _this.video.y + _this.video.height + 150;
                _this.addChild(bitmap);
            }, _this);
        }, this);
        this.video.once(egret.IOErrorEvent.IO_ERROR, function () {
            console.log("视频加载出错！");
        }, this);
    };
    return BVideo;
}(egret.DisplayObjectContainer));
egret.registerClass(BVideo,'BVideo');
//# sourceMappingURL=BVideo.js.map