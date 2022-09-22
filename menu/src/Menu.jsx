import React from 'react'

function Menu({meals}) {
  return (
    <div className='section-center'>
      {meals?.map((menuElement) => {
        const{id, title, img, desc, price} = menuElement;
        return(
          <article className='menu-item' key={id} >
            <img src={img} alt={title} classname = "photo"></img>
            <div className = "item-info">

              <header > 


                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className = "item-text">{desc}</p>


            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu;