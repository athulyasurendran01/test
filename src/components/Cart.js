import React, { Component } from 'react';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'
import './Cart.css';

class Cart extends Component {

    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (

                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={8} className="filter-container" >
                                <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img">
                                        <img src={item.img} alt={item.img} className="" />
                                    </div>

                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <div className="cart-description">
                                            <p className="price-box">
                                                <span><b>₹{item.price}</b></span>
                                                <span className="price-strike">{item.price}</span>
                                                <span className="price-offer">{item.price}% off</span>
                                            </p>
                                            <div className="add-remove">
                                                <i className="material-icons" onClick={() => { this.handleAddQuantity(item.id) }}>-</i>
                                                <i className="material-icons" onClick={() => { this.handleSubtractQuantity(item.id) }}>+</i>
                                            </div>
                                            <span className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.id) }}>Remove</span>
                                        </div>
                                    </div>
                                </li>
                            </Grid>
                            <Grid item xs={12} sm={4} className="content-box">
                                <div className="sort-box">
                                    <h4 class="price-title">PRICE DETAILS</h4>
                                    <p className="price-data">
                                        <span>Price (1 Item) : </span> <span className="price-right">₹900</span>
                                        <br/>
                                        <span>Discount : </span> <span className="price-right">₹900</span>
                                    </p>
                                    <p>
                                        <h3><b>Total Payable </b><span className="total-price"><b>₹900</b></span></h3>
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                    )
                })
            ) :

            (
                <p>Nothing.</p>
            )
        return (
            <div className="container">
                <div className="cart">
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)