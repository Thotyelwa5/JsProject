let checkoutList = JSON.parse(localStorage.getItem('checkout-list')) || [];
let checkoutBody = document.getElementById('checkout-body');
let totalDescription = document.getElementById('total-description');

let totalPrice = 0;

checkoutList.forEach((product) => {
  let { id, title, description } = product;

  let price = parseFloat(description.substring(1));
  totalPrice += price;

  let row = document.createElement('tr');
  row.innerHTML = `
    <td>${id}</td>
    <td>${title}</td>
    <td>${description}</td>
  `;

  checkoutBody.appendChild(row);
});

totalDescription.textContent = `Total: R${totalPrice.toFixed(2)}`;

  displayContent();

