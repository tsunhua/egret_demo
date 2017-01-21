class MyDataCollection extends eui.Group {
	public constructor() {
		super();
	}

	protected createChildren(): void {
		var sourceArr: any[] = [
			{ name: "one", value: 1 },
			{ name: "two", value: 2 }
		];
		var myCollection: eui.ArrayCollection = new eui.ArrayCollection(sourceArr);

		myCollection.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE, (e: eui.CollectionEvent) => {
			console.log("数据已经改变：" + e.kind + ", " + e.target.length);
		}, this);

		var itemData: Object = { name: "three", value: 3 };
		//添加
		myCollection.addItem(itemData);
		myCollection.addItemAt({ name: "zero", value: 0 }, 0);

		console.log(myCollection.getItemAt(0).name);//根据索引位置获取某一项数据
		console.log(myCollection.getItemIndex(itemData));//获取某一项数据所在的索引值
		console.log(myCollection.length);//获取数组长度

		//替换
		myCollection.replaceItemAt({ name: "dlds", value: -1 }, 0);
		//删除
		myCollection.removeItemAt(0);
		myCollection.removeAll();


	}
}