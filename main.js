
function sendMessage(){
   const ccode=$('#country_list').get(0).value;
   const mobnumber=$('#inputMobNum').get(0).value;
   const message=$('#inputMessage').get(0).value;
   let fullnumber ='';
   console.log(mobnumber.includes('+'))
  if(mobnumber.includes('+')){
    fullnumber=mobnumber;
  }
  else{
    fullnumber=ccode+mobnumber
  }
   const href="https://api.whatsapp.com/send/?phone="+fullnumber+"&text="+message;
   window.location=href
}
 
function getDigits(){
    const mobnumber=$('#inputMobNum').get(0).value
    $('#mobilenumberlength').get(0).innerText="You Entered "+mobnumber.length+" Digits"
}

// function detectMob() {
//     return ( ( window.innerWidth <= 800 ));
//   }
  

function resetform(){
    $('#inputMessage').get(0).value=''
    $('#inputMobNum').get(0).value=''
    getDigits()
}