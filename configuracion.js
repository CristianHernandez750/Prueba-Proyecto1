
var newTag = document.createElement('p');

var newText = document.createTextNode('I am a new text');

newTag.appendChild(newText);

var contenedor = document.getElementsByClassName('contenedor')[0];

contenedor.appendChild(newTag);