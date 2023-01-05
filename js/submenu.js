function dropMenu(){
    const elem1 = document.getElementById("categories");
    elem1.onmouseover = function(event){
        if(elem1!==null){
        event.target.nextElementSibling.classList.toggle('sub-menu-active');}
    }
}


const mounth = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Ноября','Декабря']

function addLeavingZero(d){
    return (d < 10) ? '0' + d :d;
}

function getUserTime (){

    var d = document.createElement("div");

    d.style.fontWeight='100';
    d.style.fontSize='13px';
    d.style.textAlign='center';
    
    var z = document.createElement('p'); 
    
    d.appendChild(z);
    document.getElementById('logo').appendChild(d);

    let t = new Date();
    let D = addLeavingZero(t.getDate());
    let M = mounth[t.getMonth()-1];
    let Y = t.getFullYear() % 100;

    let h = addLeavingZero(t.getHours());
    let m = addLeavingZero (t.getMinutes());

    z.innerHTML = `${D} ${M} ${Y} ${h}:${m}`;
    

    setInterval(function(){
        let t = new Date();
        let D = addLeavingZero(t.getDate());
        let M = mounth[t.getMonth()-1];
        let Y = t.getFullYear() % 100;
    
        let h = addLeavingZero(t.getHours());
        let m = addLeavingZero (t.getMinutes());

        z.innerHTML = `${D} ${M} ${Y} ${h}:${m}`;
        
    }, 1000)
    
}


//ЧЧ Месяц ГГ


function menuPicture() { 
    var choiceMenu = document.getElementsByClassName("forPicture");

    for (var i=0; i<choiceMenu.length; i++){

        var leafs = choiceMenu[i].childNodes;
        leafs[0].src = "./img/firstdogfotmenu.png";

        var location = window.location.href; //текущая страница
        var link = choiceMenu[i].href;
        

        if(link == location) {
            var leafs = choiceMenu[i].childNodes;
            leafs[0].src = "./img/seconddogformenu.png";
            continue;
        }

        choiceMenu[i].addEventListener("mouseover", function(e){
            var leafs = this.childNodes;
            leafs[0].src = "./img/seconddogformenu.png";
        })

        choiceMenu[i].addEventListener("mouseout", function(e){
            var leafs = this.childNodes;
            leafs[0].src = "./img/firstdogfotmenu.png";
        })
        

    };

}

getUserTime();
menuPicture();
dropMenu();
