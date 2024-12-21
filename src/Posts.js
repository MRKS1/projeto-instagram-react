

export default function Posts() {
  const conteudoPosts = [
    { nome: "meowed", imagemLogo: "assets/meowed.svg", imagemPost: "assets/gato-telefone.svg", curtiuPerfil: "respondeai", curtiuLogo: "assets/respondeai.svg", curtidas: 101.523 },
    { nome: "barked", imagemLogo: "assets/barked.svg", imagemPost: "assets/dog.svg", curtiuPerfil: "adorable_animals", curtiuLogo: "assets/adorable_animals.svg", curtidas: 99.159 },
    { nome: "filomoderna", imagemLogo: "assets/filomoderna.svg", imagemPost: "assets/elefante.png", curtiuPerfil: "9gag", curtiuLogo: "assets/9gag.svg", curtidas: 88.233 }
  ];



  return (
    <div className="posts">
      {conteudoPosts.map((p, index) => <Post nome={p.nome} imagemLogo={p.imagemLogo} imagemPost={p.imagemPost}
        curtiuPerfil={p.curtiuPerfil} curtiuLogo={p.curtiuLogo} curtidas={p.curtidas} key={index} />)}
    </div>
  );
}


function Post(props) {
  const { nome, imagemLogo, imagemPost, curtiuPerfil, curtiuLogo, curtidas } = props;

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={imagemLogo} />
          {nome}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={imagemPost} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={curtiuLogo} />
          <div className="texto">
            Curtido por <strong>{curtiuPerfil}</strong> e <strong>outras {curtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}