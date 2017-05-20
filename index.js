// function makePink (event) {
//     colorDiv = event.target;
//     var selectedColorDiv = colorDiv.parentElement.previousElementSibling;
//     selectedColorDiv.className = 'color';
//     selectedColorDiv.classList.add('pink');
//     var shirtFront = colorDiv.closest(".graphics").querySelector(".front img");
//     shirtFront.src = './images/pink-front.png';
//     var shirtBack = colorDiv.closest(".graphics").querySelector(".back img");
//     shirtBack.src = './images/pink-back.png';
//   }
//   let pink = document.querySelector('li .pink');
//   pink.addEventListener('click', makePink);


//This works - the shirt color and size

let shirtColor = $('ul.colors li');
shirtColor.on('click', changeShirtColor)

function changeShirtColor(e){
  $(this).parent().prev().removeClass().addClass('color ' + $(this).attr('class'));
  $(this).parent().parent().parent().parent().prev().find('.front').children().attr('src', `./images/${$(this).attr('class')}-front.png`);
  $(this).parent().parent().parent().parent().prev().find('.back').children().attr('src', `./images/${$(this).attr('class')}-back.png`);
}

let shirtSize = $('ul.sizes li');
shirtSize.on('click', function(event){$(this).parent().prev().text($(this).text())});



//Shopping Cart

//add  products to the Shopping Cart
$('.shopCart').on('click', addToCart);

function add(a,b) {
  return a+b
}
let $shirts =[];
let $prices = [];
function addToCart(){

    //console.log($(this).parent().parent().parent().next().children().text());
    let $shirt = $(this).parent().parent().parent().next().children('h2.shirt').text();
    let $price = $(this).parent().parent().parent().next().find('span.price').text();
    let $total = $('#total').text();
    console.log($total);
    let wtfShirts = $shirts.filter(obj => obj === $shirt);
    console.log('wtfShirts',wtfShirts);
    if (wtfShirts.length <=7){

    if (wtfShirts.length === 7) {
    $(this).append("<div class='soldOut'>Sold Out</div>");
    }

    let $allPrices = parseInt($price)
    $prices.push($allPrices)
    console.log($prices);
    let $li = $shirt + $price;
    let $ul = $('#shoppingCart');
    $ul.append(`<div class="shopItem">${$li}</div>`);
    //let $totalPrice = $price + $price;


  let $totals = $prices.reduce(add, 0);
  console.log($totals);
  $('#total').text($totals);

  if ($prices.length >= 5){
    let total = $('#total').text()
    let discount = total * .05
    $('#total').text('Total $' + total)
    $('#discount').text('Discount $' + discount)
    console.log(total,discount)
    let newprice = total - discount
    $('#newprice').text('Newprice $' + newprice)
  }

      $shirts.push($shirt)
      console.log($shirts)
      // $shirts.filter(obj => obj === $shirt);
    }

  //}


}
////////////////////////////////////////////////////////////////
