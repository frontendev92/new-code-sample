var page = {
  init: function() {
    this.cardInit();
  },
  cardInit: function() {
    $('form').card({
      // a selector or DOM element for the container
      // where you want the card to appear
      container: '.section-checkout-form-card', // *required*

      // all of the other options from above
    });
  }
};

$(function() {
  page.init();
});
