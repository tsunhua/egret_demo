class Girl extends egret.Sprite {
	public constructor() {
		super();
	}

	public getDate(event: DateEvent) {
		console.log("得到" + event.target.name + "的邀请，去" + event._where + event._todo);
	}
}