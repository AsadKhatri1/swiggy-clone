import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Mind from "./components/Mind";
import TopRestaurant from "./components/TopRestaurant";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Mind />
      <TopRestaurant />
    </>
  );
}

export default App;
