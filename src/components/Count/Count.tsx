import { useState } from 'react'
import classes from './count.module.scss';

const Count = () => {

  const [count, setCount] = useState(0);

  const incriment = () => {
    setCount(count + 1)
  }

  return (
    <div className="count">

      <div>{count}</div>

      <button className={classes.button} onClick={incriment}>Увеличить счетчик</button>
    </div>
  )
}

export default Count;