const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
          <a href="/product">Go Back</a>
            <h1>Add a New Product</h1>
            <form action="/product/add" method="POST">
                Name: <input type="text" name="name"/><br/>
                Description: <input type="text" name="description" /><br/>
                Image: <input type="text" name="image" /><br/>
                Price: <input type="text" name="price" /><br/>
                Quantity: <input type="text" name="quantity" /><br/>
                <input type="submit" name="" value="Create Product"/>
             </form>
        </div>);
  }
}

module.exports = New;
