import Catagories from "./Catagories";
import { useState } from "react";
import Menu from "./Menu";
import meals from "./data";


const allCatagories = ["all", "milkshakes", "veysel's", ...new Set(meals.map( (meal) => meal.category))]




function App() {
  const[menuElements, setMenuElements] = useState(meals);
  const[catagories, setCatagories] = useState(allCatagories);

  const filterMeals = (category) => {
    if (category === "all") {
      setMenuElements(meals);
      return;

    }
    if(category === "milkshakes" || "veysel's") {
      setMenuElements(meals)
      return;
    }
    const newMeals = meals.filter((meal) => meal.category === category);
    setMenuElements (newMeals);
  }

  return(
    <main>
      <section className="menu section">
      
      <div className="title">
      <h2>our menu</h2>
      <div className="underline"></div>
      </div>
      <Catagories catagories ={catagories} filterMeals={filterMeals}/>
      <Menu meals={menuElements}/>
        
      </section>

    </main>
  ) 
}

export default App;
