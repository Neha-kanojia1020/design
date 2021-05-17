import Image from 'next/image'

const Download = () => {
    return (
        <section className="downloadapp py-5 mt-5 bg-light">
        <div className="container">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="row gy-3">
                        <div className="col-md-12 col-lg-6 pe-md-5 pe-md-5 download py-5">
                            <h5>Download App</h5>
                            <h3 className="pt-2">Get started in seconds</h3>
                            <p className="py-4 pe-md-5 pe-lg-5">Quickly connect to tools and services such as Google Analytics. Intercom or Github to track, measure and optimize performance.</p>
                            <div className="banner-button d-flex justify-content-start gap-3">
                                <button className="btn btn-dark btnappstore d-flex align-middle gap-3 align-items-center">
                                    <i className="fab fa-apple fa-2x"></i>
                                    <div className="btn-text download-button">
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
                        <div className="col-md-12 col-lg-6 text-center ps-md-5 ps-md-5">
                            <Image src="/images/scene-3.svg" width={750} height={700} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            
    )
}

export default Download
