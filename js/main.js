const btn = document.querySelector(".btn-menu");
const nav = document.querySelector(".header__nav");

btn.addEventListener("click", () => nav.classList.toggle("open-menu"));



// Отримуємо кнопку
const backToTopBtn = document.querySelector('.back-to-top-btn');

// Визначаємо висоту вікна перегляду
const viewportHeight = window.innerHeight;

// Встановлюємо поріг для появи кнопки, наприклад, 50% від висоти вікна
const threshold = viewportHeight * 0.5; // 50% від висоти вікна

// Додаємо обробник подій на скрол
window.addEventListener('scroll', () => {
    // Перевіряємо, чи прокручена сторінка за поріг
    if (window.scrollY > threshold) {
        // Якщо так, робимо кнопку видимою
        backToTopBtn.classList.remove('hidden');
    } else {
        // Якщо ні, приховуємо її
        backToTopBtn.classList.add('hidden');
    }
});


