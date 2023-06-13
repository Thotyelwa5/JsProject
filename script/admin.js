let productTitle = document.querySelector("#title-name");
let productDescription = document.querySelector("#description");
let productContent = document.querySelector("#content");
let image = document.querySelector("#image-url");
let btnAddContent = document.querySelector(".btn-add");
let table = document.querySelector("#tbl-admin");
let productList = document.querySelector("#product-list");
let productData = JSON.parse(localStorage.getItem("product-list"));
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
    productData.push(new Product(itemId,productTitle.value,image.value,productDescription.value,productContent.value,new Date()))
    localStorage.setItem("product-list", JSON.stringify(productData));

    clearForm();
    displayProducts();
    itemId++;
  } else {
    alert("Please fill in all fields");
  }
}
function Product(idItem,title,img,desc,cont,dt) {
  this.id = idItem;
  this.title = title;
  this.image = img;
  this.description = desc;
  this.content = cont;
  this.date = dt
};

function clearForm() {
  productTitle.value = "";
  productDescription.value = "";
  productContent.value = "";
  image.value = "";
}

function displayProducts() {
  productList.innerHTML = "";

  productData.forEach((item) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.id}</td>
      <td id="title">${item.title}</td>
      <td id="image"><img src="${item.image}" alt="Product Image" width="50"></td>
      <td id="description">${item.description}</td>
      <td id="content">${item.content}</td>
      <td>
      <div class="hiiiii">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal` + item.id + `">
      Edit
    </button>
    
        <div class="modal fade" id="exampleModal` + item.id + `" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">title:</label>
            <input type="text" class="form-control" id="title">
          </div>
          <div class="mb-3">
          <label for="recipient-name" class="col-form-label">Image:</label>
          <input type="text" class="form-control" id="image">
        </div>
        <div class="mb-3">
        <label for="recipient-name" class="col-form-label">description:</label>
        <input type="text" class="form-control" id="description">
      </div>
      <div class="mb-3">
      <label for="recipient-name" class="col-form-label">content:</label>
      <input type="text" class="form-control" id="content">
    </div>
          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick="editProduct(`+item.productId+`)">Save changes</button>
      </div>
    </div>
  </div>
</div>
        <button class="btn-delete" data-id="${item.id}" onclick="${item}">Delete</button>
        </div>
      </td>
    `;
    productList.appendChild(row);
  });

  attachEventListeners();
}

function attachEventListeners() {
  let deleteButtons = document.querySelectorAll(".btn-delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let productId = parseInt(button.dataset.id);
      deleteProduct(productId);
    });
  });
}

function editProduct(){
        

  document.getElementById("id").value = id;
  document.getElementById("description").value = description;   
  document.getElementById("title").value = title;   
  document.getElementById("content").value = content;   
}

function deleteProduct(item) {
  let index = productData.findIndex( p =>{
    return p.id == item.id
  })
  productData.splice(index, 1)
  localStorage.setItem('product-list', JSON.stringify(productData))
  displayProducts()
}
displayProducts();
