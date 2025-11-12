module.exports = {
    id: "pricing",
    background: "bg-light",
    title: {
        text: "Тарифные планы",
        color: "text-dark"
    },
    subtitle: {
        text: "Выберите подходящий тариф для вашего бизнеса",
        color: "text-primary-emphasis"
    },
    plans: [
        {
            id: "free",
            name: "Бесплатный",
            price: "0 ₽",
            features: [
                "Совместим со всеми конфигурациями 1С",
                "Работает на любом сайте",
                "Синхронизация каталога товаров",
                "Синхронизация заказов",
                "Полная синхронизация или только изменения",
                "Экономное использование ресурсов сервера",
                "Индикация процесса синхронизации"
            ],
            cta: "Установить плагин",
            ctaLink: "https://wordpress.org/plugins/e-commerce-data-interchange/",
            popular: false,
            featured: false
        },
        {
            id: "main",
            name: "Настройка \"под ключ\"",
            price: "<span class=\"fs-6 text\">от</span> 8000 ₽",
            badge: "Разумный выбор",
            features: [
                "Настройка синхронизации \"под ключ\"*",
                "Гарантия на безошибочную синхронизацию",
                "Личная поддержка разработчика",
                "Совместим со всеми конфигурациями 1С",
                "Работает на любом сайте",
                "Синхронизация каталога товаров",
                "Синхронизация заказов",
                "Полная синхронизация или только изменения",
                "Экономное использование ресурсов сервера",
                "Индикация процесса синхронизации",
            ],
            cta: "Заказать настройку",
            ctaLink: "https://support.ediplugin.org/index.php?a=add&custom1=Заказать%20настройку",
            popular: true,
            featured: true
        },
        {
            id: "individual",
            name: "Мониторинг синхронизации",
            price: "300 ₽<span class=\"fs-6 text\">/месяц</span> ",
            features: [
                "Ведение логов синхронизации",
                "Автоматическая отправка логов в Telegram",
            ],
            cta: "Заказать мониторинг",
            ctaLink: "https://support.ediplugin.org/index.php?a=add&custom1=Заказать%20мониторинг",
            popular: false,
            featured: false
        }
    ]
};