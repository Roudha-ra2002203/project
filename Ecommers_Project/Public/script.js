// Define variables to hold user and selected item data
let current_user = null;
let selectedItem = null;

document.addEventListener('DOMContentLoaded', function() {
    // Fetch items data from the server
    fetch('http://localhost:3000/api/items')
    .then(response => response.json())
    .then(items => {
        const itemsList = document.getElementById('items-list');
        if (itemsList) { // Check if itemsList exists
            itemsList.innerHTML = '';
            items.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<div class="container">
                <div class="wrapper">
                    <div class="banner-image" style="background-image: url('${item.imageUrl}');"></div>
                    <h1>${item.name}</h1>
                    <button class="btn outline">$${item.price}</button>
                </div>
                <div class="button-wrapper"> 
                    <button class="btn fill">BUY NOW</button>
                </div>
            </div>`;

                // Add event listener to the "BUY NOW" button
                const buyButton = li.querySelector('.btn.fill');
                if (buyButton) { // Check if buyButton exists
                    buyButton.addEventListener('click', () => redirectToCheckout(item));
                }
                itemsList.appendChild(li);
            });
        } else {
            console.error('Error: items-list element not found.');
        }
    })
    .catch(error => console.error('Error fetching items:', error));


    // Function to redirect to checkout page and save selected item in local storage
    function redirectToCheckout(item) {
        // Store the selected item in local storage
        localStorage.setItem('selectedItem', JSON.stringify(item));
        
        // Redirect to checkout page
        window.location.href = 'checkout.html';
    
    }
document.getElementById('history-button').addEventListener('click',function(e){
    e.preventDefault();
    window.location.href='History.html';
})

    // Search functionality
    document.getElementById('search-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const searchInput = document.getElementById('search-input').value.toLowerCase(); // Get the search query and convert to lowercase for case-insensitive matching
        const items = document.querySelectorAll('.container h1'); // Select all item names
        items.forEach(item => {
            const itemName = item.textContent.toLowerCase(); // Get the item name and convert to lowercase
            if (itemName.includes(searchInput)) {
                item.parentElement.parentElement.style.display = 'block'; // Show the item if it matches the search query
            } else {
                item.parentElement.parentElement.style.display = 'none'; // Hide the item if it doesn't match the search query
            }
        });
    });
});
