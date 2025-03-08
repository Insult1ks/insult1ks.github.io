// Функция для загрузки локального скрипта
function loadLocalScript(src) {
  return new Promise((resolve, reject) => {
    // Создаем элемент <script>
    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";

    // Обработка успешной загрузки
    script.onload = () => {
      console.log(`Скрипт ${src} успешно загружен.`);
      resolve();
    };

    // Обработка ошибки
    script.onerror = () => {
      console.error(`Ошибка загрузки скрипта ${src}.`);
      reject();
    };

    // Добавляем скрипт в DOM
    document.head.appendChild(script);
  });
}

// Обработчик нажатия на кнопку
document.getElementById("loadScriptButton").addEventListener("click", () => {
  // Путь к локальному скрипту
  const scriptUrl = "./external-script.js"; // Укажите правильный путь к вашему скрипту

  // Загружаем скрипт
  loadLocalScript(scriptUrl)
    .then(() => {
      console.log("Скрипт загружен и выполнен.");
    })
    .catch(() => {
      console.error("Произошла ошибка при загрузке скрипта.");
    });
});
