import React,{useEffect, useState} from "react";
import "./styles.css";



function App() {

  const [loading, setLoading] = useState (true);
  const [products, setProducts] = useState ([]);




  useEffect(()=>{

    fetch("/user");


    //method
    loadProducts();

  },[]);

  const login = async () => {
   const response = await fetch ("/login", {
      method:"POST",
    });

    const responseJson = response.json();

    console.log(responseJson);

  };

  const loadProducts = async () => {
    setLoading(true); //looading true olacak

    const response = await (await fetch ("/products?limit=10")).json();  // api'den aldığımız ürünler
    
    setProducts (response.data);

    setLoading(false); // loadin tekrardan false
  }

  return (
    <div className="App">
      <div className="buttonComponent">
      <button onClick={login}>Login</button>
      </div>
      

      {loading && (
        <div>Loading...</div>
      )}

      {products.map (product => (
        <div className="productsContainer">
          <img className="productsImgs"
              src={product.imageUrl} 
              alt={product.title} 
              style={{width:"200px"}}  />
          <div className="productmains">
            <div className="btnBuyBuy">
              <button >Sepete Ekle</button>
            </div>
              <div className="titlePart">
                  {product.title} 
              </div>
              <div className="pricePart">
                  {product.price}
                  
              </div>
              <div className="descriptionPart">
                {product.description}
              </div>

          </div>
           
          </div>
      ))}
    </div>
  );
}

export default App;
