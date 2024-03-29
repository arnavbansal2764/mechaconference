import './ContactUs.css'
export function ContactUs()
{
    return(
        <div>
            <section className="text-gray-600 body-font relative my-20">
                <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
                    <div className="div-with-line lg:w-2/3 md:w-1/2 flex flex-col items-center justify-center">
                        <iframe
                            title="map"
                            width="80%"
                            height="300"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=30.765269, 76.786558&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                            className="mb-6"
                        ></iframe>
                        
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 justify-center items-center">
                        <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden p-1 flex items-start justify-center shadow-md">
                                <div className="bg-white w-full py-6 px-6 rounded-lg">
                                    <div className="mb-4">
                                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                            ADDRESS
                                        </h2>
                                        <p className="mt-1 text-gray-700">
                                            Sector 12, Chandigarh, 160012
                                        </p>
                                    </div>
                                    <div className="mb-4">
                                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                            EMAIL
                                        </h2>
                                        <a
                                            href="mailto:example@email.com"
                                            className="text-indigo-500 leading-relaxed hover:text-indigo-600 transition-colors duration-200"
                                        >
                                            icdmt2024@pec.edu.in
                                        </a>
                                    </div>
                                    <div>
                                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                            PHONE
                                        </h2>
                                        <p className="leading-relaxed text-gray-700">0172 275 3814</p>
                                    </div>
                                </div>
                            </div>
                        <span className="text-above-contact-btn py-3 mt-5">
                            Need Help?
                        </span>
                        <a href="mailto:icdmt2024@pec.edu.in" className="contact-btn text-white bg-green border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Contact Us</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
