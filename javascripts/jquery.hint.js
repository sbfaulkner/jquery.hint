// jquery plugin for hint text
(function($){
  $.fn.hint = function(options) {
    var settings = { hintClass: 'hint' };

    if (options) $.extend(settings, options);

    function clearHint(field) {
      if (field.hasClass(settings.hintClass)) field.removeClass(settings.hintClass).val('');
    }

    function setHint(field) {
      if (!field.val()) field.val($('label[for='+field.attr('id')+']').html()).addClass(settings.hintClass);
    }

    return this.each(function() {
      var field = $(this);
      $('label[for='+field.attr('id')+']').hide();
      setHint(field);
      field
        .focus(function() { clearHint($(this)); })
        .blur(function() { setHint($(this)); })
        .closest('form')
          .submit(function() { clearHint(field); });
    });
  };
})(jQuery);
