// --- 1. CONFIGURATION & DATA ---
const sampleProducts = [
    // Electronics (15 products)
    { id: 101, title: "Vintage Camera", category: "electronics", type: "auction", price: 12000, owner: "system", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500" },
    { id: 102, title: "Wireless Headphones", category: "electronics", type: "fixed", price: 59.99, owner: "system", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 103, title: "Gaming Laptop", category: "electronics", type: "auction", price: 150000.00, owner: "system", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500" },
    { id: 104, title: "Mechanical Keyboard", category: "electronics", type: "fixed", price: 1290.99, owner: "system", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500" },
    { id: 105, title: "4K Monitor", category: "electronics", type: "fixed", price: 34900.00, owner: "system", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500" },
    
    // Fashion
    { id: 201, title: "Leather Jacket", category: "fashion", type: "fixed", price: 150.00, owner: "system", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500" },
    { id: 202, title: "Running Shoes", category: "fashion", type: "fixed", price: 159.00, owner: "system", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
    { id: 203, title: "Designer Sunglasses", category: "fashion", type: "auction", price: 120.00, owner: "system", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500" },
    { id: 204, title: "Denim Jeans", category: "fashion", type: "fixed", price: 500.00, owner: "system", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500" },
    { id: 205, title: "Winter Coat", category: "fashion", type: "auction", price: 180.00, owner: "system", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500" },
    
    // Collectibles
    { id: 301, title: "Antique Vase", category: "collectibles", type: "auction", price: 8000.00, owner: "system", image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=500" },
    { id: 302, title: "Vintage Vinyl Records", category: "collectibles", type: "auction", price: 750.00, owner: "system", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500" },
    { id: 303, title: "Comic Book Collection", category: "collectibles", type: "auction", price: 350.00, owner: "system", image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=500" },
    { id: 304, title: "Rare Coins Set", category: "collectibles", type: "auction", price: 1899.00, owner: "system", image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=500" },
    { id: 305, title: "Vintage Poster", category: "collectibles", type: "fixed", price: 200.00, owner: "system", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500" },
    
    // Home & Living
    { id: 401, title: "Modern Coffee Table", category: "home", type: "fixed", price: 1999.00, owner: "system", image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=500" },
    { id: 402, title: "Ergonomic Office Chair", category: "home", type: "fixed", price: 589.00, owner: "system", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500" },
    { id: 403, title: "Table Lamp", category: "home", type: "fixed", price: 150.00, owner: "system", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500" },
    { id: 404, title: "Throw Pillows Set", category: "home", type: "fixed", price: 400.00, owner: "system", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500" },
    { id: 405, title: "Area Rug", category: "home", type: "auction", price: 120.00, owner: "system", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=500" },
    
    // Art
    { id: 501, title: "Abstract Painting", category: "art", type: "auction", price: 450.00, owner: "system", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500" },
    { id: 502, title: "Sculpture Bronze", category: "art", type: "auction", price: 680.00, owner: "system", image: "https://images.unsplash.com/photo-1578926078828-d7f9e74c4fea?w=500" },
    { id: 503, title: "Photography Print", category: "art", type: "fixed", price: 120.00, owner: "system", image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=500" },
    { id: 504, title: "Watercolor Landscape", category: "art", type: "auction", price: 280.00, owner: "system", image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=500" },
    { id: 505, title: "Digital Art NFT", category: "art", type: "auction", price: 350.00, owner: "system", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500" },
    
    // Sports & Fitness
    { id: 601, title: "Yoga Mat Premium", category: "sports", type: "fixed", price: 100.00, owner: "system", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500" },
    { id: 602, title: "Dumbbells Set", category: "sports", type: "fixed", price: 400.00, owner: "system", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500" },
    { id: 603, title: "Mountain Bike", category: "sports", type: "auction", price: 300000.00, owner: "system", image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=500" },
    { id: 604, title: "Tennis Racket", category: "sports", type: "fixed", price: 125.00, owner: "system", image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=500" },
];

function initData() {
    const storedData = localStorage.getItem('products');
    if (!storedData) {
        localStorage.setItem('products', JSON.stringify(sampleProducts));
        return sampleProducts;
    }
    return JSON.parse(storedData);
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
}

function getOrders() {
    return JSON.parse(localStorage.getItem('orders')) || [];
}

// --- 2. GLOBAL SETUP ---
document.addEventListener("DOMContentLoaded", () => {
    
    // A. Inject Navbar
    const navDiv = document.getElementById('global-navbar');
    if (navDiv) {
        const cartCount = getCart().length;
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        let authSection = '';
        if (currentUser) {
            authSection = `
                <li class="nav-item dropdown">
                    <button class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown">
                        Welcome, ${currentUser.name}
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="account.html">My Account</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item text-danger" href="#" onclick="logout()">Logout</a></li>
                    </ul>
                </li>`;
        } else {
            authSection = `
                <li class="nav-item">
                    <a class="nav-link" href="account.html">Sign Up / Login</a>
                </li>`;
        }

        navDiv.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
            <div class="container">
                <a class="navbar-brand fw-bold" href="index.html">🛍️ DualDeal</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="shop.html">Shop All</a></li>
                        <li class="nav-item"><a class="nav-link" href="sell.html">Sell Item</a></li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link btn btn-outline-secondary text-white px-3 mx-2" href="cart.html">
                                Cart <span class="badge bg-danger rounded-pill" id="nav-cart-count">${cartCount}</span>
                            </a>
                        </li>
                        ${authSection}
                    </ul>
                </div>
            </div>
        </nav>`;
    }

    // B. Inject Bid Modal
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = `
    <div class="modal fade" id="bidModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-warning">
                    <h5 class="modal-title" id="bidModalTitle">Place Bid</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="card mb-3 border-0">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img id="modalImg" src="" class="img-fluid rounded-start" style="height:100px; object-fit:cover;">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body py-0">
                                    <h5 class="card-title" id="modalPrdTitle">Product</h5>
                                    <p class="card-text text-muted">Current Bid:</p>
                                    <h3 class="text-primary" id="modalPrdPrice">Rs.0.00</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold">Your Offer (Rs.)</label>
                        <input type="number" id="bidInput" class="form-control form-control-lg" placeholder="Enter amount...">
                        <div class="form-text text-danger" id="bidError"></div>
                    </div>
                    <input type="hidden" id="modalPrdId">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-success fw-bold" onclick="submitBid()">Place Bid</button>
                </div>
            </div>
        </div>
    </div>`;
    document.body.appendChild(modalContainer);

    // C. Inject Alert Modal
    const alertModalContainer = document.createElement('div');
    alertModalContainer.innerHTML = `
    <div class="modal fade" id="alertModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title">Notification</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body" id="alertModalBody">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>`;
    document.body.appendChild(alertModalContainer);

    // D. Run Global Checks
    checkAuctionTimers();

    // E. Route Logic
    if (document.getElementById('home-featured')) runHomePage();
    if (document.getElementById('shop-grid')) runShopPage();
    if (document.getElementById('cart-container')) runCartPage();
    if (document.getElementById('sell-form')) runSellPage();
    if (document.getElementById('login-section')) runAccountPage();
});

function showModalAlert(message) {
    const modalBody = document.getElementById('alertModalBody');
    if (modalBody) {
        modalBody.innerText = message;
        const alertModal = new bootstrap.Modal(document.getElementById('alertModal'));
        alertModal.show();
    } else {
        // Fallback if modal not initialized for some reason
        console.log("Modal not ready: " + message);
    }
}

// Logic to check for expired auctions
function checkAuctionTimers() {
    let products = initData();
    let orders = getOrders();
    let dataChanged = false;
    const now = Date.now();

    // Filter out expired auctions that have bids
    const activeProducts = products.filter(p => {
        if (p.type === 'auction' && p.bidEndTime && p.lastBidder) {
            if (now > p.bidEndTime) {
                // Auction ended, add to winner's order history
                const newOrder = {
                    id: Date.now() + Math.random(),
                    date: new Date().toLocaleDateString(),
                    items: [p],
                    total: p.price.toFixed(2),
                    user: p.lastBidder // Assign to the last bidder
                };
                orders.push(newOrder);
                dataChanged = true;
                return false; // Remove from shop
            }
        }
        return true; // Keep product in shop
    });

    if (dataChanged) {
        localStorage.setItem('products', JSON.stringify(activeProducts));
        localStorage.setItem('orders', JSON.stringify(orders));
        // If on shop page, refresh grid
        if (document.getElementById('shop-grid')) {
            const grid = document.getElementById('shop-grid');
            grid.innerHTML = activeProducts.map(p => createCardHTML(p)).join('');
        }
    }
}

// --- 3. PAGE LOGIC ---

function runHomePage() {
    const products = initData();
    const featured = products.slice(0, 4);
    document.getElementById('home-featured').innerHTML = featured.map(p => createCardHTML(p)).join('');
}

function runShopPage() {
    const products = initData();
    const grid = document.getElementById('shop-grid');
    renderGrid(products);

    const filterBtn = document.getElementById('btn-filter');
    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            const cat = document.getElementById('filter-category').value;
            // Handle case where element might not exist or be empty
            const priceInput = document.getElementById('filter-price');
            const maxPrice = priceInput && priceInput.value ? Number(priceInput.value) : Infinity;
            
            const filtered = products.filter(p => {
                const catMatch = (cat === 'all' || p.category === cat);
                const priceMatch = (p.price <= maxPrice);
                return catMatch && priceMatch;
            });
            renderGrid(filtered);
        });
    }

    function renderGrid(items) {
        grid.innerHTML = items.length ? items.map(p => createCardHTML(p)).join('') : '<h3 class="text-center p-5">No items found</h3>';
    }
}

function runSellPage() {
    document.getElementById('sell-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            showModalAlert("You must log in to list an item!");
            setTimeout(() => window.location.href = "account.html", 2000);
            return;
        }

        const newProduct = {
            id: Date.now(),
            title: document.getElementById('title').value,
            category: document.getElementById('category').value,
            type: document.getElementById('type').value,
            price: Number(document.getElementById('price').value),
            image: document.getElementById('image').value,
            owner: currentUser.email
        };
        
        const products = initData();
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        showModalAlert("Listed Successfully!");
        setTimeout(() => window.location.href = "shop.html", 2000);
    });
}

function runCartPage() {
    const cart = getCart();
    const container = document.getElementById('cart-container');
    const summaryList = document.getElementById('summary-list');
    const totalEl = document.getElementById('cart-total');
    const tax = document.getElementById('tax');
    
    if (cart.length === 0) {
        container.innerHTML = `<div class="alert alert-secondary">Cart Empty</div>`;
        if(summaryList) summaryList.innerHTML = '';
        if(totalEl) totalEl.innerText = "0.00";
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="card mb-3 shadow-sm">
            <div class="row g-0 align-items-center p-2">
                <div class="col-2"><img src="${item.image}" class="img-fluid rounded" style="width:80px; height:80px; object-fit:cover;"></div>
                <div class="col-8 px-3">
                    <h5 class="mb-0">${item.title}</h5>
                    <small class="text-muted">${item.category}</small>
                </div>
                <div class="col-2 text-end">
                    <div class="fw-bold">Rs.${item.price}</div>
                    <button class="btn btn-sm text-danger p-0" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        </div>`).join('');

    let total = 0;
    const taxRate = 0.18;

    if(cart.length!=0){
        tax.innerHTML=`<div class="d-flex justify-content-between small mb-2">
                            <span>Tax</span>
                            <span>0.18</span>
                        </div>`;
    }
    
    if(summaryList) {
        summaryList.innerHTML = cart.map(item => {
            total += item.price;
            return `<div class="d-flex justify-content-between small mb-2">
                        <span>${item.title}</span>
                        <span>Rs.${item.price}</span>
                    </div>`;
        }).join('');
    }
    
    const totalWithTax = total * (1 + taxRate);
    if(totalEl) totalEl.innerText = totalWithTax.toFixed(2);
}

function runAccountPage() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const loginSec = document.getElementById('login-section');
    const profileSec = document.getElementById('profile-section');

    if (currentUser) {
        loginSec.classList.add('d-none');
        profileSec.classList.remove('d-none');
        
        document.getElementById('user-name-display').innerText = currentUser.name;
        document.getElementById('user-email-display').innerText = currentUser.email;

        // --- 1. ORDER HISTORY ---
        const orders = getOrders();
        const orderList = document.getElementById('order-history-list');
        const myOrders = orders.filter(o => o.user === currentUser.email);

        if (myOrders.length === 0) {
            orderList.innerHTML = '<p class="text-muted text-center">No past orders.</p>';
        } else {
            orderList.innerHTML = `<div class="table-responsive"><table class="table table-striped">
                <thead><tr><th>Date</th><th>Name Of Items</th><th>Number Of Items</th><th>Total</th></tr></thead>
                <tbody>
                ${myOrders.map(o => `
                    <tr>
                        <td>${o.date}</td>
                        <td>${o.items.map(i => i.title).join(', ')}</td> 
                        <td>${o.items.length}</td>
                        <td>Rs.${o.total}</td>
                    </tr>
                `).join('')}
                </tbody></table></div>`;
        }

        // --- 2. WISHLIST ---
        const wishlist = getWishlist();
        const wishlistGrid = document.getElementById('wishlist-grid');
        
        if (wishlist.length === 0) {
            wishlistGrid.innerHTML = '<div class="col-12 text-muted">No items in wishlist.</div>';
        } else {
            wishlistGrid.innerHTML = wishlist.map(p => `
                 <div class="col-md-3 col-6 mb-3">
                    <div class="card h-100 shadow-sm">
                        <img src="${p.image}" class="card-img-top" style="height:120px; object-fit:cover;">
                        <div class="card-body p-2">
                            <h6 class="card-title text-truncate">${p.title}</h6>
                            <span class="badge bg-danger">❤️ Saved</span>
                        </div>
                        <button class="btn btn-sm btn-outline-dark w-100 rounded-0" onclick="removeFromWishlist(${p.id})">Remove</button>
                    </div>
                </div>
            `).join('');
        }

        // --- 3. MY LISTINGS ---
        const allProducts = initData();
        const myListings = allProducts.filter(p => p.owner === currentUser.email);
        const listingGrid = document.getElementById('my-listings-grid');

        if (myListings.length === 0) {
            listingGrid.innerHTML = '<div class="col-12 text-muted">You haven\'t listed anything yet.</div>';
        } else {
            listingGrid.innerHTML = myListings.map(p => `
                <div class="col-md-3 col-6 mb-3">
                    <div class="card h-100 shadow-sm border-success">
                        <div class="card-header bg-success text-white small py-1">Active</div>
                        <img src="${p.image}" class="card-img-top" style="height:120px; object-fit:cover;">
                        <div class="card-body p-2">
                            <h6 class="card-title text-truncate">${p.title}</h6>
                            <span class="fw-bold">Rs.${p.price}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // --- 4. CART PREVIEW ---
        const cart = getCart();
        const cartGrid = document.getElementById('account-cart-grid');
        
        if (cart.length === 0) {
            cartGrid.innerHTML = '<div class="col-12 text-muted">Your cart is empty.</div>';
        } else {
            cartGrid.innerHTML = cart.map(p => `
                <div class="col-md-3 col-6 mb-3">
                    <div class="card h-100 shadow-sm">
                        <img src="${p.image}" class="card-img-top" style="height:120px; object-fit:cover;">
                        <div class="card-body p-2">
                            <h6 class="card-title text-truncate">${p.title}</h6>
                            <span class="badge bg-primary">Rs.${p.price}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

    } else {
        loginSec.classList.remove('d-none');
        profileSec.classList.add('d-none');

        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('login-name').value;
            const email = document.getElementById('login-email').value;
            const user = { name: name, email: email };
            localStorage.setItem('currentUser', JSON.stringify(user));
            showModalAlert("Login Successful!");
            window.location.reload();
        });
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.reload();
}

// --- 4. ACTION HANDLERS ---

function createCardHTML(p) {
    return `
    <div class="col-md-3 col-sm-6 mb-4">
        <div class="card h-100 shadow-sm border-0 position-relative">
            <button class="btn btn-light rounded-circle position-absolute top-0 end-0 m-2 shadow-sm" style="z-index:10;" onclick="toggleWishlist(${p.id})">
                ❤️
            </button>
            
            <img src="${p.image}" class="card-img-top" style="height:200px; object-fit:cover;">
            <div class="card-body">
                <div class="d-flex justify-content-between mb-2">
                    <span class="badge bg-light text-dark border">${p.category}</span>
                    <span class="badge bg-${p.type === 'auction' ? 'warning text-dark' : 'success'}">${p.type}</span>
                </div>
                <h5 class="card-title text-truncate">${p.title}</h5>
                <h4 class="text-primary">Rs.${p.price}</h4>
                ${p.type === 'auction' && p.bidEndTime ? 
                  `<small class="text-danger d-block mt-1">Ends: ${new Date(p.bidEndTime).toLocaleString()}</small>` : ''}
            </div>
            <div class="card-footer bg-white border-top-0">
                <button class="btn btn-dark w-100" onclick="handleAction(${p.id})">
                    ${p.type === 'auction' ? 'Place Bid' : 'Add to Cart'}
                </button>
            </div>
        </div>
    </div>`;
}

function handleAction(id) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        showModalAlert("You must be logged in to purchase or bid!");
        setTimeout(() => window.location.href = "account.html", 2000);
        return;
    }

    const products = initData();
    const product = products.find(p => p.id === id);

    if (product.owner === currentUser.email) {
        showModalAlert("⛔ You cannot bid on or buy your own item!");
        return;
    }

    if (product.type === "auction") openBidModal(product);
    else addToCart(product);
}

function openBidModal(product) {
    document.getElementById('bidModalTitle').innerText = `Placing Bid on: ${product.title}`;
    document.getElementById('modalPrdTitle').innerText = product.title;
    document.getElementById('modalPrdPrice').innerText = `Rs.${product.price}`;
    document.getElementById('modalImg').src = product.image;
    document.getElementById('modalPrdId').value = product.id;
    document.getElementById('bidInput').value = '';
    document.getElementById('bidError').innerText = '';
    const modal = new bootstrap.Modal(document.getElementById('bidModal'));
    modal.show();
}

function submitBid() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')); // Need user for recording bid
    if (!currentUser) {
        showModalAlert("Please log in to bid.");
        return;
    }

    const id = Number(document.getElementById('modalPrdId').value);
    const bidAmount = Number(document.getElementById('bidInput').value);
    const products = initData();
    const productIndex = products.findIndex(p => p.id === id);
    
    if (!bidAmount || bidAmount <= products[productIndex].price) {
        document.getElementById('bidError').innerText = "Bid must be higher than current price!";
        return;
    }
    
    // Update price
    products[productIndex].price = bidAmount;
    
    // Update Auction Logic
    products[productIndex].lastBidder = currentUser.email;
    products[productIndex].bidEndTime = Date.now() + (24 * 60 * 60 * 1000); // 24 hours from now
    
    localStorage.setItem('products', JSON.stringify(products));
    showModalAlert("Bid Placed! Timer reset to 24 hours.");
    setTimeout(() => window.location.reload(), 2000);
}

function addToCart(item) {
    const cart = getCart();
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('nav-cart-count').innerText = cart.length;
    showModalAlert("Added to Cart!");
}

function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
}

function checkout() {
    const cart = getCart();
    if (cart.length === 0) {
        showModalAlert("Cart is empty!");
        return;
    }
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        showModalAlert("Please login first.");
        window.location.href = "account.html";
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    const tax = total * 0.18;
    const finalTotal = (total + tax).toFixed(2);

    const newOrder = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        items: cart,
        total: finalTotal,
        user: currentUser.email
    };

    const orders = getOrders();
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    let products = initData();
    products = products.filter(product => !cart.some(cartItem => cartItem.id === product.id));
    localStorage.setItem('products', JSON.stringify(products));

    localStorage.removeItem('cart');
    
    showModalAlert("Order Placed Successfully!");
    setTimeout(() => window.location.href = "account.html", 2000);
}

function toggleWishlist(id) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        showModalAlert("Please login to use Wishlist.");
        return;
    }

    const products = initData();
    const product = products.find(p => p.id === id);
    let wishlist = getWishlist();

    const index = wishlist.findIndex(w => w.id === id);
    if (index === -1) {
        wishlist.push(product);
        showModalAlert("Added to Wishlist ❤️");
    } else {
        wishlist.splice(index, 1);
        showModalAlert("Removed from Wishlist");
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function removeFromWishlist(id) {
    let wishlist = getWishlist();
    const index = wishlist.findIndex(w => w.id === id);
    if (index !== -1) {
        wishlist.splice(index, 1);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        window.location.reload();
    }
}
// ===== DATA STRUCTURES FOR SEARCH HISTORY =====

/**
 * Trie (Prefix Tree) for fast autocomplete suggestions
 */
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
        this.products = []; // Store product IDs that match this prefix
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    // Insert a word into the trie
    insert(word, productId) {
        let node = this.root;
        word = word.toLowerCase();
        
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            // Add product ID to this node
            if (!node.products.includes(productId)) {
                node.products.push(productId);
            }
        }
        node.isEndOfWord = true;
    }
    
    // Search for words with given prefix
    searchPrefix(prefix) {
        let node = this.root;
        prefix = prefix.toLowerCase();
        
        for (let char of prefix) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }
        
        return node.products;
    }
    
    // Get all suggestions for a prefix
    getSuggestions(prefix, limit = 5) {
        const productIds = this.searchPrefix(prefix);
        return productIds.slice(0, limit);
    }
}

/**
 * LRU Cache for search history (Recently used items appear first)
 */
class LRUCache {
    constructor(capacity = 10) {
        this.capacity = capacity;
        this.cache = new Map(); // Map maintains insertion order
    }
    
    // Get item from cache
    get(key) {
        if (!this.cache.has(key)) {
            return null;
        }
        // Move to end (most recent)
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    
    // Add item to cache
    put(key, value) {
        // Remove if exists
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        // Add to end
        this.cache.set(key, value);
        
        // Remove oldest if over capacity
        if (this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
    
    // Get all items (most recent first)
    getAll() {
        return Array.from(this.cache.entries()).reverse();
    }
    
    // Clear cache
    clear() {
        this.cache.clear();
    }
    
    // Remove specific item
    remove(key) {
        this.cache.delete(key);
    }
    
    // Get size
    size() {
        return this.cache.size;
    }
}

/**
 * Priority Queue for ranking search results
 */
class PriorityQueue {
    constructor() {
        this.items = [];
    }
    
    // Add item with priority
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
        
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority > this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        
        if (!added) {
            this.items.push(queueElement);
        }
    }
    
    // Remove and return highest priority item
    dequeue() {
        return this.items.shift();
    }
    
    // Get all elements
    getAll() {
        return this.items.map(item => item.element);
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
}

// ===== GLOBAL SEARCH MANAGER =====

class SearchManager {
    constructor() {
        this.trie = new Trie();
        this.searchHistory = null; // Will be initialized per user
        this.initializeTrie();
    }
    
    // Build Trie from all products
    initializeTrie() {
        const products = initData();
        products.forEach(product => {
            // Index by title
            this.trie.insert(product.title, product.id);
            // Index by category
            this.trie.insert(product.category, product.id);
            // Index by individual words in title
            product.title.split(' ').forEach(word => {
                if (word.length > 2) {
                    this.trie.insert(word, product.id);
                }
            });
        });
    }
    
    // Initialize user-specific search history
    initUserHistory() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            this.searchHistory = null;
            return;
        }
        
        this.searchHistory = new LRUCache(10);
        
        // Load from localStorage
        const stored = localStorage.getItem('searchHistory');
        if (stored) {
            const allHistory = JSON.parse(stored);
            const userHistory = allHistory[currentUser.email] || [];
            
            // Populate LRU cache (reverse to maintain order)
            userHistory.reverse().forEach(item => {
                this.searchHistory.put(item.query, {
                    query: item.query,
                    timestamp: item.timestamp,
                    resultsCount: item.resultsCount
                });
            });
        }
    }
    
    // Save search query to history
    saveSearch(query, resultsCount = 0) {
        if (!this.searchHistory || !query.trim()) return;
        
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) return;
        
        this.searchHistory.put(query, {
            query: query,
            timestamp: new Date().toISOString(),
            resultsCount: resultsCount
        });
        
        // Persist to localStorage
        this.persistHistory();
    }
    
    // Persist history to localStorage
    persistHistory() {
        if (!this.searchHistory) return;
        
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) return;
        
        const allHistory = JSON.parse(localStorage.getItem('searchHistory')) || {};
        allHistory[currentUser.email] = this.searchHistory.getAll().map(([key, value]) => value);
        localStorage.setItem('searchHistory', JSON.stringify(allHistory));
    }
    
    // Get search history
    getHistory() {
        if (!this.searchHistory) return [];
        return this.searchHistory.getAll().map(([key, value]) => value);
    }
    
    // Clear history
    clearHistory() {
        if (!this.searchHistory) return;
        
        this.searchHistory.clear();
        this.persistHistory();
    }
    
    // Remove specific search
    removeSearch(query) {
        if (!this.searchHistory) return;
        
        this.searchHistory.remove(query);
        this.persistHistory();
    }
    
    // Get autocomplete suggestions
    getAutocompleteSuggestions(prefix, limit = 5) {
        if (prefix.length < 2) return [];
        
        const productIds = this.trie.getSuggestions(prefix, limit);
        const products = initData();
        
        return productIds.map(id => products.find(p => p.id === id)).filter(Boolean);
    }
    
    // Perform search with ranking
    search(query) {
        if (!query.trim()) return [];
        
        const products = initData();
        const searchLower = query.toLowerCase();
        const pq = new PriorityQueue();
        
        products.forEach(product => {
            let score = 0;
            const titleLower = product.title.toLowerCase();
            const categoryLower = product.category.toLowerCase();
            
            // Exact title match - highest priority
            if (titleLower === searchLower) {
                score = 100;
            }
            // Title starts with query
            else if (titleLower.startsWith(searchLower)) {
                score = 80;
            }
            // Title contains query
            else if (titleLower.includes(searchLower)) {
                score = 60;
            }
            // Category exact match
            else if (categoryLower === searchLower) {
                score = 50;
            }
            // Category contains query
            else if (categoryLower.includes(searchLower)) {
                score = 40;
            }
            // Word match in title
            else if (product.title.split(' ').some(word => 
                word.toLowerCase().startsWith(searchLower))) {
                score = 30;
            }
            
            if (score > 0) {
                pq.enqueue(product, score);
            }
        });
        
        return pq.getAll();
    }
}

// Global instance
let searchManager = new SearchManager();

// ===== UI FUNCTIONS =====

// Initialize search functionality
function initSearchBar() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    if (!searchInput) return;
    
    // Initialize user history
    searchManager.initUserHistory();
    
    // Show history on focus
    searchInput.addEventListener('focus', () => {
        showSearchHistory();
    });
    
    // Hide history when clicking outside
    document.addEventListener('click', (e) => {
        const searchContainer = document.getElementById('search-container');
        if (searchContainer && !searchContainer.contains(e.target)) {
            hideSearchHistory();
        }
    });
    
    // Search on Enter
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value.trim());
        }
    });
    
    // Search on button click
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            performSearch(searchInput.value.trim());
        });
    }
    
    // Real-time autocomplete
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const query = e.target.value.trim();
            if (query.length >= 2) {
                showAutocompleteSuggestions(query);
            } else if (query.length === 0) {
                showSearchHistory();
            }
        }, 300); // Debounce for 300ms
    });
}

// Show search history
function showSearchHistory() {
    const dropdown = document.getElementById('search-history-dropdown');
    if (!dropdown) return;
    
    const history = searchManager.getHistory();
    
    if (history.length === 0) {
        dropdown.innerHTML = `
            <div class="search-history-empty">
                <p class="text-muted text-center py-3 mb-0">
                    <i>🔍 No search history</i>
                </p>
            </div>
        `;
    } else {
        dropdown.innerHTML = `
            <div class="search-history-header">
                <span class="fw-bold">Recent Searches</span>
                <button class="btn btn-sm btn-link text-danger p-0" onclick="clearAllSearchHistory()">
                    Clear All
                </button>
            </div>
            <div class="search-history-list">
                ${history.map(item => `
                    <div class="search-history-item" onclick="fillSearchQuery('${escapeHtml(item.query)}')">
                        <div class="d-flex align-items-center">
                            <span class="history-icon">🕐</span>
                            <div class="flex-grow-1">
                                <div class="history-query">${escapeHtml(item.query)}</div>
                                <small class="text-muted">${formatTimeAgo(item.timestamp)} • ${item.resultsCount} results</small>
                            </div>
                            <button class="btn btn-sm btn-link text-muted p-0" 
                                    onclick="event.stopPropagation(); deleteSearchHistory('${escapeHtml(item.query)}')">
                                ✕
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    dropdown.classList.add('show');
}

// Show autocomplete suggestions
function showAutocompleteSuggestions(query) {
    const dropdown = document.getElementById('search-history-dropdown');
    if (!dropdown) return;
    
    const suggestions = searchManager.getAutocompleteSuggestions(query);
    
    if (suggestions.length === 0) {
        showSearchHistory();
        return;
    }
    
    dropdown.innerHTML = `
        <div class="search-history-header">
            <span class="fw-bold">Suggestions</span>
        </div>
        <div class="search-history-list">
            ${suggestions.map(product => `
                <div class="search-history-item" onclick="fillSearchQuery('${escapeHtml(product.title)}')">
                    <div class="d-flex align-items-center">
                        <img src="${product.image}" 
                             style="width: 40px; height: 40px; object-fit: cover; border-radius: 5px; margin-right: 10px;">
                        <div class="flex-grow-1">
                            <div class="history-query">${escapeHtml(product.title)}</div>
                            <small class="text-muted">${product.category} • $${product.price}</small>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    dropdown.classList.add('show');
}

// Hide search history
function hideSearchHistory() {
    const dropdown = document.getElementById('search-history-dropdown');
    if (dropdown) {
        dropdown.classList.remove('show');
    }
}

// Fill search input
function fillSearchQuery(query) {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = query;
        performSearch(query);
    }
}

// Perform search
function performSearch(query) {
    if (!query) return;
    
    const results = searchManager.search(query);
    searchManager.saveSearch(query, results.length);
    
    displaySearchResults(results, query);
    hideSearchHistory();
}

// Display results
function displaySearchResults(results, query) {
    const grid = document.getElementById('shop-grid');
    if (!grid) return;
    
    const resultsHeader = document.getElementById('search-results-header');
    if (resultsHeader) {
        resultsHeader.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h5 class="mb-0">Search Results for "${escapeHtml(query)}"</h5>
                <span class="badge bg-primary">${results.length} items found</span>
            </div>
        `;
    }
    
    if (results.length === 0) {
        grid.innerHTML = `
            <div class="col-12">
                <div class="alert alert-info text-center">
                    <h5>No products found for "${escapeHtml(query)}"</h5>
                    <p class="mb-0">Try different keywords or browse all products</p>
                </div>
            </div>
        `;
    } else {
        grid.innerHTML = results.map(p => createCardHTML(p)).join('');
    }
}

// Clear all history
function clearAllSearchHistory() {
    searchManager.clearHistory();
    showSearchHistory();
}

// Delete specific search
function deleteSearchHistory(query) {
    searchManager.removeSearch(query);
    showSearchHistory();
}

// Helper: Format time ago
function formatTimeAgo(timestamp) {
    const now = new Date();
    const then = new Date(timestamp);
    const seconds = Math.floor((now - then) / 1000);
    
    if (seconds < 60) return 'Just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
    return then.toLocaleDateString();
}

// Helper: Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Re-initialize when products change
function refreshSearchIndex() {
    searchManager = new SearchManager();
    searchManager.initUserHistory();
}