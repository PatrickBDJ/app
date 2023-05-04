export default function Forretningsgangehuset(){
    return(
        <div className="page-top-margin">
        <div className="page-container">
            <h1>Forretningsgange - Sådan gør vi...</h1>
            <div className="model-page-row">
                <div className="model-page-column">
                    <p>
                        Sådan gør vi... er en model til forretningsgange, der er under opbygning og siden vil løbende blive opdateret.
                        <br /><br />
                        Modellen er et MVP (Minimal Variable Product) og har således til formål at gøre det muligt at få læring fra jeres interaktion med modellen/produktet hurtigst muligt.
                    </p>
                </div>
                <div className="model-page-column">
                    <img src={require('../assets/huset.png')} alt="huset grafik" className='test-goats'/>
                </div>
            </div>
            <div className="model-page-row">
                <div className="model-page-column model-page-column-full">
                    <h3>Formål</h3>
                    <p className='no-margin-p'>
                        Sådan gør vi... har til formål at skabe en fælles indgang til dig, som har behov for viden om andre områders forretningsgange eller arbejde med forretningsgange i ATP. Det kan også være du ønsker at udforme en ny, men er i tvivl om hvilke retningslinjer, der gælder for dit område eller ønsker at optimere en arbejdsgang og har behov for guidance.
                        <br />
                        Indgangen giver dig link til viden om:
                    </p>
                    <ul className='ul-default'>
                        <li>Forretningsgange</li>
                        <li>Retningslnijer for forretningsgange</li>
                        <li>Vejledninger til at udforme en forretningsgang</li>
                    </ul>
                    <p>
                        Ansvaret for opdatering af forretningsgange påhviler det enkelte forretningsområde.
                    </p>

                </div>
            </div>
        </div>
    </div>
    )
}