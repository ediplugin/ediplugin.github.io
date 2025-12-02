module.exports = {
    id: "pricing",
    background: "bg-light",
    title: {
        text: "Фиксированная цена для всех",
        color: "text-dark"
    },
    subtitle: {
        text: "Никакой сложной математики",
        color: "text-primary-emphasis"
    },
    plans: [
        {
            id: "main",
            name: "Настройка \"под ключ\"",
            price: "7000 ₽<span class=\"fs-6 text\"> разово</span>",
            badge: "",
            features: [
                "Настройка синхронизации \"под ключ\"",
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