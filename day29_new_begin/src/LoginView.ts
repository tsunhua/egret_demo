class LoginView extends eui.Component {

	private nameTxt: eui.TextInput;
	private psdTxt: eui.TextInput;
	private loginBtn: eui.Button;
	private registerBtn: eui.Button;
	
	public constructor() {
		super();
		this.skinName = "Login"
	}

	protected childrenCreated(): void {
		this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			console.log("点击了登录按钮: " + this.nameTxt.text + this.psdTxt.text);
		}, this);
	}
}