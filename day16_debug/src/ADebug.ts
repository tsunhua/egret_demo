class ADebug extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(e: egret.Event): void {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    }

    private onResGroupComplete(e: RES.ResourceEvent): void {
        var bmp: egret.Bitmap = new egret.Bitmap(RES.getRes("bg_jpg"));
        this.addChild(bmp);
        if (DEBUG) {
            var infoTxt: egret.TextField = new egret.TextField();
            infoTxt.text = "Debug Mode";
            infoTxt.size = 24;
            infoTxt.textColor = 0x000000;
            this.addChild(infoTxt);
        } else if (RELEASE) {

        }
    }
}