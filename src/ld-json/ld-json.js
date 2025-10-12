// Общие данные для всех LD+JSON схем
module.exports = {
    // Базовый URL сайта
    siteUrl: "https://ediplugin.org",

    // Данные организации
    organization: {
        '@context': "https://schema.org",
        '@type': "Organization",
        name: "Александр Левашов",
        url: "https://ediplugin.org",
        logo: "https://ediplugin.org/images/logo-white-tiny.png",
        email: "support@ediplugin.org",
        telephone: "+7-959-100-9750",
        image: [
            "https://ediplugin.org/images/logo-white-tiny.png",
        ],
        address: {
            "@type": "PostalAddress",
            "addressCountry": "RU"
        },
        sameAs: [
            "https://t.me/+8ytFwrYGYdwzOTRi",
            "https://github.com/ediplugin",
            "https://wordpress.org/plugins/e-commerce-data-interchange/"
        ],
        contactPoint: [
            {
                "@type": "ContactPoint",
                contactType: "technical support",
                email: "support@ediplugin.org",
                telephone: "+7-959-100-9750",
                url: "https://t.me/+8ytFwrYGYdwzOTRi",
                availableLanguage: ["ru"]
            },
            {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "sales@ediplugin.org",
                telephone: "+7-959-100-9750",
                url: "https://t.me/+8ytFwrYGYdwzOTRi",
                availableLanguage: ["ru"]
            }
        ]
    },

    // Данные автора
    person: {
        '@context': "https://schema.org",
        '@type': "Person",
        name: "Александр Левашов",
        url: "https://ediplugin.org",
        jobTitle: "Разработчик EDI – Обмен данными между WooCommerce и 1С",
        email: "mailto:support@ediplugin.org",
        telephone: "+7-959-100-97-50",
        image: [
            "https://ediplugin.org/images/logo-white-tiny.png",
        ],
        address: {
            "@type": "PostalAddress",
            "addressCountry": "RU"
        },
        sameAs: [
            "https://t.me/+8ytFwrYGYdwzOTRi",
            "https://github.com/ediplugin",
            "https://wordpress.org/plugins/e-commerce-data-interchange/"
        ],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "technical support",
            email: "support@ediplugin.org",
            telephone: "+7-959-100-9750",
            url: "https://t.me/+8ytFwrYGYdwzOTRi",
            availableLanguage: ["ru"]
        }
    },

    // Общие данные сайта
    website: {
        url: "https://ediplugin.org",
        name: "EDI – Обмен данными между WooCommerce и 1С",
        description: "Плагин WordPress для автоматического обмена данными между WooCommerce и 1С: Предприятие",
        about: "Обмен данными между интернет-магазином на WooCommerce и системой учёта 1С",
        copyrightYear: "2025",
        inLanguage: "ru"
    },

    // Базовый элемент хлебных крошек
    breadcrumbBase: {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://ediplugin.org/"
    },

    // Данные об услуге
    service: {
        name: "Настройка синхронизации WooCommerce и 1С",
        url: "https://ediplugin.org/#pricing"
    }
};