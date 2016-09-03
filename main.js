const sayHello = require('./say-hello');

require('./styles/main.css');
require('./styles/main.scss');

var imgElement = document.createElement('img');
imgElement.src = require('./images/new-image.png');
document.body.appendChild(imgElement);

sayHello('kit', document.querySelector('h2'));