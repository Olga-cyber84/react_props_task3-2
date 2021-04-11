import React from 'react';
import PropTypes from 'prop-types';

function Listing({items}) {
    const fullItems = items.filter(item => (item.listing_id && item.url && item.MainImage && item.title && item.currency_code && item.price && item.quantity))
    return !fullItems ? null : (
        <div className="item-list">
        {
          fullItems.map(item => (
            <div className="item" key={item.listing_id}>
                <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} alt={item.title}/>
                </a>
                </div>
                <div className="item-details">
                <p className="item-title">{item.title.length > 50 ? item.title.slice(0,50) + "..." : item.title}</p>
                <p className="item-price">{(item.currency_code === "USD" && "$") || (item.currency_code === "EUR" && "€") || "GBP " }{item.price}</p>
                <p className={`item-quantity level-${(item.quantity <= 10 && "low") || (item.quantity <= 20 && "medium") || "high"}`}>{item.quantity}</p>
                </div>
            </div>
          ))  
        }
        </div>
    )
}

Listing.defaultProps = {
    items: []
}

Listing.propTypes = {
    items: PropTypes.array
}

export default Listing

