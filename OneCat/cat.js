document.addEventListener('DOMContentLoaded', () => getCat());

async function getCat() {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        const cat = response.data[0];
        show(cat);
    } catch (error) {
        console.log( 'Error en la funcion getCat ' + error);
    }
};

function show(cat){
    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = '';

    const img = document.createElement('img');
    img.src = cat.url;
    img.alt = 'Imagen de gatos';
    img.className = 'h-80 w-80 rounded-full m-8';
    contenedor.appendChild(img);
};

const btn = document.getElementById('btn');
btn.addEventListener('click', () => getCat());