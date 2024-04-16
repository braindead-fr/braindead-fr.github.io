






















































































































/*Code by android developers start here*/
var startLoc = null;
//var contentName = '152';
//step 1:-
var contentName = parseInt(localStorage.getItem("currentbrand"));
var currentContentId = parseInt(localStorage.getItem("currentcontent"));
//ends
/* var currentContentNSlide ='';

custom slides changes begins here....

alert("++++++++++++"+custcomslideflag1+"+++++++custcomslideid+++++++"+custcomslideid1);
	if (typeof(localStorage.getItem("currentcustomslideflag"))!='undefined' &&  localStorage.getItem("currentcustomslideflag") =='true'){
		var custcomslideid1=parseInt(localStorage.getItem("currentcontentcustomslideId"));
		step 2:

		currentContentNSlide = currentContentId+"_"+contentName+"_"+custcomslideid1;
		step 2 ends here
		localStorage.setItem("current",currentContentNSlide);
		localStorage.setItem("currentslide",custcomslideid1);

	}else{
		step 3 :
		currentContentNSlide = currentContentId+"_"+contentName+"_"+'1';
		//step 3 ends here
		localStorage.setItem("current",currentContentNSlide);
		localStorage.setItem("currentslide",'1');
	}
	
custom slides changes ends here....

/* currentContentNSlide = contentName+"_"+'1';
localStorage.setItem("current",currentContentNSlide);
localStorage.setItem("currentslide",'1'); */
checkClickThrough();

document.getElementById("main_content").addEventListener("touchmove", touchHandler, false);
document.getElementById("main_content").addEventListener("touchstart", touchHandler, false);
function touchHandler(e) {
  if (e.type == "touchstart") {
    if (e.touches.length == 1) {
      // one finger touch
      var touch = e.touches[0];
      startLoc = { x: touch.pageX, y: touch.pageY };
    }
  } else if (e.type == "touchmove") {
    if (startLoc) {
      var touch = e.touches[0];

      if (
        Math.abs(startLoc.x - touch.pageX) > Math.abs(startLoc.y - touch.pageY)
      ) {
        e.preventDefault();
      }
      startLoc = null;
    }
  }
}
/*Code by android developers ends here*/
$(document).ready(function () {
  var ua = navigator.userAgent;
  //var event = "touchstart";
  var event = ua.match(/Ipad/i) ? "touchstart" : "click";

  $(".left_arrow").click(function (event) {
    go_nav('b');
  });

  $(".right_arrow").click(function (event) {
    go_nav('f');
  });

  $(".slides").click(function () {
    var slideNum = $(this).index() + 1;
    console.log(slideNum);
    open_page("", slideNum);
  });

  $(".reference").removeClass("active");

  $(".reference").on("swipeleft swiperight", function (event) {
    event.stopPropagation();
  });

  $(".box_btn").bind("click", function () {
    $(".reference").toggleClass("active");
  });

  currentSlide();

  $("#main_content").swipe({
    swipeLeft: function (event, direction, distance, duration, fingerCount) {
      /* //step 4:-
		console.log("swipeleft"+localStorage.getItem("currentslide"));
		localStorage.setItem("previousslide",localStorage.getItem("currentslide"));
		//step 4 ends here */
      //alert("swipeleft");
      //myconsole("swipeleft");
      var page_id = parseInt($("#wrapper").attr("rel"));
      var last_page_id = $(".slides").length;
      var slide_jumper_open = $(".reference").hasClass("active");
      if (page_id == last_page_id + 1) {
        return;
      } else {
        go_nav('f');
      }
    },

    swipeRight: function (event, direction, distance, duration, fingerCount) {
      /* //step 5:-
		console.log("swiperight"+localStorage.getItem("currentslide"));
		localStorage.setItem("previousslide",localStorage.getItem("currentslide"));
		//step 5 ends here  */
      //alert("swiperight");
      //myconsole("swiperight");
      var page_id = parseInt($("#wrapper").attr("rel"));
      var slide_jumper_open = $(".reference").hasClass("active");

      if (page_id == 0) {
        //console.log("First Slide");
        //myconsole("First Slide");
        return;
      } else {
        go_nav('b');
      }
    },

    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold: 0,
  });
});

