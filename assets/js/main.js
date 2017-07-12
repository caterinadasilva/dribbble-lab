$(function() {
  $.getJSON('https://api.dribbble.com/v1/users/joshuanoom/shots?access_token=d545bbfb4f69352bf966d099335df4044151eb8d928e6a9cbb87d7f97f299d8e&callback=?', function(resp) {
    if (resp.data.length > 0) {							
      $.each(resp.data, function(i, val) {
      	console.log(val);

        var cajita = $("<div>"). addClass('cajita col-xs-6 col-sm-6 col-md-4 col-lg-4');

        var proyecto = $("<div>").addClass('listaProyecto');
        var listaLink = $("<a>").addClass('listaLink').attr("href" , val.html_url);
        proyecto.append(listaLink);
        //proyecto.addClass("col-lg-4");
        var imagen = $("<img>").addClass('imagen').attr('src' , val.images.teaser);
        listaLink.append(imagen);


        var info = $("<div>").addClass("info");
        var h5 = $("<h5>").text(val.title);
        //var parrafo = $("<p>").text(val.description);

        info.append(h5);
        info.append(val.description);
        listaLink.append(info);
        

        //uniendo interaccion social ale
        var social = $("<div>").addClass('social');
        //social.text("kajksjka");
        
        val.likes_count;
        val.views_count;
        val.comments_count;
        social.append('<i class="fa fa-eye" aria-hidden="true"></i><span> ' + val.views_count + ' </span>')
        social.append('<i class="fa fa-comment" aria-hidden="true"></i><span> ' + val.comments_count + ' </span>')
        social.append('<i class="fa fa-heart" aria-hidden="true"></i><span> ' + val.likes_count + ' </span>')
        cajita.append(proyecto);
        cajita.append(social);

        $("#proyectos").append(cajita);


      });
    } else {
      $('#dribbble').append('<li>No shots.</li>');
    }
  });                       
});
