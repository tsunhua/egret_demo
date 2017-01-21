///自定义项选择器
class MyItemRenderer extends eui.Group {
	public constructor() {
		super();
	}
	protected createChildren(): void {
		super.createChildren();
		var exml = `
			<e:Skin xmlns:e="http://ns.egret.com/eui">
				<e:DataGroup>
					<e:itemRendererSkinName>
						<e:Skin>
							<e:Image source="resource/assets/Panel/border.png" />
							<e:Label textColor="0xfd0000" text="{data.label}" />
						</e:Skin>
					</e:itemRendererSkinName>
					<e:ArrayCollection>
						<e:Array>
							<e:Object label = "item1" />
							<e:Object label = "item2" />
							<e:Object label = "item3" />
							<e:Object label = "item4" />
						</e:Array>
					</e:ArrayCollection>
				</e:DataGroup>
			</e:Skin>
		`;
		var component = new eui.Component();
		component.skinName = exml;
		this.addChild(component);
	}
}