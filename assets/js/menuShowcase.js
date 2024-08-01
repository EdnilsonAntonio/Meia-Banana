// menuShowcase.js, Script para gerar os itens do menu automaticamente

// 1 - Lista de produtos
const products = [
    // Produto 1
    {
        id: 1,
        name: "Francesinha",
        price: 15.00,
        image: "assets/img/products/img-1.png",
        type: "food",
        category: "launch",
        description: "Francesinha é um produto delicioso e confortável, ideal para todos os públicos."
    },
    // Produto 2
    {
        id: 2,
        name: "Francesinha",
        price: 15.00,
        image: "assets/img/products/img-1.png",
        type: "food",
        category: "launch",
        description: "Francesinha é um produto delicioso e confortável, ideal para todos os públicos."
    },
    // Produto 3
    {
        id: 3,
        name: "Francesinha",
        price: 15.00,
        image: "assets/img/products/img-1.png",
        type: "food",
        category: "launch",
        description: "Francesinha é um produto delicioso e confortável, ideal para todos os públicos."
    },
    // Produto 4
    {
        id: 4,
        name: "Francesinha",
        price: 15.00,
        image: "assets/img/products/img-1.png",
        type: "food",
        category: "launch",
        description: "Francesinha é um produto delicioso e confortável, ideal para todos os públicos."
    },
    // Produto 5
    {
        id: 5,
        name: "Francesinha",
        price: 15.00,
        image: "assets/img/products/img-1.png",
        type: "food",
        category: "launch",
        description: "Francesinha é um produto delicioso e confortável, ideal para todos os públicos."
    },
    // Produto 6
    {
        id: 6,
        name: "Francesinha",
        price: 15.00,
        image: "assets/img/products/img-1.png",
        type: "food",
        category: "launch",
        description: "Francesinha é um produto delicioso e confortável, ideal para todos os públicos."
    },
    // Produto 7
    {
        id: 7,
        name: "Pizza",
        price: 15.00,
        image: "assets/img/products/img-1.png",
        type: "food",
        category: "launch",
        description: "Pizza é um produto delicioso e confortável, ideal para todos os públicos."
    },
    // Produto 8
    {
        id: 8,
        name: "Pizza",
        price: 15.00,
        image: "assets/img/products/img-1.png",
        type: "food",
        category: "launch",
        description: "Pizza é um produto delicioso e confortável, ideal para todos os públicos."
    },
    // Produto 9
    {
        id: 7,
        name: "Pizza",
        price: 15.00,
        image: "assets/img/products/img-1.png",
        type: "food",
        category: "breakfast",
        description: "Pizza é um produto delicioso e confortável, ideal para todos os públicos."
    },
    // Produto 10
    {
        id: 8,
        name: "Pizza",
        price: 15.00,
        image: "assets/img/products/img-1.png",
        type: "food",
        category: "breakfast",
        description: "Pizza é um produto delicioso e confortável, ideal para todos os públicos."
    },

]

// 2 - Template do produto
const productTemplate = (product) => {
    return `
        <div class="col-lg-6">
            <div class="d-flex align-items-center product" data-id="${product.id}">
                <img src="${product.image}" alt="" class="flex-shrink-0 img-fluid">
                <div class="w-100 d-flex flex-column text-start ps-4">
                    <h5 class="d-flex justify-content-between border-bottom pb-2 upper-description">
                        <span>${product.name}</span>
                        <span class="">€${product.price}</span>
                    </h5>
                    <small class="fst-italic lower-description">
                        ${product.description}
                    </small>
                </div>
            </div>
        </div>
    `
}

// 3 - Preencher o menu com os produtos
const generateFoodMenu = () => {
    const foodMenu = products.filter(product => product.type === 'food');
    const recommendedFood = foodMenu.slice(0, 8)
    const productCardHTML = recommendedFood.map(productTemplate).join("");
    document.querySelector(".food-menu-home").innerHTML = productCardHTML
}

document.addEventListener('DOMContentLoaded', () => {
    generateFoodMenu();
})