//Acessando os elementos HTML...

//Acessando os Pixels da Imagem ...
var canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d'),

  //Cria a nova imagem aonde vamos manipular os pixels..
  image = new Image();
image.src = "bonito.jpg";


const aumenta_vermelho = function (val, index, array) {
  if ((index + 1) % 4 === 0) {
    let r = array[index - 3];
    let vermelho = r * 1.1;
    array[index - 3] = vermelho;
  }
}

const aumenta_verde = function (val, index, array) {
  if ((index + 1) % 4 === 0) {
    let g = array[index - 2];
    let verde = g * 1.1;
    array[index - 2] = verde;
  }
}

const aumenta_azul = function (val, index, array) {
  if ((index + 1) % 4 === 0) {
    let b = array[index - 1];
    let azul = b * 1.1;
    array[index - 1] = azul;
  }
}

const sepia = function (value, index, array) {
  if ((index + 1) % 4 === 0) {
    let r = array[index - 3];
    let g = array[index - 2];
    let b = array[index - 1];

    let novo_canal_vermelho = r * 0.393 + g * 0.769 + b * 0.189
    let novo_canal_verde = r * 0.349 + g * 0.686 + b * 0.168
    let novo_canal_azul = r * 0.272 + g * 0.534 + b * 0.131

    array[index - 3] = novo_canal_vermelho
    array[index - 2] = novo_canal_verde
    array[index - 1] = novo_canal_azul
  }
}

const troca_canais = function (value, index, array) {
  if ((index + 1) % 4 === 0) {
    let r = array[index - 3];
    let g = array[index - 2];
    let b = array[index - 1];

    array[index - 3] = g;
    array[index - 2] = b;
    array[index - 1] = r;
  }
}

const branco_e_preto = function (value, index, array) {
  if ((index + 1) % 4 == 0) {
    let r = array[index - 3];
    let g = array[index - 2];
    let b = array[index - 1];

    let soma = r + g + b;

    if (soma > 345) {
      array[index - 3] = 255;
      array[index - 2] = 255;
      array[index - 1] = 255;
    }

    else {
      array[index - 3] = 0;
      array[index - 2] = 0;
      array[index - 1] = 0;
    }
  }
}

const escala_cinza = function (value, index, array) {
  if ((index + 1) % 4 === 0) {
    let r = array[index - 3];
    let g = array[index - 2];
    let b = array[index - 1];

    let gray = r * 0.2126 + g * 0.7152 + b * 0.0722;

    array[index - 3] = gray;
    array[index - 2] = gray;
    array[index - 1] = gray;
  }
}

const negativo = function (val, index) {
  if ((index + 1) % 4 == 0) {
    return val;
  }
  else {
    return 255 - val;
  }
}

function Neg_Button_onclick() {
  var idata = context.getImageData(0, 0, canvas.width, canvas.height),
    negdata = idata.data.map(negativo);
  idata.data.set(negdata);
  context.putImageData(idata, 0, 0);
}


function Red_Button_onclick() {
  var idata = context.getImageData(0, 0, canvas.width, canvas.height);
  idata.data.map(aumenta_vermelho);
  context.putImageData(idata, 0, 0);
}

function Green_Button_onclick() {
  var idata = context.getImageData(0, 0, canvas.width, canvas.height);
  idata.data.map(aumenta_verde);
  context.putImageData(idata, 0, 0);
}

function Blue_Button_onclick() {
  var idata = context.getImageData(0, 0, canvas.width, canvas.height);
  idata.data.map(aumenta_azul);
  context.putImageData(idata, 0, 0);
}

function Gray_Button_onclick() {
  var idata = context.getImageData(0, 0, canvas.width, canvas.height);
  idata.data.map(escala_cinza);
  context.putImageData(idata, 0, 0);
}

function Sepia_Button_onclick() {
  var idata = context.getImageData(0, 0, canvas.width, canvas.height);
  idata.data.map(sepia);
  context.putImageData(idata, 0, 0);
}

function Swap_Button_onclick() {
  var idata = context.getImageData(0, 0, canvas.width, canvas.height);
  idata.data.map(troca_canais);
  context.putImageData(idata, 0, 0);
}


function Black_Button_onclick() {
  var idata = context.getImageData(0, 0, canvas.width, canvas.height);
  idata.data.map(branco_e_preto);
  context.putImageData(idata, 0, 0);
}

//Carrega os pixels da imagem original na nova imagem onde aplicaremos os filtros.
image.onload = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0, image.width, image.height, 0, 0, context.canvas.width, context.canvas.height);
}; 