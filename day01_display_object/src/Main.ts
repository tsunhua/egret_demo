class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        var shp: egret.Shape = new egret.Shape();
        shp.graphics.beginFill(0x00ff00);
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();

        shp.x = 100;
        shp.y = 100;

        shp.anchorOffsetX = 0;
        this.addChild(shp);

        var container: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        container.x = 200;
        container.y = 200;
        this.addChild(container);

        var circle: egret.Shape = new egret.Shape();
        circle.graphics.beginFill(0xff0000);
        circle.graphics.drawCircle(25, 25, 25);
        circle.graphics.endFill();
        container.addChild(circle);

        circle.touchEnabled = true;
        circle.addEventListener(egret.TouchEvent.TOUCH_TAP, onclick, this);

        function onclick(): void {
            var targetPoint: egret.Point = container.globalToLocal(0, 0);
            circle.x = targetPoint.x;
            circle.y = targetPoint.y;
        }
    }
}