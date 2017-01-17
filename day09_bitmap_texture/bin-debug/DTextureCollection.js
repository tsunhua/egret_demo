///纹理集
var DTextureCollection = (function (_super) {
    __extends(DTextureCollection, _super);
    function DTextureCollection() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=DTextureCollection,p=c.prototype;
    p.onAddToStage = function (e) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("preload");
    };
    p.onGroupComplete = function (e) {
        var img = new egret.Bitmap();
        // img.texture = RES.getRes("texture_collection_test_json.asdfsd_png");
        // img.texture = RES.getRes("texture_collection_test_json.adff_png");
        img.texture = RES.getRes("texture_collection_test_json.afsdf_jpg");
        this.addChild(img);
    };
    return DTextureCollection;
}(egret.DisplayObjectContainer));
egret.registerClass(DTextureCollection,'DTextureCollection');
//# sourceMappingURL=DTextureCollection.js.map