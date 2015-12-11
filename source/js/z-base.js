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
           // only if on hamburger mode
          if(window.innerWidth < 911) {
            menuToggle();
          }
        }
  });
  
  // back top arrow
  $(document).scroll(function(){
    if($('body').scrollTop() > 160) {
      $('.back-top').fadeIn(400);
    }
    else {
      $('.back-top').fadeOut(400);      
    }
  });
  
  // change menu to fixed on scroll 
  var toogleMenuFixed = function(height) {
    if($('body').scrollTop() > height){
          $('nav').addClass('fixed');
        } else {
          $('nav').removeClass('fixed');        
        }
  };
  
  $(document).scroll(function(){
    var windowWidth = window.innerWidth;
    // only if not on hamburger mode
    if(windowWidth > 910) {
      // diferent breakpoints
      if(windowWidth > 1180) {
        toogleMenuFixed(260);
      } else if (windowWidth >1010){
        toogleMenuFixed(160);
      } else {
        toogleMenuFixed(110);
      }
    }
  });
  
  // active button on menu based on scroll
  var sections = ['#about', '#objectives', '#tech-skills', '#projects', '#education', '#experience', '#contact' ];
  $(document).scroll(function(){
      var sectionOffset = [];
      // getting all the offsets
      // minus a margin value (so it activates before going offscreen)
      // activates when title is on the top 1/5 of the screen
      var offsetMargin = -(window.innerHeight/5);
      for(var i=0, max=sections.length;i<max-1;i++){
        sectionOffset.push($(sections[i]).offset().top + offsetMargin);
      }
      //last one is special 
      //needs to give have margin since he will never cross top screen      
      sectionOffset.push($(sections[sections.length-1]).offset().top - window.innerHeight + $('#contact').height());      
      
      // looking for the active section
      for(var i=0, max=sections.length;i<max;i++){
        if(sectionOffset[i] < $('body').scrollTop()) {
          $('.menu-btn').removeClass('active');
          $($('.menu-btn')[i]).addClass('active');
        }
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
          height: '325px'
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

$(document).ready(main);
