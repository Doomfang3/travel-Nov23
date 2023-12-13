import { useState } from 'react'
import travelPlanData from '../assets/travel-plans.json'
import classes from '../styles/travelList.module.css'
import Label from './Label'

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlanData)

  const handleDelete = idToDelete => {
    const nextTravelPlans = travelPlans.filter(currentPlan => currentPlan.id !== idToDelete)
    setTravelPlans(nextTravelPlans)
  }

  return (
    <ul>
      {travelPlans.map(currentPlan => (
        <li key={currentPlan.id} className={classes.mainCtn} onClick={() => console.log('Click')}>
          <div
            style={{ backgroundImage: `url(${currentPlan.image})` }}
            className={classes.img}
          ></div>
          <div>
            <h4>{currentPlan.destination}</h4>
            <p>{currentPlan.description}</p>
            <p>
              <span>Price: </span>
              {currentPlan.totalCost}€
            </p>
            {currentPlan.totalCost <= 350 && <Label />}
            {currentPlan.totalCost >= 1500 && <Label isPremium />}
            {currentPlan.allInclusive && <Label isAllInclusive />}

            <button type='button' onClick={() => handleDelete(currentPlan.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TravelList
