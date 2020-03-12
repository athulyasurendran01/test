import React, { Component } from 'react';
import { connect } from 'react-redux'
import Filter from './Filter'
import Sort from './Sort'
import ShoppingList from './ShoppingList'
import { addToCart } from './actions/cartActions'

import Grid from '@material-ui/core/Grid';

import './Home.css';

class Home extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item => {
            return (
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title} />
                        <span className="card-title">{item.title}</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>

            )
        })

        return (
            <div className="home-container">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={2} className="filter-container" >
                        <div className="filter-box" >
                            <Filter />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={10} className="content-box">
                        <div className="sort-box">
                            <Sort />
                        </div>
                        <ShoppingList />
                    </Grid>
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
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)