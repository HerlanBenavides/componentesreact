import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Box from "./components/Box";

function App() {
  const [count, setCount] = useState(0);
  let uno = "src/assets/UNO.png";
  let dos = "src/assets/DOS.png";
  let tres = "src/assets/TRES.png";

  return (
    <div className="App">
      <div className="box">
        <Box
          photo={uno}
          model="AUDI Q3"
          year="2016 | 4x2"
          price="Precio Regular $23,900"
          type="Gasolina | Automatico | 71,246km"
        />
      </div>

      <div className="box">
        <Box
          photo={dos}
          model="CMC Z7"
          year="2018 - 4x2"
          price="Precio Regular $15,500"
          type="Gasolina | Automatico | 80,389km"
        />
      </div>

      <div className="box">
        <Box
          photo={tres}
          model="MAHINDRA XUV300"
          year="2022 - 4x2"
          price="Precio Regular $22,900"
          type="Gasolina | Manual | 1,500km"
        />
      </div>
    </div>
  );
}

export default App;
