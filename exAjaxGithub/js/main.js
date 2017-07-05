"use-strict";

var inputSearch = document.getElementById('inputNameSearch');
var buttonSearch = document.getElementById('buttonNameSearch');
var nameUser = document.getElementById('userName');
var photo = document.getElementById('userPhoto');
var numberRepositories = document.getElementById('userNumbersRepositories');
var request = new XMLHttpRequest();

function requestData() {

    request.open('GET', 'https://api.github.com/users/' + inputSearch.value, true); // use true to make the request async
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            nameUser.innerHTML = data.name;
            numberRepositories.innerHTML = data.public_repos;
            photo.innerHTML = '<img src="' + data.avatar_url + '">';
        } else {
            console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
        }
    };
    request.onerror = function() {
        console.log('Error al tratar de conectarse con el servidor');
    };
    request.send();
}
buttonSearch.addEventListener('click', requestData);
