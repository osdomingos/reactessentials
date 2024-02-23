import TabButton from "./TabButton"
import './Examples.css'
import { useState } from "react"
import { EXAMPLES } from "../../data/data"

export default function Examples() {
    const [tabContent, setTabContent] = useState(null)

    const handleSelect = (selectedButton) => {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        if (selectedButton === 'components') {
            setTabContent('components')
        } else if (selectedButton === 'jsx') {
            setTabContent('jsx')
        } else if (selectedButton === 'props') {
            setTabContent('props')
        } else {
            setTabContent('state')
        }
    }

    return (
        <>
            <section id='examples'>
                <h2>Exemplos</h2>
                <menu>
                    <TabButton
                        isSelected={tabContent === 'components' ? true : false}
                        onSelect={() => handleSelect('components')}>
                        Componentes
                    </TabButton>
                    <TabButton
                        isSelected={tabContent === 'jsx' ? true : false}
                        onSelect={() => handleSelect('jsx')}>
                        JSX
                    </TabButton>
                    <TabButton
                        isSelected={tabContent === 'props' ? true : false}
                        onSelect={() => handleSelect('props')}>
                        Props
                    </TabButton>
                    <TabButton
                        isSelected={tabContent === 'state' ? true : false}
                        onSelect={() => handleSelect('state')}>
                        Estado
                    </TabButton>
                </menu>
                {!tabContent ? <p>Bora, escolhe um botão.</p> :
                    <div id='tab-content'>
                        <h3>{EXAMPLES[tabContent].title}</h3>
                        <p>{EXAMPLES[tabContent].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[tabContent].code}
                            </code>
                        </pre>
                    </div>
                }
            </section>
        </>
    )
}