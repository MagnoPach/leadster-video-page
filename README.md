# Landing Page Leadster - Teste FrontEnd

O projeto é uma landing page para a empresa Leadster, que exibe uma lista de webinars. A página possui uma seção de listagem de vídeos, onde é possível filtrar por categorias, como Agências, Chatbot, Geração de Leads, Marketing Digital e Mídia Paga. Além disso, é possível ordenar os vídeos por data de publicação ou por ordem alfabética dos títulos. A página também possui um recurso de paginação para facilitar a navegação entre os vídeos.

- [Clique aqui](https://leadster-video-page.vercel.app/) para visualizar o projeto executando em produção.

## Sobre a obtenção dos dados

- Para obter os dados, acessei diretamente o canal do YouTube da Leadster e obtive o ID de cada playlist relacionada às categorias de filtragem mencionadas anteriormente diretamente da URL. Em seguida, desenvolvi um programa que utilizava a API do YouTube para buscar os dados de cada vídeo em todas as playlists. Com base nesses dados, criei um novo objeto contendo informações como URL do video, ID do video e Thumbnail do vídeo, título, descrição, data de publicação e a categoria da playlist a que ele pertence. Ao final do processo, o programa gerou um arquivo JSON que foi hospedado no JSONBin.io. Essa plataforma permite armazenar e compartilhar facilmente o arquivo JSON contendo os dados obtidos.

- [Clique aqui](https://github.com/MagnoPach/youtube-playlists-seeker) para acessar o repositório do programa responsável por buscar os vídeos por playlist.

## Sobre a experiência

Na minha perspectiva, a experiência foi extremamente positiva, não apenas pela criação do layout em si, mas também pela atenção aos detalhes. Além de ser visualmente atraente, o projeto está completamente funcional. Dediquei tempo para visitar o site da Leadster e obter os links necessários para o footer. Criei um programa para buscar, filtrar e categorizar os dados dos vídeos diretamente do canal da Leadster no YouTube. Além disso, implementei melhorias de desempenho e SEO, resultando em uma pontuação de SEO perfeita para ambos os devices e uma pontuação de desempenho de 78 em dispositivos móveis e 99 em desktops, de acordo com o Google PageSpeed Insights. Adicionei animações e transições em todos os lugares relevantes da página. A listagem de vídeos funciona de forma fluida e eficiente em termos de desempenho. Por fim, apliquei boas práticas de desenvolvimento, incluindo gerenciamento de estado e organizei a estrutura de pastas de forma descritiva e intuitiva.

## Requisitos para execução do projeto

- Node.js versão 16.15.0 ou superior

## Executando o Projeto

Siga os passos abaixo para executar o projeto localmente:

- Clone este repositório para o seu ambiente local.
- Abra o terminal e navegue até o diretório do projeto.
- Para instalar as dependências

```console
$ npm install
```

- Para rodar o projeto:

```console
$ npm run dev
```

- Abra o navegador e vá para [http://localhost:3000](http://localhost:3000) para ver o projeto em execução.

---

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/) - Biblioteca de estilização CSS-in-JS
- [Phosphor Icons](https://phosphoricons.com/) - Biblioteca de ícones com suport para React.js
- [Axios](https://axios-http.com/ptbr/docs/intro) - HTTP Client
- [React IntersectionObserver](https://react-intersection-observer.vercel.app/?path=/docs/intro--docs) - Biblioteca que implementa Intersection Observer API para dizer quando um elemento entra ou sai do Viewport
- [React Player](https://cookpete.com/react-player/) - Bilioteca para reprodução de videos de diversas plataformas como: Youtube, Facebook, Twitch, Vimeo, entre outras.
- [React Select](https://react-select.com/home) - Biblioteca que flexibiliza a configuração e estilização de Select inputs, com suporte multiselect, autocomplete, async e busca por texto.

---

## Organização dos Diretorios

- public - Diretório que contém os assets do projeto.
- src - Diretório raiz do projeto.

Dentro de ./src:

- /components - Diretório que contém os Components do projeto.
- /models - Diretório que contém os models de tipagem usados no projeto.
- /pages - Diretório que contém as páginas da aplicação, seguindo o conceito de Filesystem Routing, onde cada arquivo representa uma rota da aplicação.
- /store - Diretório que contém os gerenciadores de estado da aplicação.
- /utils - Diretório que contém objetos, presets e funções que serão utilizados em diversos arquivos da aplicação.

Pensando na escalabilidade dos componentes, organizei da seguinte forma dentro do diretório "./components":

- /Actions - Components que executam algum tipo de ação como: /DownloadButton, /Filters, /SocialLinks, /VideoCards.
- /Sections - Componets que representam cada seção da página.
- /Popups - Components que sobrepoem a tela como: /VideoModal e outros que possam surgir futuramente.
- Os demais componentes, como Header, Footer e outros, foram mantidos na raiz do diretório "/components". Esses componentes são de natureza mais global e são utilizados em várias partes da aplicação, portanto, foram colocados na raiz para facilitar o acesso e reutilização em diferentes páginas e seções. Essa organização ajuda a manter uma estrutura clara e consistente para os componentes do projeto.
