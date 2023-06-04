// Function to fetch the menu from JSON and display it on the screen
async function getMenu() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
    const data = await response.json();
    const menuItemsContainer = document.getElementById('menu-items');
    data.forEach(menuItem => {
      const menuItemElement = document.createElement('div');
      menuItemElement.classList.add('menu-item');
      menuItemElement.innerHTML = `
        
        <img src="${menuItem.imgSrc}" alt="${menuItem.name}" width="200">
        <div class="desc">
          <p>${menuItem.name}</p>
        </div>
        <div class="price-order">
          <p>${menuItem.price}$</p>
          <p>Order Now</p>
        </div>
      `;
      menuItemsContainer.appendChild(menuItemElement);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Function to simulate taking an order
function takeOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      const burgers = ['Burger A', 'Burger B', 'Burger C'];
      const order = [];
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * burgers.length);
        order.push(burgers[randomIndex]);
      }
      resolve(order);
    }, 2500);
  });
}

// Function to simulate order preparation
async function orderPrep() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ order_status: true, paid: false });
    }, 1500);
  });
}

// Function to simulate paying for the order
function payOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      const card = { order_status: true, paid: true };
      resolve(card);
    }, 1000);
  });
}

// Function to display a thank you message once the order is paid
function thankyouFnc() {
  return new Promise(resolve => {
    setTimeout(() => {
      alert('Thank you for eating with us today!');
      resolve();
    }, 0);
  });
}

// Chain the promises together using async/await
async function runRestaurant() {
  try {
    await getMenu();
    const order = await takeOrder();
    console.log('Order:', order);
    const status = await orderPrep();
    console.log('Order Status:', status);
    const payment = await payOrder();
    console.log('Payment:', payment);
    thankyouFnc();
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the main function to start the restaurant process
runRestaurant();
