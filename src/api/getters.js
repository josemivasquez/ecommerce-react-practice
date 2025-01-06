const backendUrl  = ''

export async function getDetailProduct(product_id){
    try{
        const response = await fetch(`${backendUrl}/getDetailProduct/${product_id}`, {
            method: 'GET',
        })

        const product = response.json()
        return product

    } catch(err) {
        console.error('Error al obtener el detalle del producto: ', err);
        throw err;
    }
};

export async function getMainPage(){
    try{
        const response = await fetch(`${backendUrl}/getMainPage`, {
            method: 'GET',
        });

    } catch(err) {
        console.log('Error al obtener la página principal', err);
        throw err;
    }
};


export async function getProducts(category, page) {
    try {
        const response = await fetch(`${backendUrl}/getProducts?cat=${category}&page=${page}`, {
            method: 'GET',
        })
    } catch(err) {
        console.log('Error al obtener productos por categoria', err);
        throw err;
    }
};

export async function newOrder(order) {
    try{
        const response = await fetch(`${backendUrl}/newOrder`, {
            method: 'GET',
            body: JSON.stringify(order)
        })
    } catch(err){
        console.log('Error al agregar una nueva orden', err)
        throw err;
    }
};