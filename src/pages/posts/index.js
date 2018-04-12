import React from 'react';
import { NavLink } from 'react-router-dom';

import eu from '../../assets/images/eu.jpg';

const Posts = () => (
  <div>
    <main>
      <h1>Sobre mim</h1>
      <p>
        Moro em São Paulo mas atendo clientes do mundo todo. Sou conhecido por
        fazer produtos de <em>qualidade</em>, <em>durabilidade</em> e que{' '}
        <em>agregam valor</em> para meus clientes. Trabalho usando a web como
        plataforma, ou seja, respiro HTML5, CSS3 e JavaScript (ou melhor:
        ECMASCript). Crio sites para todos, seguindo as principais diretivas de
        acessibilidade, responsividade e web semântica, sem descuidar da
        qualidade de código.
      </p>

      <h2>Como trabalho</h2>
      <blockquote>
        <p>
          João é o melhor desenvolvedor front-end com quem já trabalhei. Muito
          eficiente e muito capaz. Recomendo sem dúvidas!
        </p>
        <cite>José Souza, Fiat</cite>
      </blockquote>
      <p>
        Satisfazer meus clientes é prioridade. Para isso, garanto um processo de
        desenvolvimento altamente interativo, baseado em feedback contínuo.{' '}
        <strong>Não trabalho com escopo fechado</strong>: o cliente é que decide
        quando o produto está pronto.
      </p>

      <p>
        Também não trabalho com prazos fechados: qualidade é importante demais
        para ser sacrificada.
      </p>

      <h2>Experiência</h2>

      <blockquote>
        <p>
          João domina as tecnologias como ninguém. Eu apresentava um problema,
          ele tinha na ponta da língua a solução mais adequada com as
          tecnologias mais recentes.{' '}
        </p>
        <cite>Manoel Santos, Petrobrás </cite>
      </blockquote>

      <p>
        Já desenvolvi projetos para grandes empresas como BMW, UOL e IBM. Neles,
        o foco principal era entregar uma experiência imersiva e impactante para
        o usuário final sem descuidar do desempenho e da acessibilidade da
        página. Também já fui contratado para transformar grandes portais, como
        Terra e G1, em páginas responsivas. Fui responsável por renovar o
        layout, reorganizar o conteúdo e re-escrever o código de forma mais
        reaproveitável.
      </p>

      <h2>Comunidade</h2>

      <p>
        Procuro repassar meu conhecimento para a comunidade. Para isso, já dei
        diversas palestras e mantenho um <NavLink to="/blog">blog</NavLink>.
      </p>
    </main>
    {/* <img src={eu} alt="Foto de João da Silva" /> */}

    <aside>
      <h1>João da Silva</h1>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Portifolio</a>
          </li>
          <li>
            <a href="">Bio</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
);

export default Posts;
