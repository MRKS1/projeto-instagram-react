import React from "react";


export default function Posts() {
  const conteudoPosts = [
    { nome: "meowed", imagemLogo: "assets/meowed.svg", imagemPost: "assets/gato-telefone.svg", curtiuPerfil: "respondeai", curtiuLogo: "assets/respondeai.svg", curtidas: 101523 },
    { nome: "barked", imagemLogo: "assets/barked.svg", imagemPost: "assets/dog.svg", curtiuPerfil: "adorable_animals", curtiuLogo: "assets/adorable_animals.svg", curtidas: 99159 },
    { nome: "filomoderna", imagemLogo: "assets/filomoderna.svg", imagemPost: "assets/elefante.png", curtiuPerfil: "9gag", curtiuLogo: "assets/9gag.svg", curtidas: 88233 }
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

  const coracaoVazio = <ion-icon name="heart-outline" onClick={like}></ion-icon>;
  const coracaoSelecionado = <ion-icon class="coracaoVermelho" name="heart" onClick={dislike}></ion-icon>;
  const imagemClick = <img src={imagemPost} onClick={like} />;
  const iconeSalvar = <ion-icon name="bookmark-outline" onClick={selecionado}></ion-icon>;

  const [coracao, setCoracao] = React.useState(coracaoVazio);
  const [quantidade, setQuantidade] = React.useState(curtidas);
  const [imagem, setImagem] = React.useState(imagemClick);
  const [salvar, setSalvar] = React.useState(iconeSalvar);


  function like() {
    setCoracao(coracaoSelecionado);
    setQuantidade(curtidas + 1);
    setImagem(imagemClick);
  }

  function dislike() {
    setCoracao(coracao);
    setQuantidade(curtidas);
    setImagem(imagem);
  }

  function selecionado() {
    const salvarSelecionado = <ion-icon name="bookmark" onClick={naoSelecionado}></ion-icon>;
    setSalvar(salvarSelecionado);
  }

  function naoSelecionado() {
    setSalvar(salvar);
  }

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
        {imagem}
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            {coracao}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            {salvar}
          </div>
        </div>

        <div className="curtidas">
          <img src={curtiuLogo} />
          <div className="texto">
            Curtido por <strong>{curtiuPerfil}</strong> e <strong>outras {quantidade} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

