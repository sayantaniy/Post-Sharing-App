import { Route, Routes } from 'react-router-dom'
import Feed from './pages/Feed'
import Createpost from './pages/Createpost'

const App = () => {
  return (
    <div className='font-lexend'>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/create-post' element={<Createpost />} />
      </Routes>
    </div>
  )
}

export default App
