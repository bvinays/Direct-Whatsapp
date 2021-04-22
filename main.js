


function sendMessage(){
   const ccode=$('#country_list').get(0).value
   const mobnumber=$('#inputMobNum').get(0).value
   const message=$('#inputMessage').get(0).value
   $('#mobilenumberlength').get(0).innerText="You Entered "+mobnumber.length+" Digits"
if(detectMob()){
   var href="https://wa.me/"+ccode+mobnumber+"?text="+decodeURIComponent(message)
   $('a').get(0).href=href
        }
        else{
            var href="https://api.whatsapp.com/send/?phone="+ccode+mobnumber+"&text="+message+"&app_absent=0"
            $('a').get(0).href=href
            
        }


}

function detectMob() {
    return ( ( window.innerWidth <= 800 ));
  }
  

function resetform(){


}