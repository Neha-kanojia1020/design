
const Banner = () => {
    return (
        <section className="banner py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="banner-text">
                        <div className="content text-center">
                            <h1>Simple & Reliable</h1>
                            <p className="py-4 mx-auto">Simpler remembers your important details, so you can fill carts, not forms. And everything is encrypted so you can speed safely through checkout.</p>
                        </div>
                        <div className="banner-button d-flex justify-content-center gap-3 download-button">
                            <button className="btn btn-dark btnappstore d-flex align-middle gap-3 align-items-center">
                                <i className="fab fa-apple fa-2x"></i>
                                <div className="btn-text">
                                    <small>Available on</small>
                                    <p className="mb-0 text-start">App Store</p>
                                </div>
                            </button>
                            <button className="btn btn-dark btnappstore d-flex align-middle gap-3 align-items-center">
                                <i className="fab fa-google-play fa-2x"></i>
                                <div className="btn-text text-left">
                                    <small>Available on</small>
                                    <p className="mb-0 text-start">App Store</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>            
    )
}

export default Banner
