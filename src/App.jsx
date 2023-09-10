import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Music from "./pages/Music";

import './theme/theme.css'
import './App.css'

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/projects" element={ <Projects/> } />
                <Route path="/music" element={ <Music/> } />
            </Routes>
        </div>
    );
}

export default App;
