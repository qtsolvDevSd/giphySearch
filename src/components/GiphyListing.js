import React from 'react'
import GiphyCard from "./GiphyCard";

const GiphyListing = ({listData}) => {
  return (
    <div>
      <div className="row">
          {listData.length===0?"Search Giphy" : 
            listData.reverse().map((data,index)=>(
              <div className="col-md-4">
                <GiphyCard data={data} key="{index+'asdas'}" />
              </div>
            ))
          }
      </div>
    </div>
  )
}


export default GiphyListing