function go_nav(direction) {
  var page_id = parseInt($("#wrapper").attr("rel"));

  var flag = 0;
  if (direction == 'b') {
    if (page_id >= 0) {
      page_id = page_id - 1;
      //alert(page_id);
      //console.log(page_id);
      if (page_id == 2) {
        flag = 2;
      }
    }
    if (flag == 2) {
      localStorage.setItem("gotoNextPrevBrand", 2); //if one than next if 2 than prev
      //flag == 0;
     var objectData = {
    "gotoNextPrevBrand": localStorage.getItem("gotoNextPrevBrand"),
    "previousslide": localStorage.getItem("previousslide"),
    "slideId": page_id
  };
  var params = {
    "query": objectData,
    "type": "brandNavigation",
    "callback": "checkLastPgFn"
  };
      			window.messageHandler.postMessage(JSON.stringify(params));

      //window.location = "js-call:" + "1" + ":" + encodeURIComponent(JSON.stringify({query:'NODATA', type:'brandNavigation', callback:'checkLastPgFn'}));
    } else {
      localStorage.setItem("gotoNextPrevBrand", 0);
      var objectData = {
    "gotoNextPrevBrand": localStorage.getItem("gotoNextPrevBrand"),
    "previousslide": localStorage.getItem("previousslide"),
    "slideId": page_id
  };
  var params = {
    "query": objectData,
    "type": "brandNavigation",
    "callback": "checkLastPgFn"
  };
      			window.messageHandler.postMessage(JSON.stringify(params));
    }
  } else {
    if (page_id <= 4) {
      page_id = page_id + 1;
      //alert(page_id);
      if (page_id == 5) {
        flag = 1;
      }
    }
    if (flag == 1) {
      localStorage.setItem("gotoNextPrevBrand", 1); //if one than next if 2 than prev
      flag == 0;
      var objectData = {
    "gotoNextPrevBrand": localStorage.getItem("gotoNextPrevBrand"),
    "previousslide": localStorage.getItem("previousslide"),
    "slideId": page_id
  };
  var params = {
    "query": objectData,
    "type": "brandNavigation",
    "callback": "checkLastPgFn"
  };
      			window.messageHandler.postMessage(JSON.stringify(params));

      // window.location = "js-call:" + "1" + ":" + encodeURIComponent(JSON.stringify({query:'NODATA', type:'brandNavigation', callback:'checkLastPgFn'}));
    } else {
      localStorage.setItem("gotoNextPrevBrand", 0);
      var objectData = {
    "gotoNextPrevBrand": localStorage.getItem("gotoNextPrevBrand"),
    "previousslide": localStorage.getItem("previousslide"),
    "slideId": page_id
  };
  var params = {
    "query": objectData,
    "type": "brandNavigation",
    "callback": "checkLastPgFn"
  };
      			window.messageHandler.postMessage(JSON.stringify(params));
    }
  }

  /* //step 8:
currentContentNSlide = currentContentId+"_"+contentName+"_"+page_id;
//step 8 ends here
localStorage.setItem("current",currentContentNSlide);
localStorage.setItem("currentslide",page_id); */

  $("#wrapper").attr("rel", page_id);

  var content = "";
  if (flag == 0) {
    var pg_content = set_pg_content(page_id);

    $("#main_content").html(pg_content);
  }
  //console.log("pg : "+page_id);
  if (page_id == 4) {
    $(".box2").click(function (event) {
      open_page("", 5);
    });
    $(".box3").click(function (event) {
      open_page("", 6);
    });
    $(".box4").click(function (event) {
      open_page("", 7);
    });
    $(".box5").click(function (event) {
      open_page("", 8);
    });
    $(".box6").click(function (event) {
      open_page("", 9);
    });
    $(".box7").click(function (event) {
      open_page("", 10);
    });
    $(".box8").click(function (event) {
      open_page("", 11);
    });
  }
  checkClickThrough();
}

