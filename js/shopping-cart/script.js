//shopping cart app
let cart = {};
const products = [
    { id: 1, name: "Product 1", price: 25 },
    { id: 2, name: "Product 2", price: 50 },
    { id: 3, name: "Product 3", price: 75 },
];
// const showProducts = () => {
//   let str = "";
//   products.map((value) => {
//     str += `<li>${value.id}-${value.name}-$${value.price}</li>`;
//   });
//   // console.log("***Product List***");
//   // console.log(str);
//   document.getElementById(root).innerHTMNL = str;
// };
const showProducts = () => {
    let r = document.getElementById("root");
    r.innerHTML = "Hello World";
};
const addToCart = (id) => {
    cart = { ...cart, [id]: 1 };
};
const showCart = () => {
    console.log("***My Cart***");
    products.map((value) => {
        cart[value.id] > 0 &&
            console.log(
                `${value.name}-${value.price}-${cart[value.id]}-${
                    cart[value.id] * value.price
                }`
            );
    });
};
const increment = (id) => {
    cart = { ...cart, [id]: cart[id] + 1 };
};
const decrement = (id) => {
    cart = { ...cart, [id]: cart[id] - 1 };
};
const orderValue = products.reduce((sum, value) => {
    return sum + value.price * (cart[value.id] ?? 0);
}, 0);
console.log(`Order Value:${orderValue}`);

// showProducts()
