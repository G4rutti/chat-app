import { BrowserRouter, Route, Routes as Router } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'

const Routes = () => {
  return (
    <BrowserRouter>
        <Router>
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastrar' element={<Register/>}/>
        </Router>
    </BrowserRouter>
  )
}

export default Routes

