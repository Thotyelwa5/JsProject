let cardContainer = document.getElementById("cardContainer");
let featuredPosts = [
  {
    id: "1",
    title: "Cap",
    imageUrl: "https://i.postimg.cc/d1Z43DCN/hat-7.png ",
    description: "R100",
    content: " ",
    date: new Date(),
  },

  {
    id: "2",
    title: "Hat",
    imageUrl: " https://i.postimg.cc/0ytfC7dH/hat2.png",
    description: "R150",
    content: " ",
    date: new Date(),
  },
  {
    id: "3",
    title: "Hat ",
    imageUrl: "https://i.postimg.cc/t4DrmKyk/hat4.png ",
    description: "R175",
    content: " ",
    date: new Date(),
  },
  {
    id: "4",
    title: "Hat",
    imageUrl: "https://i.postimg.cc/Xvzsn9ry/hat5.png",
    description: "R200",
    content: " ",
    date: new Date(),
  },
  {
    id: "5",
    title: "Hat",
    imageUrl: "https://i.postimg.cc/L4fxMY2n/hat6.png",
    description: "R199,99",
    content: " ",
    date: new Date(),
  },
  {
    id: "6",
    title: "Cap",
    imageUrl: " https://i.postimg.cc/Hs93VqJm/hats3.png",
    description: "R149,99",
    content: " ",
    date: new Date(),
  },
];

for (let i = 0; i < featuredPosts.length; i++) {
  let post = featuredPosts[i];
  let col = document.createElement("div");
  col.className = "col-2";
  let card = document.createElement("div");
  card.className = "card";
  let image = document.createElement("img");
  image.src = post.imageUrl;
  card.appendChild(image);
  let price = document.createElement("p")
  price.innerHTML = post.description;
  card.appendChild(price)
  let addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.addEventListener("click", () => {
    console.log(`Added post with ID ${post.id} to cart.`);
  });
  card.appendChild(addToCartButton);
  cardContainer.appendChild(card);
}
function goToProductsPage() {
  window.location.href = "products.html";
}



