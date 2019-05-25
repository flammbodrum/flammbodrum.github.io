
// blog gallery
(function(){


var N;
var ratio;
var index;
//$(document).ready(ini);
$(document).ready(function(){
N=$(".photogallery2 .sqSpot").length;

if(N>0){
$(".photogallery2 .sqSpot").each(function(nn){
	$(this).click(imgClick);
 $(this).attr("data-n",nn);
});
}
});


 


function imgClick(e){
	if(e)e.preventDefault();
	index=parseInt($(this).attr("data-n"));
	var src=$(this).find("img").attr("src");
	var title=$(this).find("img").attr("alt");
if(!title || title==''){

	 title=$(this).find("img").attr("title");


}

if(!title ){title=='';
}



console.log(src);
var im=$("<img class='thephoto' style='height:80%;margin-top:5%;'>")
$("body").append("<div class='full' style='text-align:center;opacity:0;position:fixed;top:0;left:0;width:100%;height:100%;'><div class='photobg' style='background-color:black;opacity:0.8;z-index:-1;position:absolute;width:100%;height:100%;top:0;left:0;'></div></div>");

var nav=$("<div class='photonav' style='position:absolute;top:0;right:0;'><span class='cerrar' style='color:#dddddd;font-size:30px;margin:10px;display:block;cursor:pointer;'>×</span></div>");

$(".full").append(im);

 
	var tit=$("<div class='phototitle' style='position:absolute;top:0;left:0;'><span class='title' style='color:#dddddd;font-size:14px;margin:10px 20px;display:block;'>"+title+"</span></div>");
$(".full").append(tit);

 

if(N>1){
var arrows=$("<div class='photoarrows' style='color:#eeeeee;position:absolute;top:47%;left:0;width:100%;'></div>");
arrows.append('<div class="photoarrowright" style="position:absolute;top:0;right:10px;"><img style="height:30px;opacity:0.7;" src="resources/arrowRight.png"></div>');
arrows.append('<div class="photoarrowleft"  style="position:absolute;top:0;left:10px;"><img  style="height:30px;opacity:0.7;"  src="resources/arrowLeft.png"></div>');
$(".full").append(arrows);

arrows.find(".photoarrowright").click(next);
arrows.find(".photoarrowleft").click(prev);

}

$(".full").append(nav);



 im.load(iLo);

 im.attr("src",src);

$(".full .cerrar").click(closeImg);
$(".full .photobg").click(closeImg);

if(N>1) $(".full .thephoto").click(next);


$(".full").animate({opacity:1},1000);

function iLo(){
$(this).unbind("load",iLo);
if($(this).width()>$(window).width()*0.9){
	$(this).css({"width":"100%","height":"auto"});
}

}

function closeImg(){
$(".full .cerrar").unbind("click",closeImg);

$(".full").animate({opacity:0},500,function(){
$(".full").html("");
$(".full").remove();
});
}


var dir;

function prev(e){
if(e)e.preventDefault();
index--;
if(index<0)index=N-1;
dir=true;
showActual();
}

function next(e){
if(e)e.preventDefault();
index++;
if(index>=N)index=0;
dir=false;
showActual();
}

function showActual(){

var src=$(".photogallery2 .sqSpot").eq(index).find("img").attr("src");
var t=$(".photogallery2 .sqSpot").eq(index).find("img").attr("alt");
if(!t)t='';
$(".phototitle .title").html(t);
var im;
var dd="-1000";
if(dir)dd=$(window).width();
$(".full .thephoto").velocity({opacity:0,translateX:dd},300,function(){
	$(this).remove();
	 im=$("<img class='thephoto' style='height:80%;margin-top:5%;opacity:0;'>");
$(".full").append(im);
 im.load(iLo2);

 im.attr("src",src);
im.click(next);

});

 
function iLo2(){
$(this).unbind("load",iLo2);
if($(this).width()>$(window).width()*0.9){
	$(this).css({"width":"100%","height":"auto","opacity":"0"});

}
var th=$(this);
$(this).velocity({opacity:0,translateX:parseInt(dd)*-1},1,function(){
$(this).velocity({opacity:1,translateX:0},300);

});



}



}
}
 

function align(){
	return;
cont.css({"height":parseInt($(window).height()*0.5)+"px"});
cont.find(".slider").css({"height":"100%","width":"auto"});

cont.find(".slider img").css({"height":"100%","width":"auto"});


}

 
})();

/*
	<a class="share" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://miguelrep.com.ar/2014/im.php?img={{gal.imgs[gal.index].image}}&title={{gal.imgs[gal.index].title}}." target="_blank">share</a>

*/



