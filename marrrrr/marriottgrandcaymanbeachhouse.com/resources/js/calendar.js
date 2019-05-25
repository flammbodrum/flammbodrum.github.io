/*
Calendar  code by DNA
use as unique instance

*/
(function() {



  /*calendar*/
  var style = "<style>#DNAcalendar{background-color:#ffffff;z-index:990;}#calendarioCont{position:absolute;top:0px;left:0px;background-color:#ffffff;border:1px solid #bbbbbb;} div.CalBox , div.CalBoxLab{position:absolute;color:#313131;font-size:10px;letter-spacing:1px;background-color:#ffffff;margin:2px;border:solid #dddddd 1px;padding:2px;width:20px;height:18px;text-align:center;font-weight: 400;/*font-family: 'Open Sans', sans-serif;*/} div.CalBoxLab{color:#999;font-weight: 700;} div#monthbar{position:absolute;color:#313131;font-size:11px;letter-spacing:1px;background-color:#ffffff;margin:2px;padding:2px;width:200px;height:17px;text-align:center;left:0px;} .topArrowBox{background-image:url(resources/calendar/topArrow.png);background-repeat: no-repeat;background-position: right top;}</style>";
  /* ........................................ */


  var BopCalendar = {
    boxSize: 20,
    today: null,
    actualMonth: null,
    actualYear: null,
    holderid: $("<div>.</div>"),
    targetid: "",
    selectedDate: null,

    lang: "en",

    /*Labels para idioma*/
    dateFormat: "dmy", // or mdy (english)
    //sD:["D","L","M","M","J","V","S"],
    //months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],

    sD: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],


    caption: "",


    initCalendar: function(holderdiv, targetdiv) {
      BopCalendar.holderid = holderdiv;
      BopCalendar.targetid = targetdiv;
      BopCalendar.today = new Date();
      if (BopCalendar.selectedDate != null) {
        BopCalendar.actualMonth = BopCalendar.selectedDate.getMonth();
        BopCalendar.actualYear = BopCalendar.selectedDate.getFullYear()
      } else {
        BopCalendar.actualMonth = this.today.getMonth();
        BopCalendar.actualYear = this.today.getFullYear();
      }
      BopCalendar.buildMonth(BopCalendar.getDays(BopCalendar.actualYear, BopCalendar.actualMonth))
    },


    hide: function() {
      calOpened = false;
      $(BopCalendar.holderid).html("")

    },
    buildMonth: function(arr) {
      var py = 25;
      var i = 0;
      var str = "<div id='calendarioCont' style=''>";
      str += "<div id='calendarioContTitle' style='position:absolute;top:10px;left:7px;color:#888888;'><p>" + BopCalendar.caption + "</p></div>";
      str += "<div id='calendarioBox' style='position:absolute;top:40px;left:3px;'>";
      str += "<div class='CalBoxLab' style='top:" + 0 + "px;border:none;left:" + 0 + "px;'>Su</div>";
      str += "<div class='CalBoxLab' style='top:" + 0 + "px;border:none;left:" + (1 * (BopCalendar.boxSize + 5)) + "px;'>Mo</div>";
      str += "<div class='CalBoxLab' style='top:" + 0 + "px;border:none;left:" + (2 * (BopCalendar.boxSize + 5)) + "px;'>Tu</div>";
      str += "<div class='CalBoxLab' style='top:" + 0 + "px;border:none;left:" + (3 * (BopCalendar.boxSize + 5)) + "px;'>We</div>";
      str += "<div class='CalBoxLab' style='top:" + 0 + "px;border:none;left:" + (4 * (BopCalendar.boxSize + 5)) + "px;'>Th</div>";
      str += "<div class='CalBoxLab' style='top:" + 0 + "px;border:none;left:" + (5 * (BopCalendar.boxSize + 5)) + "px;'>Fr</div>";
      str += "<div class='CalBoxLab' style='top:" + 0 + "px;border:none;left:" + (6 * (BopCalendar.boxSize + 5)) + "px;'>Sa</div>";
      for (i = 0; i < arr.length; i++) {

        var classString = '';
        if (inStep(arr[i])) {
          classString = ' topArrowBox';
        }

        if (arr[i].d == this.today.getDate() && arr[i].y == this.today.getFullYear() && arr[i].m == this.today.getMonth()) {
          str += "<div class='CalBox" + classString + "' style='cursor:pointer;background-color:#dedede;top:" + py + "px;left:" + (arr[i].s * (BopCalendar.boxSize + 5)) + "px;'>" + arr[i].d + "</div>"

        } else
        if (arr[i].live) {

          str += "<div class='CalBox" + classString + "' style='cursor:pointer;top:" + py + "px;left:" + (arr[i].s * (BopCalendar.boxSize + 5)) + "px;'>" + arr[i].d + "</div>"
        } else {
          str += "<div class='CalBoxLab' style='color:#cccccc;top:" + py + "px;left:" + (arr[i].s * (BopCalendar.boxSize + 5)) + "px;'>" + arr[i].d + "</div>"
        }
        if (arr[i].s == 6 && i < arr.length - 1) py += 23
      }
      py += 17;
      str += "<div id='monthbar' style='width:" + (7 * (BopCalendar.boxSize + 5) - 5) + "px;top:-" + 32 + "px;'>";
      


      str+="<img src='http://marriottgrandcaymanbeachhouse.com/resources/arrowLeftC.png'  style='cursor:pointer;display:inline;vertical-align:middle;float:left;'  id='carrowL'  >" + BopCalendar.months[BopCalendar.actualMonth] + " " + BopCalendar.actualYear ;
      str+="<img src='http://marriottgrandcaymanbeachhouse.com/resources/arrowRightC.png' style='cursor:pointer;vertical-align:middle;display:inline;float:right;' id='carrowR' ></div>";
      
      str += "</div></div>";
      //        $("div#calendarioCont").hide();
      $(BopCalendar.holderid).html(str);
      $(BopCalendar.holderid).css('opacity', '.94');
      /*      
        var clos= $("<div style='cursor:pointer;position:absolute;top:5px;left:120px;background-color:#111111;font-size:15pt;'>Cerrar</div>");
        $(BopCalendar.holderid).append(clos);
        clos.click(hideCalendar);
*/

      // $("div#calendarioCont").hide();
      $("img#carrowR").click(BopCalendar.nextMonth);
      $("img#carrowL").click(BopCalendar.prevMonth);
      $("div.CalBox").click(BopCalendar.selectDay);
      $("div.CalBox").mouseover(function() {
        $(this).css("color", "#555555")
      });
      $("div.CalBox").mouseout(function() {
        $(this).css("color", "#31313E")
      });
      $("div#calendarioCont").css("width", "" + ((7 * (BopCalendar.boxSize + 5) + 11)) + "px");
      $("div#calendarioCont").css("height", "" + (py + 55) + "px");
      $("div#calendarioCont").css("background-color", "#ffffff");
      $("div#calendarioContTitle p").css("font-size", "10px");
      $("div#calendarioContTitle p").css("letter-spacing", "1px");
      $("div#calendarioCont").show();
    },

    selectDay: function() {
      BopCalendar.selectedDate = new Date(BopCalendar.actualYear, BopCalendar.actualMonth, parseInt($(this).html()));

      /*date format*/
      var str = "";
      if (BopCalendar.dateFormat == "dmy") str = $(this).html() + " / " + (BopCalendar.actualMonth + 1) + " / " + BopCalendar.actualYear;
      else
      if (BopCalendar.dateFormat == "mdy") str = (BopCalendar.actualMonth + 1) + " / " + $(this).html() + " / " + BopCalendar.actualYear;
      else
        str = $(this).html() + " / " + (BopCalendar.actualMonth + 1) + " / " + BopCalendar.actualYear;


      // $(BopCalendar.targetid).html(str);
      //$(BopCalendar.targetid).html(str);
      BopCalendar.hide();

      onDateSelected();
    },

    getDate: function() {
      return BopCalendar.selectedDate
    },

    prevMonth: function() {
      if (BopCalendar.actualMonth == BopCalendar.today.getMonth() && BopCalendar.actualYear == BopCalendar.today.getFullYear()) return;
      var d = new Date(BopCalendar.actualYear, BopCalendar.actualMonth, 1);
      d.setMonth(BopCalendar.actualMonth - 1);
      BopCalendar.buildMonth(BopCalendar.getDays(d.getFullYear(), d.getMonth()))
    },

    nextMonth: function() {
      var d = new Date(BopCalendar.actualYear, BopCalendar.actualMonth, 1);
      d.setMonth(BopCalendar.actualMonth + 1);
      BopCalendar.buildMonth(BopCalendar.getDays(d.getFullYear(), d.getMonth()))
    },

    getDays: function(year, month) {
      var dArr = [];
      BopCalendar.actualYear = year;
      BopCalendar.actualMonth = month;
      var d = new Date(year, month, 1);
      dArr.push({
        d: d.getDate(),
        s: d.getDay(),
        m: d.getMonth(),
        y: d.getFullYear(),
        live: d >= BopCalendar.today
      });

      for (var i = 1; i < 31; i++) {
        d.setDate(d.getDate() + 1);
        if (d.getMonth() == month) dArr.push({
          m: d.getMonth(),
          y: d.getFullYear(),
          d: d.getDate(),
          s: d.getDay(),
          live: (d >= BopCalendar.today)
        })
      }
      return dArr
    }
  }; //BopCalendar



  //////////////////////////////////////////////////

  var CHECKIN = new Date();
  var CHECKOUT = new Date();
  var calOpened = false;

  function hideCalendar() {
    BopCalendar.hide();
    cont.hide();
  }


  var hoy = new Date();
  var cont = "DNAcalendar";
  var $checkindate, $checkoutdate;
  var target;
  var input;
  var calOpened = false;

  $(document).ready(function() {

    $('head').append(style)

    cont = $("#" + cont);
    target = $(cont.attr('data-target').split('-')[1]);
    input == $(cont.attr('data-target').split('-')[0]);
    $checkindate = target;

    $checkindate.click(function() {
      showCalendar($checkindate);
    });


    //target.val(""+hoy.getDate()+" / "+(hoy.getMonth()+1)+" / "+hoy.getFullYear()+"");

  });



  function showCalendar(div) {
    if (calOpened && div == target) { //BopCalendar.targetid){
      hideCalendar();
      return;
    }
    cont.show();
    calOpened = true;
    $('#DNAcalendar').css('left', (div.position().left ) + "px");
    $('#DNAcalendar').css('top', (div.position().top + 36) + "px");
    BopCalendar.initCalendar(cont, div);
  }


  function onDateSelected() {
    if (BopCalendar.targetid == $checkindate) {
      CHECKIN = new Date(BopCalendar.selectedDate.getFullYear(), BopCalendar.selectedDate.getMonth(), BopCalendar.selectedDate.getDate());

      target.val(BopCalendar.selectedDate.getDate() + " " +(BopCalendar.months[BopCalendar.selectedDate.getMonth() ]) + " " +  BopCalendar.selectedDate.getFullYear());
    }

    /*
    if(CHECKIN>CHECKOUT){
    CHECKOUT=new Date(CHECKIN.getFullYear(),CHECKIN.getMonth(),CHECKIN.getDate());  
    }

    }
    if(  BopCalendar.targetid==$checkoutdate){

      CHECKOUT=new Date(BopCalendar.selectedDate.getFullYear(),BopCalendar.selectedDate.getMonth(),BopCalendar.selectedDate.getDate());

    }
    */

    //setNightsCount();
  }

  function setNightsCount() {

    if (CHECKIN < CHECKOUT) {
      $('#nights').html(daysBetween(CHECKIN, CHECKOUT) + ' nights');
    } else {


      $('#nights').html('0 nights')
    }

  }



  function daysBetween(dd1, dd2) {
    var dat1 = dd1;
    var dat2 = dd2;
    var fin = dat2.getTime() - dat1.getTime();
    var dias = Math.floor(fin / (1000 * 60 * 60 * 24));
    return dias + 0;
  }


  function inStep(dat) {


    var dia = new Date(dat.y, dat.m, dat.d);
    if (CHECKIN == dia) return true;
    if (CHECKIN > CHECKOUT) return false;

    if (dia <= CHECKOUT && dia >= CHECKIN) return true;

    return false;


  }


})();