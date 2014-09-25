 var x = Math.floor((Math.random() * 1420) + 1);


$.ajax({
    url: "http://xkcd.com/"+ x +"/info.0.json",
    dataType: "json",
    success: function(data) {
        $("#xkcdcontent").append(
            $("<h1 style=text-align:center;/>").text(data.title),
            $("<img align=middle/>").attr({
                src: data.img,
                title: data.alt,
                alt: data.title
            })
        );
    }   
});