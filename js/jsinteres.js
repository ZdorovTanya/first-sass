
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
    var i, sec, d, img;
    d = document.createElement("div");
    d.classList.add("foto1");
    for (i=0; i<arr.length; i++){
    img = document.createElement("img");
    img.src = arr[i];
    d.appendChild(img);
    sec = document.getElementById(nsect);
    sec.appendChild(d);
    }
    return;
    }

    interest("sec1", ...photo);
    interest("sec2", ...dogs);
    interest("sec3", ...color);
