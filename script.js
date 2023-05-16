
const onLoad = () =>  {
    let position = 0;    
    let who = ["The dog ", "My grandma ", "His turtle ", "My bird "];
    let action = ["ate ","peed ","crushed ","broke "];
    let what = ["my homework ","the keys ","the car ","my phone "];
    let when = ["<br>before the class","<br>right in time","<br>when I finished","<br>during my lunch","<br>while I was praying"];
    let theExcuse = "";
    position = Math.floor(Math.random() * (who.length  ));
    theExcuse = theExcuse + who[position];
     position = Math.floor(Math.random() * (action.length ));
    theExcuse = theExcuse + action[position];
     position = Math.floor(Math.random() * (what.length ));
    theExcuse = theExcuse + what[position];
     position = Math.floor(Math.random() * (when.length ));
    theExcuse = theExcuse + when[position];
    return theExcuse;
 };

let elementModify = document.querySelector("#excuse");

elementModify.addEventListener('click', () =>{
     elementModify.innerHTML= onLoad() ;
});