'use client';
import axios from "axios";

export default function CancelSale({ id }) {
    async function cancelarVenta(e) {
        e.preventDefault(); 
        const url = `http://localhost:3000/ventas/cancelarVenta/${id}`;

        try {
            const response = await axios.patch(url, {
                estado: 'cancelado' 
            });
            console.log("Venta cancelada:", response.data);
            window.location.replace("/ventas/mostrar"); 
        } catch (error) {
            console.error("Error al cancelar la venta:", error);
        }
    }

    return (
        <a href="#" onClick={cancelarVenta} style={{ cursor: "pointer", color: "blue" }}>
            Cancelar Venta
        </a>
    );
}
