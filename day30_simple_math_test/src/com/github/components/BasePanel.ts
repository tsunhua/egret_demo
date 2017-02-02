class BasePanel extends eui.Component {
	public constructor() {
		super();
		GameManager.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
		this.onResize();
	}

	private onResize(): void {
		this.onResizeHandler();
	}

	protected onResizeHandler(): void {
		this.height = GameManager.stage.stageHeight;
	}

	protected childrenCreated(): void {
		LayerManager.fixScreen();
		this.init();
	}

	protected init(): void {
		//入口，需要子类覆盖
	}
}