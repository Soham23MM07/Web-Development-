document.addEventListener("DOMContentLoaded", () => {
  const Product = [
    { id: 1, name: "Product 1", price: 56.34 },
    { id: 2, name: "Product 2", price: 13.34 },
    { id: 3, name: "Product 3", price: 97.34 },
  ];
  let totalprice = 0;
  const cart = [];
  const CheckOutBtn = document.getElementById("checkout-btn");
  const EmptyCartMessage = document.getElementById("empty-cart");
  const CartItemsDisplay = document.getElementById("cart-items");
  const TotalPriceDisplay = document.getElementById("total-price");
  const CartTotal = document.getElementById("cart-total");
  const ProductList = document.getElementById("product-list");

  Product.forEach((e) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
        <span>${e.name} -$${e.price.toFixed(2)}</span>
        <button data-id='${e.id}'>Add to cart</button>`;
    ProductList.appendChild(div);
  });

  ProductList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const item = parseInt(e.target.getAttribute("data-id"));
      let Clickeditem = Product.find((t) => t.id === item);
      addtocart(Clickeditem);
    }
  });

  function addtocart(data) {
    cart.length = 0;
    cart.push(data);
    console.log(cart);

    rendercart();
  }
  function rendercart() {
    if (cart.length > 0) {
      EmptyCartMessage.classList.add("hidden");
      CartItemsDisplay.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalprice += item.price;
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
        <span>${item.name} -$${item.price.toFixed(2)}</span>
        <button class='itemDelete' data-id='${item.id}'>Delete</button>`;
        CartItemsDisplay.appendChild(div);
        TotalPriceDisplay.textContent = `$${totalprice.toFixed(2)}`;
        CartTotal.classList.remove("hidden");
      });
    } else {
      EmptyCartMessage.classList.remove("hidden");
    }
  }
  CartItemsDisplay.addEventListener("click", (e) => {
    if (e.target.classList.contains("itemDelete")) {
      const itemId = parseInt(e.target.getAttribute("data-id"));
      const itemIndex = cart.findIndex((t) => t.id === itemId);

      if (itemIndex > -1) {
        // Remove item from cart
        totalprice -= cart[itemIndex].price;
        cart.splice(itemIndex, 1);
      }

      rendercart();
    }
  });

  CheckOutBtn.addEventListener("click", () => {
    cart.length = 0;
    totalprice = 0;
    TotalPriceDisplay.textContent = `$${totalprice.toFixed(2)}`;
    CartItemsDisplay.innerHTML = "";
  });
});
