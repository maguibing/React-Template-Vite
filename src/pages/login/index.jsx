import { useDispatch, useSelector } from 'react-redux'
import { increment,incrementByAmount } from '../../store/modules/counterSlice'
import styles from './index.module.scss'


const Login = () => {

  const dispatch = useDispatch()
  const store = useSelector(state => state.counter.value)
  console.log(store)

  // const dispatch = useDispatch()
  // const store = useStore()

  return (
    <>
      <div className={styles.root}>
        <div className='login'>
          {store}
        </div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>increment</button>
      </div>
    </>
  )
}

export default Login
