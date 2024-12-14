import mixPanel from './assets/mixpanel.png'
import amplitude from './assets/amplitude.png'

import './App.css'
import Login from './components/Login'

function App() {

  return (
    <>
      <div>
      <img src={mixPanel} className="logo mixpanel" alt="mixpanel" />
      <img src={amplitude} className="logo amplitude" alt="amplitude" />

      </div>
      <h1>Partytown demo without Partytown</h1>
      <Login/>
    </>
  )
}

export default App
