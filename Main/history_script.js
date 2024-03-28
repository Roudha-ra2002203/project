document.addEventListener('DOMContentLoaded', function() {
    // Retrieve current user data from local storage
    const currentUser = JSON.parse(localStorage.getItem('current_user'));

    // Get the purchase history container
    const historyContainer = document.getElementById('purchase-history');
