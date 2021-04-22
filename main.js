


function sendMessage(){
   const ccode=$('#country_list').get(0).value
   const mobnumber=$('#inputMobNum').get(0).value
   const message=$('#inputMessage').get(0).value
   const href="https://web.whatsapp.com/send?phone="+ccode+mobnumber+"&text="+message
   $('a').get(0).action=href
}

function resetform(){


}