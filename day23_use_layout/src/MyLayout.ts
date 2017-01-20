module uiLayout {
	var UIComponentClass = "eui.UIComponent";
	export class RingLayout extends eui.LayoutBase {
		public constructor() {
			super();
		}

		public measure(): void {
			super.measure();
		}

		public updateDisplayList(width: number, height: number): void {
			super.updateDisplayList(width, height);
			if (this.target == null) {
				return;
			}
			//确定圆心
			var centerX: number = width / 2;
			var centerY: number = height / 2;
			//确定半径
			var horizon: number = centerX / 2;
			var vertical: number = centerY / 2;
			var radius = horizon > vertical ? vertical : horizon;
			//确定数量
			var count: number = this.target.numElements;
			var maxX: number = 0;
			var maxY: number = 0;

			for (var i: number = 0; i < count; i++) {
				var layoutElement: eui.UIComponent = <eui.UIComponent>(this.target.getElementAt(i));
				if (!egret.is(layoutElement, UIComponentClass) || !layoutElement.includeInLayout) {
					//忽略非eui.UIComponent的实例和非包含子项
					continue;
				}
				//子项的宽高
				var elementWidth: number = 0;
				var elementHeight: number = 0;
				//分配的每个子项的角度
				var angle: number = 2 * Math.PI * i / count;
				//原始x坐标值 - 子项的宽，确保居中 
				var childX: number = centerX + radius * Math.sin(angle) - elementWidth / 2;
				var childY: number = centerY - radius * Math.cos(angle) - elementHeight / 2;
				//调用该方法布局子项
				layoutElement.setLayoutBoundsPosition(childX, childY);

				maxX = Math.max(maxX, childX + elementWidth);
				maxY = Math.max(maxY, childY + elementHeight);
			}
			//设置内容大小，当测量子项完毕后调用
			this.target.setContentSize(maxX, maxY);
		}
	}
}