
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
    $('.registration-form .btn-regist').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	   	 	
    	// 判断是否填写相关注册信息
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
        //执行sendMessages
        if(!!next_step){
        	
        	var name = $("#form-first-name").val();
    		var mobile = $("#tell-phone").val();
    		var pass = $("#password").val();
    		var sex = $("input[type='radio']:checked").val();
    		
        	
            sendMessages (name,mobile,pass,sex);
        }    		
    		
    });
    		
    
    
     
    // 提交注册信息
    var sendMessages = function (name,mobile,password,sex){
    	$.post("http://jingxiyujia.test/index.php?m=Api&c=Index&a=saveUserInfo",
    	    {name : name,mobile : mobile,password : password,gender : sex},
    	    function (resp){
    	    	if (resp.msg === "注册成功！"){
    	    		console.log("成功");
    	    		$("#model").css("display","block")
//  	    		window.location.href = "login.html";
					localStorage.name=$('#form-first-name').val();
					localStorage.phone=$('#tell-phone').val()
    	    	}
    	    	else{
//  	    		console.log(resp.msg)
					alert(resp.msg)
    	    	}
    	    },"json"
    	)
    }
      
});
