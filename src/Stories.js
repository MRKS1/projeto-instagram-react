

export default function Stories() {
  const conteudoStories = [
    { nome: "9gag", imagem: "assets/9gag.svg" },
    { nome: "meowed", imagem: "assets/meowed.svg" },
    { nome: "barked", imagem: "assets/barked.svg" },
    { nome: "nathanwpylestrangeplanet", imagem: "assets/nathanwpylestrangeplanet.svg" },
    { nome: "wawawicomics", imagem: "assets/wawawicomics.svg" },
    { nome: "respondeai", imagem: "assets/respondeai.svg" },
    { nome: "filomoderna", imagem: "assets/filomoderna.svg" },
    { nome: "memeriagourmet", imagem: "assets/memeriagourmet.svg" }
  ];

  return (
    <div className="stories">
      {conteudoStories.map((s, index) => <Story nome={s.nome} imagem={s.imagem} key={index} />)}
    </div>
  );
}


function Story(props) {
  const { nome, imagem } = props;

  return (
    <div className="story">
      <div className="imagem">
        <img src={imagem} />
      </div>
      <div className="usuario">
        {nome}
      </div>
    </div>
  );
}

