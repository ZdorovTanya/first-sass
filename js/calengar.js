
wrapper = document.querySelector(".wrapper");

var openCalendarFlag = false;
var header = document.createElement("header");

var currentDate = document.createElement("p");
currentDate.classList.add("current-date");

var iconChevron = document.createElement("div");
iconChevron.classList.add("icons");

header.appendChild(currentDate);
header.appendChild(iconChevron);

var calendar = document.createElement("div");
calendar.classList.add("calendar");

var weekTag = document.createElement("ul");
var daysTag = document.createElement("ul");
weekTag.classList.add("weeks");
daysTag.classList.add("days");

calendar.appendChild(weekTag);
calendar.appendChild(daysTag);


let date = new Date(),
currYear = date.getFullYear(), 
currMonth = date.getMonth();

const months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const weekday = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

function renderCalendar() {
    var weekLi;
    let firstDayofMonth = new Date (currYear, currMonth, 0).getDay(), // порядковый номер дня недели указанной даты по местному времени, где 0 соответствует воскресенью
    lastDayofLastMonth = new Date (currYear, currMonth, 0).getDate(), 
    lastDateofMonth = new Date (currYear, currMonth + 1, 0).getDate();//последнее число месяца
    let liTag = "";

    for (let i=firstDayofMonth; i>0; i--){
        liTag += `<li class="inactive">${lastDayofLastMonth - i + 1}</li>`; 
    }


    for (let i=1; i <= lastDateofMonth; i++){
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "otherDays" ;
        liTag += `<li class="${isToday}">${i}</li>`;  
    }

    calendar.appendChild(daysTag);
    daysTag.innerHTML = liTag;

    let daysInThisMonths = daysTag.getElementsByClassName("otherDays");
    for (let i=0; i<daysInThisMonths.length; i++){
        daysInThisMonths[i].addEventListener("click", function(e){
            document.getElementById("bday").value = this.innerHTML + "." + (Number(currMonth) + Number(1)) + "." + currYear;
        });
    }

    currentDate.innerHTML = `${months[currMonth]} ${currYear}`;

    let iconLeft = document.createElement("span");
    iconLeft.innerText= "chevron_left";
    iconLeft.className = "material-symbols-rounded";
    iconLeft.id = "prev";
    iconChevron.appendChild(iconLeft);

    iconLeft.addEventListener("click", () => {
        currMonth = (iconLeft.id === "prev") ? currMonth - 1 : currMonth +1;

        if(currMonth < 0 || currMonth > 11){
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }

        document.getElementsByClassName("weeks")[0].innerHTML="";
        document.getElementsByClassName("icons")[0].innerHTML="";

        
        // удаление дней недели
        let del = weekTag.childNodes.length;
        for(var i=del-1; i>=0; i--){
            weekTag.childNodes[i].remove();
        }

        renderCalendar();
    });
    
    let iconRight = document.createElement("span");
    iconRight.innerText= "chevron_right";
    iconRight.className = "material-symbols-rounded";
    iconRight.id = "next";
    iconChevron.appendChild(iconRight);

    iconRight.addEventListener("click", () => {
        currMonth = (iconRight.id === "prev") ? currMonth - 1 : currMonth +1;

        if(currMonth < 0 || currMonth > 11){
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        } 
        
        document.getElementsByClassName("weeks")[0].innerHTML="";
        document.getElementsByClassName("icons")[0].innerHTML="";
        
        // удаление дней недели
        let del = weekTag.childNodes.length;
        for(var i=del-1; i>=0; i--){
            weekTag.childNodes[i].remove();
        }

        renderCalendar();
    });

    // добавление крестика
    let iconCross = document.createElement("span");
        iconCross.innerHTML= "&times";
        iconCross.className = "material-symbols-rounded";
        iconCross.style.alignItems = "center";
        iconChevron.appendChild(iconCross);

    // закрытие (удаление) при нажатии на крестик
    iconCross.addEventListener("click", function(){
        let del = wrapper.childNodes.length;
        let delHeader = iconChevron.childNodes.length;
        let delByCross = weekTag.childNodes.length;
        openCalendarFlag = false;
        
        for(var i=delHeader-1; i>=0; i--){
            console.log(header.childNodes);
            iconChevron.childNodes[i].remove();
        }

        for(var i=delByCross-1; i>=0; i--){
            weekTag.childNodes[i].remove();
        }

        for(var i=del-1; i>=0; i--){
            wrapper.childNodes[i].remove();
        }
    });

    for (let i=0; i<7; i++){
        weekLi = document.createElement("li");
        weekLi.innerText = `${weekday[i]}`;
        weekTag.appendChild(weekLi);
    }

    header.appendChild(currentDate);
    header.appendChild(iconChevron);
    
    calendar.appendChild(weekTag);
    calendar.appendChild(daysTag);

    wrapper.appendChild(header);
    wrapper.appendChild(calendar);

}


function help(){
    var tt = document.getElementById("bday");
    tt.addEventListener("focus", function(e){
        if (!openCalendarFlag){
            renderCalendar();
            openCalendarFlag = true;
        }
    });

    function del(){
        var del = wrapper.childNodes.length;

        for(var i=del-1; i>=0; i--){
            wrapper.childNodes[i].remove();
        }
    }
}
help();


