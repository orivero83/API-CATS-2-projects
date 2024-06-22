document.addEventListener('DOMContentLoaded', () => getCats());

async function getCats() {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search',{
            params: {
                limit: 8,
                api_key: 'live_SuTlfqBRxARX0pIfgfJ4zmyZb1noWixMf0aNMehgOwNpycWZqnJB86Won4HBr5Yf',
            }
        });
        const cats = response.data;
        show(cats);
    } catch (error) {
        console.error( 'Error en la funcion > getCats ' + error);
    }
}

function show(cats) {
    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = '';

    cats.forEach(element => {
        const img = document.createElement('img');
        img.src = element.url;
        img.alt = 'Imagenes de gatos';
        img.className = 'h-40 w-40 rounded-full m-8';
        contenedor.appendChild(img);
    });
};

const btn = document.getElementById('btn');
btn.addEventListener('click', () => getCats());