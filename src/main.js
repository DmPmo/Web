// Контейнер постов - тег <main>...</main> в index.html (строка 17)
const postsContainer = document.getElementById("posts");
// Контейнер модалки - тег <div class="modal" id="modal">...</div> в index.html (строка 24)
const modal = document.getElementById("modal");
// Заголовок модалки - тег <h2 id="modal-title"></h2> в index.html (строка 26)
const modalTitle = document.getElementById("modal-title");
// Текст модалки - тег <p id="modal-text"></p> в index.html (строка 27)
const modalText = document.getElementById("modal-text");
// Кнопка закрытия модалки - тег <button id="closeModal">Закрыть</button> в index.html (строка 28)
const closeModal = document.getElementById("closeModal");
// Переключатель темы - тег <button id="themeToggle">Сменить тему</button> в index.html (строка 15)
const themeToggle = document.getElementById("themeToggle");

// массив контента постов
const posts = [
    { title: "Мой блог", text: "Блог о HTML, CSS И JS" },
    { title: "HTML", text: "HTML - это стандартный язык разметки для веб-страниц." },
    { title: "CSS", text: "CSS - это язык, который мы используем для создания HTML-документа. CSS описывает, как должны отображаться элементы HTML." },
    { title: "JS", text: "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили." }
];

// Генерация постов циклом for
for (let i = 0; i < posts.length; i++) {
    // Создаем div-контейнер для post'а
    const post = document.createElement("div");
    // Даем post'у класс "post" (public/style.css, строка 80)
    post.className = "post";
    // Устанавливаем заголовок и содержимое поста.
    post.innerHTML = `
        <h2>${posts[i].title}</h2>
        <!--  Если больше 30 символов, оставшееся заменяем на троеточие  -->
        <p>${posts[i].text.slice(0, 30)}...</p>
    `;
    // Вешаем на post обработку клика мышью
    post.addEventListener("click", () => {
        // При клике устанавливаем в заголовок модалки (строка 6) инфу из posts (строки 15-20)
        modalTitle.textContent = posts[i].title;
        // Также устанавливаем в текст модалки (строка 8) инфу из posts
        modalText.textContent = posts[i].text;
        // Меняем display:none на display:flex
        modal.style.display = "flex";
    });
    // Вставляем в контейнер постов созданный пост.
    postsContainer.appendChild(post);
}

// Закрытие модалки (по аналогии со строкой 35)
closeModal.addEventListener("click", () => {
    /*
     * Кнопка closeModal отображается только если у modal display:flex (строка 41)
     * Поэтому при нажатии на closeModal меняем у modal display на none
     */
    modal.style.display = "none";
});

/*
 * По большому счету, обработчики на строках 35 и 48 делают противоположные вещи.
 * Первый показывает модалку, второй удаляет. По идее, можно также очищать
 * modalText и modalTitle через null, но это не обязательно в данном случае
 */

// Смена темы
themeToggle.addEventListener("click", () => {
    // Если у body если класс dark, то удаляем его, иначе добавляем.
    document.body.classList.toggle("dark");
});