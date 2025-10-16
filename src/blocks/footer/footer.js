module.exports = {
    id: "footer",
    background: "bg-dark bg-gradient",
    text_color: "text-light",
    link_color: "link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover",
    logo: {
        image: "/images/logo-white-tiny.png",
        alt: "EDI Plugin"
    },
    quick_links: {
        logo: [
            {
                title: "EDI - Обмен данными между WooCommerce и 1С",
                url: "/"
            }
        ],
        product: [
            {
                title: "Скачать плагин",
                url: "https://wordpress.org/plugins/e-commerce-data-interchange/"
            },
            {
                title: "Документация <span class=\"badge text-bg-info\">скоро</span>",
                url: "#"
            }
        ],
        support: [
            {
                title: "Политика конфиденциальности",
                url: "/privacy-policy/"
            },
            {
                title: "GitHub Issues",
                url: "https://github.com/ediplugin/e-commerce-data-interchange/issues"
            }
        ]
    }
};