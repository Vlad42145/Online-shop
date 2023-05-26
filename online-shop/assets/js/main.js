

let cards = [
    {
        img: "./assets/img/Scarf.png",
        title: "Scarf summer colection",
        price: 10
    },
    {
        img: "./assets/img/sneaker.jpg",
        title: "Sneaker summer colection",
        price: 20
    },
    {
        img: "./assets/img/clothes.jpg",
        title: "clothes summer colection",
        price: 50
    }
]

const setSize = (e) =>{
    // получаем все размеры со страницы
    let size_array = e.parentElement.querySelectorAll('p')
    // перебираем размеры по ондному
    size_array.forEach(item =>{
        // у всех размеров удаляем класс
        item.classList.remove('active')
    })
    e.classList.add('active')
}

const setColor = (e) =>{
    let change_color = e.parentElement.parentElement.querySelectorAll('.ellipse')
    change_color.forEach(item =>{
        item.classList.remove('active')
    })
    e.classList.add('active')
}



const setCards = (cards_array) =>{
    let cards_container = document.querySelector('.cards .container')
    cards_container.innerHTML = ''
    cards_array.forEach(card => {
        let html_card = 
        ` <div class="card">
        <div class="cover">
            <img src=${card.img} alt="">
            <div class="circle"></div>
        </div>
        <div class="card-content">
            <h4>${card.title}</h4>
            <p class="price">${card.price}</p>
        </div>
    </div>
    `
    cards_container.innerHTML += html_card
    })
}

const sortCards =(typeSort) =>{
    let cards_new =[]
    cards_new.push(...cards)
    switch(typeSort){
        case 'DOWN':
        cards_new.sort((a,b) =>{
        return b.price - a.price
    })  
    break;
    case 'UP':
        cards_new.sort((a,b) =>{
            return a.price - b.price
    })
    break
    default:
        break
     }
     setCards(cards_new)




    // cards.sort((a,b) =>{
    //     return b.price - a.price
    // })  
    }

// sortCards()


// let dirty_dishes = 10

// // ES 5

// function cleanDishes(dishes){
//     if (dishes > dirty_dishes)
//     console.log("У вас нет столько посуды")
// }
//     else{
//     let remainded_dishes = dirty_dishes - dishes
//     return remainded_dishes
// }
// console. log("Осталось посуды: " + cleanDishes(3))

// //ES 6
// // const cleanDishes 2 = (dishes => {
    
// // })


console.log(document)


const navigation = (page_name) =>{
    const pages = document.querySelectorAll('.fullpage');

    pages.forEach(page =>{
        page.classList.remove('open')

        page.classList.forEach(class_name =>{
            if (class_name === page_name){
                page.classList.add('open')
            }
        })
    })
}


const changeCount = (action,element) =>{
    let basket_item = element.parentNode.parentNode.parentNode
    let count_html = basket_item.querySelector('.quantity')
    let count = parseInt(count_html.innerHTML)
    
    if(action === 'minus'){
        if(count > 0){
      count -= 1
    }
}
    else {
      count +=1
    }
    if(element.parentNode.parentNode.parentNode.classList.contains('product')){
        let total = basket_item.querySelector('#fourth p')
        let price = parseFloat(basket_item.querySelector('#second p').innerHTML.replace('$', '' ))
        total.innerHTML = '$' + (price*count)
    }
    count_html.innerHTML = count
    }
    // Делаем чекбоксы
    const changeCheckbox = (e) =>{
        // получаем родителя у чекбокса
        let label = e.parentElement
        console.log(e)
        // находим стилизованный чекбокс
        let checkbox = label.querySelector('.checkbox')
        // переключаем класс у чекбокса
        checkbox.classList.toggle('checked')
    }
    const setCheckboox = () =>{
        let checkbox_array = document.querySelectorAll('input[type=checkbox]')
        checkbox_array.forEach(item =>{
            if(item.checked){
                item.parentElement.querySelector('.checkbox').classList.add('checked')
            }
        })
    }

    // const changeCounter = (action,elem) =>{
    //     let basket_item = elem.closest('.product')
    //     let count_html = basket_item.querySelector('.quantity')
        
    //     let count = ParseInt(count_html.innerHTML)
    //     if(action === 'minus'){
    //         if(count > 1){
    //             count -=1
    //         }
    //     }
    //     else{
    //         count +=1
    //     }

    //         count_html.innerHTML = count
    //         console.log(count_html)
    //         console.log(elem.parentNode.parentNode.parentNode.classList.contains('product'))
    // }

  const modal = (open) =>{
    if(open){
        let modal = `<div class="modal" id="modalCat">
        <div class="modal-container">
            <div class="container">
            <h2>Категория</h2>
            <button onclick="modal(false)"><h3>X</h3></button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error ipsam iure tenetur nobis praesentium quas dolorem vitae eligendi esse repellendus consequuntur ut sapiente culpa, est itaque illo nam ea.</p>
            <div class="container">
                <input type="button" value="Отменить" class="btn close" onclick="modal(false)">
                <input type="button" value="Сохранить" class="btn orange">
            </div>
        </div>
    </div>`
    document.body.innerHTML += modal
    }
    else{
        //получаем модальное окно
    let modal_html = document.getElementById('modalCat')
    // удаление окна
    modal_html.remove()
    }
  }