$(function() {
  $.getJSON('https://api.dribbble.com/v1/users/joshuanoom/shots?access_token=d545bbfb4f69352bf966d099335df4044151eb8d928e6a9cbb87d7f97f299d8e&callback=?', function(resp) {
    if (resp.data.length > 0) {             
      $.each(resp.data.reverse(), function(i, val) {
        $('#dribbble').prepend(
          '<li class="box"><img src="'+val.images.normal+'" /><h2>'+val.title+'</h2><p><a href="'+val.html_url+'">original post &rarr;</a></p></li>'
        );
      });
    }
    else {
      $('#dribbble').append('<li>No shots.</li>');
    }
  });                       
});
