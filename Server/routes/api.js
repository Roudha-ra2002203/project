const express = require('express');
const router = express.Router();
const { getUsers, getItems, saveUsers, saveItems,getSellers,saveSellers } = require('../dataHandler');

// 
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = getUsers();
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful', user });
    } else {
        const sellers = getSellers();
        const seller = sellers.find(seller => seller.username === username && seller.password === password);
        if (seller) {
            res.status(200).json({ message: 'Login successful', seller });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    }
});

// Items Endpoints
//


module.exports = router;
