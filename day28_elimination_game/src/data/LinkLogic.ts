//连线消除算法逻辑
class LinkLogic {
	public static lines: number[][];
	public static isHaveLine(): boolean {

		var currentType: string = "";
		var typeNum: number = 0;
		//行消除
		for (let i = 0; i < GameData.maxRow; i++) {
			for (let t = 0; i < GameData.maxColumn; t++) {
				let elementId = GameData.mapData[i][t];
				if (elementId != -1) { //不是空白地图块
					let gameElement = GameData.elements[elementId];
					if (currentType == gameElement.type) { //类型还是一样的
						typeNum++;
					} else { // 类型不同了
						if (typeNum >= 3) { //之前的统计数量超过3个
							for (let j = 0; j < typeNum; j++) {
								let arr: number[] = [];
								arr.push(GameData.mapData[i][t - 1 - j]);
								LinkLogic.recordLine(arr);
							}
						}
						currentType = gameElement.type;
						typeNum = 1;
					}
				} else { //空白块
					if (typeNum >= 3) { //之前的统计数量超过3个
						for (let j = 0; j < typeNum; j++) {
							let arr: number[] = [];
							arr.push(GameData.mapData[i][t - 1 - j]);
							LinkLogic.recordLine(arr);
						}
					}
					currentType = "";
					typeNum = 0;
				}
			}
			//行结束
			if (typeNum >= 3) { //之前的统计数量超过3个
				for (let j = 0; j < typeNum; j++) {
					let arr: number[] = [];
					arr.push(GameData.mapData[i][GameData.maxColumn - 1 - j]);
					LinkLogic.recordLine(arr);
				}
			}
			currentType = "";
			typeNum = 0;
		}

		//列消除
		for (let c = 0; c < GameData.maxColumn; c++) {
			for (let r = 0; r < GameData.maxRow; r++) {
				let elementId = GameData.mapData[r][c];
				if (elementId != -1) { //地图块有效
					let ele = GameData.elements[elementId];
					if (currentType == ele.type) { // 类型相同
						typeNum++;
					} else { //类型不同
						if (typeNum >= 3) { //超过3个记录下
							for (let j = 0; j < typeNum; j++) {
								let arr: number[] = [];
								arr.push(GameData.mapData[r - 1 - j][c]);
								LinkLogic.recordLine(arr);
							}
						}
						currentType = ele.type;
						typeNum == 1;
					}
				} else { //无效地图块
					if (typeNum >= 3) { //超过3个记录下
						for (let j = 0; j < typeNum; j++) {
							let arr: number[] = [];
							arr.push(GameData.mapData[r - 1 - j][c]);
							LinkLogic.recordLine(arr);
						}
					}
					currentType = "";
					typeNum == 0;
				}
			}
			//到达列尾
			if (typeNum >= 3) { //超过3个记录下
				for (let j = 0; j < typeNum; j++) {
					let arr: number[] = [];
					arr.push(GameData.mapData[GameData.maxRow - 1 - j][c]);
					LinkLogic.recordLine(arr);
				}
			}
			currentType = "";
			typeNum == 0;
		}

		if (LinkLogic.lines.length > 0) {
			return true;
		}

		return false;
	}

