function deleteProduct(){
    let product = document.querySelector('.product')
    product.innerHTML = ''
}

function minusCount(){
  let count_html = document.querySelector('.include-basket. count')
  let count = parseInt(count_html.innerHTML)
}
function changePrice(change = 0){
    //Получаем цену в виде тега
    let price_html = document.querySelector('.product #second p')
    // извлекаем содержимое тега
    let price = price_html.innerHTML
    // удаляем знак доллара
    price = price.replace('$','')
    //преобразуем строку в десятичное число
    price = parseFloat(price)

    let new_price = price - change  
    if(new_price > price){
        price_html.style.color = 'red'
    }
    else if (new_price == price){
        price_html.style.color = 'blue'
    }
  else{new_price < price}(
    price_html.style.color = 'green'
  )
   
    price_html.innerHTML = '$' + new_price
    
    console.log( price)
}
// function changequantity(){
//   let quantity = document.querySelector('.basket .counter p')
//   let new_quantity = quantity.innerHTML 
//   new_quantity = parseFloat(new_quantity)

//   new_quantity -=1 

//   quantity.innerHTML = new_quantity
  
  
//   console.log(new_quantity)
  


// }
// function changequantity1(){
//   let quantity = document.querySelector('.basket .counter p')
//   let new_quantity = quantity.innerHTML 
//   new_quantity = parseFloat(new_quantity)

//   new_quantity +=1 

//   quantity.innerHTML = new_quantity

//   let total = document.querySelector('.basket.product #fourth p')
//   let price = total.innerHTML
//   price *= changequantity1

//   new_total = parseFloat(new_total)

//   new_total  = new_total * changequantity1 
  

