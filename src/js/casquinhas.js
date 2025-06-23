const traditionalsList = document.getElementById('traditionals-list');
const trufadosList = document.getElementById('trufados-list');

const casquinhasData = [
  {
    image: "produto_cascao_tradicional_cobertura_chocolate-1-300x300.png.webp",
    type: "Cascão Tradicional",
    taste: "Cobertura Chocolate",
    class: "Tradicional"
  },
  {
    image: "produto_cascao_tradicional_cobertura_caramelo-300x300.png.webp",
    type: "Cascão Tradicional",
    taste: "Cobertura Caramelo",
    class: "Tradicional"
  },
  {
    image: "produto_cascao_tradicional_cobertura_morango-300x300.png.webp",
    type: "Cascão Tradicional",
    taste: "Cobertura Morango",
    class: "Tradicional"
  },
  {
    image: "produto_casquinha_tradicional-300x300.png.webp",
    type: "Cascão Tradicional",
    taste: "Baunilha, Chocolate e Mista",
    class: "Tradicional"
  },
  {
    image: "produto_cascao_trufado_nutella.png.webp",
    type: "Milk Shake",
    taste: "Limão & Leite Moça",
    class: "Trufados"
  },
  {
    image: "produto_cascao_trufado_nutella_morango.png.webp",
    type: "Milk Shake",
    taste: "Chocotino",
    class: "Trufados"
  },
  {
    image: "produto_cascao_trufado_nutella_banana.png.webp",
    type: "Milk Shake",
    taste: "Açaí",
    class: "Trufados"
  },
  {
    image: "produto_cascao_trufado_nutella_amendoin.png.webp",
    type: "Milk Shake",
    taste: "Maracujá",
    class: "Trufados"
  },
];

const casquinhasTradicionais = casquinhasData.filter((m) => m.class === 'Tradicional')
const casquinhasTrufados = casquinhasData.filter((m) => m.class === 'Trufados')

function addTradicional() {
  casquinhasTradicionais.forEach((casquinha) => {
    const div = document.createElement('div');
    const image = document.createElement('img');
    const productTop = document.createElement('div');
    const productBottom = document.createElement('div');
    const type = document.createElement('p');
    const taste = document.createElement('p');

    div.classList.add('product');
    productTop.classList.add('product-top');
    productBottom.classList.add('product-bottom');
    type.classList.add('product-name');
    taste.classList.add('product-taste');

    image.src = "src/images/casquinhas/" + casquinha.image;
    productTop.appendChild(image);

    type.textContent = casquinha.type;
    taste.textContent = casquinha.taste;

    productBottom.appendChild(type);
    productBottom.appendChild(taste);

    div.appendChild(productTop);
    div.appendChild(productBottom);

    traditionalsList.appendChild(div);
  });
}

function addFabulosos() {
  casquinhasTrufados.forEach((casquinha) => {
    const div = document.createElement('div');
    const image = document.createElement('img');
    const productTop = document.createElement('div');
    const productBottom = document.createElement('div');
    const type = document.createElement('p');
    const taste = document.createElement('p');

    div.classList.add('product');
    productTop.classList.add('product-top');
    productBottom.classList.add('product-bottom');
    type.classList.add('product-name');
    taste.classList.add('product-taste');

    image.src = "src/images/casquinhas/" + casquinha.image;
    productTop.appendChild(image);

    type.textContent = casquinha.type;
    taste.textContent = casquinha.taste;

    productBottom.appendChild(type);
    productBottom.appendChild(taste);

    div.appendChild(productTop);
    div.appendChild(productBottom);

    trufadosList.appendChild(div);
  });
}

addTradicional();
addFabulosos();