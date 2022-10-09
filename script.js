let screen=document.getElementById('screen');
buttons= document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText=e.target.innerText;
        console.log('Button Text is', buttonText);
        if(buttonText == '='){
              try{
                screenValue=eval(screenValue);
                screen.value=screenValue;
            }catch(err){
                alert("Upar Wale se to daro BETEEE ")
            }

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
