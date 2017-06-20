function getAllData(){
  $.ajax({
    url: '../backend/process.php',
    method: 'post',
    data: {
      getall: true
    }
  }).done(function(result){
    //sections
    var result = $.parseJSON(result);
    console.log(result);
    console.log(result.sections[0].length);
    for (var i = 0; i < result.sections[0].length; i++) {
      $('[data-section="section'+i+'"]').html(result.sections[0][i].content);
    }

  })
}

$(document).ready(function(){
  getAllData();
})
