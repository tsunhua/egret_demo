class Boy extends egret.Sprite {
	public constructor() {
		super();
	}
	public order() {
		var dateEvent: DateEvent = new DateEvent(DateEvent.DATE);
		dateEvent._year = 2017;
		dateEvent._month = 1;
		dateEvent._date = 10;
		dateEvent._where = "白云山";
		dateEvent._todo = "看星星";
		this.dispatchEvent(dateEvent);
	}
}