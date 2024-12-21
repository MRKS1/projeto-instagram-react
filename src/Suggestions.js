export default function Suggestions() {
    const conteudoStories = [
        { nome: "bad.vibes.memes", imagem: "assets/bad.vibes.memes.svg" },
        { nome: "chibirdart", imagem: "assets/chibirdart.svg" },
        { nome: "razoesparaacreditar", imagem: "assets/razoesparaacreditar.svg" },
        { nome: "adorable_animals", imagem: "assets/adorable_animals.svg" },
        { nome: "smallcutecats", imagem: "assets/smallcutecats.svg" }
    ];

    return (
        <div class="sugestoes">
            <div class="titulo">
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
        <div class="sugestao">
            <div class="usuario">
                <img src={imagem} />
                <div class="texto">
                    <div class="nome">{nome}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}
