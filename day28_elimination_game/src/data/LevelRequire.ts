class LevelRequire {
	//游戏通关目标：消除元素
	public reqElements: LevelRequireElement[];
	public constructor() {
		this.reqElements = [];
	}

	//获取通关需要消除的元素类型总数
	public getReqNumber(): number {
		return this.reqElements.length;
	}

	//添加通关需要的元素
	public addElement(type: string, num: number): void {
		let element: LevelRequireElement = new LevelRequireElement();
		element.num = num;
		element.type = type;
		this.reqElements.push(element);
	}

	//通关，清理元素
	public openChange(): void {
		this.reqElements = [];
	}

	//减少通关需要的元素的数量
	public decreaseReqElement(type: string, decreastNum: number): void {
		var length = this.getReqNumber();
		for (let i: number = 0; i < length; i++) {
			let ele = this.reqElements[i];
			if (ele.type == type) {
				ele.num -= decreastNum;
				return;
			}
		}
	}

	//是否通关
	public isClear(): boolean {
		var length = this.getReqNumber();
		for (let i: number = 0; i < length; i++) {
			let ele = this.reqElements[i];
			if (ele.num > 0) {
				return false;
			}
		}
		return true;
	}

}