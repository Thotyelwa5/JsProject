
localStorage.setItem('product-list', JSON.stringify(
  [
    {
      id: "7",
      title: "Cap",
      imageUrl: "https://i.postimg.cc/d1Z43DCN/hat-7.png",
      description: "R100",
      content: "Available",
      date: new Date(),
    },
    {
      id: "8",
      title: "Hat",
      imageUrl: "https://i.postimg.cc/0ytfC7dH/hat2.png",
      description: "R150",
      content: "Available",
      date: new Date(),
    },
    {
      id: "9",
      title: "Hat ",
      imageUrl: "https://i.postimg.cc/t4DrmKyk/hat4.png",
      description: "R175",
      content: "Available",
      date: new Date(),
    },
    {
      id: "10",
      title: "Hat",
      imageUrl: "https://i.postimg.cc/Xvzsn9ry/hat5.png",
      description: "R200",
      content: "Available",
      date: new Date(),
    },
    {
      id: "11",
      title: "Hat",
      imageUrl: "https://i.postimg.cc/L4fxMY2n/hat6.png",
      description: "R199,99",
      content: "Available",
      date: new Date(),
    },
    {
      id: "12",
      title: "Cap",
      imageUrl: "https://i.postimg.cc/Hs93VqJm/hats3.png",
      description: "R149,99",
      content: "Available",
      date: new Date(),
    },
    {
      id: "13",
      title: "Hat",
      imageUrl: "https://i.postimg.cc/Xvzsn9ry/hat5.png",
      description: "R200",
      content: "Available",
      date: new Date(),
    },
    {
      id: "14",
      title: "Hat",
      imageUrl: "https://i.postimg.cc/Xvzsn9ry/hat5.png",
      description: "R200",
      content: "Available",
      date: new Date(),
    },
    {
      id: "15",
      title: "Hat",
      imageUrl: "https://i.postimg.cc/Xvzsn9ry/hat5.png",
      description: "R200",
      content: "Available",
      date: new Date(),
    },
  ]
))
let products = JSON.parse(localStorage.getItem("product-list")) ? 
JSON.parse(localStorage.getItem("product-list")) : []
let cardContainer = document.getElementById("cardContainer");
let cart = []
localStorage.setItem('checkout-list', JSON.stringify( []))
products.forEach( (product)=>{
  let post = product;
  let card = document.createElement("div");
  card.className = "card";
  let image = document.createElement("img");
  image.src = post.imageUrl;
  card.appendChild(image);
  let title = document.createElement("h3")
  title.innerHTML = post.title;
  card.appendChild(title)
  let price = document.createElement("h5");
  price.innerHTML = post.description;
  card.appendChild(price);
  let content = document.createElement("p");
  content.innerHTML = post.content;
  card.appendChild(content);
  let addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to Cart";
  // debugger
  addToCartButton.addEventListener("click", () => {
    let selectedItem = {
      id: product.id,
      title: product.title,
      imageUrl: product.imageUrl,
      description: product.description,
      content: product.content,
      date: product.date,
    }
    cart.push(selectedItem)
    localStorage.setItem('checkout-list', JSON.stringify(cart));
  });
  card.appendChild(addToCartButton);
  cardContainer.appendChild(card);

})
function goToCheckoutPage() {
  window.location.href = "checkout.html";
}
