

const pages=["Главная", "Обо мне", "Мои интересы", "Фотоальбом", "Тест", "Контакты", "История"]

function createCookie(){

    var locate = (!$.cookie.includes("interest")) ? window.location.href : "http://127.0.0.1:5500/interest.html";
    
    if (!($.cookie.includes(locate))){
        $.cookie = locate + "=1;";
        return;
    }

    var ind = $.cookie.indexOf(locate);//проверяет вхождение в строку
    var si = Number($.cookie.indexOf(";", ind)) + Number(1);
    var cookies = $.cookie.slice(ind, si);

    ind = Number(cookies.indexOf("=")) + Number(1);
    si = Number(cookies.indexOf(";", ind));
    cookies = cookies.slice(ind, si);

    cookies = Number(cookies) + Number(1);
    
    $.cookie = locate + "=" + cookies + ";"; 
    $.cookie = "expires=Tue, 19 Jan 2038 03:14:07 GMT;";
}


function getCookie(){
    
    let menu = $(".forPicture");
    let cookDiv = $('<div></div>');
    let histDiv = $('<div></div>');
    let metrDiv = $('<div></div>');

    histDiv.text("История за все время");
    cookDiv.append(histDiv);
    cookDiv.addClass("todayhistory");

    let countvisit;
    let doccookie = $.cookie + ";";


    for (let i=0; i<7; i++){

        let locate = menu[i].href;

        if (!doccookie.includes(locate)){
            countvisit = 0;
        }
        else{ 
            let ind = doccookie.indexOf(locate);
            let si = Number(doccookie.indexOf(";", ind)) + Number(1);
            let cookies = doccookie.slice(ind, si);

            ind = Number(cookies.indexOf("=")) + Number(1);
            si = Number(cookies.indexOf(";", ind));
            countvisit = cookies.slice(ind, si);
            
        }

        var pageDivC = $('<div></div>');
        var countDivC = $('<div></div>');
        
        pageDivC.text(pages[i]);
        countDivC.text(countvisit);

        metrDiv.append(pageDivC);
        metrDiv.append(countDivC);

    }
    cookDiv.append(metrDiv);
    $("body").append(cookDiv);
}

createCookie();
