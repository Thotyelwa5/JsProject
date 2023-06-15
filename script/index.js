let cardContainer = document.getElementById("cardContainer");
let featuredPosts = [
  {
    id: "1",
    title: "Unlock your inner cool with our must-have hat collection!",
    imageUrl: "https://i.postimg.cc/mDxZRypt/hats.png ",
    description: "R100",
    content: "Available",
    date: new Date(),
  },
  {
    id: "2",
    title: "Hats that make a statement: Fashion meets functionality!",
    imageUrl: "https://i.postimg.cc/8z5zb5rP/357138-1966-XXL.jpg",
    description: "R150",
    content: "Available",
    date: new Date(),
  },
  {
    id: "3",
    title: "Top off your style with our trend-setting hats.Discover the ultimate accessory to elevate your fashion game: our stunning hats.",
    imageUrl: "https://i.postimg.cc/J4fTthvF/maxresdefault.jpg",
    description: "R175",
    content: "Available",
    date: new Date(),
  },
 
];

for (let i = 0; i < featuredPosts.length; i++) {
  let post = featuredPosts[i];
  let col = document.createElement("div");
  col.className = "col-sm-12 col-lg-2";
  let card = document.createElement("div");
  card.className = "card";
  let image = document.createElement("img");
  image.src = post.imageUrl;
  card.appendChild(image);
  let title = document.createElement("p");
  title.innerHTML = post.title;
  card.appendChild(title);
  col.appendChild(card);
  cardContainer.appendChild(col);
}

function goToProductsPage() {
  window.location.href = "products.html";
}



