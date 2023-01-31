"use strict";


fetch('https://randomuser.me/api/')
  .then((res) => res.json())
  .then((data) => getData(data));


function getData(data){
  console.log(data.results);
  let nombreCompleto = data.results[0].name.title + ' ' +
                        data.results[0].name.first + ' ' +
                        data.results[0].name.last + '.';
  
  let url_foto_perfil = data.results[0].picture.large;
  let foto_perfil_html = `<img src="${url_foto_perfil}" >`;
  let localidad =  'Ciudad: '+data.results[0].location.city+'. País: '+data.results[0].location.country+'.';
  let edad =  'Edad: '+data.results[0].dob.age+'.';
  let email =  'Email: '+data.results[0].email+'.';
  let cel =  'Cel: '+data.results[0].cell+'.';



                        
  document.getElementById('nombre_apellido').innerText = nombreCompleto;
  document.getElementById('imagen_perfil').innerHTML = foto_perfil_html;
  document.getElementById('localidad').innerText = localidad;
  document.getElementById('edad').innerText = edad;
  document.getElementById('email').innerText = email;
  document.getElementById('cel').innerText = cel;





}

