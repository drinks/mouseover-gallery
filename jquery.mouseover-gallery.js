(function($){

  $.fn.mouseoverGallery = function(){
    var el = $(this)
      , imgs = this.find('img');

    imgs.eq(0).siblings().hide();

    el.hover(function(evt){
      $(this).data('active', true);
    }, function(evt){
      $(this).data('active', false)
    });
    el.mousemove(function(evt){
      if($(this).data('active')){
        var mouseX = evt.pageX
          , elX = $(this).offset().left
          , elW = $(this).width()
          , size = imgs.length
          , imgToShow = Math.floor(((mouseX - elX) / elW) * size)
          ;

          imgs.eq(imgToShow).show().siblings().hide();
      }
    });
    return el;
  }

})(jQuery);