//slide show
const imageProduct =document.querySelector(".image-product");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
     if(thumbnail.id === 'img1'){
          imageProduct.style.transform = `translate(0rem)`;
     }

     else if(thumbnail.id === 'img2'){
      imageProduct.style.transform = `translate(-28.4rem)`;
     }

     else if(thumbnail.id === 'img3'){
      imageProduct.style.transform = `translate(-56.4rem)`;
     }

     else{
      imageProduct.style.transform = `translate(-84.6rem)`;
     }
  })
})

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const totalItems = document.querySelector("#total-items");
let itemQuantity = +totalItems.innerText;

plus.addEventListener('click', () => {
  itemQuantity++;
  totalItems.innerText = `${itemQuantity}`;  
})

minus.addEventListener('click', () => {
  itemQuantity = itemQuantity < 0 ? 0 : itemQuantity;
  if(itemQuantity === 0){
      return null;
  }
  itemQuantity--;
  totalItems.innerText = `${itemQuantity}`;
})
//CART

const cartBox = document.querySelector('.cart-box');
let cartArray = [];
console.log(cartArray.length)

function Item(name,quantity) {
    this.name = name,
    this.quantity = quantity
  }

  const emptyMessage = document.createElement('h5');
    cartBox.appendChild(emptyMessage);
   
const itemDetails = document.querySelector(".item-details");
    const addbtn = document.querySelector(".add-cart");

     addbtn.addEventListener("click",function() {
       let item = new Item('Fall Limited Edition Sneakers',itemQuantity)
    cartArray.push(item); 
    const itemDetails = document.createElement('div');
    console.log(cartArray)
    cartBox.appendChild(itemDetails);
    itemDetails.classList.add('item-details');

    //add images to cartbox
    const itemPic = document.createElement('img');
    itemDetails.appendChild(itemPic)
    itemPic.setAttribute('src', "images/image-product-1-thumbnail.jpg");
    itemPic.classList.add('cart-img');

    const itemName = document.createElement('h5');
    itemDetails.appendChild(itemName);
    itemName.classList.add('item-name');
    itemName.innerText += `all Limited Edition Sneakers $125.00 x `;

    const totalAddItem = document.createElement('span');
    itemName.appendChild(totalAddItem);
    totalAddItem.classList.add('total-add-item');
    totalAddItem.innerText = `${itemQuantity}`;

    const total = document.createElement('span');
    itemName.appendChild(total);
    total.classList.add('total');

    const deleteItem = document.createElement('img');
    itemDetails.appendChild(deleteItem);
    deleteItem.setAttribute('src', "images/icon-delete.svg");
    deleteItem.classList.add('delete');


    deleteItem.addEventListener("click",function () {
      itemDetails.remove();
    cartArray.pop(this.item); 
    console.log(cartArray);
    console.log(cartArray.length)
    itemCount.innerText = `${cartArray.length}`;
    if(cartArray.length === 0){
        emptyMessage.innerText = `Your cart is empty.`;
        itemCount.classList.remove('show-item-count');
        cart.addEventListener('click' , () => {
            emptyMessage.innerText = `Your cart is empty.`;
        })
    }
    })

    itemCount.classList.add('show-item-count')

    itemCount.innerText = `${cartArray.length}`;
    totalAddItem.innerText = `${itemQuantity}`;

    let totalPrice = 125.00 * itemQuantity;

    total.innerText = '$' + totalPrice + '.00';

    console.log(cartArray.length)

    if(cartArray.length > 0){
        cart.addEventListener('click' , () => {
        emptyMessage.innerText = ``;
    })
    }

     })

     const itemCount = document.querySelector('.item-count');
     const cart = document.querySelector('.cart');

     cart.addEventListener('click' , () => {
      cartBox.classList.toggle('show-cart-box');
  
      // show empty card when user first click on cart icon.
          emptyMessage.innerText = `Your cart is empty.`;
          emptyMessage.classList.add('empty-message');
  })


    




















