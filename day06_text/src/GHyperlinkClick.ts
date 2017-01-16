class HyperlinkClick extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var tx: egret.TextField = new egret.TextField();
		this.addChild(tx);
		tx.textFlow = new Array<egret.ITextElement>(
			// { text: "这段文字有链接", style: { "href": "event:text event triggered" } },
			{ text: "这段文字有链接", style: { "href": "http://www.egret.com/" } },
			{ text: "\n这段文字没有链接", style: {} }
		);
		tx.touchEnabled = true;
		tx.addEventListener(egret.TextEvent.LINK, (evt: egret.TextEvent) => {
			console.log(evt.text);
		}, this);
		tx.x = 10;
		tx.y = 90;
	}
}