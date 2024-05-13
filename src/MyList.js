const MyList = ({mealPlan,addMeal,deleteDay,selectedDay,setSelectedDay}) => {


    return <div>
        <div>
            <h1>Weekly Meal Plan</h1>
            <button className="button-add" onClick={addMeal}>Add</button>   
        </div>
        
        <div>
            {mealPlan.map(({title,id,mealForADay})=>(
                <div className={`meal ${id === selectedDay ? "selected" : "default"}`} 
                onClick={() => setSelectedDay(id)}>
                
                <p className="title">{title}</p>
                <p className="field">{mealForADay.substring(0,10)}</p>
                <button className="button-delete" onClick={() => deleteDay(id)}>Delete</button>
                </div>

            ))}
        </div>
    </div> 

}

export default MyList;