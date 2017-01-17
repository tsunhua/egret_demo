class CLoadText extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var request: egret.HttpRequest = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		request.once(egret.Event.COMPLETE, (evt: egret.Event) => {
			var request: egret.HttpRequest = evt.currentTarget;
			console.log("response: " + request.response);
			var txtField: egret.TextField = new egret.TextField();
			txtField.text = request.response;
			txtField.size = 24;
			this.addChild(txtField);
		}, this);
		request.once(egret.IOErrorEvent.IO_ERROR, (evt: egret.IOErrorEvent) => {
			console.log("error: " + evt.eventPhase + "---" + evt.data);
		}, this);
		request.once(egret.ProgressEvent.PROGRESS, (evt: egret.ProgressEvent) => {
			console.log("progress: " + Math.floor(100 * evt.bytesLoaded / evt.bytesTotal) + "%");
		}, this);
		request.open("resource/config/description.json", egret.HttpMethod.GET);
		request.send();
	}
}