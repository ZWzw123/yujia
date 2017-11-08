
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$.backstretch("resize");
    });
    
    /*
        Form
    */
    $('.registration-form fieldset:first-child').fadeIn('slow');
    
    $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    // regist事件
    $('.registration-form .btn-login').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	   	 	
    	// 判断是否填写信息
        var next_step = true;
    	parent_fieldset.find('input[type="text"],input[type="password"]').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false
    		}else {
    			$(this).removeClass('input-error');
    			console.log($(this).val());
    		}	
    	});
        //执行getMessages
        if(!!next_step){
        	
    		var mobile = $("#tell-phone").val();
    		var password = $("#password").val();
        	
            getMessages (mobile,password);
        }    		
    		
    });
    		
    
    
     
    // 登录
    var getMessages = function (mobile,password){
    	$.post("http://jingxiyujia.test/index.php?m=Api&c=Index&a=doLogin",
    	    {"mobile" : mobile,"pwd" : password},
    	    function (resp){
    	    	if (resp.ret === "ok"){
    	    		alert("成功");

					var name =resp.data.name;
					var tel =resp.data.mobile;
					console.log(resp)
					sessionStorage.setItem("name", name);
					sessionStorage.setItem("tel",mobile);

    	    		window.location.href = "index.html";
    	    	}
    	    	else {
    	    		alert("登陆失败")
    	    	}
    	    },"json"
    	)
    }
      
});
