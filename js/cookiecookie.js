const pages=["Главная", "Обо мне", "Мои интересы", "Фотоальбом", "Тест", "Контакты", "История"]

function createCookie(){

    let cookie = document.cookie + ";";
    var locate = (!window.location.href.includes("interest")) ? window.location.href : "http://127.0.0.1:5500/interest.html";
    // console.log("locate - " + locate);
    
    if (!cookie.includes(locate)){
        cookie = locate + "=1; max-age=604800";
        console.log("new");
        return;
    }

    var ind = cookie.indexOf(locate);//проверяет вхождение в строку
    var si = Number(cookie.indexOf(";", ind)) + Number(1);
    var cookies = cookie.slice(ind, si);

    ind = Number(cookies.indexOf("=")) + Number(1);
    si = Number(cookies.indexOf(";", ind));
    cookies = cookies.slice(ind, si);

    cookies = Number(cookies) + Number(1);
    
    document.cookie = locate + "=" + cookies + "; max-age=604800"; //через неделю после посещения страницы данные удаляться, добавить время жизни?
    // console.log("old");
}


function getCookie(){
    
    let menu = document.querySelectorAll(".forPicture");
    let cookDiv = document.createElement("div");
    let histDiv = document.createElement("div");
    let metrDiv = document.createElement("div");

    histDiv.innerText = "История за все время";
    cookDiv.appendChild(histDiv);
    cookDiv.classList.add("todayhistory");
    // console.log("lllll");

    let countvisit;
    let doccookie = document.cookie + ";";


    for (let i=0; i<7; i++){

        // let locate = (i != 2) ? menu[i].href : "http://127.0.0.1:5500/interest.html";
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

        var pageDivC = document.createElement("div");
        var countDivC = document.createElement("div");
        
        pageDivC.innerText = pages[i];
        countDivC.innerText = countvisit;

        metrDiv.appendChild(pageDivC);
        metrDiv.appendChild(countDivC);

    }
    cookDiv.appendChild(metrDiv);
    document.body.appendChild(cookDiv);
}

createCookie();
