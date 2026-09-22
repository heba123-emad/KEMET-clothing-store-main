// =========================
// ELEMENTS
// =========================

const productsContainer = document.getElementById("products-container");
const showingCount = document.getElementById("showing-count");
const totalCount = document.getElementById("total-count");

const prevPage = document.getElementById("prev-page");
const nextPage = document.getElementById("next-page");
const pageNumbers = document.getElementById("page-numbers");

// =========================
// HERO ELEMENTS
// =========================

const pageHero = document.getElementById("page-hero");
const productQuickView = document.getElementById("product-quick-view");

const quickViewImage = document.getElementById("quick-view-image");
const quickViewColors = document.getElementById("quick-view-colors");
const quickViewAdd = document.getElementById("quick-view-add");
const quickViewBack = document.getElementById("quick-view-back");

// =========================
// SORT ELEMENTS
// =========================

const sortInputs = document.querySelectorAll('input[name="sort"]');
const sortSummary = document.getElementById("sort-summary");

// =========================
// PAGINATION SETTINGS
// =========================

const productsPerPage = 18;

let currentPage = 1;
let filteredProducts = [];
let currentSort = "featured";

// =========================
// CATEGORY INFORMATION
// =========================

const categoryInfo = {
  "T-Shirts": {
    label: "ESSENTIALS / 01",
    title: "T-Shirts",
    description:
      "Everyday silhouettes reinterpreted through the KEMET identity, cut in heavyweight Egyptian cotton.",
    count: 24,
  },

  Shirts: {
    label: "STRUCTURE / 02",
    title: "Shirts",
    description:
      "Tailored lines and desert-weight cloth, built for long days and warm evenings.",
    count: 18,
  },

  Hoodies: {
    label: "FOUNDATION / 03",
    title: "Hoodies",
    description:
      "Heavyweight layers combining Egyptian identity with modern everyday comfort.",
    count: 12,
  },

  Jeans: {
    label: "FORM / 04",
    title: "Jeans",
    description:
      "Structured denim silhouettes designed for everyday movement and lasting wear.",
    count: 16,
  },

  Pants: {
    label: "UTILITY / 05",
    title: "Pants",
    description:
      "Clean cuts and practical forms built around the modern KEMET wardrobe.",
    count: 14,
  },

  Dresses: {
    label: "ELEGANCE / 06",
    title: "Dresses",
    description:
      "Contemporary silhouettes shaped with Egyptian character and effortless movement.",
    count: 10,
  },

  Jackets: {
    label: "OUTER / 07",
    title: "Jackets",
    description:
      "Defined outer layers combining strong structure with the KEMET visual identity.",
    count: 8,
  },

  Sets: {
    label: "COMPOSITION / 08",
    title: "Sets",
    description:
      "Coordinated silhouettes designed to create a complete modern KEMET look.",
    count: 9,
  },

  Accessories: {
    label: "ESSENTIALS / 09",
    title: "Accessories",
    description:
      "Essential pieces inspired by Egyptian symbols and reinterpreted for everyday life.",
    count: 7,
  },
};

// =========================
// SORT PRODUCTS
// =========================

function sortProducts(products) {
  const sortedProducts = [...products];

  switch (currentSort) {
    // -------------------------
    // FEATURED
    // -------------------------
    case "featured":
      // Keep original JSON order
      return sortedProducts;

    // -------------------------
    // NEWEST
    // -------------------------
    case "newest":
      return sortedProducts.sort((a, b) => b.id - a.id);

    // -------------------------
    // PRICE LOW TO HIGH
    // -------------------------
    case "price-low":
      return sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));

    // -------------------------
    // PRICE HIGH TO LOW
    // -------------------------
    case "price-high":
      return sortedProducts.sort((a, b) => Number(b.price) - Number(a.price));

    default:
      return sortedProducts;
  }
}

// =========================
// UPDATE SORT TITLE
// =========================

function updateSortSummary() {
  if (!sortSummary) {
    return;
  }

  const sortLabels = {
    featured: "Sort: Featured",
    newest: "Sort: Newest",
    "price-low": "Sort: Price: low to high",
    "price-high": "Sort: Price: high to low",
  };

  sortSummary.textContent = sortLabels[currentSort] || "Sort: Featured";
}

// =========================
// SORT EVENT
// =========================

sortInputs.forEach((input) => {
  input.addEventListener("change", () => {
    currentSort = input.value;

    updateSortSummary();

    // Start from page 1
    currentPage = 1;

    // Re-sort products
    filteredProducts = sortProducts(filteredProducts);

    // Display again
    displayPage(1);
  });
});

// =========================
// DISPLAY PRODUCTS
// =========================

