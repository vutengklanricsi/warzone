import React from 'react'

const Comics = ({comics}) => {
  return (
    <div>
        {comics.map(comic => (
            <div key={comic.id}>{comic.title}</div>
        )
    )}</div>
  )
}

export default Comics