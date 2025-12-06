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
            name: "Настройка лично автором плагина",
            price: "5000 ₽<span class=\"fs-6 text\"> разово</span>",
            originalPrice: "7000 ₽",
            badge: "Специальная новогодняя цена!",
            features: [
                "Настройка синхронизации <b>под ключ</b>",
                "Синхронизация каталога товаров",
                "<b>ЛЮБОЕ количество товаров</b>",
                "Синхронизация заказов",
                "Полная синхронизация или только изменения",
                "Совместим со <b>всеми конфигурациями 1С</b>",
                "Работает на <b>любом хостинге</b>",
                "Гарантия на <b>безошибочную</b> синхронизацию",
                "Личная поддержка от <b>автора плагина</b>",
            ],
            cta: "Заказать настройку",
            ctaLink: "https://support.ediplugin.org/index.php?a=add&custom1=Заказать%20настройку",
            popular: true,
            featured: true,
            promotion: {
                text: "Специальная новогодняя цена!",
                endDate: "Новогодняя цена до 14 января",
            }
        },
        {
            id: "individual",
            name: "Мониторинг синхронизации",
            price: "300 ₽<span class=\"fs-6 text\">/месяц</span> ",
            features: [
                "Ведение логов синхронизации",
                "Контроль ошибок 24/7",
                "Мгновенное уведомление в Telegram",
            ],
            cta: "Заказать мониторинг",
            ctaLink: "https://support.ediplugin.org/index.php?a=add&custom1=Заказать%20мониторинг",
            popular: false,
            featured: false
        }
    ]
};