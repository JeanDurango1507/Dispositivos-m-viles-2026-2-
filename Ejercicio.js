const products = [
    {
        name: "Laptop Lenovo",
        worth: 2500000
    },
    {
        name: "Mouse inalámbrico",
        worth: 85000
    },
    {
        name: "Teclado mecánico",
        worth: 180000
    },
    {
        name: "Monitor Samsung 24 pulgadas",
        worth: 750000
    },
    {
        name: "Audífonos Bluetooth",
        worth: 150000
    },
    {
        name: "Memoria USB 64GB",
        worth: 45000
    },
    {
        name: "Disco SSD 1TB",
        worth: 320000
    },
    {
        name: "Webcam HD",
        worth: 120000
    },
    {
        name: "Parlante Bluetooth",
        worth: 200000
    },
    {
        name: "Cargador USB-C",
        worth: 95000
    }
];

console.log(products);

products.forEach((product, index) => {
    console.log(`${index + 1}. ${product.nombre || product.name} - $${product.worth}`);
});