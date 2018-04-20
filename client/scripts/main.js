fetch('/data')
  .then((response) => response.json())
  .then((myJson) => {
    displayItems(myJson);
  });

const allItems = document.querySelector('.all-items');

function displayItems(items) {
  const insert = 'upload/c_fill,h_150/';
  const html = items
    .map((item) => {
      const cloudLink = item.values[0].hyperlink;
      const index = cloudLink.indexOf('upload/');
      const front = cloudLink.slice(0, index);
      const back = cloudLink.slice(index + 7);
      const final = front + insert + back;
      return `
      <li>
      <img src="${final}" alt="${item.values[0].formattedValue}" height="150">  
      <span class="item-title">${
        item.values[0].formattedValue
      }</span><span class ="numbers"> Desire: ${
        item.values[1].formattedValue
      } Purchased: <span class="quantities" data-id="${item._id}">${
        item.quantityPurchased
      }</span></span><div class="quantity-buttons"><button class="remove" value="${
        item._id
      }">-1</button><button class="add" value="${item._id}">+1</button></div>
      </li>
      `;
    })
    .join('');
  allItems.innerHTML = html;
  buttonClicks();
}

function buttonClicks() {
  const addButtons = document.querySelectorAll('.add');
  const removeButtons = document.querySelectorAll('.remove');
  const quantities = [...document.querySelectorAll('.quantities')];

  addButtons.forEach((button) => {
    button.addEventListener('click', () => changeQuantity(button, quantities));
  });
  removeButtons.forEach((button) => {
    button.addEventListener('click', () => changeQuantity(button, quantities));
  });
}

function changeQuantity(button, quantities) {
  const increment = button.classList[0] === 'add' ? 1 : -1;
  const index = quantities.findIndex(
    (quantity) => quantity.dataset.id === button.value
  );
  const currentQuantity = quantities[index];
  if (increment === -1 && parseInt(currentQuantity.innerHTML, 10) === 0) return;
  postNewQuantity(button, increment);
  const newQuantity = parseInt(currentQuantity.innerHTML, 10) + increment;
  currentQuantity.innerHTML = newQuantity;
}

function postNewQuantity(button, increment) {
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
}
