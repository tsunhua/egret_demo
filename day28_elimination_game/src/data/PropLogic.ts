/**
 * 道具逻辑
 */
class PropLogic {
 	public static useProp0(propType: PropType, location: number) {
		switch (propType) {
			case PropType.chanZi:
				PropLogic.chanZi(location);
				break;
			case PropType.zhaDan:
				PropLogic.zhaDan(location);
				break;
			case PropType.zhengHang:
				PropLogic.zhengHang(location);
				break;
			case PropType.zhengLie:
				PropLogic.zhengLie(location);
				break;
			case PropType.tongSe:
				PropLogic.tongSe(location);
				break;
		}
	}

	/**
	 * 铲子
	 */
	public static chanZi(location: number) {
		var x: number = Math.floor(location / GameData.maxColumn);
		var y: number = location / GameData.maxRow;
		LinkLogic.lines.push([x, y]);
	}
	/**
	 * 炸弹
	 */
	public static zhaDan(location: number) {
		var x: number = Math.floor(location / GameData.maxColumn);
		var y: number = location / GameData.maxRow;
		LinkLogic.lines.push([x, y]);
		//上
		if (x - 1 > 0 && GameData.elements[GameData.mapData[x - 1][y]].id != -1) {
			LinkLogic.lines.push([x - 1, y]);
		}
		//下
		if (x + 1 > 0 && GameData.elements[GameData.mapData[x + 1][y]].id != -1) {
			LinkLogic.lines.push([x + 1, y]);
		}
		//左
		if (y - 1 > 0 && GameData.elements[GameData.mapData[x][y - 1]].id != -1) {
			LinkLogic.lines.push([x, y - 1]);
		}
		//右
		if (y + 1 > 0 && GameData.elements[GameData.mapData[x][y + 1]].id != -1) {
			LinkLogic.lines.push([x, y + 1]);
		}
	}
	/**
	 * 整行
	 */
	public static zhengHang(location: number) {
		var x: number = Math.floor(location / GameData.maxColumn);
		for (var i: number = 0; i < GameData.maxColumn; i++) {
			LinkLogic.lines.push([x, i]);
		}
	}
	/**
	 * 整列
	 */
	public static zhengLie(location: number) {
		var y: number = location / GameData.maxRow;
		for (var i: number = 0; i < GameData.maxRow; i++) {
			LinkLogic.lines.push([i, y]);
		}
	}
	/**
	 * 同色
	 */
	public static tongSe(location: number) {
		var x: number = Math.floor(location / GameData.maxColumn);
		var y: number = location / GameData.maxRow;
		var ele: GameElement = GameData.elements[GameData.mapData[x][y]];
		for (var i: number = 0; i < GameData.maxRow; i++) {
			for (var j: number = 0; j < GameData.maxColumn; i++) {
				var currentEle: GameElement = GameData.elements[GameData.mapData[i][j]];
				if (currentEle.id != -1 && currentEle.type == ele.type) {
					LinkLogic.lines.push([i, j]);
				}
			}
		}
	}
}

enum PropType {
	chanZi, zhaDan, zhengHang, zhengLie, tongSe
}