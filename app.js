const main = document.getElementById('main-market');
const selectProducts = document.getElementById("select-products");

window.addEventListener('load', loadSelect);
selectProducts.addEventListener('change', elementSelected);

function elementSelected(event) {
  // 1. Recorrer el array
  products.map(element => {
    if (event.target.value === element.name) {
      nameProduct = element.name
      imgProduct = element.img
      priceProduct = element.price
    }
  })
  createCard(nameProduct, imgProduct, priceProduct)
}

function loadSelect() {
  products.map(element=>{
    const opt = document.createElement('option');
    opt.textContent = element.name;
    opt.value = element.name;
    selectProducts.appendChild(opt);
  });    
}

function createCard(nameProduct, imgProduct, priceProduct) {
  const card = document.createElement('div');
  const imgCard = document.createElement('img');
  const title = document.createElement('h3');
  const price = document.createElement("p");
  const button = document.createElement('button');
  const button2 = document.createElement('button');
  imgCard.setAttribute('src',imgProduct);
  imgCard.setAttribute('alt',nameProduct);
  title.textContent = nameProduct;
  price.textContent = priceProduct;
  button.textContent = 'Comprar'
  button2.textContent = 'X'
  card.appendChild(imgCard);
  card.appendChild(title);
  card.appendChild(price);
  main.appendChild(card);
  card.appendChild(button);
  card.appendChild(button2);
  button.classList.add("btn-add")
  button2.classList.add("btn-add")
  imgCard.classList.add("img-card")
  card.classList.add("card");
//   // card.classList.remove("cardPrueba")


    button.addEventListener('click', compra)
    button2.addEventListener('click', quitar)

    function compra(){
      alert(`se ha comprado el ${title.textContent}`)
    }
    function quitar(){
      main.removeChild(card)
    }
}


products.map(element => { console.log(element.name) });