import React from "react";

const ProductResult = () => {
  
  const [name, setName] = React.useState("Andrea");

  return (
    <div>
        <h1>Hola</h1>
        <h2>{name}</h2>
    </div>
  );
};

export default ProductResult;
