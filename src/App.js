
import { useEffect, useState } from 'react';
import './App.css';
import MealsIngridients from './MealsIngridients';
import MyList from './MyList';
import uuid from 'react-uuid';

function App() {
  const [mealPlan ,setMealPlan] = useState(localStorage.mealPlan ? 
    JSON.parse(localStorage.mealPlan): [])
  const [selectedDay,setSelectedDay] = useState(false);
  

  useEffect (() => {
    localStorage.setItem("mealPlan",JSON.stringify(mealPlan))
  },[mealPlan])

  const addMeal = () => {
      const newMeal = {
        title:"Today is ...",
        id:uuid(),
        mealForADay:"",
        ingredients:""
      }

      setMealPlan([newMeal, ...mealPlan])
      console.log(newMeal);
    }
  const deleteDay = (mealId)=> {
    setMealPlan(mealPlan.filter(({id}) => id !== mealId))
  }

  const updateDay = (myUpdatedMeal) => {
  const updateMeal = mealPlan.map((mealPlan) => {
    if (mealPlan.id === myUpdatedMeal.id) {
      return myUpdatedMeal;
    }
    return mealPlan;
  })
  setMealPlan(updateMeal)
}

const getActiveMeal = () => {
  return mealPlan.find(({id})=> id === selectedDay)

}
  return (
    <div className="App">
      <MyList 
      addMeal={addMeal} 
      mealPlan={mealPlan} 
      deleteDay={deleteDay} 
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      />
      
      <MealsIngridients selectedDay={getActiveMeal()} updateDay={updateDay}/>
    </div>
  );
}

export default App;
