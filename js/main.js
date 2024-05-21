let produtos = [
    {
        id: 0,
        imagem: "img/Stormtrooper.png",
        produto: "Stormtrooper 1 ",
        valor: 60.0,
    },
    {
        id: 1,
        imagem: "img/R2d2.png",
        produto: "R2D2",
        valor: 80.0,
    },
    {
        id: 2,
        imagem: "img/Card duplo.png",
        produto: "Stormtrooper e Gameboy ",
        valor: 120.0,
    },
    {
        id: 3,
        imagem: "img/GameBoy.png",
        produto: "Game Boy Classic",
        valor: 60.0,
    },
    {
        id: 4,
        imagem: "img/Darth.png",
        produto: "Darth Vader",
        valor: 90.0,
    },
    {
        id: 5,
        imagem: "img/Stormtrooper.png",
        produto: "Stormtrooper ",
        valor: 60.0,
    },
    {
        id: 6,
        imagem: "img/Stormtrooper.png",
        produto: "Stormtrooper ",
        valor: 60.0,
    },
    {
        id: 7,
        imagem: "img/Card duplo.png",
        produto: "Stormtrooper e Gameboy ",
        valor: 120.0,
    },
    {
        id: 8,
        imagem: "img/Game Boy Classic.png",
        produto: "Game Boy Classic", 
        valor: 60.0,
    },
];

// Função para ler os produtos
function lerProdutos() {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
    produtos.forEach((produto) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${produto.imagem}" alt="Imagen do produto">
            <div class="card-container--info">
                <p>${produto.produto}</p>
                <div class="card-container--value">
                    <p>R$ ${produto.valor.toFixed(2)}</p>
                    <img class="lixo" src="img/lixo.png" alt="Ícone do Lixo" onclick="deleteProduto(${produto.id})">
                    <img class="editar" src="img/lapis.png" alt="Ícone de Edição" onclick="updateProduto(${produto.id})">
                </div>
            </div>
        `;
        cards.appendChild(card);
    });
}

// Função para criar um novo produto
function createProduto() {
    const form = document.getElementById("form-produto");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        const valor = parseFloat(document.getElementById("valor").value);
        const imagem = document.getElementById("imagem").value;
        if (nome && valor && imagem) {
            const novoProduto = {
                id: produtos.length,
                imagem,
                produto: nome,
                valor,
            };
            produtos.push(novoProduto);
            lerProdutos();
            form.reset();
        } else {
            alert("Preencha todos os campos!");
        }
    });
}

// Função para deletar um produto
function deleteProduto(id) {
    if (confirm("Tem certeza que deseja excluir o produto?")) {
        produtos = produtos.filter((produto) => produto.id !== id);
        lerProdutos();
        if (produtos.length === 0) {
            alert("Nenhum produto encontrado!");
        }
    }
}

// Função para atualizar um produto
function updateProduto(id) {
    const produto = produtos.find((produto) => produto.id === id);
    if (produto) {
        const nome = prompt("Novo nome do produto:");
        const valor = parseFloat(prompt("Novo valor do produto:"));
        const imagem = prompt("Nova imagem do produto:");
        if (nome && valor && imagem) {
            produto.produto = nome;
            produto.valor = valor;
            produto.imagem = imagem;
            lerProdutos();
            alert("Produto atualizado com sucesso!");
        } else {
            alert("Produto não encontrado!");
        }
    }
}

// Inicializar a leitura dos produtos
lerProdutos();

// Inicializar a criação de produtos
createProduto();