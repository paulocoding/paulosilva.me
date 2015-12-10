// main function
// executed on document ready
var main = function () {
  
  // hidding back top arrow
  $('.back-top').hide();
  
  // set my current age
  $('.my-age').text(getAge(25, 9, 1985));
  
  // smooth scroll link
  $('a.scroll').click(function(e) {
        var $anchor = $(this);
        $('body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
        if($anchor.hasClass('menu-btn')){
          menuToggle();
        }
  });
  
  // back top arrow
  $(document).scroll(function(){
    if($('body').scrollTop() > 350) {
      $('.back-top').fadeIn(400);
    }
    else {
      $('.back-top').fadeOut(400);      
    }
  });
  
  // menu toggle function
  var menuToggle = function(){
    var menu = $('nav');
    if(!menu.hasClass('menu-open')){
      menu.animate({ 
          width: ($('body').width()-20)+'px'
        }, 200, function(){
          menu.animate({ 
          height: '284px'
        }, 300);
        });
      menu.addClass('menu-open');
    }
    else {
      menu.animate({ 
          height: '42px'
        }, 300, function(){          
          menu.animate({ 
              width: '42px'
            }, 200);
        });
      menu.removeClass('menu-open');      
    }
  };
  
// hamburger click
  $('a.expand').click(function(e){
    menuToggle();
    e.preventDefault();
  });
};

	// width: 180px;
	// height: 286px;
$(document).ready(main);
