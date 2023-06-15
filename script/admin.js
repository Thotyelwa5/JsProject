
let productTitle = document.querySelector("#title-name");
let productDescription = document.querySelector("#description");
let productContent = document.querySelector("#content");
let image = document.querySelector("#image-url");
let btnAddContent = document.querySelector(".btn-add");
let table = document.querySelector("#tbl-admin");
let productList = document.querySelector("#product-list");
let productData = JSON.parse(localStorage.getItem("product-list"));
let row = document.getElementById("product-list");
let itemId = productData.length ? productData[productData.length - 1].id + 1 : 1;

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
  this.imageUrl = img;
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

  productData.forEach((item, index) => {
    // console.log(item);
    row.innerHTML += `
    <tr>
      <td>${item.id}</td>
      <td id="title">${item.title}</td>
      <td id="image"><img src="${item.imageUrl}" alt="Product Image" width="50"></td>
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
                <h1 class="modal-title fs-5" id="exampleModalLabel">New ${item.title}</h1>
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
                <button type="button" class="btn btn-primary edit-btn" onclick="editProduct(${index})">Save changes</button>
              </div>
            </div>
    </div>
  </div>
</div>
        <button class="btn-delete" data-id="${item.id}">Delete</button>
        
        </div>
      </td>
      </tr>
    `;
    // productList.appendChild(row);
    // console.log(productData);
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

function editProduct(index){

  // console.log(index)
  console.log(productData[index])

  productData[index].id = document.querySelector("#id").value;

  document.getElementById("id").value = id;
  document.getElementById("description").value = description;   
  document.getElementById("title").value = title;   
  document.getElementById("content").value = content;  
  localStorage.setItem('product-list', JSON.stringify(productData))
displayProducts();


}

function deleteProduct(item) {
  let index = productData.findIndex( p =>{
    return p.id == item.id
  })
  productData.splice(index, 1)
  localStorage.setItem('product-list', JSON.stringify(productData))
  displayProducts()
}
let btnSort = document.querySelector(".btn-sort");
btnSort.addEventListener("click", sortProducts);

function sortProducts() {
  productData.sort((a, b) => {
    return a.description.localeCompare(b.description);
  });

  displayProducts();
}

displayProducts();
