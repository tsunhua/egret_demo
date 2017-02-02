class GameData {
	public constructor() {
	}

	public static levelNumber: number = 10;

	//创建题目库
	public static createQuest(ran: number): Object {

		var a: number = Math.ceil(Math.random() * ran);
		var b: number = Math.ceil(Math.random() * ran);

		var result: number = a + b;
		var resultA: number = result + Math.ceil(Math.ceil(result * 0.3) * Math.random());
		var resultB: number = result - Math.ceil(Math.ceil(result * 0.3) * Math.random());

		var array: Array<any> = [];
		var rand: number = Math.random();
		if (rand < 0.5) {
			array = [result, resultA, resultB];
		} else if (rand > 0.5 && rand < 0.7) {
			array = [resultA, result, resultB];
		} else if (rand >= 0.7 && rand <= 0.8) {
			array = [resultA, resultB, result];
		} else if (rand >= 0.9) {
			array = [resultB, result, resultA];
		} else {
			array = [resultB, resultA, result];
		}

		var obj = { "label": a + "+" + b + "=?", "qs": array, "result": result + '' };

		return obj;
	}
}