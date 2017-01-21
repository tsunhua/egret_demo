class MyDataGroup extends eui.Group {
	public constructor() {
		super();
	}

	protected createChildren(): void {
		//创建数据集合
		var sourceArr: any[] = [];
		for (var i: number = 0; i < 5; i++) {
			sourceArr.push({ label: "item" + i });
		}
		var myColection: eui.ArrayCollection = new eui.ArrayCollection(sourceArr);

		//创建dataGroup实例
		var dataGroup: eui.DataGroup = new eui.DataGroup();
		dataGroup.dataProvider = myColection;
		dataGroup.percentWidth = 100;
		dataGroup.percentHeight = 100;
		this.addChild(dataGroup);
		dataGroup.useVirtualLayout = true;

		//设置数据项渲染器
		dataGroup.itemRenderer = LabelRenderer;
	}
}