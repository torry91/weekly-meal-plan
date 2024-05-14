const MealsIngridients = ({selectedDay,updateDay }) => {

    const editMyMeal = (myInput,value) => {
        updateDay({
            ...selectedDay,
            [myInput]:value
        })
    } 

    if (!selectedDay) return 
    <div>
    </div>

    return <div className="whole-plan">
    <div className="meal-editing">
            
            <input 
            type="text" 
            id="title" 
            className="myInput" 
            placeholder="Today is ... "
            value={selectedDay.title}
            onChange={(e) => editMyMeal("title", e.target.value)}
            />
            
        
        <textarea 
        className="theinput"
        placeholder="Write your meal here"
        id="mealFoADay"
        value={selectedDay.mealForADay}
        onChange={(e) => editMyMeal("mealForADay",e.target.value)}
        />

        <textarea 
        className="theinput"
        placeholder="List of ingredients"
         id="mealForADay"
         value={selectedDay.ingredients}
         onChange={(e) => editMyMeal("ingredients",e.target.value)}
         />

        </div>

    </div>
}

export default MealsIngridients;