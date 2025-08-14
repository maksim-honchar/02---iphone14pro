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


const translations = {
    "uk": {
        "whats_new": "Що нового",
        "color": "Колір",
        "order": "Замовити",
        "select": "ВИБРАТИ",
        "whats_new_title": "ЩО НОВОГО",
        "what-new__para-1": "Всі моделі оснащені однокристальною системою A16 Bionic, 48-мегапіксельною основною камерою і екранами ProMotion із захистом Ceramic Shield і частотним діапазоном 1 — 120 Гц, а також прискореною пам'яттю LPDDR5. Дизайн лінійки оновлено, на фронтальній панелі смартфонів два вирізи.",
        "what-new__para-2": "Всі iPhone 14 в США будуть продаватися без лотка для SIM-карт: виробник заявляє, щовдосконалена технологія eSIM дозволить перенести старі електронні сім-карти на новісмартфони.",
        "what-new__para-3": "Оновлено фронтальну камеру (вона оснащена автофокусом і швидше розпізнає користувача в умовах недостатньої освітленості) і сенсор основної камери.",
        "what-new__para-4": "iPhone 14 Pro вийшов у новому дизайні — без фірмового «чубчика». Також в асортименті з'явився новий колір. У смартфоні, на відміну від «звичайних» 14-х айфонів, встановлений процесор A16 Bionic, який може за секунду виконувати 4 трлн операцій з фото.",
        "color_title": "ОБЕРИ СВІЙ КОЛІР",
        "contacts__title": "ХОЧЕШ IPHONE 14 PRO?",
        "contacts__subtext": "Найближчим часом наш менеджер зв'яжеться з Вами",
        "contacts__btn": "ЗАМОВИТИ",
        "footer_politics": "Політика конфіденційності"
    },
    "en": {
        "whats_new": "What's new",
        "color": "Color",
        "order": "Order",
        "select": "SELECT",
        "whats_new_title": "WHAT'S NEW",
        "what-new__para-1": "All models are equipped with a single-chip A16 Bionic system, a 48-megapixel main camera and ProMotion screens with Ceramic Shield protection and a frequency range of 1 - 120 Hz, as well as accelerated LPDDR5 memory. The design of the line has been updated, there are two cutouts on the front panel of smartphones.",
        "what-new__para-2": "All iPhone 14s in the US will be sold without a SIM card tray: the manufacturer claims that advanced eSIM technology will allow you to transfer old electronic SIM cards to new smartphones.",
        "what-new__para-3": "The front camera has been updated (it is equipped with autofocus and recognizes the user faster in low light conditions) and the main camera sensor.",
        "what-new__para-4": "The iPhone 14 Pro has a new design — without the signature 'bangs.' A new color has also appeared in the range. The smartphone, unlike the 'regular' 14 iPhones, has an A16 Bionic processor, which can perform 4 trillion photo operations per second.",
        "color_title": "CHOOSE YOUR COLOR",
        "contacts__title": "DO YOU WANT AN IPHONE 14 PRO?",
        "contacts__subtext": "Our manager will contact you shortly.",
        "contacts__btn": "ORDER",
        "footer_politics": "Privacy Policy"
    }
}

function enRules(language) {
    const subnames = document.querySelectorAll(".color__subname");
    const textInput = document.querySelector('input[type="text"]');
    const telInput = document.querySelector('input[type="tel"]');

    if (language === "en") {
        subnames.forEach(element => element.hidden = true)
        textInput.placeholder = "Your name";
        telInput.placeholder = "Phone number";
    } else {
        subnames.forEach(element => element.hidden = false)
        textInput.placeholder = "Ваше ім'я";
        telInput.placeholder = "Номер телефону";
    }
}

function setLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    })

    enRules(lang)
}


const langToggleCheckbox = document.getElementById('lang-toggle-checkbox');

langToggleCheckbox.addEventListener('change', () => {
    if (langToggleCheckbox.checked) {
        // console.log('Мова переключена на англійську.');
        // Тут ваша логіка для зміни мови
        setLanguage("en")
    } else {
        // console.log('Мова переключена на українську.');
        // Тут ваша логіка для зміни мови
        setLanguage("uk")
    }
});