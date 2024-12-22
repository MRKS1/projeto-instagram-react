import React from "react";

export default function User() {
    const imagemInicial = "assets/catanacomics.svg";
    const [nome, setNome] = React.useState("catanacomics");
    const [imagem, setImagem] = React.useState(imagemInicial);


    function nomeInserido() {
        const nomeDigitado = prompt("Qual o seu nome?");
        setNome(nomeDigitado);
    }

    function mudarImagem() {
        const linkImagem = prompt("Digite o link da imagem");
        setImagem(linkImagem);
    }


    return (
        <div className="usuario">
            <img onClick={mudarImagem} src={!imagem ? imagemInicial : imagem} />
            <div className="texto">
                <span>
                    <strong>{!nome ? "catanacomics" : `${nome}`}</strong>
                    <ion-icon name="pencil" onClick={nomeInserido}></ion-icon>
                </span>
            </div>
        </div>
    );
}