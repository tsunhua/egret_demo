///帧事件：将在进入新的一帧即下一帧开始时回调，故其回调速率跟帧率有关
///帧率fps：每秒显示的帧数
///而帧事件是获取两帧之间经过的时长pass
///因此, 1000/pass 即为帧率fps
///帧率的修改请在index.html文件找 `data-frame-rate="60"` 
class CEnterFrame extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.once(egret.Event.ADDED_TO_STAGE, this.onLoad, this);
	}
	private timeOnEnterFrame: number = 0;
	private onLoad(e: egret.Event): void {
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		this.timeOnEnterFrame = egret.getTimer();
	}

	private onEnterFrame(e: egret.Event): void {
		var now = egret.getTimer();
		var time = this.timeOnEnterFrame;
		var pass = now - time;
		var fps: number = 1000 / pass;
		console.log("fps :" + fps.toFixed(5));
		this.timeOnEnterFrame = egret.getTimer();
	}
}