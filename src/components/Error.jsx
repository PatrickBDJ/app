import {useNavigate} from 'react-router-dom'

export default function ErrorPage(){

    const goBack = useNavigate()

    return (
        <div className="page-top-margin">
        <div className="page-container error-page-center">
            <h1>FEJL: Siden kan ikke findes</h1>
            <div className="model-page-row">
                <div className="model-page-column model-page-column-full">
                    <h3>Beklagevis er dette link ikke aktivt endnu.</h3>
                </div>
            </div>
            <div className="model-page-row">
                <div className="model-page-column model-page-column-full">
                    <button onClick={() => goBack(-1)} className="link-btn">Gå Tilbage</button>
                </div>
            </div>
        </div>
    </div>
    )
}