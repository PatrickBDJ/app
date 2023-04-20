import Accordion from './Accordion';


function Frontpage(){
    return(
    <div className="frontpage-body">
        <div className='image-zindex'>
            <img src={require('../assets/bird.jpg')} alt="fugl" id="bird" />
        </div>
        <div className="page-header frontpage-header">
            <h1>QLM-team vidensdeling</h1>
            <p>På disse sider finder du beskrivelser af og links til modeller, processer, metode til dokumentation af forretningsgange, dokumentationsreoler & værktøjet QLM.</p>
        </div>
        <div className='frontpage-content'>
             <div className='frontpage-accordion'>
                <Accordion/>
             </div>
             <div className='frontpage-text'>
                <h3>Anvendelse</h3>
                <p>I ATP anvender vi processer til at forstå og formidle forretningsgange og modeller som understøtter effektiv udviklings- og projektforløb af høj kvalitet.</p>
                <p>I ATP udstilles den samlede forretnings- og systemdokumentation pr. ydelse/ordning via <a href="/dokumentationsreoler">Dokumentationsreoler</a></p>
             </div>
             <div className="frontpage-link-box-row">
                <div className="frontpage-link-box-three">
                    <div className="frontpage-link-box-column">
                        <a href="/modeller">
                            <img src={require ('../assets/citron.jpg')} alt="" className='citron-small' />
                            <h5>Modeller</h5>
                        </a>
                    </div>
                
                    <div className="frontpage-link-box-column">
                        <a href="/forretningsprocesser">
                            <img src={require ('../assets/citron.jpg')} alt="" className='citron-small' />
                            <h5>Metode for forretningsprocesser</h5>
                        </a>
                    </div>
                    <div className="frontpage-link-box-column">
                    <a href="/processer">
                        <img src={require ('../assets/citron.jpg')} alt="" className='citron-small' />
                        <h5>Processer</h5>
                        </a>
                    </div>
                </div>
                <div className="frontpage-link-box-three">
                    <div className="frontpage-link-box-column">
                        <a href="/dokumentationsreoler">
                            <img src={require ('../assets/citron.jpg')} alt="" className='citron-small' />
                            <h5>Dokumentationsreoler</h5>
                            </a>
                        </div>
                    <div className="frontpage-link-box-column">
                        <a href="/qlm">
                            <img src={require ('../assets/citron.jpg')} alt="" className='citron-small' />
                            <h5>Værktøj: QLM</h5>
                            </a>
                    </div>
                    <div className="frontpage-link-box-column">
                        <a href="/forretningsgangehuset">
                            <img src={require ('../assets/citron.jpg')} alt="" className='citron-small' />
                            <h5>Forretningsgange - Sådan gør vi</h5>
                        </a>
                    </div>
                </div>
             </div>
        </div>
    </div>
    )
}



export default Frontpage;