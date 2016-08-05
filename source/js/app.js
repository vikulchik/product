(function() {
  'use strict';
  $('select').select2();
  $('.bxslider').bxSlider({
    pager : false,
    controls : true
  });

  $('.navigation_link').on('click', function(e){
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.navigation_link-active '),
        list = $this.closest('.navigation_list'),
        items = list.find('.navigation_link-active '),
        content = item.find('.navigation_list-second'),
        otherContent = list.find('.navigation_list-second'),
        duration = 200;


    if (!item.hasClass('active-class')) {
      items.removeClass('active-class');
      item.addClass('active-class');

      otherContent.stop(true, true).slideUp(duration);
      content.stop(true, true).slideDown(duration);
    } else {
      content.stop(true, true).slideUp(duration);
      item.stop(true, true).removeClass('active-class');
    }

  });

})();
