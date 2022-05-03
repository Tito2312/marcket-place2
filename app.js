const main = document.getElementById('main-market');
const selectProducts = document.getElementById("select-products");

window.addEventListener('load', loadSelect);
selectProducts.addEventListener('change', elementSelected);

function elementSelected(event) {
  // 1. Recorrer el array
  products.map(element => {
    if (event.target.value === element.name) {
      console.log(element.name);
      console.log(element.img);
      console.log(element.price);
    }
  })

}

function loadSelect() {
  products.map(element=>{
    const opt = document.createElement('option');
    opt.textContent = element.name;
    opt.value = element.name;
    selectProducts.appendChild(opt);
  });    
}

// function createCard(nameProduct, imgProduct, priceProduct) {
//   const card = document.createElement('div');
//   const imgCard = document.createElement('img');
//   const title = document.createElement('h3');
//   const price = document.createElement("p");
//   imgCard.setAttribute('src',imgProduct);
//   imgCard.setAttribute('alt',nameProduct);
//   title.textContent = nameProduct;
//   price.textContent = priceProduct;
//   card.appendChild(imgCard);
//   card.appendChild(title);
//   card.appendChild(price);
//   main.appendChild(card);
//   card.classList.add("cardPrueba");
//   // card.classList.remove("cardPrueba")
// }


products.map(element => { console.log(element.name) });