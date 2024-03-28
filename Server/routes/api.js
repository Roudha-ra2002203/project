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
router.get('/items', (req, res) =>{
    const items = getItems();
     res.json(items);
});

router.post('/items', (req, res) => {
    const newItem = req.body;
    const items = getItems();
    newItem.id = (items.length + 1).toString(); // Assign a new unique ID
    items.push(newItem);
    saveItems(items);
    res.status(201).json(newItem);
});

// users endpoints 
router.get('/users', (req, res) => {
    const users = getUsers();
    res.json(users);
});


router.post('/users', (req, res) => {
    const newUser = req.body;
    const users = getUsers();
    newUser.id = (users.length + 1).toString(); // Assign a new unique ID
    users.push(newUser);
    saveUsers(users);
    res.status(201).json(newUser);
});

// Users Endpoints
router.get('/users', (req, res) => {
    const users = getUsers();
    res.json(users);
});


router.post('/users', (req, res) => {
    const newUser = req.body;
    const users = getUsers();
    newUser.id = (users.length + 1).toString(); // Assign a new unique ID
    users.push(newUser);
    saveUsers(users);
    res.status(201).json(newUser);
});

//Purchase Endpoint
router.post('/purchase', (req, res) => {
    const { userId, itemId, quantity } = req.body;

    //Retrieve item data from the database
    const items = getItems();
    const itemIndex = items.findIndex(item => item.id === itemId);
    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }
    const item = items[itemIndex];

    // Check if requested quantity is available
    if (item.quantity < quantity) {
        return res.status(400).json({ message: 'Insufficient quantity available' });
    }
})


module.exports = router;
