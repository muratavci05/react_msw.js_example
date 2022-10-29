import React,{useEffect} from "react";



function App() {

  useEffect(()=>{

    fetch("/user");

  },[]);

  const login = async () => {
   const response = await fetch ("/login", {
      method:"POST",
    });

    const responseJson = response.json();

    console.log(responseJson);

  }

  return (
    <div className="App">
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
