const input = document.querySelector('.input');
const output = document.querySelector('.output');
const buttons = document.querySelectorAll('.button');
const light = document.querySelector('.fa-sun');
const dark = document.querySelector('.fa-moon');

const header = document.querySelector('.header');
const button_s = document.querySelectorAll('.buttons');

const specialchar=["+","-","*","/","%","."];



const Result=(e)=>{
    bValue=e.target.innerText;
    
    if (bValue === "=" && bValue !== " ") {
        try {
            // Replace expressions like "24% of 5000" with "24/100 * 5000"
            let expression = input.innerText.replace(/(\d+)%(\d+)/g, '($1/100)*$2');
            output.innerText = eval(expression);
        } catch {
            output.innerText = "Error";
        }
    }
    else if (bValue==="AC"){
        input.innerText="";
        output.innerText="";
    }
    else if(bValue=="del"){
        input.innerText=input.innerText.slice(0,-1);
    }
    else{
        if(specialchar.includes(bValue) && input.innerText==""){
            return;
    }
    input.innerText+=bValue;

}}



buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        Result(e);
    });
});


light.addEventListener('click',()=> {
    document.body.style.backgroundColor="#ffffff91";
    document.body.style.color="rgba(0, 0, 0, 0.795)";
    header.style.backgroundColor="rgba(255, 255, 255, 0.743)";
    header.style.color="black";

    button_s.forEach(button => {
        button.style.backgroundColor="white";  
        button.style.color="black";
    });


});

dark.addEventListener('click',()=>{
    document.body.style.color="#ffffff91";
    document.body.style.backgroundColor="rgba(0, 0, 0, 0.795)";
    header.style.color="white";
    header.style.backgroundColor="black";

    button_s.forEach(button => {
        button.style.backgroundColor="black";  
        button.style.color="white";
    });

});