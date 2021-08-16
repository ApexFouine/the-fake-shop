import logo from '../assets/logo.png'
import '../styles/Banner.css'


function Banner() {
    return (

        <header className="tfs-banner-nocart">
            <h1 className="title">The Fake Shop</h1>
            <img className="logo" src={logo} alt="logo du site"/>
        </header>

    )
}
export default Banner;