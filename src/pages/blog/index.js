import React from 'react';

const Blog = () => (
  <div>
    <main>
      <h1>Blog</h1>

      <article>
        <h2>O essencial de design responsivo</h2>
        <p>
          Design responsivo tem ganho cada vez mais atenção como técnica de
          desenvolvimento de páginas web para dispositivos móveis. Mas como
          começar?
        </p>
        <a href="#">Leia mais</a>
        <footer>
          Tags: <a href="#">design responsivo</a>, <a href="#">mobile</a>,{' '}
          <a href="#">css</a>
        </footer>
      </article>
      <article>
        <h2>Por que fazer páginas acessíveis?</h2>
        <p>
          Tem se falado cada vez sobre acessibilidade na web. Há diversas
          técnicas e diretivas a serem seguidas, inclusive da própria W3C. Mas
          vale a pena investir nisso?
        </p>
        <a href="#">Leia mais</a>
        <footer>
          Tags: <a href="#">acessibilidade</a>, <a href="#">boas práticas</a>
        </footer>
      </article>
      <article>
        <h2>JavaScript não obstrusivo</h2>
        <p>
          JavaScript é uma linguagem essencial hoje em dia para criar páginas
          ricas, interativas e dinâmicas. Porém, há alguns cuidados que devem
          ser tomados ao colocarmos código JavaScript em nossas páginas.
        </p>
        <a href="#">Leia mais</a>
        <footer>
          Tags: <a href="#">javascript</a>, <a href="#">boas práticas</a>
        </footer>
      </article>
    </main>
  </div>
);

export default Blog;
