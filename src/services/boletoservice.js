const localKey = "boletos_data";

const createBoleto = (boleto) => {
    let lista = [];
    const data = localStorage.getItem(localKey);
    if(data != null){
        lista = JSON.parse(data);
    }
    lista = [...lista, boleto];
    localStorage.setItem(localKey, JSON.stringify(lista));
}

const getBoletos = () => {
    const data = localStorage.getItem(localKey);
    if(data != null){
        return JSON.parse(data);
    }
    return [];
}


export { createBoleto, getBoletos, };