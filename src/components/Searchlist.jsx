import { useState, useCallback } from "react";
import { Fzf } from "fzf";

export default function Searchlist() {
  const [query, setQuery] = useState ('');
  const [results, setResults] = useState([]);
  const [links] = useState([
    { id: 1, url: "/app/modeller", label: "Modeller" },
    {
      id: 2,
      url: "/app/metodeforretningsprocesser",
      label: "Metode for forretningsprocesser",
    },
    { id: 3, 
      url: "/app/processer", 
      label: "Processer" },
    { id: 4, 
      url: "/app/dokumentationsreoler", 
      label: "Dokumentationsreoler" },
    { id: 5, 
      url: "/app/qlm", 
      label: "Værktøj: QLM" },
    { id: 6, 
      url: "/app/forretningsgangehuset", 
      label: "Forretningsgange - Sådan gør vi" },
    { id: 7, 
      url: "/app/kontakt", 
      label: "Kontakt os" }
  ]);

  const search = useCallback(
    (e) => {
      const selector = ({ label, url }) => `${label} ${url}`;
      const fuzzy = new Fzf(links, { selector });
      const res = fuzzy.find(e.target.value);
      setResults(res.map((entry) => entry.item));
      setQuery(e.target.value);
    },
    [links]
  );

  return (
    <div className="pages-links-search">
        <div className="search-input">
            <input
                placeholder="Søg efter links"
                onChange={search}
                id="search-input"
            />
        </div>
        <div className="search-ul">
            <ul>
                {!query &&
                links?.map((link) => (
                    <li key={link.id}>
                    <a href={link.url}>{link.label}</a>
                    </li>
                ))}
                {query &&
                results.map((link) => (
                    <li key={link.id}>
                    <a href={link.url}>{link.label}</a>
                    </li>
                ))}
            </ul>
      </div>
    </div>
  );
}