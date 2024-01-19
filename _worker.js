export  default { async fetch ( request, env ) { let url = new URL (request. url ); if (url. pathname . startsWith ( '/' )) { // Modify the example.com below to your own node ip/ Domain name         url. hostname = "example.com" ; let new_request= new Request (url,request); return fetch (new_request);       } return env. ASSETS . fetch (request);     }   };
     
       
      
        

         
         

      

