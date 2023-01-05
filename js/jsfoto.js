window.onload = function() { //скрипт выполнился после загрузки страницы
    let fotos = new Array(15);
        fotos[0]="./img/heand.jpg";
        fotos[1]="./img/room.jpg";
        fotos[2]="./img/girl.jpg";
        fotos[3]="./img/house.jpg";
        fotos[4]="./img/book.jpg";
        fotos[5]="./img/rain.jpg";
        fotos[6]="./img/window.jpg";
        fotos[7]="./img/dog.jpg";
        fotos[8]="./img/sheep.jpg";
        fotos[9]="./img/dour.jpg";
        fotos[10]="./img/cow.jpg";
        fotos[11]="./img/grass.jpg";
        fotos[12]="./img/milka.jpg";
        fotos[13]="./img/wilage.jpg";
        fotos[14]="./img/pirs.jpg";
    
    let titles = new Array(15);
        titles[0]="какие-то руки";
        titles[1]="комната, выходящая на солнечную сторону";
        titles[2]="бежит куда-то";
        titles[3]="ну прям голден ауер";
        titles[4]="хотела бы я прочитать столько книг";
        titles[5]="а ведь кто-то только что помыл машину";
        titles[6]="у меня вид на детскую площадку";
        titles[7]="пёсель";
        titles[8]="интересно, о чем думает овечка";
        titles[9]="кажется тут нужен капитальный ремонт";
        titles[10]="вы коровок видете? а они есть";
        titles[11]="просто травка";
        titles[12]="в день корова может давать до 20 литров молока";
        titles[13]="неплохое место для отдыха";
        titles[14]="я не умею плавать";

    let text = new Array(15);
        text[0]="Руки";
        text[1]="Комната";
        text[2]="Девушка";
        text[3]="Дом";
        text[4]="Книги";
        text[5]="Дождь";
        text[6]="Окно";
        text[7]="Собака";
        text[8]="Овечки";
        text[9]="Дверь";
        text[10]="Коровки";
        text[11]="Луг";
        text[12]="Милка";
        text[13]="Деревня";
        text[14]="Пирс";


    var all = document.createElement("div");

    var m = document.createElement("div");

        for (let i = 0; i < 15; i++) 
        {
            var d = document.createElement("div");
            var img = document.createElement("img");
            img.id = 'myImg';
            var word = document.createElement("h3");
            
            var elemText = document.createTextNode(text[i]);
            
            d.classList.add('foto');
            img.src = fotos[i];
            img.title = titles[i];

            img.onclick = function(){

                var modal = document.createElement("div");
                modal.id = 'myModal';
                modal.classList.add('modal');

                var close = document.createElement("span");
                close.classList.add('close');
                close.innerHTML = "&times";

                var modalContent = document.createElement("img");
                modalContent.id ="img01";
                modalContent.title = titles[i];
                modalContent.classList.add('modal-content');

             //--------------------    подпись и стрелочки  ------------------

                var write = document.createElement("div"); 



                var caption = document.createElement("span");
                caption.id = 'caption';
                caption.innerText = text[i];
                caption.classList.add('caption');

                write.appendChild(caption);



                var prev = document.createElement("span");
                prev.id = "prev";
                prev.innerText = "🡠";
                prev.classList.add('prevIcon');
                write.appendChild(prev);



                var next = document.createElement("span");
                next.id = "next";
                next.innerText = "🡢";
                next.classList.add('nextIcon');
                write.appendChild(next);


                modal.style.display = "block";
                modalContent.src = this.src;

                
                
                //-----------------карусель-----------------
                
                
                    next.addEventListener('click', function (){
            
                        let nfoto = fotos.indexOf("." + modalContent.src.slice(21));
                        
                        //-----------------вправо-------------------
                        if(nfoto < fotos.length-1){

                            console.log(fotos.indexOf(nfoto));

                            caption.remove();
                            next.remove();
                            prev.remove();
                            modalContent.remove();

                            modalContent.src = fotos[nfoto+1];
                            modalContent.classList.add('modal-content');
                            modalContent.title = titles[nfoto+1];

                            caption.innerText = text[nfoto+1];
                            caption.classList.add('caption');
                            write.appendChild(caption);

                            prev.innerText = "🡠";
                            prev.classList.add('prevIcon');
                            write.appendChild(prev);

                            next.innerText = "🡢";
                            next.classList.add('nextIcon');
                            write.appendChild(next);
                            
                            modal.appendChild(modalContent);
                            modal.appendChild(write);
                        }
                        else{
                            if(nfoto == fotos.length-1){

                                caption.remove();
                                next.remove();
                                prev.remove();
                                modalContent.remove();
    
                                modalContent.src = fotos[0];
                                modalContent.classList.add('modal-content');
                                modalContent.title = titles[0];
    
                                caption.innerText = text[0];
                                caption.classList.add('caption');
                                write.appendChild(caption);
    
                                prev.innerText = "🡠";
                                prev.classList.add('prevIcon');
                                write.appendChild(prev);
    
                                next.innerText = "🡢";
                                next.classList.add('nextIcon');
                                write.appendChild(next);
                                
                                modal.appendChild(modalContent);
                                modal.appendChild(write);
                            }
                        }
                        
                    });



                    //-----------------влево-------------------
                    prev.addEventListener('click', function (){
            
                        let nfoto = fotos.indexOf("." + modalContent.src.slice(21));
                        
                        if(nfoto == 0){

                            caption.remove();
                            next.remove();
                            prev.remove();
                            modalContent.remove();

                            modalContent.src = fotos[14];
                            modalContent.classList.add('modal-content');
                            modalContent.title = titles[14];

                            caption.innerText = text[14];
                            caption.classList.add('caption');
                            write.appendChild(caption);

                            prev.innerText = "🡠";
                            prev.classList.add('prevIcon');
                            write.appendChild(prev);

                            next.innerText = "🡢";
                            next.classList.add('nextIcon');
                            write.appendChild(next);
                            
                            modal.appendChild(modalContent);
                            modal.appendChild(write);
                        }

                        else{
                            if(nfoto < fotos.length){

                                caption.remove();
                                next.remove();
                                prev.remove();
                                modalContent.remove();
    
                                modalContent.src = fotos[nfoto-1];
                                modalContent.classList.add('modal-content');
                                modalContent.title = titles[nfoto-1];
    
                                caption.innerText = text[nfoto-1];
                                caption.classList.add('caption');
                                write.appendChild(caption);
    
                                prev.innerText = "🡠";
                                prev.classList.add('prevIcon');
                                write.appendChild(prev);
    
                                next.innerText = "🡢";
                                next.classList.add('nextIcon');
                                write.appendChild(next);
                                
                                modal.appendChild(modalContent);
                                modal.appendChild(write);
    
                                console.log(nfoto);
                            }
                        }
                        
                    });

                close.onclick = function() {
                modal.style.display = "none";
                }
                


                modal.appendChild(modalContent);

                
                modal.appendChild(write);

            
                modal.appendChild(close);
                m.appendChild(modal);

            }

            
            word.appendChild(elemText);
            d.appendChild(img);
            d.appendChild(word);
            all.appendChild(d);

        }
        
    all.classList.add('col-md-4');
    document.body.appendChild(all); 

    document.body.appendChild(m); 

};


