
const months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const weekday = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
wrapper = $(".wrapper");

var openCalendarFlag = false;
var header = $("<header class='sus'></header>");

var selectMonth = $('<select class="best_month_ever_like_Mac_Miller"></select>');
var selectYear = $('<select class="christmas"></select>');

//добавление выбора месяцев
for (let i=1; i<13; i++){
    selectMonth.append($('<option id="selmon" value=' + i + '>' + months[i-1] + '</option>'));
};
//выбор текущего месяца
selectMonth.val(new Date().getMonth()+1);

//добавление выбора года
for (let i=2022; i>0; i--){
    selectYear.append($('<option value=' + i + '>' + i + '</option>'));
};

// var iconChevron = $('<div></div>');
// iconChevron.addClass("icons");
// header.append(iconChevron);
var iconCross = $('<span></span>');

var calendar = $('<div></div>');
calendar.addClass("calendar");

var weekTag = $('<ul></ul>');
var daysTag = $('<ul></ul>');
weekTag.addClass("weeks");
daysTag.addClass("days");

calendar.append(weekTag);
calendar.append(daysTag);

var openCalendarFlag = false;

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth()+1;


//функция для создания элементов управления календарем
function createElementsForCalendar(){
    
    //изменение календаря при смене месяца
    selectMonth.change(function(e){
        currMonth = selectMonth.val();
        renderCalendar();
    });

    //изменение календаря при смене года
    selectYear.change(function(e){
        currYear = selectYear.val();
        renderCalendar();
    });

    header.append(selectMonth);
    header.append(selectYear);


    // let iconLeft = $('<span></span>');

    // iconLeft.html("&lsaquo;");
    // iconLeft.className = "material-symbols-rounded"; ///?????????????
    // iconLeft.id = "prev";
    // iconChevron.append(iconLeft);

    // iconLeft.on("click", () => {
    //     currMonth = (iconLeft.id === "prev") ? currMonth - 1 : currMonth +1;

    //     if(currMonth < 0 || currMonth > 11){
    //         date = new Date(currYear, currMonth);
    //         currYear = date.getFullYear();
    //         currMonth = date.getMonth();
    //     } else {
    //         date = new Date();
    //     }

    //     $(".weeks").html("");
    //     $(".icons").html("");

    //     weekTag.children().remove();

    //     renderCalendar();
    // });

    // let iconRight = $('<span></span>');
    // iconRight.html("&rsaquo;");
    // iconRight.className = "material-symbols-rounded";
    // iconRight.id = "next";
    // iconChevron.append(iconRight);

    // iconRight.on("click", () => {
    //     currMonth = (iconRight.id === "prev") ? currMonth - 1 : currMonth +1;

    //     if(currMonth < 0 || currMonth > 11){
    //         date = new Date(currYear, currMonth);
    //         currYear = date.getFullYear();
    //         currMonth = date.getMonth();
    //     } else {
    //         date = new Date();
    //     } 
        
    //     $(".weeks").html("");
    //     $(".icons").html("");
        
    //     // удаление дней недели
    //    weekTag.children().remove();

    //     renderCalendar();
    // });


    // добавление крестика
   
    iconCross.html("&times");
    iconCross.className = "material-symbols-rounded";
    header.append(iconCross);

    // закрытие (удаление) при нажатии на крестик
    iconCross.click(function(){
        openCalendarFlag = false;
        $('.sus').remove();
        $(weekTag).children().remove();
        $(".wrapper").children().remove();
        $(".calendar").remove();
        this.remove();
    });

    for (let i=0; i<7; i++){
        weekLi = $('<li></li>');
        weekLi.text(`${weekday[i]}`);
        weekTag.append(weekLi);
    }
    
    renderCalendar();
}

function renderCalendar() {
    let firstDayofMonth = new Date (currYear, currMonth-1, 0).getDay(), // порядковый номер дня недели указанной даты по местному времени, где 0 соответствует воскресенью
    lastDayofLastMonth = new Date (currYear, currMonth-1, 0).getDate(), 
    lastDateofMonth = new Date (currYear, currMonth, 0).getDate(); //последнее число месяца
    
    let liTag = "";
    daysTag.children().removeClass();

    if (firstDayofMonth == 0) firstDayofMonth = 6;
    for (let i=firstDayofMonth; i>0; i--){
        liTag += `<li class="inactive">${lastDayofLastMonth - i + 1}</li>`; 
    }

    for (let i=1; i <= lastDateofMonth; i++){
        let isToday = i === date.getDate() && currMonth-1 === new Date().getMonth() && Number(currYear) === new Date().getFullYear() ? "active" : "otherDays" ;
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    daysTag.html(liTag);
    
    calendar.append(weekTag);
    calendar.append(daysTag);

    wrapper.append(header);
    wrapper.append(calendar);

    let daysInThisMonths = $(".otherDays, .active"); //---------
    for (let i=0; i<daysInThisMonths.length; i++){
        $(daysInThisMonths[i]).click(function(e){
            $("#bday").val($(daysInThisMonths[i]).html() + "." + currMonth + "." + currYear);
        });
    }

}


function help(){
    $("#bday").focus (function(e){
        if (!openCalendarFlag){
            createElementsForCalendar();
            openCalendarFlag = true;
        }
    });
}

help();


