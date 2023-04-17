

export default function Searchlist(){


    return(
        <div className="pages-links-search">
            <ul>
                <li><a href="/modeller">Modeller</a></li>
                <li><a href="/metodeforretningsprocesser">Metode for forretningsprocesser</a></li>
                <li><a href="/processer">Processer</a></li>
                <li><a href="/dokumentationsreoler">Dokumentationsreoler</a></li>
                <ul>
                    <li><a href="/dokumentationdrift">Dokumentation - gældende i drift</a></li>
                    <li><a href="/dokumentationudvikling">Dokumentation - udvikling på vej</a></li>
                </ul>
                <li><a href="/qlm">Værktøj: QLM</a></li>
                <li><a href="/forretningsgangehuset">Forretningsgange - Sådan gør vi</a></li>
                <li><a href="/kontakt">Kontakt os</a></li>
            </ul>
        </div>
    )
}