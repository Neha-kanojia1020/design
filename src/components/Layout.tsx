import Banner from "../container/Banner"
import Betterway from "../container/Betterway"
import Counter from "../container/Counter"
import Customers from "../container/Customers"
import Download from "../container/Download"
import Facts from "../container/Facts"
import Feature from "../container/Feature"
import Footer from "../container/Footer"
import Header from "../container/Header"
import Services from "../container/Services"

const Layout = () => {
    return (
        <>
            <header>
                <Header/>
            </header>

            <div className="main-site">
                <Banner/>
                <Services/>
                <Betterway/>
                <Counter/>
                <Feature/>
                <Customers/>
                <Facts/>
                <Download/>
            </div>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout
