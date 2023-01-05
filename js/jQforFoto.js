$(document).ready(function(){
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


    var all = $('<div></div>');

    var m = $('<div></div>');

        for (let i = 0; i < 15; i++) 
        {
            var d = $('<div></div>');
            var img = $('<img></img>');
            img.id = 'myImg';
            var word = $('<h3></h3>');
            
            var elemText = text[i];
            
            d.addClass('foto');
            img.attr("src", fotos[i]);
            img.title = titles[i];

            img.click(function(){

                var modal = $('<div></div>');
                modal.id = 'myModal';
                modal.addClass('modal');

                var close = $('<span></span>');
                close.addClass('close');
                close.html("&times");

                var modalContent = $('<img></img>');
                modalContent.id ="img01";
                modalContent.title = titles[i];
                modalContent.addClass('modal-content');

             //--------------------    подпись и стрелочки  ------------------

                var write = $('<div></div>');



                var caption = $('<span></span>');
                caption.id = 'caption';
                caption.text(text[i]);
                caption.addClass('caption');

                write.append(caption);



                var prev = $('<span></span>');
                prev.id = "prev";
                prev.text("🡠");
                prev.addClass('prevIcon');
                write.append(prev);


                var next = $('<span></span>');
                next.id = "next";
                next.text("🡢");
                next.addClass('nextIcon');
                write.append(next);


                modal.css("display" , "block");
                modalContent.attr("src", this.src);

                
                
                //-----------------карусель-----------------
                
                
                    next.click(function (){

                        let nfoto = fotos.indexOf("." + modalContent.attr("src").substring(modalContent.attr("src").indexOf("/img")));
    
                        
                        //-----------------вправо-------------------
                        if(nfoto < fotos.length-1){

                            modalContent.remove();
                            
                            
                            modalContent.attr("src", fotos[nfoto+1]);
                            modalContent.addClass('modal-content');
                            modalContent.attr("title", titles[nfoto + 1]);

                            console.log(modalContent.attr("src"));
                            

                            caption.text(text[nfoto+1]);
                            caption.addClass('caption');

                            prev.addClass('prevIcon');

                            next.addClass('nextIcon');
                            
                            modal.append(modalContent);
                            modal.append(write);
                        }
                        else{
                            if(nfoto == fotos.length-1){

                                modalContent.remove();
    
                                modalContent.attr("src", fotos[0]);
                                modalContent.addClass('modal-content');
                                modalContent.attr("title", titles[0]);
    
                                caption.text(text[0]);
                                caption.addClass('caption');
    
                                prev.addClass('prevIcon');
                                write.append(prev);
    
                                next.addClass('nextIcon');
                                write.append(next);
                                
                                modal.append(modalContent);
                                modal.append(write);
                            }
                        }
                        
                    });



                    //-----------------влево-------------------
                    prev.on('click', function (){
            
                        let nfoto = fotos.indexOf("." + modalContent.attr("src").substring(modalContent.attr("src").indexOf("/img"))); 
                        

                        if(nfoto == 0){

                            modalContent.remove();

                            modalContent.attr("src", fotos[14]);
                            modalContent.addClass('modal-content');
                            modalContent.attr("title", titles[14]);

                            caption.text(text[14]);
                            caption.addClass('caption');

                            prev.addClass('prevIcon');
                            write.append(prev);

                            next.addClass('nextIcon');
                            write.append(next);
                            
                            modal.append(modalContent);
                            modal.append(write);
                        }
                        else{
                            if(nfoto <= fotos.length-1){

                                modalContent.remove();
                                
                                modalContent.attr("src", fotos[nfoto - 1]);
                                modalContent.addClass('modal-content');
                                modalContent.attr("title", titles[nfoto -1]);
    
                                console.log(modalContent.attr("src"));
                                
                                caption.text(text[nfoto-1]);
                                caption.addClass('caption');
    
                                prev.addClass('prevIcon');
    
                                next.addClass('nextIcon');
                                
                                modal.append(modalContent);
                                modal.append(write);
                            }
                        }
                        
                    });

                close.click(function() {
                modal.css("display" , "none");
                });
                


                modal.append(modalContent);

                
                modal.append(write);

            
                modal.append(close);
                m.append(modal);

            });

            
            word.append(elemText);
            d.append(img);
            d.append(word);
            all.append(d);

        }
        
    all.addClass('col-md-4');
    $("body").append(all); 

    $("body").append(m); 

})


