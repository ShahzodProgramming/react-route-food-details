import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Food from "./pages/food";

import pizza from "./imgs/pizza.jpg";
import lavash from "./imgs/lavash.jpg";

import Header from "./components/header";
import Home from "./pages/Home";
function App() {
  let goods = [
    { id: 1, title: "Pizza", img: pizza },
    { id: 2, title: "Lavash", img: lavash },
  ];

    return (       
    <div>
      <h1>Hello</h1>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/about" element={<About items={goods} />}></Route>
        <Route path="/food/:id" element={<Food items={goods} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
