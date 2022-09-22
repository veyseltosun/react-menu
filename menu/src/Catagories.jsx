import React from 'react'


function Catagories({filterMeals, catagories}) {
    
 
    
  return (
    <div className='btn-container'>

        {catagories.map((catagory, index) => {

            function clickHandler () {
                filterMeals(catagory)
            }



            return(
                <button 
                type='button'
                className='filter-btn'
                key={index}
                onClick={ clickHandler }
                >

                    {catagory}

                </button>
            )
        })}


    </div>
  )
}

export default Catagories