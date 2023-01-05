$(document).ready(function(){

    function dropMenu(){

        $(function(){
            $('#nav li').hover(function(){
                $(this).children('ul').fadeIn(200);
                $(this).children('ul').toggleClass('sub-menu-active');
            }, 
            function(){
                $(this).children('ul').fadeOut(200);
                $(this).children('ul').toggleClass('sub-menu-active');
            }) 
        })
    } 
 
    dropMenu();

    const mounth = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Ноября','Декабря']

    function addLeavingZero(d){
        return (d < 10) ? '0' + d :d;
    }

    function getUserTime (){

        var d = $('<div></div>');
        
        d.addClass('time');

        console.log(d);
        
        var z = $('<p></p>');
        
        d.append(z);
        $('#logo').append(d);

        let t = new Date();
        let D = addLeavingZero(t.getDate());
        let M = mounth[t.getMonth()-1];
        let Y = t.getFullYear() % 100;

        let h = addLeavingZero(t.getHours());
        let m = addLeavingZero (t.getMinutes());

        z.html(`${D} ${M} ${Y} ${h}:${m}`);
        

        setInterval(function(){
            let t = new Date();
            let D = addLeavingZero(t.getDate());
            let M = mounth[t.getMonth()-1];
            let Y = t.getFullYear() % 100;
        
            let h = addLeavingZero(t.getHours());
            let m = addLeavingZero (t.getMinutes());

            z.html(`${D} ${M} ${Y} ${h}:${m}`);
            
        }, 1000)
        
    }

    getUserTime();


    function menuPicture() { 
        var choiceMenu = $(".forPicture");
        
    
        for (var i=0; i<choiceMenu.length; i++){
    
            var leafs = choiceMenu[i].children;
            leafs[0].src = "./img/firstdogfotmenu.png";
    
            var location = window.location.href; //текущая страница
            var link = choiceMenu[i].href;
            
    
            if(link == location) {
                var leafs = choiceMenu[i].children;
                leafs[0].src = "./img/seconddogformenu.png";
                continue;
            }
    
            $(choiceMenu[i]).mouseover(function(e){
                var leafs = this.children;
                leafs[0].src = "./img/seconddogformenu.png";
            })
    
            $(choiceMenu[i]).on("mouseout", function(e){
                var leafs = this.children;
                leafs[0].src = "./img/firstdogfotmenu.png";
            })
            
    
        };
    
    }

    menuPicture();
})