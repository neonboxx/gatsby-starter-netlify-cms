import React from 'react';

const cards = ({
    items
}) => <div className="container full-x content-block">
<div className="bb-grid md justify-content-center">
    {items.map(item => <div className="column column-3">
        <div className="bb-card">
            <div className="image">
                <figure>
                    <img src={`${!!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image }`} alt="" />
                </figure>
            </div>
            <div className="content">
                {item.body}
            </div>	
        </div>
    </div>) }
</div>
</div>

export default cards;