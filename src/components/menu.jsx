import Link from "next/link";

export default function Menu(){
    return(
        <>
            <Link className="link" href="/chat">Chat</Link>
            <Link className="link" href="/universidades">Universidades</Link>
        </>
    );
}