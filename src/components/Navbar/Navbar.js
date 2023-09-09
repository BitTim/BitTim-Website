import bitTimLogo from './../../assets/BitTim Logo.png'

function Navbar() {
    return <div className="Navbar">
        <img src={ bitTimLogo } alt="BitTim Logo"/>
        <button>Home</button>
        <button>Projects</button>
        <button>Music</button>
    </div>;
}

export default Navbar;