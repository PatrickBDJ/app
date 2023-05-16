import Accordion from './Accordion';


function Frontpage(){
    return(
    <div className="frontpage-body">
        <div className='image-zindex'>
            <img src={require('../assets/frontpage.jpg')} alt="afdelingen" className="frontpage-image page-top-image" />
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
                <p>I ATP udstilles den samlede forretnings- og systemdokumentation pr. ydelse/ordning via <a href="/app/dokumentationsreoler">Dokumentationsreoler</a></p>
             </div>
             <div className="frontpage-link-box-row">
                <div className="frontpage-link-box-three">
                    <div className="frontpage-link-box-column">
                        <a href="/app/modeller">
                            <img src={require ('../assets/modeller.jpg')} alt="modeller" className='frontpage-link-images' />
                            <h5>Modeller</h5>
                        </a>
                    </div>
                
                    <div className="frontpage-link-box-column">
                        <a href="/app/forretningsprocesser">
                            <img src={require ('../assets/metodeforforretningsprocesser.jpg')} alt="metode for forretningsprocesser" className='frontpage-link-images' />
                            <h5>Metode for forretningsprocesser</h5>
                        </a>
                    </div>
                    <div className="frontpage-link-box-column">
                    <a href="/app/processer">
                        <img src={require ('../assets/processer.jpg')} alt="processer" className='frontpage-link-images' />
                        <h5>Processer</h5>
                        </a>
                    </div>
                </div>
                <div className="frontpage-link-box-three">
                    <div className="frontpage-link-box-column">
                        <a href="/app/dokumentationsreoler">
                            <img src={require ('../assets/dokumentationsreol.jpg')} alt="" className='frontpage-link-images' />
                            <h5>Dokumentationsreoler</h5>
                            </a>
                        </div>
                    <div className="frontpage-link-box-column">
                        <a href="/app/qlm">
                            <img src={require ('../assets/qlm.jpg')} alt="" className='frontpage-link-images' />
                            <h5>Værktøj: QLM</h5>
                            </a>
                    </div>
                    <div className="frontpage-link-box-column">
                        <a href="/app/forretningsgangehuset">
                            <img src={require ('../assets/huset.jpg')} alt="" className='frontpage-link-images' />
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