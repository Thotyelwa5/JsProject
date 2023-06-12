let productTitle = document.querySelector("#title-name");
let productDescription = document.querySelector("#description");
let productContent = document.querySelector("#content");
let image = document.querySelector("#image-url");
let btnAddContent = document.querySelector(".btn-add");
let table = document.querySelector("#tbl-admin");
let productList = document.querySelector("#product-list");
let productData = JSON.parse(localStorage.getItem("product-list")) || [];
let itemId =
  productData.length > 0 ? productData[productData.length - 1].id + 1 : 1;

btnAddContent.addEventListener("click", () => {
  addProduct();
});

function addProduct() {
  if (
    productTitle.value &&
    productDescription.value &&
    productContent.value &&
    image.value
  ) {
    const product = {
      id: itemId,
      title: productTitle.value,
      image: image.value,
      description: productDescription.value,
      content: productContent.value,
      date: new Date(),
    };

    productData.push(product);
    localStorage.setItem("product-list", JSON.stringify(productData));

    clearForm();
    displayProducts();
    itemId++;
  } else {
    alert("Please fill in all fields");
  }
}

function clearForm() {
  productTitle.value = "";
  productDescription.value = "";
  productContent.value = "";
  image.value = "";
}

function displayProducts() {
  productList.innerHTML = "";

  productData.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td><img src="${item.image}" alt="Product Image" width="50"></td>
      <td>${item.description}</td>
      <td>${item.content}</td>
      <td>
      <div class="hiiiii">
        <button class="btn-edit" data-id="${item.id}">Edit</button>
        <button class="btn-delete" data-id="${item.id}">Delete</button>
        </div>
      </td>
    `;
    productList.appendChild(row);
  });

  attachEventListeners();
}

function attachEventListeners() {
  const deleteButtons = document.querySelectorAll(".btn-delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.dataset.id);
      deleteProduct(productId);
    });
  });

  const editButtons = document.querySelectorAll(".btn-edit");
  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.dataset.id);
      editProduct(productId);
    });
  });
}

// Delete Product
function deleteProduct(productId) {
  productData = productData.filter((item) => item.id !== productId);
  localStorage.setItem("product-list", JSON.stringify(productData));
  displayProducts();
}

// Edit Product (Update form with existing data)
function editProduct(productId) {
  const product = productData.find((item) => item.id === productId);
  if (product) {
    productTitle.value = product.title;
    productDescription.value = product.description;
    productContent.value = product.content;
    image.value = product.image;
  }
}

// Initial display
displayProducts();