function displayProducts(products) {
  productsContainer.innerHTML = "";

  // =========================
  // NO PRODUCTS
  // =========================

  if (products.length === 0) {
    productsContainer.innerHTML = `
      <div class="empty-state">
        <h2>No products found</h2>

        <p>
          We couldn't find any products in this category.
        </p>
      </div>
    `;

    return;
  }

  // =========================
  // DISPLAY PRODUCTS
  // =========================

  products.forEach((product) => {
    productsContainer.innerHTML += `
      <article class="product-card">

        <div class="product-media">

          ${
            product.badge
              ? `
                <span class="badge badge-new">
                  ${product.badge}
                </span>
              `
              : ""
          }

          <img
            src="${product.image}"
            alt="${product.name}"
          >

          <input
            class="wish-input"
            type="checkbox"
            id="wish-${product.id}"
          >

          <label
            class="wish"
            for="wish-${product.id}"
          >
            <span class="heart"></span>

            <span class="sr-only">
              Save ${product.name} to wishlist
            </span>
          </label>

          <button
            class="quick-view"
            type="button"
            data-id="${product.id}"
          >
            Quick view
          </button>

        </div>

        <div class="product-body">

          <p class="product-cat">
            ${product.category}
          </p>

          <h3 class="product-name">
            ${product.name}
          </h3>

          <div class="product-meta">

            <p class="product-price">
              ${product.price} EGP
            </p>

            <div class="swatches">
              ${product.colors
                .map(
                  (color) => `
                      <span
                        class="sw-${color}"
                        title="${color}"
                      ></span>
                    `,
                )
                .join("")}
            </div>

          </div>

          <button
            class="add-btn"
            type="button"
            data-id="${product.id}"
          >
            Add to bag
          </button>

        </div>

      </article>
    `;
  });
}

// =========================
// QUICK VIEW
// =========================

