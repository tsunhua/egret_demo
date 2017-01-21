var MyPanelGroup = (function (_super) {
    __extends(MyPanelGroup, _super);
    function MyPanelGroup() {
        _super.call(this);
    }
    var d = __define,c=MyPanelGroup,p=c.prototype;
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
        // 		exml = `<e:Skin class="skins.PanelSkin" minHeight="230" minWidth="450" xmlns:e="http://ns.egret.com/eui">
        //     <e:Image left="0" right="0" bottom="0"  top="0" source="border_png" scale9Grid="2,2,12,12" />
        //     <e:Group id="moveArea" left="0" right="0" top="0" height="45">
        //         <e:Image left="0" right="0" bottom="0"  top="0" source="header_png"/>
        //         <e:Label id="titleDisplay" size="20" fontFamily="Tahoma" textColor="0xFFFFFF"
        //                  wordWrap="false" left="15" right="5" verticalCenter="0"/>
        //     </e:Group>
        //     <e:Button id="closeButton" label="close" bottom="5" horizontalCenter="0"/>
        // </e:Skin>
        // `;
        // 		this.skinName = exml;
        this.title = "Hello Panel";
    };
    return MyPanelGroup;
}(eui.Panel));
egret.registerClass(MyPanelGroup,'MyPanelGroup');
//# sourceMappingURL=MyPanelGroup.js.map