var socket = io();

jQuery('#submit-form').on('submit',function(e){
  e.preventDefault();
  console.log(`https://scholar.google.com.vn/scholar?hl=en&as_sdt=0%2C5&q=${jQuery('[name=info]').val()}`);
  socket.emit('createSearch',{
    searchID:  '22',
    url: `https://scholar.google.com.vn/scholar?hl=en&as_sdt=0%2C5&q=${jQuery('[name=info]').val()}`
  });
});
jQuery('#search-form').on('submit',function(e){
  e.preventDefault();
  console.log(`Search is ${jQuery('[name=info]').val()}`);
  socket.emit('createQuery',{
    searchID:  '22',
    search: `${jQuery('[name=info]').val()}`
  });
});
socket.on('display', function(passages) {
    jQuery("p").remove();
  passages.forEach(function(element) {

    var html = jQuery(`<p></p>`);
    html.text(element.passage_text);
    jQuery('#passages').append(html);
  //console.log(element.passage_text);

  });
  //console.log(element.passage_text);
  console.log(passages);

  console.log('it ended');
});
socket.on('popout', function(description){
  alert(description);
})

/*GRAVEYARD---------------------
var seachDocument = function(id){
  console.log('going to emit!');
  socket.emit('seachDoc',{
    docId: id
  });
};
var addClass = jQuery(`<a id="${element.document_id}${count}" class="seeMore">... See More</a>`);
jQuery(`#${element.document_id}${count}`).click(function() {
  seachDocument(element.document_id);
});
passages.forEach(function(element) {
  html.text(element.passage_text);
  jQuery('#passages').append(html);
//console.log(element.passage_text);
});

*/
