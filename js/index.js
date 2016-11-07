$(function(){

// 顶部导航区
    //导航平板下拉
    var $navBtn=$('.nav-min-btn');
    var $navMax=$('.nav-max');
    var $header=$('.header');
    var screenH=document.documentElement.clientHeight;
    var flag=true;
    $navBtn.click(function(){
        if (flag){
            $header.css({background:'#000'});
            $navMax.animate({height:screenH-48},400);
            flag=false;
        }else{
            flag=true;
            $navMax.animate({height:0},400,function(){
                $header.css({background:'rgba(0,0,0,0.8)'});
            });
        }
    });

    //footer  list平板下拉
    var $footerBtn=$(".footer-lists h3");
    $footerBtn.click(function(){
        //$(this).next('ul').css({height:'auto'});
        var screenW=document.documentElement.clientWidth;
        if (screenW<=768){
            $(this).next('ul').slideToggle(400);
        }
    });


// banner区

	$("#container").PageSwitch({
	direction:'horizontal',
	easing:'ease-in',
	duration:1000,
	autoPlay:true,
	loop:'false'
	});



































})