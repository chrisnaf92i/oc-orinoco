import React from 'react'

export default function ShopArticle(props) {
  return (
    <article class="ShopArticle">
      <img class="ShopArticle__image" src={props.data.imageUrl}/>
      <footer class="ShopArticle__footer">
        <h2>{props.data.name} </h2>
        <h3>{props.data.price / 1000}0 €</h3>
      </footer>
    </article>
  )
}
