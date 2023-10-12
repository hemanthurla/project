     /* <nav>
            <div className="logo">
            <img src="/images/brand_logo.png" alt="logo"/>
            </div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>

            </ul>
            <button>
                Login
            </button>
        </nav>*/
import './App.css'
import HeroSection from './Components/Hero';


import Navigation from './Components/Navigation';

const App = () =>{

    return <div>
        <Navigation/>
        <HeroSection/>
    </div>
};

export default App;