let container = document.getElementById("container");

let cardData = [
  {
    imgSrc: "",
    cardTitle: "",
    cardPrice: ""
  },
  {
    imgSrc: "",
    cardTitle: "",
    cardPrice: ""
  },
  {
    imgSrc: "",
    cardTitle: "",
    cardPrice: ""
  },
  {
    imgSrc: "",
    cardTitle: "",
    cardPrice: ""
  },
  {
    imgSrc: "",
    cardTitle: "",
    cardPrice: ""
  },
  {
    imgSrc: "",
    cardTitle: "",
    cardPrice: ""
  }
];

for (let i = 0; i < cardData.length; i++) {
  let card = document.createElement("div");
  card.className = "card";
  card.style.width = "18rem";

  let cardImg = document.createElement("img");
  cardImg.src = cardData[i].imgSrc;
  cardImg.className = "card-img-top";
  cardImg.alt = "Card image";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = cardData[i].cardTitle;
  cardBody.appendChild(cardTitle);

  let cardTPrice = document.createElement("p");
  cardPrice.className = "card-price";
  cardPrice.textContent = cardData[i].cardPrice;
  cardBody.appendChild(cardPrice);

  let addToCartBtn = document.createElement("a");
  addToCartBtn.href = "#";
  addToCartBtn.className = "btn btn-primary";
  addToCartBtn.textContent = "Add to Cart";
  cardBody.appendChild(addToCartBtn);

  let deleteBtn = document.createElement("a");
  deleteBtn.href = "#";
  deleteBtn.className = "btn btn-primary";
  deleteBtn.textContent = "Delete";
  cardBody.appendChild(deleteBtn);

  card.appendChild(cardImg);
  card.appendChild(cardBody);
  container.appendChild(card);
}

  