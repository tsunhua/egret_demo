class Button extends eui.Component{
    public constructor(){
        super();
    }

    public labelDisplay:eui.Label;

    private _label:string = "";

    public get label():string{
        return this._label;
    }

    public set label(value:string){
        this._label = value;
        if(this.labelDisplay){
            this.labelDisplay.text = value;
        }
    }

    protected childrenCreated():void{
        super.childrenCreated();
        if(this.labelDisplay){
            this.labelDisplay.text = this._label;
        }
    }
}