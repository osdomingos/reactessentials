import componentsImg from '../assets/components.png';
import propsImg from '../assets/config.png';
import jsxImg from '../assets/jsx-ui.png';
import stateImg from '../assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Componentes',
    description:
      'O bloco fundamental de construção da interface do usuário - componha a UI combinando múltiplos componentes.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description: 'Retorna (potencialmente dinâmico) código HTML para definir a marcação que será realmente renderizada.',
      // 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description: 'Faz os componentes serem configuráveis (logo reutilizáveis) ao passar dados de entrada para eles.',
      // 'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'Estado',
    description: 'Dados administrados pelo React que, quando alterados, fazem o componente re-renderizar & a UI atualizar.',
      // 'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];

export const EXAMPLES = {
  components: {
    title: 'Componentes',
    description: 'Componentes são as peças fundamentais para aplicações React. Um componente é um módulo autocontido (HTML + CSS opcional + JS) que renderiza dados de saída.',
      // 'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function BemVindo() {
  return <h1>Olá, mundo!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description: 'JSX é uma extensão de sintaxe para JavaScript. É semelhante a uma linguagem de modelo (como HTML e CSS), mas possui todo o poder do JavaScript (por exemplo, pode produzir conteúdo dinâmico).',
      // 'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Bem-vindo {nomeDoUsuario}</h1>
  <p>Hora de aprender React!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description: 'Componentes aceitam entradas arbitrárias chamadas props (propriedades personalizadas por você). Eles são como argumentos de função.',
      // 'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function BemVindo(props) {
  return <h1>Olá, {props.nome}</h1>;
}`,
  },
  state: {
    title: 'Estado',
    description: 'Permite que os componentes do React alterem dados de saída ao longo do tempo em resposta a ações do usuário, respostas de rede e qualquer outra coisa.',
      // 'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Contador() {
  const [visivel, setVisivel] = useState(false);

  function handleClick() {
    setVisivel(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Mostrar Detalhes</button>
      {visivel && <p>Detalhes incríveis!</p>}
    </div>
  );
}`,
  },
};
