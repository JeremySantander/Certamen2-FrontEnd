import { Panel } from 'primereact/panel'
import React, { useState } from 'react'
import {SelectButton} from 'primereact/selectbutton';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { ListBox } from 'primereact/listbox';

function BoletoForm({onCreateBoleto=(boleto)=>{}}) {
    const diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
    const tiposPago = ['Efectivo', 'Tarjeta'];
    const peliculas = ["Wifi Ralph", "Dragon Ball Super Broly", "Cascanueces", "El Grinch"];
    const [tipoPago, setTipoPago] = useState(tiposPago[0]);
    const [diaSel, setDiaSel] = useState(diasSemana[0]);
    const [cantEntradas, setCantEntradas] = useState(1);
    const [ciudad, setCiudad] = useState('');
    const [peliSel, setPeliSel] = useState('');
   
    const handleClick = ()=>{

        const boleto = {tipo:tipoPago, dia: diaSel, cantidad: cantEntradas, ciudad: ciudad, pelicula: peliSel};
        onCreateBoleto(boleto);
    }

    return (
        <Panel header="Comprar Boleto">
            <div className="mb-3 d-flex flex-column">
                 <label htmlFor="dia-select">Dia</label>
                 <Dropdown id="dia-select" value={diaSel} onChange={e=>{setDiaSel(e.value)}} options={diasSemana} optionLabel="nombre" 
                    placeholder="Seleccione dia de pelicula" checkmark={true} highlightOnSelect={false} />
            </div>
            <div className="mb-3 d-flex flex-row justify-content-between">
                    <label htmlFor="tipo-pago-select">Tipo de Pago</label>
                    <SelectButton id='tipo-pago-select' options={tiposPago} value={tipoPago} onChange={e=>setTipoPago(e.value)} ></SelectButton>
            </div>
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="cantidad-entradas-int">Cantidad de Entradas</label>
                <InputNumber 
                    id='cantidad-entradas-int' 
                    value={cantEntradas} 
                    onValueChange={(e) => setCantEntradas(e.value)} />
            </div>
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="ciudad-txt">Ciudad</label>
                <InputText id="ciudad-txt"
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                    aria-describedby="ciudad-help" />
            </div>
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="pelicula-select">Película</label>
                <ListBox id='pelicula-select'
                    value={peliSel} 
                    onChange={(e) => setPeliSel(e.value)} 
                    options={peliculas}
                    className="w-full md:w-14rem" />
            </div>

            <div className="mb-3 d-flex flex-column">
                <Button label='Comprar Boleto' severity='info' onClick={handleClick} rounded></Button>
            </div>
        </Panel>
    )
}

export default BoletoForm