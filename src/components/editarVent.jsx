'use client';
import axios from "axios";
import Link from "next/link";

export default function EditSale({ id }) {
    async function editar(e) {
        e.preventDefault(); 

        const url = `http://localhost:3000/ventas/buscarPorId/${id}`; 

        try {
            await axios.get(url);
            window.location.replace(`/ventas/editar/${id}`); 
        } catch (error) {
            console.error("Error al editar venta:", error);
        }
    }

    return (
        <Link href={`/ventas/editar/${id}`} onClick={editar}> {}
            Editar
        </Link>
    );
}
