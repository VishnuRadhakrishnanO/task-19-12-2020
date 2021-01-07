var div_Container = document.createElement ('div') ;
div_Container.setAttribute("id", "container");
document.body.append(div_Container);



var div_main = document.createElement ('div') ;
div_main.setAttribute("id", "main");
div_Container.appendChild(div_main);


var div_Msg1 = document.createElement ('div') ;
div_Msg1.setAttribute("id", "Msg1");
div_main.appendChild(div_Msg1);

var para_msg1 = document.createElement ('p') ;
para_msg1.setAttribute("id", "para_msg1");
div_Msg1.appendChild(para_msg1)
para_msg1.innerText = "A NEW BEGINNING STARTS IN"


div_count_msg = document.createElement('div');
div_count_msg.setAttribute("id", "count_msg");
div_main.appendChild(div_count_msg);

var para_msg2 = document.createElement ('p') ;
para_msg2.setAttribute("id", "para_msg2");
div_count_msg.appendChild(para_msg2)
para_msg2.innerText = "10"


var div_Msg2 = document.createElement ('div') ;
div_Msg2.setAttribute("id", "Msg2");
div_main.appendChild(div_Msg2);

var para_msg3 = document.createElement ('p') ;
para_msg3.setAttribute("id", "para_msg3");
div_Msg2.appendChild(para_msg3)
para_msg3.innerText = "The future is your story to write… make next year the best one yet."




let timer = document.getElementById("para_msg2");
let Goodq = document.getElementById("para_msg3");

setTimeout(function(){ 
   
    timer.innerText ="9" 
setTimeout(function(){ 
    timer.innerText ="8"
    setTimeout(function(){ 
        timer.innerText ="7"
        setTimeout(function(){ 
            timer.innerText ="6"
            setTimeout(function(){ 
                timer.innerText ="5"
                setTimeout(function(){ 
                    timer.innerText ="4"
                    setTimeout(function(){ 
                        timer.innerText ="3"
                        setTimeout(function(){ 
                            timer.innerText ="2"
                            setTimeout(function(){ 
                                timer.innerText ="1"
                                setTimeout(function(){ 
                                    div_Container.setAttribute("id", "container1");
                                    para_msg1.innerText = "May this year bring peace"
                                    timer.innerText ="Happy New year"
                                    Goodq.innerText="The future is your story to write… make This year the best one."
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000); 
},1000);