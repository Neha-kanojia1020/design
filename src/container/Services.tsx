import Image from 'next/image'

const Services = () => {
    return (
        <section className="services py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-10 mx-auto text-center">
                    <Image src="/images/scene.svg" className="img-fluid" width={750} height={500} alt="" />
                </div>
                <div className="col-md-10 mx-auto py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-box text-center pt-5">
                                <i className="fas fa-money-bill-wave fa-2x icons"></i>
                                <h5 className="mt-3">Pay Better</h5>
                                <p className="mt-3">Speed through checkout and offset delivery at the same time</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box text-center pt-5">
                                <i className="fas fa-map-marked-alt fa-2x icons"></i>
                                <h5 className="mt-3">Track Better</h5>
                                <p className="mt-3">Get real-time delivery updates from cart to home in one place.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box text-center pt-5">
                                <i className="fas fa-shopping-basket fa-2x icons"></i>
                                <h5 className="mt-3">Shop Better</h5>
                                <p className="mt-3">Upgrade with personal settings from your favorite stores.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>            
    )
}

export default Services
