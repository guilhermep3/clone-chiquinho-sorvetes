const traditionalsList = document.getElementById('traditionals-list');
const fabulousList = document.getElementById('fabulous-list');

const milkshakesData = [
  {
    image: "produto_milkshake_baunilha.png.webp",
    type: "Milk Shake",
    taste: "Baunilha",
    class: "Tradicional"
  },
  {
    image: "produto_milkshake_chocolate.png.webp",
    type: "Milk Shake",
    taste: "Chocolate",
    class: "Tradicional"
  },
  {
    image: "produto_milkshake_flocos.png.webp",
    type: "Milk Shake",
    taste: "Flocos",
    class: "Tradicional"
  },
  {
    image: "produto_milkshake_maracuja.png.webp",
    type: "Milk Shake",
    taste: "Maracujá",
    class: "Tradicional"
  },
  {
    image: "produto_milkshake_fabulosos_acai.png.webp",
    type: "Milk Shake",
    taste: "Açaí",
    class: "Fabulosos"
  },
  {
    image: "produto_milkshake_fabulosos_chocotino.png.webp",
    type: "Milk Shake",
    taste: "Chocotino",
    class: "Fabulosos"
  },
  {
    image: "produto_milkshake_fabulosos_doce_de_leite.png.webp",
    type: "Milk Shake",
    taste: "Doce de Leite",
    class: "Fabulosos"
  },
  {
    image: "produto_milkshake_fabulosos_limao_leite_moca.png.webp",
    type: "Milk Shake",
    taste: "Limão & Leite Moça",
    class: "Fabulosos"
  },
];

const milkshakesTradicionais = milkshakesData.filter((m) => m.class === 'Tradicional')
const milkshakesFabulosos = milkshakesData.filter((m) => m.class === 'Fabulosos')

function addTradicional() {
  milkshakesTradicionais.forEach((milkshake) => {
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

    image.src = "src/images/milkshakes/" + milkshake.image;
    productTop.appendChild(image);

    type.textContent = milkshake.type;
    taste.textContent = milkshake.taste;

    productBottom.appendChild(type);
    productBottom.appendChild(taste);

    div.appendChild(productTop);
    div.appendChild(productBottom);

    traditionalsList.appendChild(div);
  });
}

function addFabulosos() {
  milkshakesFabulosos.forEach((milkshake) => {
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

    image.src = "src/images/milkshakes/" + milkshake.image;
    productTop.appendChild(image);

    type.textContent = milkshake.type;
    taste.textContent = milkshake.taste;

    productBottom.appendChild(type);
    productBottom.appendChild(taste);

    div.appendChild(productTop);
    div.appendChild(productBottom);

    fabulousList.appendChild(div);
  });
}

addTradicional();
addFabulosos();