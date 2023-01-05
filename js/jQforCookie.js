function cookieWithoutMilk(){

    sessionStorage.setItem(window.location.href, Number(sessionStorage.getItem(window.location.href)) + Number (1));
    console.log(sessionStorage.getItem(window.location.href));
    
};
cookieWithoutMilk();

function forHistory(){
    const pages = ["index", "call", "interest", "foto", "test", "contact", "history"];

    let name = $('<div></div>');
    name.text("История текущего сеанса");
    name.addClass("todayhistory");

    $("body").append(name);

    for (let i=0; i<sessionStorage.length; i++){
        
        for (let j =0; j<pages.length; j++){

            if(sessionStorage.key(i).includes(pages[j])){

                switch (pages[j]){

                    case "index":

                        let indexText = $('<div></div>');
                        indexText.attr('id',"indexId");
                        indexText.text("Главная  " + sessionStorage.getItem("http://127.0.0.1:5500/index.html"));
                        
                        name.append(indexText);
                        
                    break;

                    case "call":

                        let callText = $('<div></div>');
                        callText.attr('id',"callId");
                        callText.text("Обо мне  " + sessionStorage.getItem("http://127.0.0.1:5500/call.html"));
                        
                        name.append(callText);
                        
                    break;

                    case "interest":

                        let interestText = $('<div></div>');
                        interestText.attr('id',"interestId");
                        interestText.text("Мои интересы  " + sessionStorage.getItem("http://127.0.0.1:5500/interest.html"));
                        
                        name.append(interestText);
                        
                    break;

                    case "foto":

                        let fotoText = $('<div></div>');
                        fotoText.attr('id',"fotoId");
                        fotoText.text("Фотоальбом  " + sessionStorage.getItem("http://127.0.0.1:5500/foto.html"));
                        
                        name.append(fotoText);
                        
                    break;

                    case "test":

                        let testText = $('<div></div>');
                        testText.attr('id',"testId");
                        testText.text("Тест  " + sessionStorage.getItem("http://127.0.0.1:5500/test.html"));
                        
                        name.append(testText);
                        
                    break;

                    case "contact":

                        let contactText = $('<div></div>');
                        contactText.attr('id',"contactId");
                        contactText.text("Контакты  " + sessionStorage.getItem("http://127.0.0.1:5500/contact.html"));
                        
                        name.append(contactText);
                        
                    break;

                    case "history":

                        let historyText = $('<div></div>');
                        historyText.attr('id',"historyId");
                        historyText.text("История  " + sessionStorage.getItem("http://127.0.0.1:5500/history.html"));
                        
                        name.append(historyText);
                        
                    break;
                };
            }

        } 

    }

    if ($("#indexId").val() == null ){
        let indexText = $('<div></div>');
        indexText.id = "indexId";
        indexText.text("Главная  " + "0");
        
        name.append(indexText);
    } 

    if ($("#callId").val() == null ){
        let callText = $('<div></div>');
        callText.id = "callId";
        callText.text("Обо мне  " + "0");
        
        name.append(callText);
    } 

    if ($("#interestId").val() == null ){
        let interestText = $('<div></div>');
        interestText.id = "interestId";
        interestText.text("Мои интересы  " + "0");
        
        name.append(interestText);
    } 

    if ($("#fotoId").val() == null ){
        let fotoText = $('<div></div>');
        fotoText.id = "fotoId";
        fotoText.text("Фотоальбом  " + "0");
        
        name.append(fotoText);
    } 

    if ($("#testId").val() == null ){
        let testText = $('<div></div>');
        testText.id = "testId";
        testText.text("Тест  " + "0");
        
        name.append(testText);
    } 

    if ($("#contactId").val() == null ){
        let contactText = $('<div></div>');
        contactText.id = "contactId";
        contactText.text("Контакты  " + "0");
        
        name.append(contactText);
    } 

    if ($("#historyId").val() == null ){
        let historyText = $('<div></div>');
        historyText.id = "historyId";
        historyText.text("История  " + "0");
        
        name.append(historyText);
    } 
}
