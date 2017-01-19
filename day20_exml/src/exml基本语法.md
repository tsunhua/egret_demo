
EXML基本语法
-------

#### EXML概述

EXML的功能：一是描述组件的皮肤，二是布局组件

皮肤文件推荐放在resource文件下

#### EXML加载方式

直接加载EXML文件（适用性：当EXML根节点为Skin时）

```typescript
var button = new eui.Button();
button.skinName = "resource/skins/ButtonSkin.exml";
this.addChild(button);
```

动态加载EXML文件（适用性：通用）

```typescript
private init():void{
  EXML.load("skins/ButtonSkin.exml",this.onLoaded,this);
}
private onLoaded(clazz:any,url:string):void{
  var button = new eui.Button();
  button.skinName = clazz;
  this.addChild(button);
}
```

嵌入EXML到代码

```typescript
var className = "skins.ButtonSkin";
var exmlText = `<?xml version="1.0" encoding="utf-8" ?> 
<e:Skin class="${className}" states="up,down,disabled" minHeight="50" minWidth="100" xmlns:e="http://ns.egret.com/eui"> 
    <e:Image width="100%" height="100%" scale9Grid="1,3,8,8" alpha.disabled="0.5"
             source="button_up_png"
             source.down="button_down_png"/> 
    <e:Label id="labelDisplay" top="8" bottom="8" left="8" right="8"
             size="20" fontFamily="Tahoma 'Microsoft Yahei'"
             verticalAlign="middle" textAlign="center" text="按钮" textColor="0x000000"/> 
    <e:Image id="iconDisplay" horizontalCenter="0" verticalCenter="0"/> 
</e:Skin>`;
var button = new eui.Button();
button.skinName = exmlText;
this.addChild(button);
```

#### 节点与属性

由标签构成，每个标签都附带命名空间前缀，根节点的`class`属性表示它在运行时解析后要注册为的全局类名

```typescript
<e:Group class="app.MyGroup" xmlns:e="http://ns.egret.com/eui"> 
	<e:Button size="20" textColor="0xFFFFFF" />
</e:Group>
    
//以上等价于
module app{
  export class MyGroup extends eui.Group{
    public constructor(){
      super();
      var button = new eui.Button();
      button.size = 20;
      button.textColor = 0xFFFFFF;
      this.addChild(button);
    }
  }
}
```

#### ID属性

相当于给解析后的类提供一个公开变量。

```typescript
<e:Group class="app.MyGroup" xmlns:e="http://ns.egret.com/eui"> 
    <e:Image id="iconDisplay" /> 
</e:Group>
//等价于
module app {    
    export class MyGroup extends eui.Group { 
        public iconDisplay:eui.Image;       
        public constructor(){
            super();
            var image = new eui.Image();
            this.addChild(image);
            this.iconDisplay = image;
        }
    }
}
```

#### 属性语法糖

scale9Grid(九宫格)属性

```typescript
<e:Group class="app.MyGroup" xmlns:e="http://ns.egret.com/eui"> 
    <e:Image source="image/button_up.png" x="10" scale9Grid="10,10,45,35" /> 
</e:Group>
```

宽高百分比

```typescript
<e:Group class="app.MyGroup" xmlns:e="http://ns.egret.com/eui"> 
    <e:Image source="image/button_up.png" width="100%" height="100%" /> 
</e:Group>
//等价于
var image = eui.Image();
image.source = "image/button_up.png";
image.percentWidth = 100;
image.percentHeight = 100;
this.addChild(image);	
```

#### 节点默认属性

eui库内的组件，通常都会有一个默认属性，如果子节点是赋值给父节点的默认属性，那么可以省略属性名节点。例如：

```typescript
<e:Scroller class="app.MyScroller" xmlns:e="http://ns.egret.com/eui"> 
    <e:viewport> 
        <e:Group/> 
    </e:viewport> 
</e:Scroller>
//省略为
<e:Scroller class="app.MyScroller" xmlns:e="http://ns.egret.com/eui"> 
    <e:Group/> 
</e:Scroller>
```

若默认属性的类型是一个数组，还可以省略Array节点。其实添加子项也只是省略默认属性的一种特例，因为容器的默认属性是`elementsContent`,类型正是数组。例如：

```typescript
<e:Group class="app.MyGroup" xmlns:e="http://ns.egret.com/eui"> 
    <e:elementsContent> 
        <e:Array> 
            <e:Image/> 
        </e:Array> 
    </e:elementsContent> 
</e:Group>
 //省略为
 <e:Group class="app.MyGroup" xmlns:e="http://ns.egret.com/eui"> 
    <e:elementsContent> 
		<e:Image/> 
    </e:elementsContent> 
</e:Group>
```

#### 数据绑定

得益于JavaScript的动态语言特性，所有的Object对象都可以实现动态数据绑定，并不限定于Egret框架内的对象。首先根节点类必须要有一个属性用于数据绑定，比如`e:ItemRenderer`的`data: any`属性，然后在EXML中使用`{data属性.字段}`绑定到对象中。例如：

```typescript
<e:ItemRenderer class="skins.ItemRendererSkin" xmlns:e="http://ns.egret.com/eui"> 
    <e:Label id="labelDisplay" text="{data.label}"/> 
</e:ItemRenderer>
```

> 注意：目前数据绑定只支持属性链访问，即`a.b.c.d.x`这种形式,还不支持直接声明复杂表达式的绑定。若遇到复杂表达式的情况，需要自行在外部完成转换，将最终计算结果赋值到数据对象上。

### 内部类

内嵌使用频率不高的EXML文件，减少EXML文件数量

```typescript
<e:Group class="skins.MyGroup" xmlns:e="http://ns.egret.com/eui"> 
    <e:List id="list"> 
        <e:itemRendererSkinName> 
            <e:Skin> 
                <e:Label id="labelDisplay" text="{data.label}"/> 
            </e:Skin>
        </e:itemRendererSkinName>  
    </e:List> 
</e:Group>
```

### 视图状态

```typescript
<e:Skin class="skins.ButtonSkin" states="up,over,down,disabled" xmlns:e="http://ns.egret.com/eui"> 
    <e:Image source="image/button_up.png" includeIn="up" width="100%" height="100%"/> 
    <e:Image source="image/button_over.png" includeIn="over" width="100%" height="100%"/> 
    <e:Image source="image/button_down.png" includeIn="down" width="100%" height="100%"/> 
    <e:Image source="image/button_disabled.png" includeIn="disabled" width="100%" height="100%"/> 
    <e:Label id="labelDisplay" textColor.down="0x009aff" left="20" right="20" top="10" bottom="10"/> 
</e:Skin>
```

- states：声明视图状态名称列表，当皮肤的currentState属性被设置为状态列表中的一项时，自动执行状态操作（1. 添加移除对象；2. 设置属性）
- 使用`includeIn`表明该Image节点只存在于该状态下；使用`excludeFrom`表明该Image界面不存在于某个状态下。
- 使用`textColor.down="0x009aff"`表示当状态切换到down时，设置Label的textColor属性为0x009aff。