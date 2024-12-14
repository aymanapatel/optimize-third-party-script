import partyTown from './assets/partytown.png'
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
      <img src={partyTown} className="logo partytown" alt="partytown" />

      </div>
      <h1>Partytown demo</h1>
      <Login/>
    </>
  )
}

export default App
