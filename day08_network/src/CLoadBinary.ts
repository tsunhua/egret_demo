class CLoadBinary extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var request: egret.HttpRequest = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.ARRAY_BUFFER;
		request.once(egret.Event.COMPLETE, (evt: egret.Event) => {
			var request: egret.HttpRequest = evt.currentTarget;
			var buff: ArrayBuffer = request.response;
			console.log("response: " + buff.byteLength);

			// var dataView: DataView = new DataView(buff);
			// var str: string ="";
			// for (var i: number = 0; i < dataView.byteOffset; i++) {
			// 	str += dataView.getInt8(i)+'';
			// }
			// console.log("response: " + str);

		}, this);
		request.open("resource/assets/bg.jpg");
		request.send();
	}
}