	public static isHaveNextLine(): boolean {
		//对行的情况进行解析
		for (let i = 0; i < GameData.maxRow; i++) {
			for (let j = 0; j < GameData.maxColumn; j++) {
				if (LinkLogic.isLocationValid(i, j)) {
					let ele = GameData.elements[GameData.mapData[i][j]];
					//对行，两个相连的情况
					if (LinkLogic.isLocationValid(i, j + 1)) { //右边有一个元素
						let rightEle = GameData.elements[GameData.mapData[i][j + 1]];
						if (LinkLogic.isTypeEqual(ele, rightEle)) { //刚好类型相同
							//左上角
							if (LinkLogic.isLocationHaveElementEqual(ele, i - 1, j - 1)) {
								return true;
							}
							//左边
							if (LinkLogic.isLocationHaveElementEqual(ele, i, j - 2)) {
								return true;
							}
							//下边
							if (LinkLogic.isLocationHaveElementEqual(ele, i + 1, j - 1)) {
								return true;
							}

							//右上角
							if (LinkLogic.isLocationHaveElementEqual(ele, i - 1, j + 2)) {
								return true;
							}
							//右边
							if (LinkLogic.isLocationHaveElementEqual(ele, i, j + 3)) {
								return true;
							}
							//右下角
							if (LinkLogic.isLocationHaveElementEqual(ele, i + 2, j + 2)) {
								return true;
							}

						} else if (LinkLogic.isLocationValid(i, j + 2)) {//对行，间隔一个的情况
							let right2Ele = GameData.elements[GameData.mapData[i][j + 2]];
							if (LinkLogic.isTypeEqual(ele, right2Ele)) {
								//右上方有元素同类型
								if (LinkLogic.isLocationHaveElementEqual(ele, i - 1, j + 1)) {
									return true;
								}
								//右下方
								if (LinkLogic.isLocationHaveElementEqual(ele, i + 1, j + 1)) {
									return true;
								}
							}
						}
					}
				}
			}
		}

		//对列的情况进行解析

		for (let i = 0; i < GameData.maxRow; i++) {
			for (let j = 0; j < GameData.maxColumn; j++) {
				if (LinkLogic.isLocationValid(i, j)) {
					let ele = GameData.elements[GameData.mapData[i][j]];
					//对列，两个相连的情况
					if (LinkLogic.isLocationValid(i + 1, j)) { //下边有一个元素
						let rightEle = GameData.elements[GameData.mapData[i + 1][j]];
						if (LinkLogic.isTypeEqual(ele, rightEle)) { //刚好类型相同
							//左上角
							if (LinkLogic.isLocationHaveElementEqual(ele, i - 1, j - 1)) {
								return true;
							}
							//上边
							if (LinkLogic.isLocationHaveElementEqual(ele, i - 2, j)) {
								return true;
							}
							//右上边
							if (LinkLogic.isLocationHaveElementEqual(ele, i - 1, j + 1)) {
								return true;
							}

							//左下角
							if (LinkLogic.isLocationHaveElementEqual(ele, i + 2, j - 1)) {
								return true;
							}
							//下方
							if (LinkLogic.isLocationHaveElementEqual(ele, j - 3, j)) {
								return true;
							}
							//右下角
							if (LinkLogic.isLocationHaveElementEqual(ele, i + 2, j + 2)) {
								return true;
							}

						} else if (LinkLogic.isLocationValid(i + 2, j)) {//对列，间隔一个的情况
							let right2Ele = GameData.elements[GameData.mapData[i + 2][j]];
							if (LinkLogic.isTypeEqual(ele, right2Ele)) {
								//左下方有元素同类型
								if (LinkLogic.isLocationHaveElementEqual(ele, i + 1, j - 1)) {
									return true;
								}
								//右下方
								if (LinkLogic.isLocationHaveElementEqual(ele, i + 1, j + 1)) {
									return true;
								}
							}
						}
					}
				}
			}
		}

		return false;
	}

	/**
	 * 判断地图上两点是否可以交换
	 */
	public static isHaveLineByIndex(p1: number, p2: number): boolean {
		let p1n = p1;
		let p2n = p2;
		let p1_id = GameData.mapData[Math.floor(p1 / GameData.maxColumn)][p1 % GameData.maxRow];
		let p2_id = GameData.mapData[Math.floor(p2 / GameData.maxColumn)][p2 % GameData.maxRow];

		GameData.mapData[Math.floor(p1 / GameData.maxColumn)][p1 % GameData.maxRow] = p2_id;
		GameData.mapData[Math.floor(p2 / GameData.maxColumn)][p2 % GameData.maxRow] = p1_id;

		if (LinkLogic.isHaveLine()) {
			GameData.elements[p1_id].location = p2n;
			GameData.elements[p2_id].location = p1n;
			return true;
		} else {
			GameData.mapData[Math.floor(p1 / GameData.maxColumn)][p1 % GameData.maxRow] = p1_id;
			GameData.mapData[Math.floor(p2 / GameData.maxColumn)][p2 % GameData.maxRow] = p2_id;
		}
		return false;
	}

	// public static getElementByIndex(index: number): GameElement {
	// 	let x: number = Math.floor(index / GameData.maxColumn);
	// 	let y: number = index % GameData.maxRow;
	// 	return GameData.elements[GameData.mapData[x][y]];
	// }

	/**
	 * 判断在地图某点是否有元素与之类型相同
	 */
	public static isLocationHaveElementEqual(ele: BaseElement, x: number, y: number): boolean {
		if (LinkLogic.isLocationValid(x, y)) {
			let locationEle = GameData.elements[GameData.mapData[x][y]];
			if (LinkLogic.isTypeEqual(ele, locationEle)) {
				return true;
			}
		}
		return false;
	}

	/**
	 * 判断两个元素是否类型相同
	 */
	public static isTypeEqual(ele1: BaseElement, ele2: BaseElement) {
		if (ele1.type == ele2.type) {
			return true;
		}
		return false;
	}

	//检测地图块是否合法或者说可用
	public static isLocationValid(x: number, y: number): boolean {
		if (x >= 0 && x <= GameData.maxRow && y >= 0 && y <= GameData.maxColumn && GameData.mapData[x][y] != -1) {
			return true;
		}
		return false;
	}

	//记录一行
	public static recordLine(arr: number[]) {
		if (LinkLogic.lines == null) {
			LinkLogic.lines = [];
		}
		LinkLogic.lines.push(arr);
	}
}