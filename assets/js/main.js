$(function() {
  $.getJSON('https://api.dribbble.com/v1/users/joshuanoom/shots?access_token=d545bbfb4f69352bf966d099335df4044151eb8d928e6a9cbb87d7f97f299d8e&callback=?', function(resp) {
    if (resp.data.length > 0) {							
      $.each(resp.data.reverse(), function(i, val) {
      	console.log(val);

        var cajita = $("<div>"). addClass('cajita col-lg-4');

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
//uniendo interaccion social
        var social = $("<div>").addClass('social');
        social.text("kjsdkfjkd");

        cajita.append(proyecto);
        cajita.append(social);

        $("#proyectos").append(cajita);



      });
    }
    else {
      console.log('No shots');
    }
  });		   							    
});