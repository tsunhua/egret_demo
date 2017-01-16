class MultiTextStyle extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(e: egret.Event): void {
		var tx: egret.TextField = new egret.TextField();
		this.addChild(tx);
		// tx.textFlow = <Array<egret.ITextElement>>[
		// 	{ text: "Egret", style: { "textColor": 0xff0000, "size": 30 } }
		// ];

		tx.width = 400;
		tx.x = 10;
		tx.y = 10;
		tx.textColor = 0;
		tx.size = 20;
		tx.fontFamily = "微软雅黑";
		tx.textAlign = egret.HorizontalAlign.CENTER;
		//xml方式
		tx.textFlow = <Array<egret.ITextElement>>[
			{ text: "您正在使用的引擎版本为", style: { "size": 18 } },
			{ text: "3.2.3", style: { "textColor": 0x336699, "size": 60, "strokeColor": 0xff0000, "stroke": 2 } },
			{ text: "正在编译项目...", style: { "fontFamily": "楷体" } },
			{ text: "项目共计编译耗时：", style: { "textColor": 0xf000f0 } },
			{ text: "2.288秒", style: { "italic": true, "textColor": 0xf06f00 } }
		];
		//类html方式
		// tx.textFlow = (new egret.HtmlTextParser).parser(
		// 	'没有任何格式文本, ' +
		// 	'<font color="#0000ff" size="30" fontFamily="Verdada">Verdanna blue large</font>' +
		// 	'<font color="#ff7f50" size="10">珊瑚色<b>局部加粗</b>小字体</font>' +
		// 	'<i>斜体</i>'
		// );
	}
}