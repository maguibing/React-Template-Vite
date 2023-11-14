import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByAmount } from '../../store/modules/counterSlice'
import styles from './index.module.scss'
import { useRef } from 'react'


const Login = () => {

  const dispatch = useDispatch()
  const store = useSelector(state => state.counter.value)
  console.log(store)


  const inputRef = useRef(null)
  // const dispatch = useDispatch()
  // const store = useStore()

  return (
    <>
      <div className={styles.root}>
        <div className='login'>
          {store}
        </div>
        <div>
          <input type="text" ref={inputRef} />  <button onClick={() => inputRef.current.focus()}>getInputValue</button>
        </div>
      </div>
    </>
  )
}

export default Login
