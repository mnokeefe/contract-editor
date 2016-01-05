// Schedule
$('.js-sortable').sortable({
  handle: 'span.glyphicon-move',
  placeholder: '<li class="placeholder"></li>'
});

// Terms
$('.js-sortable-terms').sortable({
  handle: 'span.glyphicon-move'
});

$(".js-add-item").click(function() {
  $(this).prev('ul').append('<li><span class="column-half-all title"><span class="glyphicon glyphicon-move" aria-hidden="true"></span></span><strong class="column-half-all info"></strong></li>');
});
