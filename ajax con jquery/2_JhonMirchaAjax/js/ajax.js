(()=>{
     const xhr = new XMLHttpRequest() ,
     $xhr = document.getElementById('xhr'),
     $fragmento = document.createDocumentFragment(); // todas las variables  con signo dolar hacen referencia a elementos del dom

     xhr.addEventListener("readystatechange", e=>{
        if(xhr.readyState === 4){
             if(xhr.status>=200 && xhr.status<300){
                 console.log('exito');
                let json =JSON.parse(xhr.responseText);
                //console.log(json);
                json.forEach(element => {
                const $li = document.createElement("li");
                 $li.innerHTML= `${element.name}---${element.email}---${element.phone}`;
                $fragmento.appendChild($li);
               }); // forEach
               $xhr.appendChild($fragmento);
             }
             else{
                 
                let message = (xhr.statusText==="")?'a ocurrido un error' : xhr.statusText;
                //console.log(`error:`);
                //console.log(xhr);
                $xhr.innerHTML =`Error: ${xhr.status} ${message} por favor contactese con cgcet `;

             }
        } // end if

     }); // cuando exista algun cambio de estado  llamar a la callback
     console.log('esto se ejecuta igual');


     //xhr.open("GET","https://jsonplaceholder.typicode.com/users");
      xhr.open("GET","json/users.json")
     xhr.send();
})();

/** autoejecutable api fetch **/
(()=>{
      const $fetch = document.getElementById('fetchApi'),
            $fragmento = document.createDocumentFragment(); // todas las variables  con signo dolar hacen referencia a elementos del dom
      fetch("https://jsonplaceholder.typicode.com/users"
      ).then(
        (respuestaServidor)=>{
                /* respuestaServidor.blob()  devuelve formato de blob*/
                /* respuestaServidor.text()   devuelve formato texto*/
            return respuestaServidor.ok ? respuestaServidor.json() : Promise.reject(respuestaServidor); //json
         }    
    ).then(
        json => {            
                json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML= `${element.name}---${element.email}---${element.phone}`;
                $fragmento.appendChild($li);
                });
                $fetch.appendChild($fragmento);
        }
    ).catch(
        (errorServidor) =>{
            let message = errorServidor.statusText||'a ocurrido un error';
            $fetch.innerHTML = `Error ${errorServidor.status} ${message}`;
        }
    ).finally(
       ()  => console.log("esto se ejecutara independientemente del resultado de la promesa fetch")       
    );
})();


(()=>{

    const $jquery = document.getElementById('jquery'),
    $fragmento = document.createDocumentFragment();
 // Assign handlers immediately after making the request,
// and remember the jqXHR object for this request
 $.ajax( "https://jsonplaceholder.typicode.com/users" )
       .done(function(data) {
                data.forEach(element => {
                    const $li = document.createElement("li");
                    $li.innerHTML= `${element.name}---${element.email}---${element.phone}`;
                    $fragmento.appendChild($li);
                });
                 $jquery.appendChild($fragmento);
            })
        .fail(function() {
                         alert( "error" );
            })
         .always(function() {
                         alert( "complete" );
            });
})();
