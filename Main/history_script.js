document.addEventListener('DOMContentLoaded', function() {
    // Retrieve current user data from local storage
    const currentUser = JSON.parse(localStorage.getItem('current_user'));

    // Get the purchase history container
    const historyContainer = document.getElementById('purchase-history');

    // Check if there is current user data and if it contains purchase history
    if (currentUser && currentUser.purchaseHistory && currentUser.purchaseHistory.length > 0) {
        // Loop through each purchase in the purchase history and create HTML elements to display them
        currentUser.purchaseHistory.forEach(purchase => {
            console
            const purchaseItem = document.createElement('div');
            purchaseItem.classList.add('purchase-item');

            const title = document.createElement('h3');
            title.textContent = `Purchase Date: ${new Date(purchase.date).toLocaleString()}`;
            purchaseItem.appendChild(title);

            const details = document.createElement('p');
            details.textContent = `Item Name: ${purchase.itemName}, Quantity: ${purchase.quantity}, Total Price: ${purchase.totalPrice} QAR`;
            purchaseItem.appendChild(details);

            historyContainer.appendChild(purchaseItem);
        });
    } else {
        // If no purchase history found, display a message
        historyContainer.textContent = 'No purchase history available.';
    }
});
