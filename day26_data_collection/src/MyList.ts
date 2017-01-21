class MyList extends eui.Group {
	public constructor() {
		super();
	}

	protected createChildren(): void {
		super.createChildren();

		var exml = `<e:Skin xmlns:e="http://ns.egret.com/eui" states="up,down" height="50"> <e:Label text="{data}" textColor.down="0xFFFFFF" textColor.up="0x666666" horizontalCenter="0" verticalCenter="0"/> </e:Skin>`;

		var list = new eui.List();
		list.dataProvider = new eui.ArrayCollection(["item1", "item2", "item3"]);
		this.addChild(list);
		list.selectedIndex = 1;
		list.addEventListener(eui.ItemTapEvent.ITEM_TAP, () => {
			//打印当前选中的一项
			console.log(list.selectedItem, list.selectedIndex);
			//打印当前选中的所有项目
			console.log(list.selectedIndices, list.selectedItems);
		}, this);

		//多选
		list.allowMultipleSelection = true;

		//要求至少选中一个
		list.requireSelection = true;
	}
}