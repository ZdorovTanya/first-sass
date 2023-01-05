$(document).ready(function(){

        
    var photo = [
        "./img/fh2.jpg",
        "./img/fh1.jpg",
        "./img/fh3.jpg"
    ]

    var dogs = [
        "./img/Dog1.jpg",
        "./img/dog2.jpg",
        "./img/dog3.jpg"
    ]
    var color = [ 
        "./img/color1.jpg",
        "./img/color2.jpg",
        "./img/color3.jpg"
    ]

    function interest(nsect, ...arr){
        let i, sec, b, img;

        b = $('<div></div>');
        b.addClass("foto1");

        for (i=0; i<arr.length; i++){
            img = $('<img></img>');
            img.attr("src", arr[i]);
            b.append(img);
            sec = $(nsect);
            sec.append(b);
        }
        return;
    }

    interest("#sec1", ...photo); 
    interest("#sec2", ...dogs);
    interest("#sec3", ...color);

})