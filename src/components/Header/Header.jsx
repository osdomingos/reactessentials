import logo from '../../assets/react-core-concepts.png'
import './Header.css'

const reactKeyWords = ['Fundamentos', 'Essenciais', 'Conceitos']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
  const key = reactKeyWords[genRandomInt(reactKeyWords.length - 1)]

  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>React - {key}</h1>
      <p>
        Não quer mais repetir várias e várias vezes trechos de código?
        <br></br>
        <span className="tip">
          Crie partes reutilizáveis no seu app deixando o carregamento da página muito mais rápido
        </span>
      </p>
      <p>
        Cansado de percorrer um extenso documento HTML em busca das partes do seu código?
        <br></br>
        <span className="tip">
          Separe em partes menores seus elementos e as rearranje da maneira que quiser
        </span>
      </p>
      <p>
        Afim de criar seus próprios elementos HTML?
        <br></br>
        <span className="tip">
          Reúna os elementos que você já conhece em composições novas e complexas, criando seus próprios componentes :)
        </span>
      </p>
    </header>
  )
}