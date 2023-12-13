import { useState } from 'react'
import classes from '../styles/label.module.css'
import clsx from 'clsx'

const Label = ({ isPremium = false, isAllInclusive = false }) => {
  const [text] = useState(isPremium ? 'Premium' : isAllInclusive ? 'All Inclusive' : 'Great Deal')

  return (
    <div
      className={clsx(classes.mainCtn, {
        [classes.premium]: isPremium || isAllInclusive,
        [classes.greatDeal]: !isPremium && !isAllInclusive,
      })}
    >
      {text}
    </div>
  )
}

export default Label
