const fs = require('fs');

const usersFilePath = './data/user.json';
const itemsFilePath = './data/item.json';
const SellersFilePath = './data/Seller.json';



const getUsers = () => {
    const usersData = fs.readFileSync(usersFilePath);
    
    return JSON.parse(usersData);
};

const saveUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};


module.exports = {
    getUsers,
    getItems,
    saveUsers,
    saveItems,
    getSellers,
    saveSellers
};
