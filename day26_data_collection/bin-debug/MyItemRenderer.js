///自定义项选择器
var MyItemRenderer = (function (_super) {
    __extends(MyItemRenderer, _super);
    function MyItemRenderer() {
        _super.call(this);
    }
    var d = __define,c=MyItemRenderer,p=c.prototype;
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
        var exml = "\n\t\t\t<e:Skin xmlns:e=\"http://ns.egret.com/eui\">\n\t\t\t\t<e:DataGroup>\n\t\t\t\t\t<e:itemRendererSkinName>\n\t\t\t\t\t\t<e:Skin>\n\t\t\t\t\t\t\t<e:Image source=\"resource/assets/Panel/border.png\" />\n\t\t\t\t\t\t\t<e:Label textColor=\"0xfd0000\" text=\"{data.label}\" />\n\t\t\t\t\t\t</e:Skin>\n\t\t\t\t\t</e:itemRendererSkinName>\n\t\t\t\t\t<e:ArrayCollection>\n\t\t\t\t\t\t<e:Array>\n\t\t\t\t\t\t\t<e:Object label = \"item1\" />\n\t\t\t\t\t\t\t<e:Object label = \"item2\" />\n\t\t\t\t\t\t\t<e:Object label = \"item3\" />\n\t\t\t\t\t\t\t<e:Object label = \"item4\" />\n\t\t\t\t\t\t</e:Array>\n\t\t\t\t\t</e:ArrayCollection>\n\t\t\t\t</e:DataGroup>\n\t\t\t</e:Skin>\n\t\t";
        var component = new eui.Component();
        component.skinName = exml;
        this.addChild(component);
    };
    return MyItemRenderer;
}(eui.Group));
egret.registerClass(MyItemRenderer,'MyItemRenderer');
//# sourceMappingURL=MyItemRenderer.js.map