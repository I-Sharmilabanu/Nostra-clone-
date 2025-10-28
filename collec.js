const sidenav = document.getElementById("sidenav");
const menuicon = document.getElementById("menuicon");
const closenav = document.getElementById("close-nav");


menuicon.addEventListener("click", function () {
  sidenav.style.left = "0";
});

closenav.addEventListener("click", function () {
  sidenav.style.left = "-50%";
});
const banner = document.getElementById('signup-banner');
    const closeBtn = document.getElementById('close-banner');

    closeBtn.addEventListener('click', () => {
        banner.style.display = 'none';
    });

var searchInput = document.getElementById("search-bar");
var items = document.querySelectorAll(".product-item");

searchInput.addEventListener("input", function () {
    var filter = searchInput.value.toLowerCase();
    items.forEach(function (item) {
        var title = item.querySelector("h1").textContent.toLowerCase();
        if (title.includes(filter)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
});

const checkboxes = document.querySelectorAll('.filter-checkbox');
const products = document.querySelectorAll('.product-item');

checkboxes.forEach(cb => cb.addEventListener('change', filterProducts));

function filterProducts() {
    
    const activeFilters = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.dataset.keyword.toLowerCase());

    products.forEach(product => {
        const keywords = product.dataset.keywords.toLowerCase().split(' ');

        
        const match = activeFilters.every(filter => keywords.includes(filter));

        product.style.display = match || activeFilters.length === 0 ? 'flex' : 'none';
    });
}


