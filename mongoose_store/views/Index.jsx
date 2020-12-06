const React = require('react');
const Layout = require("./Layout/Layout.jsx")

class Index extends React.Component {
  render() {
    return (
        <Layout>
            <div>
                <div>
                    <a href="/product/new">Add a new Product</a>
                </div> 
                <div class="logo">
                <img src="/assets/images/90s-logo.jpg"></img>
                </div>
                    <h2 class="center">
                    Get nostalgic with all your 
                    favorites from the best decade of all time! 
                    Check out our entire collection at our websites 
                    <br />
                    on Geocities or AngelFire!
                    </h2>
            <ul>
                {
                   this.props.product.map((product, i) => {
                    return (
                        <li>
                        { product.name }
                        <br />
                            <div class="product">
                                <img src={ product.image }/>
                            </div> 
                        <br />
                            Price: ${ product.price }
                        <br />
                            <a href={`/product/${product.id}`}>Product Details</a>
                        <div>
                            <button>Add to Cart</button>
                            <button>Delete Item</button>
                            <button>Edit Item</button>
                    </div>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    </Layout>
    )}
}

module.exports = Index;
