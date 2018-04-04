// for fetching the data from data/data.json
/* let items;
fetch('/data/data.json')
  .then((response) => response.json())
  .then((myJson) => {
    items = myJson.rowData;
  }); */

fetch('/data')
  .then((response) => response.json())
  .then((myJson) => {
    displayItems(myJson);
  });

const allItems = document.querySelector('.all-items');
let addButtons;
let removeButtons;
let quantities;

function displayItems(items) {
  const html = items
    .map(
      (item) => `
      <li>
        <a href=${item.values[0].hyperlink}>${
        item.values[0].formattedValue
      }</a><span> Quantity Desired: ${
        item.values[1].formattedValue
      } Quantity Purchased: <span class="quantity-purchased" data-id="${
        item._id
      }">${item.quantityPurchased}</span></span><button class="add" value="${
        item._id
      }">+1</button><button class="remove" value="${item._id}">-1</button>
      </li>
      `
    )
    .join('');
  allItems.innerHTML = html;

  addButtons = document.querySelectorAll('.add');
  removeButtons = document.querySelectorAll('.remove');
  quantities = [...document.querySelectorAll('.quantity-purchased')];

  addButtons.forEach((button) => {
    button.addEventListener('click', () => changeQuantity(button));
  });
  removeButtons.forEach((button) => {
    button.addEventListener('click', () => changeQuantity(button));
  });
}

function changeQuantity(button) {
  let increment;
  if (button.classList[0] === 'add') increment = 1;
  else if (button.classList[0] === 'remove') increment = -1;
  fetch('/data/quantity', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify({ _id: button.value, quantity: increment }),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error('Error:', error);
    })
    .then((response) => console.log('Success:', response));
  const index = quantities.findIndex(
    (quantity) => quantity.dataset.id === button.value
  );
  const newQuantity = parseInt(quantities[index].innerHTML, 10) + increment;
  quantities[index].innerHTML = newQuantity;
}

// for posting from a form without submitting, and resetting the database
/* const form = document.querySelector('.form');
form.addEventListener('submit', postData);
function postData(e) {
  e.preventDefault();
  const name = document.getElementById('name');
  const quote = document.getElementById('quote');

  fetch('/data/load', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify(items),
  })
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => console.log('Success:', response));
} */
