(function () {
	var i18n=function () {
			//默认中文
			this.language="zh";
			//目前支持语言版本
			this.supports=[{
					lang:"zh",title:"中文"
			},{
					lang:"en",title:"English"
			}];
			this.instance=null;
			//获取当前浏览器语言
			if(window.navigator){
					var lang =(navigator.language || navigator.browserLanguage);
					if(lang!=null&&lang!=undefined&&lang!=""){
							lang=lang.toLowerCase();
							if (lang.indexOf("en")>-1){
									this.language="en";
							}
					}
			}
		
			if (this.language=="zh"){
					this.instance=i18n_instance.zh;
			}else{
					this.instance=i18n_instance.en;
			}
	}

	i18n.prototype={
			getSupportLanguage:function (lang) {
					if(lang=="en"){
							return i18n_instance.en;
					}
					return i18n_instance.zh;
			}
	}

	var i18n_instance={
			zh:{
					title:"i18n国际化"			
			},
			en:{
					title:"i18n internationalization"		
			}
	}

	window.I18n=i18n;
})()