function set_pg_content(pg_id) {
  $(".reference").removeClass("active");
  currentSlide();
  var selectedContentPath = "";
  switch (pg_id) {
    case 1:
      content =
        '<link href=slide1/slide1.css media=screen rel=stylesheet><section id=sec1><div class=emcure-logo><img src=slide1/Emcure-logo.svg class=logo-e></div><div class=main-spegra><div class=spegra-logo><img src=slide1/logo_1.svg class=logo-e></div><div class=line-2><img src=slide1/line-23.png></div><div class=pill-div><div class=pill-1><div class=pill-img><img src=slide1/image-1.svg class=logo-e></div><div class=pill-text>Single pill of<br>Dolutegravir + TAF<br>+ Emtricitabine</div></div><div class=pill-2><div class=pill-img><img src=slide1/image-2.svg class=logo-e> <img src=slide1/pill_12.png class=pill2></div><div class=pill-text>Small size of tablet<br>ensures patient<br>convenience</div></div><div class=pill-3><div class=pill-img><img src=slide1/image-3.svg class=logo-e></div><div class=pill-text>TAF has less adverse<br>events related to renal &<br>bone density than TDF2</div></div></div><div class=tablets-pack><img src=slide1/Tablets-pack.svg class=logo-e><div class=dosage-main><div class=dosage-1><div class=dosage-img><img src=slide1/DOSAGE3.svg class=logo-e></div><div class=doesge-text><span class=dos>DOSAGE</span> <span class=d3>3</span> <span>- Should be taken orally,<br>once daily with or without food</span></div></div><div class=dosage-2><div class=dosage-img><img src=slide1/INDICATION3.svg class=logo-e></div><div class=doesge-text><span class=dos>INDICATION</span> <span class=d3>3</span> <span>For the management of Human<br>Immunodeficiency Virus (HIV) infection in<br>adults weighing more than 40 kg.</span></div></div></div></div><div class=health><div class=health1><div class=h-div><span>Spegra is manufactured under licenses from Gilead Sciences Inc., Medicines Patent Pool<br>and ViiV Healthcare. Any other use is not authorised.</span></div></div></div></div><div class=footer-div><span>1.CONSOLIDATED GUIDELINES ON HIV PREVENTION, TESTING, TREATMENT, SERVICE DELIVERY AND MONITORING: RECOMMENDATIONS FOR A PUBLIC HEALTH APPROACH JULY 2021 </span><span>2.Medicine (2016) 95:41(e5146)</span> <span>3.Spegra pack insert</span> <span>TAF-Tenofovir Alafenamide</span></div></section>';
      break;

    case 2:
      content =
        '<link href=slide2/slide2.css media=screen rel=stylesheet><section id=sec2><div class=emcure-logo><img src=slide2/Emcure-logo.svg class=logo-e></div><div class=main-spegra><div class=spegra-logo><img src=slide2/logo_1.svg class=logo-e></div><div class=line-2><img src=slide1/line-23.png></div><div class=impaact-div><img src=slide2/impaact-bg.svg><div class=impaact-text-1><span>IMPAACT 2010 TRIAL</span><span class=i1>1</span></div><div class=safety-text><span>Safety & Efficacy of DTG vs EFV TDF vs TAF in Pregnancy</span></div></div><div class=efavirenz-div><img src=slide2/efavirenz-bg.svg><div class=efavi-div><div class=efavi-text><span class=e1>Efavirenz</span> <span class=e2>Combination</span></div><div class=efv-text>EFV/TDF/FTC</div></div><div class=dolut-div><div class=dolut-text><span class=d1>Dolutegravir</span> <span class=d2>Combination</span></div><div class=dtg>DTG + TDF/FTC</div><div class=taf>DTG + TAF/FTC</div></div></div><div class=mother-img><div class=efv-monther><img src=slide2/efv-mother.svg></div><div class=dtg-monther><img src=slide2/dtg-mother.svg></div><div class=line-m1><div class=line-m><img src=slide2/line-m.svg></div></div></div><div class=mother-text>Almost all (98%) Mothers Who Received DTG were Virally Suppressed at<br>Delivery, Compared to Mothers who Received EFV.</div></div><div class=footer-div><span>1.CONSOLIDATED GUIDELINES ON HIV PREVENTION, TESTING, TREATMENT, SERVICE DELIVERY AND MONITORING: RECOMMENDATIONS FOR A PUBLIC HEALTH APPROACH JULY 2021 </span><span>2.Medicine (2016) 95:41(e5146)</span> <span>3.Spegra pack insert</span> <span>TAF-Tenofovir Alafenamide</span></div></section>';
      break;

    case 3:
      content =
        '<link href=slide3/slide3.css media=screen rel=stylesheet><section id=sec3><div class=emcure-logo><img src=slide3/Emcure-logo.svg class=logo-e></div><div class=main-spegra><div class=spegra-logo><img src=slide3//logo_1.svg class=logo-e></div><div class=line-2><img src=slide1/line-23.png></div><div class=title-wapper><p>DTG-FTC associated with Significantly <span>Fewer Adverse<br>Pregnancy Outcomes </span>than EFV/FTC/TDF</div><div class=chart-wapper><a href=#control-graph1><img src=slide3/chart.svg alt=chart></div></div><div class=footer-div></div><div class="img-popup popup-wrapper"id=control-graph1><div class=popup-container><a href=# class=close>×</a><div class=popup-head></div><div class=popup-content><div class=graph1><img src=slide3/chart.svg alt=""></div></div></div></div></section>';
      break;
  }

  return content;
}

function showDiv() {
  document.getElementById("welcomeDiv").style.display = "block";
}
function showDiv2() {
  document.getElementById("welcomeDiv2").style.display = "block";
}

