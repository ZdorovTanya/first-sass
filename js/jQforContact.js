
function validate_form()
{
    if (!fio()) return false;

    if (!phone()) return false;

    if (!post()) return false;

    if (!check_radio()) return false;

    var word = $("callback");
    if (!text_area(word)) return false;

    var brth = $("#bday");
    if (!bData(brth)) return false;


 
    return true;
}


// ------------------подсказка--------------


function show(n){
    let text = $('.tooltip:eq(' + n + ')');
    text.addClass('tooltipSeen');
    setTimeout(function(){
        text.removeClass('tooltipSeen');
        text.addClass('tooltip');
    }, 3000);
};

console.log($("#Username"));
$("#Username").mouseover(function(){show(0)});
$("#phone").mouseover(function(){show(1)});  
$("#UserEmail").mouseover(function(){show(2)});  

//---------------------------------


let fioInput = $("#Username");
fioInput.on("blur", fio);


function fio (){
    var uname = $("#Username").val();
    var valid = true;
    var id = $('#Username');

    let mistake = $(".error");
  
    var i, d;
  
    d = $('<div></div>');
    i = $('<h3></h3>'); 
    i.text("Пожалуйста заполните поле Фамилия Имя Отчество");
    d.append(i);

  
    var j, b;
  
    b = $('<div></div>');
    j = $('<h3></h3>');
    j.text("Пожалуйста введите ФИО как в паспорте");
    b.append(j);

    if ((uname == "")){
        $(mistake[0]) .append(d);
        // b.remove();
        valid = false;
        id.addClass("red");
        id.removeClass("green");
    };

    if (uname != ""){
        if (uname.match(/^[A-Я][а-я]+\s[A-Я][а-я]+\s[A-Я][а-я]+$/)){
            var del = mistake[0].children.length;
            id.addClass("red");
            id.addClass("green");
            for(var i=del-1; i>=0; i--){
                mistake[0].children[i].remove();
            }
            valid=true;
        }
        else {
            // d.remove();
            $(mistake[0]).append(b);
            valid = false;
            id.removeClass("green");
            id.addClass("red");
        }

    };

    button();

    return valid;
  
}


let numberInput = $("#phone");
numberInput.on("blur", phone);


function phone (){
  
    var tel = $("#phone").val();
    var valid = true;
    var id = $("#phone");

    let mistake = $(".error");
    
    var i, d;
    
    d = $('<div></div>');
    i = $('<h3></h3>');
    i.text("Пожалуйста введите номер.");
    d.append(i);
    
    var j, b;
    
    b = $('<div></div>');
    j = $('<h3></h3>');
    j.text("Пожалуйста проверте номер");
    b.append(j);


    if ((tel == "")){
        $(mistake[1]).append(d);
        // b.remove();
        valid = false;
        id.addClass("red");
        id.removeClass("green");
    };

    if (tel != ""){
        if (tel.match(/^\+[73][0-9]{9,11}$/)){
            var del = mistake[1].children.length;
            id.addClass("red");
            id.addClass("green");
            for(var i=del-1; i>=0; i--){
                mistake[1].children[i].remove();
            }
            valid=true;
        }
        else {
            // d.remove();
            $(mistake[1]).append(b);
            valid = false;
            id.removeClass("green");
            id.addClass("red");
        }

    };

    button();

    return valid;

}


let postInput = $("#UserEmail");
postInput.on("blur", post);


function post (){

    var email = $("#UserEmail").val();
    var valid = true;
    var id = $('#UserEmail');

    let mistake = $(".error");
    
    var i, d;
    
    d = $('<div></div>');
    i = $('<h3></h3>');
    i.text("Пожалуйста заполните поле Email");
    d.append(i);
    
    var j, b;
    
    b = $('<div></div>');
    j = $('<h3></h3>');
    j.text("Пожалуйста проверте почту");
    b.append(j);

    if ((email == "")){
        $(mistake[2]).append(d);
        // b.remove();
        valid = false;
        id.addClass("red");
        id.removeClass("green");
    };

    if (email != ""){
        if (email.match(/^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)){
            var del = mistake[2].children.length;
            id.addClass("red");
            id.addClass("green");
            for(var i=del-1; i>=0; i--){
                mistake[2].children[i].remove();
            }
            valid=true;
        }
        else {
            // d.remove();
            $(mistake[2]).append(b);
            valid = false;
            id.removeClass("green");
            id.addClass("red");
        }

    };

    button();
    
    return valid;

    

}


function check_radio (){
    var valid = false;
    
    if($("#w").prop("checked", true) || $("#m").prop("checked", true)){
        valid = true;
    }

    if(valid){

    }
    else{
        alert ("Укажите пол.");
    }

    return valid;
}


function text_area (word){
    var valid = true;

    if ( word.value == "" ) {
        alert ( "Пожалуйста заполните текстовое поле." );
        word.focus();
        valid = false;
    }

    return valid;
}

function bData (brth){
    var valid = true;

    if ( brth.value == "" ){
        alert ( "Пожалуйста укажите дату рождения." );
        brth.focus();
        valid = false;
    }

    return valid;
}


function button (){
    var uname = $("#Username").val();
    var email = $("#UserEmail").val();
    var tel = $("#phone").val();

    if ((email.match(/^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) && (tel.match(/^\+[73][0-9]{9,11}$/)) && (uname.match(/^[A-Я][а-я]+\s[A-Я][а-я]+\s[A-Я][а-я]+$/))) 
    {
        $("#btn").prop("disabled", false) } else { $("#btn").prop("disabled", true)
    };
    
}

