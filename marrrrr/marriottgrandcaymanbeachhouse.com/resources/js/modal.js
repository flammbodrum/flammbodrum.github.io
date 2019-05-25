
(function(){
$(document).ready(function(){

var spots=$("[data-spotId]");
if(spots.length>1){}else return;
spots.css("cursor","pointer");
spots.click(showModal);

});



function showModal(e){
  if(e)e.preventDefault();
var id=$(this).attr("data-spotId");
console.log(id);
$("body").append("<div class='full' style='text-align:center;opacity:1;background-color:rgba(0,0,0,0.7);position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999999;'></div>");

//$("body").append("<div class='full' style='text-align:center;opacity:1;background-color:rgba(255,255,255,0.8);position:absolute;top:0;left:0;width:100%;height:100%;z-index:9999999;'></div>");


var modal=$(".mod-al").eq(0).clone();

modal.find(".tag").html($(this).find(".tag").clone().html());
modal.find(".date").html($(this).find(".date").clone().html());
modal.find("h3").eq(0).html($(this).find("h3").eq(0).clone().html());

if($(this).find("p.txt").length>0){
modal.find("p.txt").eq(0).html($(this).find("p.txt").eq(0).clone().html());
} else {
modal.find("p.txt").eq(0).html("");

}

if($(this).find("p.extra").length>0){
modal.find("p.extra").eq(0).html($(this).find("p.extra").eq(0).clone().html());
} else {
modal.find("p.extra").eq(0).hide();

}

if($(this).find("img").length>0){
modal.find("img.mim").attr("src",$(this).find("img").eq(0).attr("src"));
} else {
modal.find("img.mim").remove();
}

$(".full").append(modal);



var bg=$("<div style='position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;'></div>");
$(".full").prepend(bg);

modal.velocity({  rotateY: "90" }, { duration: 1, easing: "linear", complete: function(){}});
  

setTimeout(function(){
var dif=(modal.parent().height()-modal.height())/2;
if(dif<0)dif=0;
modal.css({"margin-top":dif+"px"});

  modal.velocity({  rotateY: "0" }, { duration: 300,easing:"easeInOutQuad" ,complete: function(){}});

  

},200);



//$(".full")


bg.click(function(){
modal.velocity({  rotateY: "90" }, { duration: 300, easing:"easeInOutQuad" ,complete: function(){
  }});

$(".full").velocity({"opacity":0},400,function(){
  $(".full").remove();
});
});

}






})();