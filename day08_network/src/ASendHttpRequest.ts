class ASendHttpRequest extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var request = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		// var params = "?p1=getP1&p2=getP2";
		// request.open("http://httpbin.org/get"+params, egret.HttpMethod.GET);
		// request.send();
		request.open("http://httpbin.org/post", egret.HttpMethod.POST);
		var params = "p1=postP1&p2=postP2";
		request.send(params);
		request.addEventListener(egret.Event.COMPLETE, this.onRequestComplete, this);
		request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onRequestError, this);
		request.addEventListener(egret.ProgressEvent.PROGRESS, this.onRequestProgress, this);
	}

	private onRequestError(event: egret.IOErrorEvent): void {
		console.log("error: " + event.eventPhase + "---" + event.data);
	}
	private onRequestProgress(event: egret.ProgressEvent): void {
		console.log("progress: " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
	}

	private onRequestComplete(event: egret.Event): void {
		var request = <egret.HttpRequest>event.currentTarget;
		console.log("response: " + request.response);
	}
}