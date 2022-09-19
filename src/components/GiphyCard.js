import React from 'react'

function GiphyCard({data}) {
  const style = {
    "width": "18rem"
  }
  return (
    <>
      <div className="card" style={style}>
        <img src={data.images.original.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.username}</p>
        </div>
      </div>
    </>
  )
}

export default GiphyCard
