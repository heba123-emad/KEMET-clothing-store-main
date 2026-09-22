// مسؤوليته:

// Add
// Remove
// Increase
// Decrease
// Calculate
// Save
// Display
// الـFlow الأساسي
// products.js
//      ↓
// Add Product
//      ↓
// localStorage
//      ↓
// cart
//      ↓
// cart.js
//      ↓
// cart.html
// cart.js بالتفصيل
// 1. قراءة Cart

// يقرأ:

// localStorage.getItem("cart")

// مثلاً:

// [
//   {
//     id: 1,
//     name: "KEMET SIGNATURE TEE",
//     price: 850,
//     quantity: 2
//   }
// ]
// 2. Add to Bag

// لما المستخدم يضغط:

// Add to bag

// في products.html:

// Product
//    ↓
// cart.js
//    ↓
// هل المنتج موجود؟
// لو مش موجود:
// Add product
// quantity = 1
// لو موجود:
// quantity++

// مثلاً:

// قبل:
// TEE × 1

// Add to bag

// بعد:
// TEE × 2
// 3. Remove Product

// المستخدم يضغط:

// ×

// فتكون:

// cart
//  ↓
// remove item
//  ↓
// localStorage
//  ↓
// update UI
// 4. Increase Quantity

// زر:

// +

// مثلاً:

// TEE × 1

// +

// TEE × 2
// 5. Decrease Quantity

// زر:

// -

// مثلاً:

// TEE × 2

// -

// TEE × 1

// ولو وصلت:

// quantity = 0

// نقدر نحذف المنتج من الـCart.

// 6. Calculate Subtotal

// مثلاً:

// TEE       850 × 1 = 850
// HOODIE   1450 × 1 = 1450
// JEANS    1600 × 1 = 1600
// -------------------------
// Subtotal          3900
// 7. Shipping

// عندك في التصميم:

// Free shipping over 2,000 EGP

// فـcart.js يقدر يعمل:

// Subtotal >= 2000
//         ↓
// Shipping = Free

// ولو أقل من 2000:

// Shipping = shipping cost

// لكن قيمة الشحن نفسها لازم نحددها في Business Rule قبل ما نثبتها في الكود.

// 8. Discount

// في الـHTML الحالي عندك:

// Member discount
// - 200 EGP

// لكن هنا لازم ناخد قرار:

// هل الـ200 EGP:

// ثابت لكل مستخدم؟
// نسبة؟
// للمستخدم المسجل فقط؟
// مجرد Demo في التصميم؟

// أنا لا أنصح نبرمجها كـ200 ثابت دلوقتي قبل تحديد الـBusiness Rule.

// 9. Total

// المعادلة:

// Subtotal
// + Shipping
// - Discount
// = Total

// مثلاً:

// 3900
// + 0
// - 200
// ------
// 3700 EGP
// 10. تحديث Bag Count

// cart.js بعد أي تغيير يعمل:

// Cart changed
//      ↓
// updateBagCount()
//      ↓
// Navbar

// وده بيتوافق مع main.js اللي عملناه.

// مثلاً:

// Bag 0

// بعد إضافة منتج:

// Bag 1

// بعد إضافة نفس المنتج مرة ثانية:

// Bag 2
// 11. Render Cart

// بدل ما cart.html يكون فيه منتجات ثابتة:

// <article class="cart-item">

// المفروض في النهاية يكون عندنا Container:

// <div id="cart-container"></div>

// وcart.js هو اللي يعمل:

// localStorage
//       ↓
// cart[]
//       ↓
// renderCart()
//       ↓
// HTML

// وده مهم جدًا لأن الـcart.html الحالي فيه 3 منتجات مكتوبة يدويًا بالفعل.