export default {
  cartCheckoutTest: {
    addToCartBtn: '[data-qa="cart_offer_addToCart"]',
    cartCounterSelect: '[data-qa="btn_cart_count"]',
    checkOutBtn: '#checkout-btn',
    checkOutItemTitle: 'h1[class]',
    productTitle: 'h1[data-qa]',
    searchFirstItem: '[id*="productBox"]',
    serchInput: '#searchBar',
  },
  filteringTest: {
    blackCheckBox: '[for="filters-black"]',
    gbCapacityCheck: '[for*="256"]',
    iphoneCategory: 'a[href*="/apple-mobiles/"]',
    mobileCategory: '[class="swiper-slide"] [href="/uae-en/mobiles/"]',
    networkCheckBox: '[for*="network_new-5g"]',
    priceSortAsc: '[data-qa="price-asc"]',
    productDisc: 'div[data-qa="product-name"]',
    productPrice: '[class="amount"]',
    resultHeader: '[data-qa="searchHeader"]',
    resultProduct: '.productContainer',
    sortSelect: '[data-qa*="select-menu"]',
    yearCheckBox: (year) => `[for*="year-${year}"]`,
  },
  locationTest: {
    locationSelect: '[data-qa="locationSelector"]',
    ModalLocationSelect: '[data-qa*="countrySelector"] span',
  },
  wishlistTest: {
    loginBtn: '#login-submit',
    wishlistBtn: '[href="/wishlist/"]',
    wishlistModal: '.withTransition',
  },
};
