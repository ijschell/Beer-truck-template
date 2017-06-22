function getAllData(){
  $.ajax({
    url: '../backend/process.php',
    method: 'post',
    data: {
      getall: true
    }
  }).done(function(result){
    var result = $.parseJSON(result);
    //sections
    for (var i = 0; i < result.sections[0].length; i++) {
      $('[data-section="section'+i+'"]').html(result.sections[0][i].content);
    }
    //general
    $('head title').text(result.general[0][0].title);
    $('head meta[name="description"]').attr('content', result.general[0][0].description);
    $('head meta[name="keywords"]').attr('content', result.general[0][0].keywords);
  })
}

$(document).ready(function(){
  getAllData();
})
