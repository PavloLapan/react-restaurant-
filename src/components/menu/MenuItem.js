import React from 'react' 

const MenuItem = () => {
  
    const {name, price, description}= this.props;
    
    return(

    <div className="column dishes">
    
    <div className="d-flex between">
    
    <h2 className="name">{name}</h2>
    
    <h3 className="price "><span>$</span>{price}</h3>
    
    </div>
    
    <p className="describtion">{description}</p>
    
    <div className="dotted"></div>
    
    </div>
    )
}
export default MenuItem;