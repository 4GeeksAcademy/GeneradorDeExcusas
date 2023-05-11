
const onLoad = () =>  {
    let n = 0;    
    let who = ["The dog ", "My grandma ", "His turtle ", "My bird "];
    let action = ["ate ","peed ","crushed ","broke "];
    let what = ["my homework ","the keys ","the car ","my phone "];
    let when = ["<br>before the class","<br>right in time","<br>when I finished","<br>during my lunch","<br>while I was praying"];
    let TheExcuse = " ";
    n = Math.floor(Math.random() * (who.length - 1));
    TheExcuse = TheExcuse + who[n];
    n = Math.floor(Math.random() * (action.length - 1));
    TheExcuse = TheExcuse + action[n];
    n = Math.floor(Math.random() * (what.length - 1));
    TheExcuse = TheExcuse + what[n];
    n = Math.floor(Math.random() * (when.length - 1));
    TheExcuse = TheExcuse + when[n];

    return TheExcuse;
                    };

let elem = document.querySelector("#excuse");

elem.addEventListener('click', () =>{
     elem.innerHTML= onLoad() ;
});