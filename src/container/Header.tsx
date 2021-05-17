import Image from 'next/image'

const Header = () => {
    return (
        <header className="p-3">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light bglight">
                    <div className="container-fluid">
                        <a className="navbar-brand d-flex align-items-center" href="#">
                            <Image src="/images/dark.svg" width={30} height={30} className="img-fluid" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-header">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Testimonials</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Download</a>
                                </li>
                            </ul>
                            <form className="d-flex gap-3">
                                <button className="btn btn-outline-dark" type="submit">Free download</button>
                                <button className="btn btn-danger text-white" type="submit">Upgrade to Pro <i className="fas fa-rocket"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Header
