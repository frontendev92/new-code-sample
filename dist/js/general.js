var general = {
  init: function() {
    this.toggleNavbarMobile();
  },
  toggleNavbarMobile: function() {
    $('[data-open-navbar-main]').on('click', function() {
      $(this).closest('.navbar-main').addClass('open');
    });

    $('[data-close-navbar-main]').on('click', function() {
      $(this).closest('.navbar-main').removeClass('open');
    });
  }
};

$(function() {
  general.init();
});
