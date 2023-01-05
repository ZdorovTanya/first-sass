function cookieWithoutMilk(){

    sessionStorage.setItem(window.location.href, Number(sessionStorage.getItem(window.location.href)) + Number (1));
    console.log(sessionStorage.getItem(window.location.href));
    
};
cookieWithoutMilk();

function forHistory(){
    const pages = ["index", "call", "interest", "foto", "test", "contact", "history"];

    let name = document.createElement("div");
    name.innerText = "История текущего сеанса";
    name.classList.add("todayhistory");

    document.body.appendChild(name);

    for (let i=0; i<sessionStorage.length; i++){
        
        for (let j =0; j<pages.length; j++){

            if(sessionStorage.key(i).includes(pages[j])){

                switch (pages[j]){

                    case "index":

                        let indexText = document.createElement("div");
                        indexText.id = "indexId";
                        indexText.innerText = "Главная  " + sessionStorage.getItem("http://127.0.0.1:5500/index.html");
                        
                        name.appendChild(indexText);
                        
                    break;

                    case "call":

                        let callText = document.createElement("div");
                        callText.id = "callId";
                        callText.innerText = "Обо мне  " + sessionStorage.getItem("http://127.0.0.1:5500/call.html");
                        
                        name.appendChild(callText);
                        
                    break;

                    case "interest":

                        let interestText = document.createElement("div");
                        interestText.id = "interestId";
                        interestText.innerText = "Мои интересы  " + sessionStorage.getItem("http://127.0.0.1:5500/interest.html");
                        
                        name.appendChild(interestText);
                        
                    break;

                    case "foto":

                        let fotoText = document.createElement("div");
                        fotoText.id = "fotoId";
                        fotoText.innerText = "Фотоальбом  " + sessionStorage.getItem("http://127.0.0.1:5500/foto.html");
                        
                        name.appendChild(fotoText);
                        
                    break;

                    case "test":

                        let testText = document.createElement("div");
                        testText.id = "testId";
                        testText.innerText = "Тест  " + sessionStorage.getItem("http://127.0.0.1:5500/test.html");
                        
                        name.appendChild(testText);
                        
                    break;

                    case "contact":

                        let contactText = document.createElement("div");
                        contactText.id = "contactId";
                        contactText.innerText = "Контакты  " + sessionStorage.getItem("http://127.0.0.1:5500/contact.html");
                        
                        name.appendChild(contactText);
                        
                    break;

                    case "history":

                        let historyText = document.createElement("div");
                        historyText.id = "historyId";
                        historyText.innerText = "История  " + sessionStorage.getItem("http://127.0.0.1:5500/history.html");
                        
                        name.appendChild(historyText);
                        
                    break;
                };
            }

        } 

    }

    if (document.getElementById("indexId") == null ){
        let indexText = document.createElement("div");
        indexText.id = "indexId";
        indexText.innerText = "Главная  " + "0";
        
        name.appendChild(indexText);
    } 

    if (document.getElementById("callId") == null ){
        let callText = document.createElement("div");
        callText.id = "callId";
        callText.innerText = "Обо мне  " + "0";
        
        name.appendChild(callText);
    } 

    if (document.getElementById("interestId") == null ){
        let interestText = document.createElement("div");
        interestText.id = "interestId";
        interestText.innerText = "Мои интересы  " + "0";
        
        name.appendChild(interestText);
    } 

    if (document.getElementById("fotoId") == null ){
        let fotoText = document.createElement("div");
        fotoText.id = "fotoId";
        fotoText.innerText = "Фотоальбом  " + "0";
        
        name.appendChild(fotoText);
    } 

    if (document.getElementById("testId") == null ){
        let testText = document.createElement("div");
        testText.id = "testId";
        testText.innerText = "Тест  " + "0";
        
        name.appendChild(testText);
    } 

    if (document.getElementById("contactId") == null ){
        let contactText = document.createElement("div");
        contactText.id = "contactId";
        contactText.innerText = "Контакты  " + "0";
        
        name.appendChild(contactText);
    } 

    if (document.getElementById("historyId") == null ){
        let historyText = document.createElement("div");
        historyText.id = "historyId";
        historyText.innerText = "История  " + "0";
        
        name.appendChild(historyText);
    } 
}
