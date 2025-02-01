function toggleFavorite(button) {
  let icon = button.querySelector("i");
  icon.classList.toggle("fa-regular");
  icon.classList.toggle("fa-solid");
  icon.style.color = icon.classList.contains("fa-solid") ? "red" : "";
}

//#region scroll
const btn = document.getElementById("top");
window.onscroll = function () {
  if (window.scrollY >= 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
//#endregion scroll


//#region mode

const selectedIcon = document.getElementById("selected-icon");
window.addEventListener("load", function () {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    selectedIcon.className = "fa-regular fa-sun";
});

document
    .getElementById("dark-mode")
    .addEventListener("click", function () {
        selectedIcon.className = "fa-regular fa-moon";
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = 'blue';
    });
document
    .getElementById("medium-mode")
    .addEventListener("click", function () {
        selectedIcon.className = "fa-solid fa-circle-half-stroke";
        document.body.style.backgroundColor = " #f4f4f4";
        document.body.style.color = "#000000";
    });

document
    .getElementById("light-mode")
    .addEventListener("click", function () {
        selectedIcon.className = "fa-regular fa-sun";
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
    });
//#endregion mode

//#region addtoCart
  function addToCart(element) {
    const productDiv = element.closest(".card");
    const productName = productDiv.querySelector("img").alt;
    const imgSrc = productDiv.querySelector("img").src;
    const productPrice = productDiv.querySelector("p").innerText;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const quantity=1;
   
    cart.push({productName,imgSrc,productPrice,quantity});
    
    localStorage.setItem("cart", JSON.stringify(cart));
  
   
    const confirmationMessage = document.createElement("div");
    confirmationMessage.classList.add("confirmation-message");
    confirmationMessage.textContent = `${productName} has been added to the cart!`;
  
   
    document.body.appendChild(confirmationMessage);
  
    setTimeout(() => {
      confirmationMessage.remove();
    }, 3000);
  }

//#endregion addtoCart


//#region product Details
  function directToCarts(element) {
    if (element) {
      window.location.href = 'cart.html';
      return;
    }
  
  }
  
//#endregion product Details
  
//#region button for category
function showProducts(category) {
  var allSections = document.querySelectorAll(".pro");
  allSections.forEach((section) => section.classList.remove("show"));
 
    document.getElementById(category).classList.add("show");
  
}
//#endregion button for category

//#region products saved in localStorage
const products = [
  {
    name: "Smart Watch",
    imageSrc: "./image/e2.jpg",
    price: "100$",
    quantity: 5,
    category: "Electronics"
  },
  {
    name: "AirPods",
    imageSrc: "./image/airpods1.jpg",
    price: "1000$",
    quantity: 1,
    category: "Electronics"
  },
  {
    name: "iPhone 16",
    imageSrc: "./image/iphone16.jpg",
    price: "2000$",
    quantity: 7,
    category: "Electronics"
  },
  {
    name: "Camera",
    imageSrc: "./image/camera5.jpg",
    price: "50$",
    quantity: 10,
    category: "Electronics"
  },
  {
    name: "Headphones",
    imageSrc: "./image/headphones5.jpg",
    price: "50$",
    quantity: 15,
    category: "Electronics"
  }

  ,
  {
    name: "Blue and Pink Bear",
    imageSrc: "./image/bear9.jpg",
    price: "50$",
    quantity: 1,
    category: "Toys"
  },
  {
    name: "Twin Bears",
    imageSrc: "./image/bear11.jpg",
    price: "50$",
    quantity: 1,
    category: "Toys"
  },
  {
    name: "Pink Heart Bear",
    imageSrc: "./image/bears10.jpg",
    price: "50$",
    quantity: 1,
    category: "Toys"
  },
  {
    name: "Cute Pink Bear",
    imageSrc: "./image/bears7.jpg",
    price: "50$",
    quantity: 1,
    category: "Toys"
  },
  {
    name: "White Bunny",
    imageSrc: "./image/bears8.jpg",
    price: "50$",
    quantity: 1,
    category: "Toys"
  },
  {
    name: "Smiling Pink Bear",
    imageSrc: "./image/bears7.jpg",
    price: "50$",
    quantity: 1,
    category: "Toys"
  },
  {
    name: "Grey Bunny",
    imageSrc: "./image/bears6.jpg",
    price: "50$",
    quantity: 1,
    category: "Toys"
  },
  {
    name: "Baby Girl Bear",
    imageSrc: "./image/bears4.jpg",
    price: "50$",
    quantity: 1,
    category: "Toys"
  },
  {
    name: "Pink Sitting Bear",
    imageSrc: "./image/bears2.jpg",
    price: "50$",
    quantity: 6,
    category: "Toys"
  },
  {
    name: "White Bow Bear",
    imageSrc: "./image/bears1.jpg",
    price: "50$",
    quantity: 4,
    category: "Toys"
  }
  ,
  {
    name: "Los Angeles Hoodie",
    imageSrc: "./image/clothes1.jpg",
    price: "50$",
    quantity: 1,
    category: "Clothes"
  },
  {
    name: "Beige Puffer Jacket",
    imageSrc: "./image/clothes2.jpg",
    price: "50$",
    quantity: 3,
    category: "Clothes"
  },
  {
    name: "White Teddy Jacket",
    imageSrc: "./image/clothes3.jpg",
    price: "50$",
    quantity: 1,
    category: "Clothes"
  },
  {
    name: "Beige and Black Sweater",
    imageSrc: "./image/clothes4.jpg",
    price: "50$",
    quantity: 10,
    category: "Clothes"
  },
  {
    name: "Cloud Blue Outfit",
    imageSrc: "./image/clothes5.jpg",
    price: "50$",
    quantity: 1,
    category: "Clothes"
  },
  {
    name: "Summer Blue Set",
    imageSrc: "./image/clothes6.jpg",
    price: "50$",
    quantity: 12,
    category: "Clothes"
  },
  {
    name: "Dream Girls Set",
    imageSrc: "./image/clothes7.jpg",
    price: "50$",
    quantity: 17,
    category: "Clothes"
  },
  {
    name: "Blue and White Shirts Set",
    imageSrc: "./image/clothes8.jpg",
    price: "50$",
    quantity: 16,
    category: "Clothes"
  },
  {
    name: "White and Beige Shoes",
    imageSrc: "./image/clothes10.jpg",
    price: "50$",
    quantity: 1,
    category: "Shoes"
  },
  {
    name: "Brown Wide-Leg Pants",
    imageSrc: "./image/clothes11.jpg",
    price: "50$",
    quantity: 12,
    category: "Clothes"
  },
  {
    name: "Modern Blue Outfit",
    imageSrc: "./image/clothes12.jpg",
    price: "50$",
    quantity: 1,
    category: "Clothes"
  },
  {
    name: "White Shirt & Pants",
    imageSrc: "./image/clothes13.jpg",
    price: "50$",
    quantity: 10,
    category: "Clothes"
  },
  {
    name: "Minimal Beige Outfit",
    imageSrc: "./image/clothes14.jpg",
    price: "50$",
    quantity: 1,
    category: "Clothes"
  },
  {
    name: "Casual Beige Outfit",
    imageSrc: "./image/clothes15.jpg",
    price: "50$",
    quantity: 5,
    category: "Clothes"
  },
  {
    name: "Elegant Beige Set",
    imageSrc: "./image/clothes16.jpg",
    price: "50$",
    quantity: 3,
    category: "Clothes"
  },
  {
    name: "Black-Camera",
    imageSrc: "./image/camera.jpg",
    price: "50$",
    quantity: 20,
    category: "Electronic"
  },
  {
    name: "Wight-Camera",
    imageSrc: "./image/camera3.jpg",
    price: "50$",
    quantity: 15,
    category: "Electronic"
  }
,
  {
    name: "Digital Watch",
    imageSrc: "./image/watchMen2.jpg",
    price: "50$",
    quantity: 1,
    category: "Electronic"
  },
  {
    name: "SumSung",
    imageSrc: "./image/sumsung17.jpg",
    price: "50$",
    quantity: 1,
    category: "Electronic"
  },
  {
    name: "Red-flowers",
    imageSrc: "./image/flowers1.jpg",
    price: "50$",
    quantity: 1,
    category: "flowers"
  },

  //
  {
    name: "Men-Watch",
    imageSrc: "./image/watch.jpg",
    price: "50$",
    quantity: 1,
    category: "Electronic"
  }
,
{
  name: "Zinnia",
  imageSrc: "./image/flower7.jpg",
  price: "50$",
  quantity: 20,
  category: "Flowers"
},
{
  name: "Carnation",
  imageSrc: "./image/flowers.jpg",
  price: "50$",
  quantity: 20,
  category: "Flowers"
},
{
  name: "Sunflowers",
  imageSrc: "./image/flower5.jpg",
  price: "50$",
  quantity: 20,
  category: "Flowers"
},
{
  name: "Lavender",
  imageSrc: "./image/flower6.jpg",
  price: "50$",
  quantity: 20,
  category: "Flowers"
}
,
{
  name: "Daisies",
  imageSrc: "./image/Daisies.jpg",
  price: "50$",
  quantity: 10,
  category: "Flowers"
},
{
  name: "Lilies",
  imageSrc: "./image/0.jpg",
  price: "50$",
  quantity: 20,
  category: "Flowers"
} ,
{
  name: "Peonies",
  imageSrc: "./image/6.jpg",
  price: "50$",
  quantity: 20,
  category: "Flowers"
}
];

localStorage.setItem("productsArray", JSON.stringify(products));
function redirectToDetails(element) {
  const productDiv = element.closest(".card");
  const productName = productDiv.querySelector("img").alt;
  localStorage.setItem("selectedProductName", productName);
  window.location.href = "product_details.html";
}
//#endregion products saved in localStorage
  
