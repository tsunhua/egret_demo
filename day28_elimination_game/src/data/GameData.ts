//游戏数据的封装
class GameData {
	//不可用的地图块的数量
	public static unmapNum: number = 0;
	//地图数据
	public static mapData: number[][];
	//剩余步数
	public static surplusStepNum: number = 0;
	//通关需要的步数
	public static levelStepNum: number = 0;
	//出现的元素类型
	public static elementTypes: string[];
	//通关要求的等级
	public static levelRequire: LevelRequire;
	//元素对象池
	public static elements: GameElement[];
	//未使用的元素
	public static unusedElements: number[];
	//背景图
	public static levelBackgroundImageName: string = "";
	//最大行
	public static maxRow: number = 8;
	//最大列
	public static maxColumn: number = 8;
	//当前可用的元素数量
	public static currentElementNum: number = 0;
	//舞台宽度
	public static stageW: number = 0;
	//舞台高度
	public static stageH: number = 0;

	public static initData(): void {
		GameData.mapData = [];
		for (let r: number = 0; r < GameData.maxRow; r++) {
			var row: number[] = [];
			for (let c: number = 0; c < GameData.maxColumn; c++) {
				row.push(-2);
			}
			GameData.mapData.push(row);
		}

		GameData.elementTypes = [];
		GameData.levelRequire = new LevelRequire();

		GameData.elements = [];
		GameData.unusedElements = [];

		let length: number = GameData.maxRow * GameData.maxColumn;
		for (let i = 0; i < length; i++) {
			let ele: GameElement = new GameElement();
			ele.id = i;
			GameData.elements.push(ele);
			GameData.unusedElements.push(i);
		}

		GameData.stageW = egret.MainContext.instance.stage.stageWidth;
		GameData.stageH = egret.MainContext.instance.stage.stageHeight;
	}
}