(function($){

  $.fn.mouseoverGallery = function(opts){
    var el = $(this)
      , els
      , options = {}
      , defaults = {
            'selector': 'img'
        }
      , init = function(){
          options = $.extend(options, defaults, opts);
          els = el.find(options.selector);
          if(!els.length){
            window.console && console.log && console.log(el.selector + ': no children matching selector "' + options.selector + '" found, aborting.');
            return el;
          }
          els.eq(0).siblings().hide();
          el.hover(function(evt){
            el.data('active', true);
          }, function(evt){
            el.data('active', false);
            els.eq(0).show().siblings().hide();
          });
          el.mousemove(handler);
          return el;
        }
      , handler = function(evt){
          if(el.data('active')){
            var mouseX = evt.pageX
              , elX = el.offset().left
              , elW = el.width()
              , size = els.length
              , imgToShow = Math.floor(((mouseX - elX) / elW) * size)
              ;

              els.eq(imgToShow).show().siblings().hide();
          }
        }
      ;

    return init();
  }

})(jQuery);