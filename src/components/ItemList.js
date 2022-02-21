import React from 'react'
import Item from './Item'
import Spinner from '../components/Spinner'
import { Section } from '../styled/Section'




const ItemList = ({cocktails}) => {


return(
    <>
     <Section className="list-container-total">
         <div className="list-container-wrapp">
        {
            cocktails ? cocktails.map(cocktail => (
                <Item key={cocktail.idDrink} cocktail={cocktail} />
            ))
            : (<div className='d-flex justify-content-center'><Spinner  /></div>)
        }
        </div>

       </Section>
    </>
)

}

export default ItemList