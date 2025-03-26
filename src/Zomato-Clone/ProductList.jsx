import React from "react";
import './Product.css';

const ProductList = ({ prodlist }) => {

    const renderList = () => {
        if (prodlist) {
            return prodlist.map((data) => {
                return (
                    <div key={data.id} className="card">
                        <img className="card-img-top" src={data.img} alt={data.name} />
                        <div className="card-body">
                            {/* <span className="topTemp">{data.name}</span> */}
                            <span className="topTemp">{data.restaurant}</span>
                            <span className="topTemp">{data.city}</span>
                            <span className="max">Rs.{data.price}</span>
                            <p className="card-title">{data.description}</p>
                            
                        </div>
                    </div>
                );
            });
        }
    };

    return (
        <div className="row">
            {renderList()}
        </div>
    );
}

export default ProductList;
