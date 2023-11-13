import './App.css'

import { sStorage } from './utils'

function App() {

  const setStorage = () => {
    sStorage.set('token', '123456')
  }

  return (
    <>
      <div className="card">
        <button onClick={setStorage}>
          测试
        </button>
      </div>
    </>
  )
}

export default App
