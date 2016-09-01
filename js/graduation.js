$(document).ready(function(){
	var navs = $(".nav");
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		var f1 = $(hpost).offset().top;
		if(top<390){
			navs.css({position:"relative",width: "100%",top:"0px" });
		}
		else{
			navs.css({position:"fixed",width: "100%",top:"0px",backgroundColor:"#2f2f2f"});
			var flag = $("#navs");//获取到导栏a标签			
			var currentId = "";
			var name1 = [ $("#hpost"), $("#hlang"), $("#hmome"), $("#htime"),$("#hxing")];
			$.each(name1, function(){
				var m = $(this);
				
				if(top > m.offset().top-50){
			 		currentId = "#" + m.attr("id");
			 	}
			 	else{
			 		return false;
			 	}	
			});			
			//给相应楼层的a 设置current,取消其他链接的current
				var currentLink = flag.find(".current");
                
				if(currentId&&currentLink.attr("href") != currentId){
					currentLink.removeClass("current");
					flag.find("[href =" + currentId + "]").addClass("current");
				}
		}
	});
	
	$("#lpost").bind("click", function(){
		$("html, body").animate({
			scrollTop: $("#hpost").offset().top-30
		});
	});
	$("#llang").bind("click", function(){
		$("html, body").animate({
			scrollTop: $("#hlang").offset().top-30
		});
	});
	$("#lmome").bind("click", function(){
		$("html, body").animate({
			scrollTop: $("#hmome").offset().top-30
		});
	});
	$("#ltime").bind("click", function(){
		$("html, body").animate({
			scrollTop: $("#htime").offset().top-30
		});
	});
	$("#lxing").bind("click", function(){
		$("html, body").animate({
			scrollTop: $("#hxing").offset().top-30
		});
	});
});