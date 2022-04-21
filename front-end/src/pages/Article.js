import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Article() {
    const { id } = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8000/api/teddies/${id}`)
          .then((reponse) => {
              return reponse.json();
          })
          .then(data => {
              setArticle(data);
          })
      }, [])
  return (
    <section className="article">
        <img className="article__image" src={article.imageUrl}/>
        <header>
            <h1>{article.name}</h1>
            <h2>{article.price / 100} €</h2>
        </header>
        <h3>{article.description}</h3>

        <select className="article__type">
            <option>Choisissez une couleur</option>
        </select>
    </section>
  )
}
