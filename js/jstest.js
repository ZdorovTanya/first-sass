
function validate_form ( )
{
    var uname = document.contact_form.contact_name.value;
    if (!fio(uname)) return false;

    var email = document.contact_form.email_name.value;
    if (!post(email)) return false;

    if (!check()) return false;

    if (!check_radio()) return false;

    var word = document.contact_form.comment;
    if (!text_area(word)) return false;

    var textarea = document.contact_form.comment;
    if (!countWords(textarea)) return false;

    return true;
}


function fio (uname){
    var valid = true;
    var id = document.querySelector('#Username');

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
    var id = document.querySelector('#UserEmail');

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
    
    if(document.getElementById("vd").checked){
        valid = true;
    }
    else if(document.getElementById("tk").checked){
        valid = true;
    }
    else if(document.getElementById("io").checked){
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
    
    if(document.getElementById("mother").checked || document.getElementById("volt").checked ||document.getElementById("heand").checked){
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

    if ( word.value == "" )
    {
            alert ( "Пожалуйста заполните текстовое поле." );
            word.focus();
            valid = false;
    }

    return valid;
}

function countWords(textarea) {

    //const id = document.getElementById("#word_amount");

	if (textarea.value != 0 ) {

		var stringText = textarea.value.replace(/\n/," ").replace(/\W/gi," ").replace(/\s{2,}/gi," ").replace(/ $/,"").replace(/^ /,"");

		var text_array = stringText.split(" ");
		var count = text_array.length;

        if (count < 20) {
            alert ( "Введите не менее 20 слов." );
            textarea.focus();
            return false;
        }
        return true;
    }
}