document.addEventListener("click", (event) => {
  const quickViewButton = event.target.closest(".quick-view");

  if (!quickViewButton) {
    return;
  }

  // =========================
  // GET PRODUCT ID
  // =========================

  const productId = Number(quickViewButton.dataset.id);

  // =========================
  // FIND PRODUCT
  // =========================

  const product = filteredProducts.find((product) => product.id === productId);

  if (!product) {
    console.error("Product not found");
    return;
  }

  // =========================
  // GET CATEGORY INFO
  // =========================

  const info = categoryInfo[product.category] || {
    label: "ESSENTIALS / 01",

    title: product.category,

    description:
      "Modern Egyptian silhouettes reinterpreted through the KEMET identity.",

    count: 1,
  };

  // =========================
  // QUICK VIEW ELEMENTS
  // =========================

  const quickViewBreadcrumb = document.getElementById("quick-view-breadcrumb");

  const quickViewLabel = document.getElementById("quick-view-label");

  const quickViewName = document.getElementById("quick-view-name");

  const quickViewDescription = document.getElementById(
    "quick-view-description",
  );

  const quickViewCount = document.getElementById("quick-view-count");

  // =========================
  // HIDE NORMAL HERO
  // =========================

  if (pageHero) {
    pageHero.hidden = true;
  }

  // =========================
  // SHOW QUICK VIEW HERO
  // =========================

  if (productQuickView) {
    productQuickView.hidden = false;
  }

  // =========================
  // BREADCRUMB
  // =========================

  if (quickViewBreadcrumb) {
    quickViewBreadcrumb.textContent = product.category;
  }

  // =========================
  // LABEL
  // =========================

  if (quickViewLabel) {
    quickViewLabel.textContent = info.label;
  }

  // =========================
  // TITLE
  // =========================

  if (quickViewName) {
    quickViewName.textContent = info.title;
  }

  // =========================
  // DESCRIPTION
  // =========================

  if (quickViewDescription) {
    quickViewDescription.textContent = info.description;
  }

  // =========================
  // PIECES COUNT
  // =========================

  if (quickViewCount) {
    quickViewCount.textContent = info.count;
  }

  // =========================
  // PRODUCT IMAGE
  // =========================

  if (quickViewImage) {
    quickViewImage.innerHTML = `
      <img
        src="${product.image}"
        alt="${product.name}"
      >
    `;
  }

  // =========================
  // PRODUCT COLORS
  // =========================

  if (quickViewColors) {
    quickViewColors.innerHTML = product.colors
      .map(
        (color) => `
          <span
            class="sw-${color}"
            title="${color}"
          ></span>
        `,
      )
      .join("");
  }

  // =========================
  // SAVE CURRENT PRODUCT
  // =========================

  if (quickViewAdd) {
    quickViewAdd.dataset.id = product.id;
  }

  // =========================
  // SCROLL TO TOP
  // =========================

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// =========================
// BACK TO SHOP
// =========================

if (quickViewBack) {
  quickViewBack.addEventListener("click", () => {
    // =========================
    // HIDE QUICK VIEW HERO
    // =========================

    if (productQuickView) {
      productQuickView.hidden = true;
    }

    // =========================
    // SHOW NORMAL HERO
    // =========================

    if (pageHero) {
      pageHero.hidden = false;
    }

    // =========================
    // SCROLL TO TOP
    // =========================

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// =========================
// DISPLAY CURRENT PAGE
// =========================

function displayPage(page) {
  currentPage = page;

  // =========================
  // CALCULATE INDEXES
  // =========================

  const startIndex = (currentPage - 1) * productsPerPage;

  const endIndex = startIndex + productsPerPage;

  // =========================
  // PRODUCTS FOR CURRENT PAGE
  // =========================

  const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

  // =========================
  // DISPLAY PRODUCTS
  // =========================

  displayProducts(productsToDisplay);

  // =========================
  // UPDATE SHOWING COUNT
  // =========================

  showingCount.textContent = productsToDisplay.length;

  // =========================
  // UPDATE PAGINATION
  // =========================

  updatePagination();
}

// =========================
// CREATE PAGINATION
// =========================

function updatePagination() {
  pageNumbers.innerHTML = "";

  // =========================
  // TOTAL PAGES
  // =========================

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // =========================
  // NO PAGINATION
  // =========================

  if (totalPages <= 1) {
    prevPage.disabled = true;
    nextPage.disabled = true;
    return;
  }

  // =========================
  // CREATE PAGE BUTTONS
  // =========================

  for (let page = 1; page <= totalPages; page++) {
    const button = document.createElement("button");

    button.type = "button";

    button.textContent = page;

    // =========================
    // ACTIVE PAGE
    // =========================

    if (page === currentPage) {
      button.classList.add("active");
    }

    // =========================
    // PAGE CLICK
    // =========================

    button.addEventListener("click", () => {
      displayPage(page);

      window.scrollTo({
        top: productsContainer.offsetTop - 100,
        behavior: "smooth",
      });
    });

    pageNumbers.appendChild(button);
  }

  // =========================
  // PREVIOUS
  // =========================

  prevPage.disabled = currentPage === 1;

  // =========================
  // NEXT
  // =========================

  nextPage.disabled = currentPage === totalPages;
}

// =========================
// PREVIOUS PAGE
// =========================

prevPage.addEventListener("click", () => {
  if (currentPage > 1) {
    displayPage(currentPage - 1);

    window.scrollTo({
      top: productsContainer.offsetTop - 100,
      behavior: "smooth",
    });
  }
});

// =========================
// NEXT PAGE
// =========================

nextPage.addEventListener("click", () => {
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (currentPage < totalPages) {
    displayPage(currentPage + 1);

    window.scrollTo({
      top: productsContainer.offsetTop - 100,
      behavior: "smooth",
    });
  }
});

// =========================
// GET CATEGORY FROM URL
// =========================

const params = new URLSearchParams(window.location.search);

const category = params.get("category");

// =========================
// UPDATE ACTIVE CATEGORY
// =========================

function updateActiveCategory() {
  const categoryLinks = document.querySelectorAll(".cat-nav a[data-category]");

  categoryLinks.forEach((link) => {
    const linkCategory = link.dataset.category;

    if ((!category && linkCategory === "All") || linkCategory === category) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

// =========================
// FETCH PRODUCTS
// =========================

fetch("./products.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load products");
    }

    return response.json();
  })

  .then((data) => {
    // =========================
    // TOTAL PRODUCTS
    // =========================

    totalCount.textContent = data.length;

    // =========================
    // HERO PRODUCT COUNT
    // =========================

    const heroProductCount = document.getElementById("hero-product-count");

    if (heroProductCount) {
      heroProductCount.textContent = data.length;
    }

    // =========================
    // START WITH ALL PRODUCTS
    // =========================

    filteredProducts = [...data];

    // =========================
    // FILTER BY CATEGORY
    // =========================

    if (category) {
      filteredProducts = data.filter(
        (product) => product.category === category,
      );

      // Update total count for category
      totalCount.textContent = filteredProducts.length;
    }

    // =========================
    // UPDATE ACTIVE CATEGORY
    // =========================

    updateActiveCategory();

    // =========================
    // APPLY DEFAULT SORT
    // =========================

    filteredProducts = sortProducts(filteredProducts);

    // =========================
    // UPDATE SORT UI
    // =========================

    updateSortSummary();

    // =========================
    // RESET PAGE
    // =========================

    currentPage = 1;

    // =========================
    // DISPLAY FIRST PAGE
    // =========================

    displayPage(1);
  })

  .catch((error) => {
    console.error("Error loading products:", error);

    productsContainer.innerHTML = `

      <div class="empty-state">

        <h2>
          Something went wrong
        </h2>

        <p>
          We couldn't load the products.
          Please try again.
        </p>

      </div>

    `;
  });
