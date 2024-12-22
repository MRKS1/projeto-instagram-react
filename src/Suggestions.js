export default function Suggestions() {
    const conteudoStories = [
        { nome: "bad.vibes.memes", imagem: "assets/bad.vibes.memes.svg" },
        { nome: "chibirdart", imagem: "assets/chibirdart.svg" },
        { nome: "razoesparaacreditar", imagem: "assets/razoesparaacreditar.svg" },
        { nome: "adorable_animals", imagem: "assets/adorable_animals.svg" },
        { nome: "smallcutecats", imagem: "assets/smallcutecats.svg" }
    ];

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {conteudoStories.map((s, index) => <Suggestion nome={s.nome} imagem={s.imagem} key={index} />)}
        </div>
    );
}


function Suggestion(props) {
    const { nome, imagem } = props;

    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={imagem} />
                <div className="texto">
                    <div className="nome">{nome}</div>
                    <div className="razao">Segue você</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
}
