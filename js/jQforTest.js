
function validate_form ( ){
    var uname = $("#Username");
    if (!fio(uname.val())) return false;

    var email = $("#UserEmail");
    if (!post(email.val())) return false;

    if (!check()) return false;

    if (!check_radio()) return false;

    var word = $("#word_amount");
    if (!text_area(word)) return false;
    
    return true;
}


function fio (uname){
    var valid = true;
    var id = $('#Username');

    if ( uname == "" )
    {
            alert ( "Пожалуйста заполните поле 'Фамилия Имя Отчество'." );
            id.focus();
            valid = false;
    }

    return valid;
}

function post (email){
    var valid = true;
    var id = $('#UserEmail');

    if ( email == "" )
    {
            alert ( "Пожалуйста заполните поле 'Email'." );
            id.focus();
            valid = false;
    }

    return valid;
}

function check (){
    var valid = false;
    
    if($("#vd").is(':checked')){
        valid = true;
    }
    else if($("#tk").is(':checked')){
        valid = true;
    }
    else if($("#io").is(':checked')){
        valid = true;
    }

    if(valid){

    }
    else{
        alert ("Выберите хотя бы один вариант ответа в первом вопросе.");
    }

    return valid;
}

function check_radio (){
    var valid = false;
    
    if($("#mother").is(':checked') || $("#volt").is(':checked') || $("#heand").is(':checked')){
        valid = true;
    }

    if(valid){

    }
    else{
        alert ("Выберите один вариант ответа во втором вопросе.");
    }

    return valid;
}

function text_area (word){
    var valid = true;

    if ( word.val() == "" )
    {
            alert ( "Пожалуйста заполните текстовое поле." );
            word.focus();
            valid = false;
    } else {

        var stringText = word.val().replace(/\n/," ").replace(/\W/gi," ").replace(/\s{2,}/gi," ").replace(/ $/,"").replace(/^ /,"");

        var text_array = stringText.split(" ");
        var count = text_array.length;

        if (count < 20) {
            alert ( "Введите не менее 20 слов." );
            word.focus();
            return false;
        }
        return true;
    }


    return valid;
}

