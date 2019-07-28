import React from "react"
import "./card.styles.css"

/**
 * When do we break things down into components?
 *
 * Each component does one thing - and do that in
 * the better way posible
 */

export const Card = props => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2>{props.monster.name}</h2>
    <p> {props.monster.email}</p>
  </div>
)
