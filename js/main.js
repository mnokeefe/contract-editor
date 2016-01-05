// Schedule
$('.js-sortable').sortable({
  containerSelector: 'section',
  itemSelector: 'div',
  handle: 'span.js-table-handle',
  placeholder: '<div class="placeholder"></div>'
});

// as table
$('.js-sort-table').sortable({
  containerSelector: 'table',
  itemPath: '> tbody',
  itemSelector: 'tr',
  placeholder: '<tr class="placeholder"/>',
  handle: '.glyphicon-move'
});

// Terms
$('.js-sortable-terms').sortable({
  handle: '.glyphicon-move'
});

$(".js-add-item").click(function() {
  $(this).prev('ul').append('<li><span class="column-half-all title"><span class="glyphicon glyphicon-move" aria-hidden="true"></span></span><strong class="column-half-all info"></strong></li>');
});
