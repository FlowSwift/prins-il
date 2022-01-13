// Things we need to add can go here :)
console.log('Things we need to add can go here :)');

// (function ($) {
//   $('.resp-tab-item').click(function(){
//     console.log('mew');
//   });

// })(jQuery);

(function ($) {
  // $('.resp-tab-content').hide();
  // $('.resp-tab-content:first-of-type').show();
  // $('.resp-tab-item:first-of-type').addClass('resp-tab-active')
  $('.resp-tab-item').click(function(){
    var tabId = $(this).attr('aria-controls')
    switchActiveTab(tabId);
  });

  switchActiveTab('tab_item-0')

  function switchActiveTab(tabId) {
    console.log('mew', tabId);


    $('.resp-tab-item').removeClass('resp-tab-active')
    $('.resp-tab-content').hide();
    $('.resp-tab-content#' + tabId).show();
    $('.resp-tab-item#li-' + tabId).addClass('resp-tab-active')
    
  }
})(jQuery);
