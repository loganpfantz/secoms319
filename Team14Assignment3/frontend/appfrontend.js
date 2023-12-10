// Imports
import React, { useState, useEffect } from "react";
import "./App.css";

/////////////////////////////////////////////////////////////////////////////////
// AllProductsView component
const AllProductsView = ({ products, onButtonClick }) => {
  return (
    <div>
      <button onClick={() => onButtonClick("home")}>Home</button>
      <h1>All Products</h1>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ maxWidth: "80px", maxHeight: "80px" }}
                />
                <p>{product.title}</p>
                <p>${product.price}</p>
                <p>{product.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/////////////////////////////////////////////////////////////////////////////////

// CreateProductView component
const CreateProductView = ({ onCreateProduct, onButtonClick }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Event handler for form submission to create a new product
  const handleCreateProductSubmit = async (e) => {
    e.preventDefault();
    try {
      await onCreateProduct(newProduct);
      setSuccessMessage("Product successfully added!");
    } catch (error) {
      console.error("Error creating a new product:", error);
      setSuccessMessage("Failed to add the product. Please try again.");
    }
  };

  // Update the form fields when they change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div>
      <button onClick={() => onButtonClick("home")}>Back to Home</button>
      <h2>Create New Product</h2>
      <form onSubmit={handleCreateProductSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Create Product</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

/////////////////////////////////////////////////////////////////////////////////

// UpdatePriceView component
const UpdatePriceView = ({ onUpdatePrice, onButtonClick }) => {
  const [productId, setProductId] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Event handler for fetching product details
  const handleFetchProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/getFromId/${productId}`
      );
      if (!response.ok) {
        throw new Error("Product not found");
      }
      const productData = await response.json();
      setProduct(productData);
      setError("");
      setSuccessMessage("");
    } catch (error) {
      console.error("Error fetching product:", error);
      setProduct(null);
      setError("Error fetching product details");
    }
  };

  // Event handler for updating the product price
  const handleUpdatePrice = async () => {
    try {
      if (!productId) {
        throw new Error("Product ID is required");
      }

      // Update the price in the state before calling onUpdatePrice
      setProduct((prevProduct) => ({
        ...prevProduct,
        price: parseFloat(newPrice), // This ensures the price is a number
      }));

      await onUpdatePrice(productId, newPrice);
      setError("");
      setSuccessMessage("Price updated successfully!");
    } catch (error) {
      console.error("Error updating price:", error);
      setError("Failed to update price. Please try again.");
    }
  };

  return (
    <div>
      <button onClick={() => onButtonClick("home")}>Back to Home</button>
      <h2>Update Product Price</h2>
      <label>
        Product ID:
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </label>
      <button onClick={handleFetchProduct}>Fetch Product</button>
      {product && (
        <div>
          <p>Product: {product.title}</p>
          <p>Current Price: ${product.price}</p>
          <label>
            New Price:
            <input
              type="number"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
            />
          </label>
          <button onClick={handleUpdatePrice}>Update Price</button>
        </div>
      )}
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

/////////////////////////////////////////////////////////////////////////////////

// StudentInformationView component
const StudentInformationView = ({ onButtonClick }) => {
  return (
    <div>
      <button onClick={() => onButtonClick("home")}>Home</button>
      <h1>Student Information</h1>
      <p>Student 1: Jesus Soto, jhsoto@iastate.edu</p>
      <p>Student 2: Logan Pfantz, lwpfantz@iastate.edu</p>
      <h2>Project Details</h2>
      <p>Course Number: ComS 319</p>
      <p>Course Name: Construction of User Interfaces</p>
      <p>Date: 12/10/2023</p>
      <p>Professor Name: Abraham Aldaco</p>
      <p>
       In this project we developed a MERN (MongoDB, Express, React, Nodejs) 
        application to manage a product catalog using the "https://fakestoreapi.com/products" dataset. 
        We implemented key CRUD functionalities and ensured a well-organized, user-friendly interface.
      </p>
    </div>
  );
};

/////////////////////////////////////////////////////////////////////////////////

// DeleteProductView component
const DeleteProductView = ({ onDeleteProduct, onButtonClick }) => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Event handler for fetching product details
  const handleFetchProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/getFromId/${productId}`
      );
      if (!response.ok) {
        throw new Error("Product not found");
      }
      const productData = await response.json();
      setProduct(productData);
      setError("");
      setSuccessMessage("");
    } catch (error) {
      console.error("Error fetching product:", error);
      setProduct(null);
      setError("Error fetching product details");
    }
  };

  // Event handler for deleting the product
  const handleDeleteProduct = async () => {
    try {
      if (!productId) {
        throw new Error("Product ID is required");
      }

      await onDeleteProduct(productId);
      setError("");
      setSuccessMessage("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      setError("Failed to delete product. Please try again.");
    }
  };

  return (
    <div>
      <button onClick={() => onButtonClick("home")}>Back to Home</button>
      <h2>Delete Product</h2>
      <label>
        Product ID:
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </label>
      <button onClick={handleFetchProduct}>Fetch Product</button>
      {product && (
        <div>
          <p>Product: {product.title}</p>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          {confirmDelete ? (
            <div>
              <p>Are you sure you want to delete this product?</p>
              <button onClick={handleDeleteProduct}>Yes, Delete</button>
              <button onClick={() => setConfirmDelete(false)}>Cancel</button>
            </div>
          ) : (
            <button onClick={() => setConfirmDelete(true)}>
              Delete Product
            </button>
          )}
        </div>
      )}
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

/////////////////////////////////////////////////////////////////////////////////

// App component
function App() {
  // State to hold the product data
  const [products, setProducts] = useState([]);
  const [currentView, setCurrentView] = useState("home");

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/get");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  // Event handler to switch views
  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  // Event handler to create new product
  const handleCreateProduct = async (newProduct) => {
    try {
      const response = await fetch("http://localhost:8081/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Failed to create a new product");
      }

      // Fetch the updated list of products after creating a new product
      const updatedProducts = await response.json();

      // Ensure that the product IDs are strings
      const productsWithStringsIds = updatedProducts.map((product) => ({
        ...product,
        id: product.id.toString(),
      }));

      setProducts(productsWithStringsIds);

      setCurrentView("allProducts");
    } catch (error) {
      console.error("Error creating a new product:", error);
      throw error;
    }
  };

  // Function to fetch the updated list of products
  const fetchUpdatedProducts = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/get");
      if (!response.ok) {
        throw new Error("Failed to fetch updated products");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching updated products:", error);
      return [];
    }
  };

  // Event handler for updating the product price
  const handleUpdatePrice = async (productId, newPrice) => {
    try {
      const response = await fetch("http://localhost:8081/api/updatePrice", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: productId, newPrice: newPrice }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `Failed to update the price. Server response: ${errorMessage}`
        );
      }

      // Fetch the updated list of products after updating the price
      const updatedProducts = await fetchUpdatedProducts();
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error updating the price:", error);
      throw error;
    }
  };

  // Event handler for deleting the product
  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/delete/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `Failed to delete the product. Server response: ${errorMessage}`
        );
      }

      // Fetch the updated list of products after deleting the product
      const updatedProducts = await fetchUpdatedProducts();
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting the product:", error);
      throw error;
    }
  };
  return (
    <div className="App">
      {currentView === "home" && (
        <div>
          <h1>Home</h1>
          <button onClick={() => handleViewChange("allProducts")}>
            All Products
          </button>
          <button onClick={() => handleViewChange("createProduct")}>
            Create Product
          </button>
          <button onClick={() => handleViewChange("updatePrice")}>
            Update Price
          </button>
          <button onClick={() => handleViewChange("deleteProduct")}>
            Delete Product
          </button>
          <button onClick={() => handleViewChange("studentInformation")}>
            Student Information
          </button>
        </div>
      )}

      {currentView === "allProducts" && (
        <AllProductsView products={products} onButtonClick={handleViewChange} />
      )}

      {currentView === "createProduct" && (
        <CreateProductView
          onCreateProduct={handleCreateProduct}
          onButtonClick={handleViewChange}
        />
      )}

      {currentView === "updatePrice" && (
        <UpdatePriceView
          onUpdatePrice={handleUpdatePrice}
          onButtonClick={handleViewChange}
        />
      )}

      {currentView === "deleteProduct" && (
        <DeleteProductView
          onDeleteProduct={handleDeleteProduct}
          onButtonClick={handleViewChange}
        />
      )}

      {currentView === "studentInformation" && (
        <StudentInformationView onButtonClick={handleViewChange} />
      )}
    </div>
  );
}

export default App;
