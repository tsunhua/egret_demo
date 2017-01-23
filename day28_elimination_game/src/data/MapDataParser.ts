//解析地图数据
class MapDataParser {
	public static parse(unmaps: number[]) {
		let length = unmaps.length;
		GameData.unmapNum = length;
		let index: number;
		for (let i = 0; i < length; i++) {
			index = unmaps[i];
			let row = Math.floor(index / GameData.maxColumn);
			let column = index / GameData.maxRow;
			GameData[row][column] = -1;
		}
	}
}