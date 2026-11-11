import './App.css'
import LoginForm from './componets/LoginFrom'
import Fizet from './componets/Fizet'
import Szalit from './componets/SzalitasCim'
import Navbar from './componets/Navbar'

function App() {
  return (
    <Router>
      <Navbar class="navbar" />
      <Routes class="routes">
        <Route path="/login" element={<LoginForm />} />
        <Route path="/Fizet" element={<Fizet />} />
        <Route path="/Szalit" element={<Szalit />} />
      </Routes>
      <Footer class="footer" />
    </Router>
  );
}

export default App
