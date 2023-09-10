import './Home.css'
import {Link} from "react-router-dom";

function Home() {
    return <>
        <h1>Hi, I'm Tim 👋</h1>
        <h2>About me</h2>
        <p>I am a 19 year old male born and raised in Hamburg, where I still live to this day</p><br/>
        
        <h3>Coding</h3>
        <p>I started at a young age with the basics and learned new languages and frameworks as I needed them</p>
        <div className="fact-display">
            <p>I started with FreeBASIC</p>
            <p>My favorite Language is C++</p>
            <p>I know a bit of x86 Assembly</p>
            <p>I just recently started with web dev</p>
            <p>I taught everything myself</p>
            <p>ComputerCraft is one of my favorite Minecraft mods</p>
            <p>VexTrack is the first project I continued to develop long term</p>
        </div>
        <Link to="/projects">My Projects</Link>
        <br/><br/>
        
        <h3>Music</h3>
        <p>At some point I started to mess around with a free DAW and I continued to improve my skills</p>
        <div className="fact-display">
            <p>I started with LMMS</p>
            <p>My current DAW of choice is Ableton Live 11 Lite</p>
            <p>All of my songs were made with 8 tracks at most</p>
            <p>One of my drum patterns became an insider among my friends</p>
            <p>I am not satisfied with how my songs sound</p>
        </div>
        <Link to="/music">My Songs</Link>
        <br/><br/>
        
        <h3>Anime</h3>
        <p>I became a weeb in April 2020</p>
        <div className="fact-display">
            <p>My first Anime was "A Certain Scientific Railgun T"</p>
            <p>I started my first anime with Season 3 without realizing</p>
            <p>I was in denial at first, since I did not know where to start</p>
            <p>このDIOだ！</p>
            <p>My first Manga was "Kaguya-sama: Love is war"</p>
        </div>
        <a href="https://anilist.co/user/BitTim">My AniList</a>
        <br/><br/>
        
        <h2>Activity</h2>
        <p>Nothing happened recently</p>
    </>;
}

export default Home;