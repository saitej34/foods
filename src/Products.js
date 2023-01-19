import React from 'react'

const Products = ({data}) => {
  return (
    <div>
      <div className="row">
        {data.map(data => 
             <div class="container col-md-4"> 
                  <h3>{data.recipe.label}</h3>
                  <img class="img-responsive" src={data.recipe.image} />
              </div>
        )}
      </div>
    </div>
  )
}

export default Products
