import { CORE_CONCEPTS } from '../../data/data'
import '../Main/Main.css'

export default function CoreConcepts({header}) {
    return (
      <>
        <h2>{header}</h2>
        <section id='core-concepts'>
          <ul>
            {CORE_CONCEPTS.map(concept => (
              <li>
                <img src={concept.image} alt={concept.title}></img>
                <h3>{concept.title}</h3>
                <p>{concept.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </>
    )
  }