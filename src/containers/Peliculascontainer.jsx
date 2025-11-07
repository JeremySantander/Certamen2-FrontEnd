import React,{ useEffect, useRef, useState } from 'react'
import { Toast } from 'primereact/toast';
import { Messages } from 'primereact/messages';
import PeliToolbar from '../components/PeliToolbar'
import BoletoForm from '../components/BoletoForm'
import BoletoView from '../components/BoletoView'
import { createBoleto, getBoletos } from '../services/boletoservice';

function Peliculascontainer() {
    const toast = useRef(null);
    const msgs = useRef(null);
    const [boletos, setBoletos] = useState([]);

    useEffect(() => {
        setBoletos(getBoletos());
    }, [])

    const validarBoleto = (boleto) =>{
        if (boleto.dia===null || boleto.dia===undefined || boleto.dia===''){
            msgs.current.show([{ sticky: true, severity: 'error', summary: 'Error', detail: 'Debe seleccionar un dia'},]);
            return false;
        }
        if (boleto.tipo===null || boleto.tipo===undefined || boleto.tipo===''){
            msgs.current.show([{ sticky: true, severity: 'error', summary: 'Error', detail: 'Debe seleccionar un tipo de pago'},]);
            return false;
        }
        if (boleto.cantidad <=0){
            msgs.current.show([{ sticky: true, severity: 'error', summary: 'Error', detail: 'La cantidad de entradas debe ser mayor a 0'},]);
            return false;
        }
        if (boleto.ciudad===null || boleto.ciudad===undefined || boleto.ciudad===''){
            msgs.current.show([{ sticky: true, severity: 'error', summary: 'Error', detail: 'Debe ingresar una ciudad'},]);
            return false;
        }
        if (boleto.pelicula===null || boleto.pelicula===undefined || boleto.pelicula===''){
            msgs.current.show([{ sticky: true, severity: 'error', summary: 'Error', detail: 'Debe seleccionar una pelicula'},]);
            return false;
        }
        return true;

    }

    const handleBoletoCreate = (boleto)=>{
        if (!validarBoleto(boleto)){
            return;
        }
        createBoleto(boleto);
        setBoletos(getBoletos());
        toast.current.show({severity: "info", summary : "Boleto registrado", sticky: true});
    };

    return (
        <>
            <Messages ref={msgs} />
            <Toast ref={toast}></Toast>
            <PeliToolbar />
            <div className="row mt-3">
                <div className="col">
                    <div className="row">
                        <div className="col col-md-4">
                            <BoletoForm onCreateBoleto={handleBoletoCreate}/>
                        </div>
                        <div className="col col-md-8">
                            <BoletoView boletos={boletos}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Peliculascontainer
