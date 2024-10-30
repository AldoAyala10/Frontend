'use client';
import axios from "axios";
import Link from "next/link";

export default function EditUser({ id }) {
    async function editar(e) {
        e.preventDefault(); 
        
        const url = `http://localhost:3000/buscarPorId/${id}`;
        
        try {
            await axios.get(url);
            window.location.replace(`/usuarios/editar/${id}`);
        } catch (error) {
            console.error("Error al editar usuario:", error);
        }
    }

    return (
        <Link href={`/usuarios/editar/${id}`} onClick={editar}>
            Editar
        </Link>
    );
}

