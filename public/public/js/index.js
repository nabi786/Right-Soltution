$(document).ready(function () {


  // navigation 
  $('#responsiveMenuBtn').click(function () {
    $('#navgationSection').animate({
      left: "0%"
    });

    $('#navgationSection').css("overflow-y", "auto")
    $('#body').css("overflow", "hidden")
    $('#body').after().css("display", 'block')
  });

  $('.navigationCloseBtn').click(function () {
    $('#navgationSection').animate({
      left: "-200%"
    });

    $('#navgationSection').css("overflow-y", "hidden")
    $('#body').css("overflow", "auto")

  })


  // if user scroll down and top
  window.addEventListener("scroll", (event) => {

    var scrollTop = window.pageYOffset

    if (scrollTop > 30) {
      $('#header').css("position", "fixed")
      $('#header').css("top", "0px")
      // $('#header').css("position","sticky")
    } else if (scrollTop < 30) {
      $('#header').css("position", "relative")
      $('#header').css("top", "0px")
    }

  });






  //  dorpDownMenu

  var dropDownAble = document.getElementsByClassName('dropDownAble');
  dropDownAble = Array.from(dropDownAble);

  if(window.innerWidth > 900){

    dropDownAble.forEach(function (item, index) {
      item.addEventListener('mouseover', function () {
        $('.dropDown').eq(index).css('display','block')
      })
      item.addEventListener('mouseleave', function () {
        $('.dropDown').eq(index).css('display','none')
      })
     
    })

  }else{

    dropDownAble.forEach(function (item, index) {
      item.addEventListener('click', function () {
        $('.dropDown').eq(index).toggle()
      })
    })
  }




  window.addEventListener("scroll", (event) => {

    var scrollTop = window.pageYOffset

    if (scrollTop > 600) {
      $('#scrollTop').css('display',"block")
    } else if (scrollTop < 600) {
      $('#scrollTop').css('display',"none")
     
    }

  });

  // when user click on pencil button than scroll top
  $('#scrollTop').click(function(){
    // $(window).scrollTop(0)
    $("html, body").animate(
      { scrollTop: "0" }, 500);
  });


})