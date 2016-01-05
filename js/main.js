// Schedule
$('.js-sortable').sortable({
  containerSelector: 'section',
  itemSelector: 'div',
  handle: 'span.js-table-handle',
  placeholder: '<div class="placeholder"></div>'
});

// Table
$('.js-sort-table').sortable({
  containerSelector: 'table',
  itemPath: '> tbody',
  itemSelector: 'tr',
  placeholder: '<tr class="placeholder"/>',
  handle: '.glyphicon-move'
});

// Add & remove buttons
var rowTemplate = '<tr><td><span class="glyphicon glyphicon-move" aria-hidden="true"></span></td><td contenteditable="true"></td><td contenteditable="true"></td><td><span class="js-delete-row glyphicon glyphicon-remove" aria-hidden="true"></span></td></tr>'
$(".js-add-item").click(function() {
  $(this).prev('table').find('tbody').append(rowTemplate);
});

$('.js-sort-table').on('click', '.js-delete-row', function(){
  $(this).closest('tr').remove();
});

// Terms
$('.js-sortable-terms').sortable({
  handle: '.glyphicon-move'
});
