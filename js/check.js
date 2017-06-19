onload = function(){
		var username = document.getElementsByName("username")[0];
		var password = document.getElementsByName("password")[0];
		var repass = document.getElementsByName("repass")[0];
		var email = document.getElementsByName("email")[0];
		
		username.onfocus = function(){
			var uspan = getSpan(username);
			uspan.innerHTML = "用户名长度为3-20"
			uspan.className= "normal";
		}
		username.onblur = function(){
			if (username.value.match(/^\S+$/) && username.value.length >= 3
			&& username.value.length < 20) {
				var uspan = getSpan(username);
				uspan.innerText = "用户名正确";
				uspan.className = "right";
			} else {
				var uspan = getSpan(username);
				uspan.innerText = "用户名不正确";
				uspan.className = "error";
			}
		}
			function getSpan(cobj){
				while(true) {
					if (cobj.nextSibling.nodeName!='SPAN') {
						cobj = cobj.nextSibling;
					} else {
						return cobj.nextSibling;
					}
				}
			}
}
