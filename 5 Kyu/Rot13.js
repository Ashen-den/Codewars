function rot13(message){
  return message.split('')
              .map(e=> e.charCodeAt())
              .map(e=> {if(e<65){
                          return String.fromCharCode(e)
                        } else if(e>96 && e<110){
                          return String.fromCharCode(122-Math.abs(13-(e-96)))
                        } else if (e>64 && e<77){
                          return String.fromCharCode(91-Math.abs(13-(e-65)))
                        } else if(e>64 && e<123){
                          return String.fromCharCode(e-13)
                        } 
                    }
               ).join('')
}