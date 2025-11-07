import React, { useEffect, useState } from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
        
function BoletoView({boletos}) {
    const [boletosFiltrados, setBoletosFiltrados] = useState([]);
    const [pelicula, setPelicula] = useState(null);
    const peliculas = ["---","Wifi Ralph", "Dragon Ball Super Broly", "Cascanueces", "El Grinch"];

    useEffect(() => {
        setBoletosFiltrados(boletos);
    }, [boletos]);

    const handleFiltrar = (pelicula)=>{
        if(pelicula !== "---"){
            const boletosFiltrados = boletos.filter(boleto => boleto.pelicula === pelicula);
            setBoletosFiltrados(boletosFiltrados);
        }
        else{
            setBoletosFiltrados(boletos);
        }
    }

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Filtrar</span>
            <Dropdown options={peliculas} value={pelicula} placeholder="---" onChange={(e) => {setPelicula(e.value); handleFiltrar(e.value);}} />
        </div>
    );

    return (
        <div>
            <DataTable value={boletosFiltrados} header={header} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="dia" header="Dia"></Column>
                    <Column field="pelicula" header="Pelicula"></Column>
                    <Column field="cantidad" header="Cantidad"></Column>
                    <Column field={(rowData) => rowData.cantidad * 5000} header="Valor a Pagar"></Column>
                </DataTable>
        </div>
    )
}

export default BoletoView