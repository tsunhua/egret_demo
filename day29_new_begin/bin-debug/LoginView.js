var LoginView = (function (_super) {
    __extends(LoginView, _super);
    function LoginView() {
        _super.call(this);
        this.skinName = "Login";
    }
    var d = __define,c=LoginView,p=c.prototype;
    p.childrenCreated = function () {
        var _this = this;
        this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("点击了登录按钮: " + _this.nameTxt.text + _this.psdTxt.text);
        }, this);
    };
    return LoginView;
}(eui.Component));
egret.registerClass(LoginView,'LoginView');
//# sourceMappingURL=LoginView.js.map