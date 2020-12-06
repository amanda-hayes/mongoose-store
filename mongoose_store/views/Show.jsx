const React = require('react');
const Layout = require("./Layout/Layout.jsx")

class Show extends React.Component {
    render(){
        const product = this.props.product;
        return (
            <Layout>
            <div class="app-container">
                <a href="/product">Go Back</a>
                <h1>Product Details</h1>
                <h2>{ product.name } </h2>
                <div id="productDetails">
                <img src={ product.image }/>
                <br />
                Price: ${ product.price }
                <br />
                { product.quantity } In Stock
                <br />
                <div id="description">
                { product.description }
                </div>
                <div>
                    <button>Add to Cart</button>
                    <button>Edit Item</button>
                    <button>Delete Item</button>
                </div>
                </div>
            </div>
            </Layout>
        )
    }
}
module.exports = Show;
