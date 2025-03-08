function loadScript(src) {
        return new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.type = "text/javascript";

          script.onload = () => {
            console.log(`Скрипт ${src} успешно загружен.`);
            resolve();
          };

          script.onerror = () => {
            console.error(`Ошибка загрузки скрипта ${src}.`);
            reject();
          };

          document.head.appendChild(script);
        });
      }

      // Обработчик нажатия на кнопку
      document.getElementById("crashButton").addEventListener("click", () => {
        // Путь к скрипту
        const scriptUrl = "./js/crash.js";

        // Загружаем скрипт
        loadScript(scriptUrl)
          .then(() => {
            console.log("Скрипт загружен и выполнен.");
          })
          .catch(() => {
            console.error("Произошла ошибка при загрузке скрипта.");
          });
      });
