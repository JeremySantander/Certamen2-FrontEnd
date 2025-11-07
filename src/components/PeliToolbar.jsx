import React from 'react'
import { Toolbar } from 'primereact/toolbar';
function PeliToolbar() {
    return (
        <div className="row">
            <Toolbar start={<h3>Sansamark</h3>}>
            </Toolbar>
        </div>
    )
}

export default PeliToolbar