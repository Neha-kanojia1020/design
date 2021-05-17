
const Counter = () => {
    return (
        <section className="counter py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="row gy-3">
                        <div className="col-md-4">
                            <div className="counter-box border rounded p-4">
                                <h2>98%</h2>
                                <p className="mb-0">Average satisfaction rating received in the past year.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="counter-box border rounded p-4">
                                <h2>24/7</h2>
                                <p className="mb-0">Our support team is a quick chat or email away.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="counter-box border rounded p-4">
                                <h2>220k+</h2>
                                <p className="mb-0">Extension installs from the two major mobile app stores.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>            
    )
}

export default Counter
