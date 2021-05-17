import Image from 'next/image'
// import  '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className="pt-5 pb-4">
        <div className="container">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="row">
                        <div className="col-md-4 pe-md-5 pe-md-5 footer-paragraph">
                            <p>Swipe is a beautiful and free one page Bootstrap 5 Template created to showcase your awesome mobile app.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-links">
                                <h5 style={{fontWeight:'bold'}}>Themesberg</h5>
                                <ul className="footer-structure ps-0">
                                    <li className="pt-2">Blog</li>
                                    <li className="pt-2">Products</li>
                                    <li className="pt-2">About Us</li>
                                    <li className="pt-2">Contact Us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="subscribe">
                                <h5 style={{fontWeight:'bold'}}>Subscribe</h5>
                                <input type="text" className="form-control" placeholder="example@company.com" /> 
                                <button className="btn btn-dark w-100 mt-2">Subscribe</button>
                                <small className="text-secondary">No spam. Pinky swear.</small>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom text-center mt-5">
                        <Image src="/images/favicon-16x16.png" width={50} height={40} className="img-fluid" alt="" />
                        <p className="mt-3 mb-0 text-secondary">Copyright &copy; Themesberg 2019-2021. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
            
    )
}

export default Footer
