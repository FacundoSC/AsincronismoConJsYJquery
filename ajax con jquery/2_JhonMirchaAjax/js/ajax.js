(()=>{
    const xhr = new XMLHttpRequest() ,
     $xhr = document.getElementById('xhr'),
     $fragmento = document.createDocumentFragment(); // todas las variables  con signo dolar hacen referencia a elementos del dom

     xhr.addEventListener("readystatechange", e=>{

        if(xhr.readyState === 4){
             if(xhr.status>=200 && xhr.status<300){
                 console.log('exito');
                 console.log(xhr.responseText);
                let json =JSON.parse(xhr.responseText);
                console.log(json);
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
                $xhr.innerHTML =`Error: ${xhr.status} ${xhr.message} por favor contactese con cgcet `;

             }
        }

     }); // cuando exista algun cambio de estado  llamar a la callback


     //xhr.open("GET","https://jsonplaceholder.typicode.com/users");
      xhr.open("GET","json/users.json")
     xhr.send();
})();




function subirTransferencia(identificador) {
    const xhr = new XMLHttpRequest(); // creo el elemento xhr

    xhr.addEventListener("readystatechange", e => {

        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('exito');
                console.log(xhr.responseText);
                let json = JSON.parse(xhr.responseText);
                console.log(json);
                json.forEach(element => {
                    const $li = document.createElement("li");
                    $li.innerHTML = `${element.name}---${element.email}---${element.phone}`;
                }); // forEach


            }
            else {

                let message = (xhr.statusText === "") ? 'a ocurrido un error' : xhr.statusText;
                //console.log(`error:`);
                //console.log(xhr);

            }
        }

    }); // cuando exista algun cambio de estado  llamar a la callback

    let url = @Url.Action("Transferencia", "Certificaciones", new { id = "param-id" }); // seteo la url
    url = url.replace("param-id", identificador); // modifico la url con el valor de la transferencia.

    xhr.open("GET", "@Url.Action("Transferencia", "Certificaciones", new {id = 1235 })");
    xhr.send();
} // funcion para subir  los comprobantes  y las transferencias.