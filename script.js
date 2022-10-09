let screen=document.getElementById('screen');
buttons= document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText=e.target.innerText;
        console.log('Button Text is', buttonText);
        if(buttonText == '='){
            screenValue=eval(screenValue);
            screen.value=screenValue;
//             screenValue='';

        }else
        if(buttonText == "AC"){
            screenValue="";
            screen.value=screenValue;

        }else{
            screenValue +=buttonText;
            screen.value=screenValue;
        }
    })
}