function open_page(url, page_id) {
  localStorage.getItem("currentbrand");
  localStorage.getItem("currentcontent");
  localStorage.getItem("currentcontentbrandId");
  localStorage.getItem("current");
  localStorage.setItem("gotoNextPrevBrand", 0);
  //alert("====currentbrand======"+localStorage.getItem('currentbrand'));
  //alert("====currentcontent======"+localStorage.getItem('currentcontent'));
  //alert("====currentcontentbrandId======"+localStorage.getItem('currentcontentbrandId'));
  //alert("====current======"+localStorage.getItem('current'));
  //alert("====previousslide======"+localStorage.getItem("previousslide"));

  //alert("====page_id======"+page_id);
  var objectData = {
    "gotoNextPrevBrand": localStorage.getItem("gotoNextPrevBrand"),
    "previousslide": localStorage.getItem("previousslide"),
    "slideId": page_id
  };
  var params = {
    "query": objectData,
    "type": "brandNavigation",
    "callback": "checkLastPgFn"
  };

      window.messageHandler.postMessage(JSON.stringify(params));
  /* // alert(page_id);
	//step 10:
	if (typeof(localStorage.getItem("currentslide"))!='undefined'){
		//to checked previous slide has god end time...
		var slideid=localStorage.getItem("currentslide");
		toCaptureTime(slideid);
		
	}
	
	// toCaptureTime(page_id);
	 localStorage.setItem("currentslide",page_id);
	 currentContentNSlide = currentContentId+"_"+contentName+"_"+page_id;
	 localStorage.setItem("current",currentContentNSlide);
	//step 10 ends here */

  $("#wrapper").attr("rel", page_id);
  var content = "";
  var pg_content = set_pg_content(page_id);

  $("#main_content").html(pg_content);

  if (page_id == 4) {
    $(".box2").click(function (event) {
      open_page("", 5);
    });
    $(".box3").click(function (event) {
      open_page("", 6);
    });
    $(".box4").click(function (event) {
      open_page("", 7);
    });
    $(".box5").click(function (event) {
      open_page("", 8);
    });
    $(".box6").click(function (event) {
      open_page("", 9);
    });
    $(".box7").click(function (event) {
      open_page("", 10);
    });
    $(".box8").click(function (event) {
      open_page("", 11);
    });
  }
  checkClickThrough();
}

function checkClickThrough() {
  var currentslide = localStorage.getItem("currentslide");
  //alert(currentslide);
  document.getElementById("click_through").innerHTML = "";

  if (currentslide == 1) {
    document.getElementById("click_through").innerHTML = "";
  }
  if (currentslide == 2) {
    document.getElementById("click_through").innerHTML = "";
  }
}

function checkBtns(refNum) {
  switch (refNum) {
    case 1:
      open_page("", 1);
      break;
  }
}

function currentSlide() {
  var curr_id = parseInt($("#wrapper").attr("rel"));
  $(".slides").removeClass("active");
  $(".slides:nth-child(" + curr_id + ")").addClass("active");
  runAnimation();
}

var ln = 0;
function myconsole(msg) {
  var oldMsg = "</br>" + ln + ". " + $("#myconsole").html();
  ln++;
  $("#myconsole").html(msg + oldMsg);
}

function currentTimeInDatabaseFormat() {
  //to get current time in dd-mm-yyyy hh:mm:ss
  var year = new Date().getFullYear();
  var month = new Date().getMonth();
  month = parseInt(month) + 1;
  if (month.toString().length == 1) {
    month = "0" + month;
  }

  var date = new Date().getDate();
  if (date.toString().length == 1) {
    date = "0" + date;
  }

  var hour = new Date().getHours();
  if (hour.toString().length == 1) {
    hour = "0" + hour;
  }

  var minutes = new Date().getMinutes();
  if (minutes.toString().length == 1) {
    minutes = "0" + minutes;
  }

  var seconds = new Date().getSeconds();
  if (seconds.toString().length == 1) {
    seconds = "0" + seconds;
  }

  var duration =
    year +
    "-" +
    month +
    "-" +
    date +
    "-" +
    hour +
    ":" +
    minutes +
    ":" +
    seconds;
  return duration;
}

$(document).ready(function () {
  $("body").on("click", ".touchbtn", function () {
    $(".right_arrow").trigger("click");
  });

  $(document).on("click", ".btnshow", function () {
    //alert('hi')
    $(".touchbtn").css("display", "block");
  });
});

/*--------------------- animation javascript -----------------------*/

function s9_pop1() {
  $(".s9_1").css("display", "block");
  $(".s9_c1ose1").css("display", "block");
  $(".s9_pop1").css("display", "none");
}

//Additional Jquery animation code can start from here

function framepop() {
  setTimeout(function () {
    $(".frame").show();
    $(".frameclose").show();
    $(".frameopen").hide();
  }, 100);
}

function frameclose() {
  setTimeout(function () {
    $(".frame").hide();
    $(".frameclose").hide();
    $(".frameopen").show();
  }, 100);
}
