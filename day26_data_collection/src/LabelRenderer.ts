class LabelRenderer extends eui.ItemRenderer {
	private labelDisplay: eui.Label;
	public constructor() {
		super();
		this.touchChildren = true;
		this.labelDisplay = new eui.Label();
		this.addChild(this.labelDisplay);
	}
	protected dataChanged(): void {
		this.labelDisplay.text = this.data.label;
	}
}