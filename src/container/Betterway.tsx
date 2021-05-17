import Image from 'next/image'

const Betterway = () => {
    return (
        <section className="betterway py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto pb-5">
                    <div className="content text-center">
                        <h2>Better in every way</h2>
                        <p className="py-4">Self-Servce Analytics or ad hoc reporting gives users the ability to develop rapid reports, empowering users to analyze their data.</p>
                    </div>
                </div>
                <div className="col-md-10 mx-auto">
                    <div className="row gy-4 py-5">
                        <div className="col-md-6">
                            <div className="content-1 pe-md-5 pe-lg-5">
                                <h2>A thoughtful way to pay</h2>
                                <p className="py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet soluta culpa inventore ipsum eius et amet sapiente voluptatibus sequi illum.</p>
                                <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error atque voluptas doloremque, eligendi minima eaque aut possimus illo voluptatibus rerum officiis, quis mollitia sapiente cum?</p>
                                <button className="btn btn-dark d-flex align-items-center gap-3">Learn More <i className="fas fa-external-link-alt"></i></button>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 text-center betterway">
                            <Image src="/images/scene-3.svg" className="img-fluid" width={750} height={650} alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center betterway">
                            <Image src="/images/scene-2.svg" className="img-fluid"  width={750} height={700} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="content-1 ps-md-5 pt-5 ps-lg-5">
                                <h2>Get it. Don't sweat it.</h2>
                                <p className="py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet soluta culpa inventore ipsum eius et amet sapiente voluptatibus sequi illum.</p>
                                <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error atque voluptas doloremque, eligendi minima eaque aut possimus illo voluptatibus rerum officiis, quis mollitia sapiente cum?</p>
                                <button className="btn btn-dark d-flex align-items-center gap-3">Learn More <i className="fas fa-external-link-alt"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>   
    )
}

export default Betterway
