import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { fetchItems } from './actions/items'

import Grid from '@material-ui/core/Grid';

import './ShoppingList.css';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items : []
        }
    }
    
    async componentDidMount() {
        await this.props.fetchItems();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({items: nextProps.data})
    }

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item => {
            return (
                <Grid item xs={12} sm={3} key={item.id}>
                    <img src={item.img_url} alt={item.name} width="100%" />
                    <span className="card-title">{item.title}</span>
                    <div className="card-content">
                        <p className="price-box">
                            <span><b>₹{item.price}</b></span>
                            <span className="price-strike">{item.price}</span>
                            <span className="price-offer">{item.discount}% off</span>
                        </p>
                        <div className="card-footer">
                            <button to="/" className="btn-floating halfway-fab waves-effect waves-light red"
                            onClick={() => { this.handleClick(item.id) }}>Add to Cart</button>
                        </div>
                    </div>
                </Grid>
            )
        })

        return (
            <div className="shop-container">
                <Grid container spacing={3}>
                    {itemList}
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) },
        fetchItems: () => { dispatch(fetchItems()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)