const apiUrl = "https://jsonplaceholder.typicode.com/posts"; // Замените на свой API

// Получение данных из API
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Ошибка при запросе.");
        const data = await response.json();
        console.log("Данные API:", data); // Отобразите в консоли или на странице
        document.getElementById("output").innerText = JSON.stringify(data[0], null, 2);
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

// Добавляем обработчик кнопки
document.getElementById("fetch-button").addEventListener("click", fetchData);
