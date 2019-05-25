
      function DropDown(el) {
        this.dd = el;
        this.initEvents();
      }
      DropDown.prototype = {
        initEvents : function() {
          var obj = this;

          obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            event.stopPropagation();
          });
        }
      }

      $(function() {

        var ee = new DropDown( $('#aa') );
         ee = new DropDown( $('#bb') );
         ee = new DropDown( $('#cc') );
         ee = new DropDown( $('#dd') );
         ee = new DropDown( $('#ee') );
         ee = new DropDown( $('#sortBys') );

        $(document).click(function() {
          // all dropdowns
          $('.wrapper-dropdown-5').removeClass('active');
        });

      });

(function(){

$(document).ready(function(){
  $("#sendFormBut").click(sendForm);
  $("#aa li a").click(dbclickA);
  $("#bb li a").click(dbclickB);
  $("#cc li a").click(dbclickC);
  $("#dd li a").click(dbclickD);
  $("#ee li a").click(dbclickE);


$("#aa").css("z-index",905);
$("#bb").css("z-index",904);
$("#cc").css("z-index",903);
$("#dd").css("z-index",902);
$("#ee").css("z-index",901);
$("#sendFormBut").css("z-index",901);

});

function dbclickA(e){
  if(e){
    e.preventDefault();
  }

    if($(this).attr("data-val")){
$("#aa span").eq(0).attr("data-val",$(this).attr("data-val"));
$("#aa span").eq(0).html($(this).text());
    }else
$("#aa span").eq(0).html($(this).text());

}
function dbclickB(e){
  if(e){
    e.preventDefault();
  }

      if($(this).attr("data-val")){
$("#bb span").eq(0).attr("data-val",$(this).attr("data-val"));
$("#bb span").eq(0).html($(this).text());
    }else

$("#bb span").eq(0).html($(this).text());
}
function dbclickC(e){
  if(e){
    e.preventDefault();
  }
      if($(this).attr("data-val")){
$("#cc span").eq(0).attr("data-val",$(this).attr("data-val"));
$("#cc span").eq(0).html($(this).text());
    }else
$("#cc span").eq(0).html($(this).text());
}
function dbclickD(e){
  if(e){
    e.preventDefault();
  }
  if($(this).attr("data-val")){
$("#dd span").eq(0).attr("data-val",$(this).attr("data-val"));
$("#dd span").eq(0).html($(this).text());
    }else
$("#dd span").eq(0).html($(this).text());


}
function dbclickE(e){
  if(e){
    e.preventDefault();
  }
  if($(this).attr("data-val")){
$("#ee span").eq(0).attr("data-val",$(this).attr("data-val"));
$("#ee span").eq(0).html($(this).text());
    }else
$("#ee span").eq(0).html($(this).text());
}




function sendForm(e){
  if(e){
    e.preventDefault();
  }


/* or attr("data-val")*/
var dbox1=$("#aa span").eq(0).attr("data-val");
var dbox2=$("#bb span").eq(0).attr("data-val");
var dbox3=$("#cc span").eq(0).attr("data-val");
var dbox4=$("#dd span").eq(0).attr("data-val");
var dbox5=$("#ee span").eq(0).attr("data-val");

/*
if ((dbox1 != '' && dbox1 != undefined) && dbox2 == undefined && dbox3 == undefined) {
    window.location = '/neighborhoods/'+dbox1+'/';
} else {

  var redirect = '';

  if (dbox1 != '' && dbox1 != undefined) {
    redirect += 'neighborhood/' + dbox1 + '/';
  }

  if (dbox2 != '' && dbox2 != undefined) {
    redirect += 'guests/' + dbox2 + '/';
  }

  if (dbox3 != '' && dbox3 != undefined) {
    redirect += 'bedrooms/' + dbox3 + '/';
  }

  window.location = '/search/' + redirect;
}
*/



alert("Buscar: " +dbox1+" -  "+dbox2+" - "+dbox3+" - "+dbox4+" - "+dbox5);


}

})();