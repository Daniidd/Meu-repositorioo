function Product(nome, preco, descricao, imagem, disponivel, avaliacao, caracteristicas, tags, discount) {
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.imagem = imagem;
    this.disponivel = disponivel;
    this.avaliacao = avaliacao;
    this.caracteristicas = caracteristicas;
    this.tags = tags;
    this.discount = discount;

}

function createHtmlCard(product) {
    const cardContainer = document.getElementById('card-container');

    const card = document.createElement('div');
    card.classList.add('card');

    const name = document.createElement('h2');
    name.textContent = product.nome;

    const description = document.createElement('p');
    description.textContent = product.descricao;

    const availability = document.createElement('p');
    availability.textContent = product.disponivel ? 'Disponível' : 'Indisponível';

    const image = document.createElement('img');
    image.src = product.imagem;
    image.alt = product.nome;

    const tags = document.createElement('p');
    tags.textContent = `Tags: ${product.tags.join(', ')}`;

    const characteristics = document.createElement('p');
    characteristics.textContent = `Características: ${product.caracteristicas.join(', ')}`;

    const priceContainer = document.createElement('div'); // Contêiner flexível para preço e desconto
    priceContainer.classList.add('price-container');

    const price = document.createElement('p');
    price.textContent = `Preço: R$ ${product.preco.toFixed(2)}`;
    price.classList.add('price');

    const discount = document.createElement('span');
    discount.textContent = 'Desconto 2%';
    discount.classList.add('discount');

    // Adicionando preço e desconto ao contêiner flexível
    priceContainer.appendChild(price);
    priceContainer.appendChild(discount);

    // Adicionando todos os elementos ao cartão
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(availability);
    card.appendChild(image);
    card.appendChild(tags);
    card.appendChild(characteristics);
    card.appendChild(priceContainer); // Adiciona o contêiner flexível ao cartão

    cardContainer.appendChild(card);
}

function generateCardList(cards) {
    cards.forEach(product => {
        createHtmlCard(product);
    });
}

// Definindo objetos de produto
const produto1 = new Product("Xiaomi", 980.00, "Celular 15 Polegadas", "celular1.jpg", true, 4.5, ["Tela de 15 polegadas", "Android 5.3", "Câmera principal de 48MP"], ["tecnologia", "celular", "xiaomi"]);

const produto2 = new Product("Tablet Samsung", 1299.00, "Um tablet leve e versátil para trabalho e entretenimento.", "tablet.png", false, 4.0, ["Tela de 10 polegadas", "Armazenamento de 64GB", "Bateria de longa duração"], ["tecnologia", "tablet", "eletrônicos"]);

const produto3 = new Product("Fone de Ouvido", 299.00, "Fone de ouvido Bluetooth com som potente.", "fone.png", true, 4.5, ["Conexão Bluetooth", "Bateria de longa duração", "Design confortável"], ["tecnologia", "fone de ouvido"]);

const produto4 = new Product("Apple iPhone", 1999.00, "O mais recente iPhone com design elegante.", "iphone.png", false, 4.8, ["Tela de 6.1 polegadas", "Memória interna de 128GB", "Câmera principal de 12MP"], ["tecnologia", "smartphone", "Apple"]);

const produto5 = new Product("Xiaomi Redmi", 699.00, "Ótimo custo-benefício com bateria de longa duração.",
"xiaomi.png", true, 4.6, ["Tela de 6.3 polegadas", "Memória interna de 64GB", "Câmera principal de 48MP"], ["tecnologia", "smartphone", "Xiaomi"]);

const produto6 = new Product("Samsung Galaxy", 1299.00, "Smartphone de alta qualidade com tela AMOLED.", "samsung.png", true, 4.7, ["Tela de 6.5 polegadas", "Memória interna de 256GB", "Câmera principal de 64MP"], ["tecnologia", "smartphone", "Samsung"]);


// Array contendo os objetos de produto
const produtos = [produto1, produto2, produto3, produto4, produto5, produto6];

// Chamando a função para gerar os cards
generateCardList(produtos);
