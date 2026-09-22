
const freeShippingLimit = 2000; // الشحن مجاني لو 2000 أو أكتر
const shippingCost= 100;        // اقل من 2000
const discountAmount= 0;       

// تسجيل الدخول قبل الإضافة
const requireLogin = true;
const userKey = "currentUser"; 
const pendingKey = "pendingProductId";
const registerPage = "register.html";

// بيرجع بيانات المستخدم الحالي سواء كانت متخزنة فى localStorage (Keep me signed in)
// أو فى sessionStorage (تسجيل دخول عادي)
function getCurrentUser(){
    const stored = localStorage.getItem(userKey) || sessionStorage.getItem(userKey);
    return stored ? JSON.parse(stored) : null;
}

// تنسيق السعر 
function formatPrice(value){
    return Number(value).toLocaleString("en-US") + " EGP";
}

// عنصر السلة (نقلته فوق عشان يبقى معرّف قبل أي استخدام)
const cartContainer = document.getElementById("cart-container");

//فراءة الكارت 
function getCart(){
    try{
        return JSON.parse (localStorage.getItem(("cart")) || "[]");
    }catch(error){
        console.log("Error",error);
        return [];
    }
}
//حفظ الكارت
function saveCart(cart){
    localStorage.setItem("cart",JSON.stringify(cart));
}
function refreshBagCount() {
    if (typeof updateBagCount === "function") {
    updateBagCount();
    }
}

// 
    function addProductToCart(productId){
    fetch ("products.json").then(response => response.json())
        .then(products =>{

            const product =products.find(function(item){
                return item.id == productId; 
            });

            if(!product){
            console.log("Not found");
            return;
            }

            const cart =getCart();

            //ابحث على المنتج
            const currentProduct = cart.find(function(item){
                return Number(item.id) == productId;
            });

            if(currentProduct){
            currentProduct.quantity += 1;
            }
            else{
                cart.push({
                id: product.id,
                name: product.name,
                category: product.category,
                price: product.price,
                image: product.image,
                quantity: 1
                });
            }
            saveCart(cart);
            updateBagCount();
            renderCart();
        })
    .catch((error)=> {
        console.log("Error", error);
        });
}


function addToCart(event){
    const button = event.target.closest(".add-btn, #quick-view-add");
    if(!button){
        return;
    }

    const productId = Number(button.getAttribute("data-id")); 
    if(!productId){
        return;
    }
    //لو مش مسجل يتوجهه لصفحه التسجيل
    if(requireLogin && !getCurrentUser()){
        localStorage.setItem(pendingKey, productId);
        window.location.href = registerPage;
        return;
    }
    addProductToCart(productId);

}
document.addEventListener("click", addToCart);

function addPendingProduct(){
    if(!requireLogin || !getCurrentUser()){
        return;
    }
    const pendingId = Number(localStorage.getItem("pendingProductId"));
    if(!pendingId){
        return;
    }
    localStorage.removeItem("pendingProductId");
    addProductToCart(pendingId);
}
//الحسابات والشحن
function renderSummary(cart){
    let subtotal = 0;
    cart.forEach(function(item){
        subtotal += Number(item.price) * Number(item.quantity);
    });

    let shipping = 0;
    if(cart.length > 0 && subtotal < freeShippingLimit){
        shipping = shippingCost;
    }

    // الخصم
    let discount = 0;
    if(cart.length > 0){
        discount = discountAmount;
    }

    // Total
    let total = subtotal + shipping - discount;
    if(total < 0){
        total = 0;
    }

    //تفاصيل الخصم
    const subtotalElement = document.getElementById("summary-subtotal");
    if(subtotalElement){
        subtotalElement.textContent = formatPrice(subtotal);
    }

    const shippingElement = document.getElementById("summary-shipping");
    if(shippingElement){
        if(cart.length === 0){
            shippingElement.textContent = "—";
            shippingElement.classList.remove("free");
        }
        else if(shipping === 0){
            shippingElement.textContent = "Free";
            shippingElement.classList.add("free");
        }
        else{
            shippingElement.textContent = formatPrice(shipping);
            shippingElement.classList.remove("free");
        }
    }

    const discountLine = document.getElementById("summary-discount-line");
    const discountElement = document.getElementById("summary-discount");
    if(discountLine && discountElement){
        discountLine.hidden = discount <= 0;
        discountElement.textContent = " − " + formatPrice(discount);
    }

    const totalElement = document.getElementById("summary-total");
    if(totalElement){
        totalElement.textContent = formatPrice(total);
    }

    //   الشحن المجانى
    const shipCaption = document.getElementById("ship-caption");
    if(shipCaption){
        if(cart.length === 0){
            shipCaption.textContent = "Free shipping over 2,000 EGP";
        }
        else if(subtotal >= freeShippingLimit){
            shipCaption.textContent = "You have unlocked free delivery";
        }
        else{
            shipCaption.textContent = "Add " + formatPrice(freeShippingLimit - subtotal) + " more for free delivery";
        }
    }

    const shipFill = document.getElementById("ship-fill");
    if(shipFill){
        let percentage = (subtotal / freeShippingLimit) * 100;
        if(percentage > 100){
            percentage = 100;
        }
        shipFill.style.width = percentage + "%";
    }
}

