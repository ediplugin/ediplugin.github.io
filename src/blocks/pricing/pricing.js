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
                "Полное логирование процесса",
                "Индикация процесса синхронизации"
            ],
            cta: "Установить плагин",
            ctaLink: "https://wordpress.org/plugins/e-commerce-data-interchange/",
            popular: false,
            featured: false
        },
        {
            id: "main",
            name: "Основной",
            price: "5000 ₽<span class=\"fs-6 text\">/ сайт</span>",
            badge: "Разумный выбор",
            features: [
                "Все опции тарифа \"Бесплатный\"",
                "Настройка синхронизации \"под ключ\"",
                "Гарантия на безошибочную синхронизацию",
                "Личная поддержка разработчика"
            ],
            cta: "Заказать настройку",
            ctaLink: "https://support.ediplugin.org/index.php?a=add&custom1=Заказать%20базовую%20настройку",
            popular: true,
            featured: true
        },
        {
            id: "individual",
            name: "Индивидуальный",
            price: "Договорная",
            features: [
                "Все опции тарифа \"Основной\"",
                "Индивидуальные условия настройки синхронизации",
                "Индивидуальные условия гарантии и обслуживание"
            ],
            cta: "Связаться с разработчиком",
            ctaLink: "https://support.ediplugin.org/index.php?a=add&custom1=Заказать%20индивидуальную%20настройку",
            popular: false,
            featured: false
        }
    ]
};