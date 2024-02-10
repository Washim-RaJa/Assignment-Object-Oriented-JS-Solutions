function Inventory(){
    this.inventoryArray = [{}];
    this.inventoryObject = this.inventoryArray[0];
    this.checkInventoryStock = function(){
        console.log(this.inventoryArray);
    }
}

function Product(name,category,price,stock){
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
}

Inventory.prototype.addProduct = function(inputObject){
    this.inventoryObject[inputObject.name] = inputObject;
    console.log(`Added ${inputObject.name} to the inventory`);
}

Inventory.prototype.deleteProduct = function(productName){
    delete this.inventoryObject[productName];
    console.log(`Deleted ${productName} from the inventory.`);
}

const inventory = new Inventory();

const product1 = new Product('Laptop','Electronics',899,10);
const product2 = new Product('Book','Books',20,50);

inventory.addProduct(product1);

// inventory.checkInventoryStock();

inventory.addProduct(product2);

// inventory.checkInventoryStock();

inventory.deleteProduct('Laptop');

// inventory.checkInventoryStock();
