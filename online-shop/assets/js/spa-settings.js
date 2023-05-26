const information = [
    {
        url: "./assets/pages/components/header.html",
        include: '.wrapper'
    },
    {
        url: "./assets/pages/components/main.html",
        include: '.include-main'
    },
    {
        url: "./assets/pages/components/category.html",
        include: '.include-category'
    },
    {
        url: "./assets/pages/components/card.html",
        include: '.include-cards'
    },
    {
        url: "./assets/pages/components/footer.html",
        include: '.include-footer'
    },
    {
        url: "./assets/pages/cart.html",
        include: '.basket-include'
    },
    {
        url: "./assets/pages/order.html",
        include: '.order-include'
    },
    {
        url: "./assets/pages/product.html",
        include: '.product-include'
    },


]

information.forEach(item => {

    fetch(item.url)
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(item.include).innerHTML = data
            switch (item.include) {
                case ".include-cards":
                    setCards(cards)
                    break
                case ".basket-include":
                    setCards()
                    break
                default:
                    break
            }
        })
})




