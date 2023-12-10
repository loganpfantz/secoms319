import { useState, useEffect } from "react";

function App() {
  const [product, setProduct] = useState([]);
  const [oneProduct, setOneProduct] = useState([]);
  // new Product
  const [addNewProduct, setAddNewProduct] = useState({
    id: 0,
    title: "",
    price: 0.0,
    description: "",
    category: "",
    image: "http://127.0.0.1:4000/images/",
    rating: 0.0,
  });

  const [viewer1, setViewer1] = useState(false);
  const [viewer2, setViewer2] = useState(false);
  const [viewer4, setViewer4] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getAllProducts();
  }, []);

  function getAllProducts() {
    fetch("http://localhost:3000/api/get")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Show Catalog of Products :");
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    setViewer1(!viewer1);
  }

  const showAllItems = product.map((el) => (
    <div key={el.id}>
      <img src={el.image} width={30} alt="images" /> <br />
      Title: {el.title} <br />
      Category: {el.category} <br />
      Price: {el.price} <br />
      Rating :{el.rating} <br />
    </div>
  ));

  function getOneProduct(id) {
    console.log(id);
    if (id >= 1 && id <= 20) {
      fetch("http://localhost:3000/api/getFromId/" + id)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Show one product :", id);
          console.log(data);
          setOneProduct(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      setViewer2(!viewer2);
    } else {
      console.log("Wrong number of Product id.");
    }
  }

  const showOneItem = oneProduct.map((el) => (
    <div key={el.id}>
      <img src={el.image} width={30} alt="images" /> <br />
      Title: {el.title} <br />
      Category: {el.category} <br />
      Price: {el.price} <br />
      Rating: {el.rating} <br />
    </div>
  ));

  function handleChange(evt) {
    const value = evt.target.value;
    if (evt.target.name === "id") {
      setAddNewProduct({ ...addNewProduct, id: value });
    } else if (evt.target.name === "title") {
      setAddNewProduct({ ...addNewProduct, title: value });
    } else if (evt.target.name === "price") {
      setAddNewProduct({ ...addNewProduct, price: value });
    } else if (evt.target.name === "description") {
      setAddNewProduct({ ...addNewProduct, description: value });
    } else if (evt.target.name === "category") {
      setAddNewProduct({ ...addNewProduct, category: value });
    } else if (evt.target.name === "image") {
      setAddNewProduct({ ...addNewProduct, image: value });
    } else if (evt.target.name === "rating") {
      setAddNewProduct({ ...addNewProduct, rating: value });
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/api/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewProduct),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Post a new product completed");
        console.log(data);
        if (data) {
          const value = Object.values(data);
          alert(value);
        }
      })
      .catch((error) => {
        console.error("Error creating product:", error);
      });
  }

  function getOneByOneProductNext() {
    if (product.length > 0) {
      if (index === product.length - 1) setIndex(0);
      else setIndex(index + 1);
      if (product.length > 0) setViewer4(true);
      else setViewer4(false);
    }
  }

  function getOneByOneProductPrev() {
    if (product.length > 0) {
      if (index === 0) setIndex(product.length - 1);
      else setIndex(index - 1);
      if (product.length > 0) setViewer4(true);
      else setViewer4(false);
    }
  }

  function deleteOneProduct(deleteid) {
    console.log("Product to delete :", deleteid);
    fetch("http://localhost:3000/api/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: deleteid }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Delete a product completed : ", deleteid);
        console.log(data);
        if (data) {
          const key = Object.keys(data);
          const value = Object.values(data);
          alert(key + value);
        }
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
    getAllProducts();
  }

  useEffect(() => {
    getAllProducts();
  }, [checked4]);

  return (
    <div>
      <h1>Catalog of Products</h1>

      {/* Display All Products */}
      <div>
        <h3>Show all available Products.</h3>
        <button onClick={() => getAllProducts()}>Show All ...</button>
        {viewer1 && <div>Products: {showAllItems}</div>}
      </div>

      {/* Display a Single Product */}
      <div>
        <h3>Show one Product by Id:</h3>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Enter Product ID"
          onChange={(e) => getOneProduct(e.target.value)}
        />
        {viewer2 && <div>Product: {showOneItem}</div>}
      </div>

      {/* Add New Product Form */}
      <div>
        <h3>Add a new product:</h3>
        <form onSubmit={handleOnSubmit}>
          <input
            type="number"
            placeholder="id?"
            name="id"
            value={addNewProduct.id}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="title?"
            name="title"
            value={addNewProduct.title}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="price?"
            name="price"
            value={addNewProduct.price}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="description?"
            name="description"
            value={addNewProduct.description}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="category?"
            name="category"
            value={addNewProduct.category}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="image?"
            name="image"
            value={addNewProduct.image}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="rate?"
            name="rating"
            value={addNewProduct.rating}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Delete a Product */}
      <div>
        <h3>Delete one product:</h3>
        <input
          type="checkbox"
          id="acceptdelete"
          name="acceptdelete"
          checked={checked4}
          onChange={(e) => setChecked4(!checked4)}
        />
        <button onClick={() => getOneByOneProductPrev()}>Prev</button>
        <button onClick={() => getOneByOneProductNext()}>Next</button>
        <button onClick={() => deleteOneProduct(product[index]?.id)}>
          Delete
        </button>
        {checked4 && product[index] && (
          <div key={product[index].id}>
            <img src={product[index].image} width={30} alt="product" /> <br />
            Id: {product[index].id} <br />
            Title: {product[index].title} <br />
            Category: {product[index].category} <br />
            Price: {product[index].price} <br />
            Rating: {product[index].rating.rate} <br />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
