//解析通关相关的数据
class LevelGameDataParser {
	public static parse(jsonObj: any) {
		GameData.levelStepNum = jsonObj.step;
		GameData.surplusStepNum = jsonObj.step;
		GameData.levelBackgroundImageName = jsonObj.levelbgimg;

		LevelGameDataParser.parseLevelReqData(jsonObj.levelreq);
	}

	private static parseLevelReqData(jsonObj: any) {
		var len = jsonObj.length;
		for (let i = 0; i < len; i++) {
			GameData.levelRequire.addElement(jsonObj[i].type, jsonObj[i].num);
		}
	}
}