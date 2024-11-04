import Dashboard from './components/Dashboard'
import Notifications from './components/Notifications'
import './App.css';
import Footer from './components/Footer';
function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className="flex-grow">
      <Notifications/>
      <Dashboard/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
