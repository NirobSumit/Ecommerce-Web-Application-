import React from 'react'

function Rating({value, text, color}) {
  return (
    <div style={{color}} className = 'rating'>
        <span>
            <i className={
                value >=1
                ?'fas fa-star'
                :value >= .5
                    ?'fas fa-star-half-alt'
                    :'far fa-star'}>
            </i>
        </span>
        <span>
            <i className={
                value >=2
                ?'fas fa-star'
                :value >= 1.5
                    ?'fas fa-star-half-alt'
                    :'far fa-star'}>
            </i>
        </span>
        <span>
            <i className={
                value >=3
                ?'fas fa-star'
                :value >= 2.5
                    ?'fas fa-star-half-alt'
                    :'far fa-star'}>
            </i>
        </span>
        <span>
            <i className={
                value >=4
                ?'fas fa-star'
                :value >= 3.5
                    ?'fas fa-star-half-alt'
                    :'far fa-star'}>
            </i>
        </span>
        <span>
            <i className={
                value >= 5
                ?'fas fa-star'
                :value >= 4.5
                    ?'fas fa-star-half-alt'
                    :'far fa-star'}>
            </i>
        </span>
        <span>
            { text}
        </span>
    </div>
  )
}

export default Rating