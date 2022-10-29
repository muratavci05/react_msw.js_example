import React,{useEffect, useState} from "react";



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

    const response = await (await fetch ("/products")).json();  // api'den aldığımız ürünler
    
    setProducts (response.data);

    setLoading(false); // loadin tekrardan false
  }

  return (
    <div className="App">
      <button onClick={login}>Login</button>

      {loading && (
        <div>Loading...</div>
      )}

      {products.map (product => (
        <div>
          <img 
              src={product.imageUrl} 
              alt={product.title} 
              style={{width:"250px"}}  />
          <div>
              {product.title} - {product.price}
          </div>
           
          </div>
      ))}
    </div>
  );
}

export default App;
