var page = {
  init: function() {
    this.customTab();
  },
  customTab: function() {
    $('[data-tab]').on('click', function(e) {
      e.preventDefault();
      var $dataTab = $('[data-tab]');

      $(this).addClass('active');
      $dataTab.not($(this)).removeClass("active");

      $(this).closest('section').find('.tab-pane').removeClass('active');
      $( $(this).attr('href') ).addClass('active');
    });
  }
};

$(function() {
  page.init();
});
