'use client';
import axios from "axios";
import Link from "next/link";

export default function EditProduct({ id }) {
    async function editar(e) {
        e.preventDefault(); 

        const url = `http://localhost:3000/productos/buscarPorId/${id}`;
        try {
            await axios.get(url);
            window.location.replace(`/productos/editar/${id}`);
        } catch (error) {
            console.error("Error al editar producto:", error);
        }
    }
    return (
        <Link href={`/productos/editar/${id}`} onClick={editar}>
            Editar
        </Link>
    );
}