//   الجملة اللي تحت عند اختيار القطعه 
function renderHeroText(cart){
    const heroText = document.getElementById("cart-hero-text");
    if(!heroText){
        return;
    }

    let pieces = 0;
    cart.forEach(function(item){
        pieces += Number(item.quantity);
    });

    if(pieces === 0){
        heroText.textContent = "Your bag is empty · online across Egypt";
    }
    else if(pieces === 1){
        heroText.textContent = "1 piece selected · online across Egypt";
    }
    else{
        heroText.textContent = pieces + " pieces selected · online across Egypt";
    }
}


//رسم السلةمن html
function renderCart(){
    
    if(!cartContainer){
        return;
    }

    const cart = getCart();
    renderHeroText(cart);
    renderSummary(cart);

    if(cart.length === 0){
        cartContainer.innerHTML = `
        <div class="empty-state">
        <span class="empty-mark" aria-hidden="true">&#9825;</span>
        <h3>Your bag is empty</h3>
        <a class="btn-ghost" href="products.html"><span>Go to the collection</span></a>
        </div>
        `;
        return;
    }

    let cartHTML = "";
    cart.forEach((item) => {
        cartHTML +=`
        <article class="cart-item">
            <div class="cart-product">
                <img src="${item.image}" alt="${item.name}">

                <div>
                    <h3>${item.name}</h3>
                    <p class="cart-variant">${item.category}</p>
                </div>
            </div>

            <p class="cart-price">${formatPrice(item.price)}</p>

            <div class="qty">
                <button
                    type="button"
                    data-action="decrease"
                    data-id="${item.id}"
                    aria-label="Decrease quantity">
                    -
                </button>
                <span>${item.quantity}</span>

                <button
                    type="button"
                    data-action="increase"
                    data-id="${item.id}"
                    aria-label="Increase quantity">
                    +
                </button>
            </div>
            <button
                    type="button"
                    class="cart-remove"
                    data-id="${item.id}"
                    data-action="remove"
                    aria-label="Remove ${item.name}">&times;
                </button>
        </article>
    
    `;
});

cartContainer.innerHTML = cartHTML;
}

//ازرار السلة
if(cartContainer){
    cartContainer.addEventListener("click",(event)=>{
        const button = event .target.closest("[data-action]");
        if(!button){
            return;
        }

        const productId = Number(button.getAttribute("data-id"));
        const action = button.getAttribute("data-action");
        if(!productId){
            return;
        }

        let cart = getCart();

        const product = cart.find(function(item){
            return Number(item.id) == productId;
        });

        if(!product){
            return;
        }

        if (action === "increase") {

        product.quantity += 1;

        } 
        else if (action === "decrease") {

        product.quantity -= 1;
        
        if (product.quantity <= 0) {
            cart = cart.filter(function(item){
                return Number(item.id) !== productId;
            });
        }

        } 
        //الكمية صفر احذف المنتج
        else if (action === "remove") {
            cart = cart.filter(
            function(item){
                return Number(item.id) !== productId
            });
        }

        saveCart(cart);

        renderCart();

        updateBagCount();

    });

}


renderCart();
addPendingProduct();
