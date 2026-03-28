const Projects = () => {
    return (
        <section id="projects" >
            <div className="bg-gradient-to-r from-indigo-500  to-pink-500 lg:h-[600px]">
                <div >
                    <h1 className="pt-[100px] text-white text-5xl font-bold text-center">My Latest Projects</h1>
                </div>

                <div className="lg:flex mt-[60px] mb-[500px] lg:ml-[100px]">

                    <div className="card bg-gradient-to-r from-purple-400   text-violet-700 w-96 shadow-2xl mr-5">
                        <div className="card-body">
                            <h2 className="card-title">HealthHeaven</h2>
                            <p className="text-white">It is a medicine selling website .`Health Heaven`
                                an e-commerce platform with user, seller,
                                and admin dashboards, and a product search website to enhance buying experiences.I also develop payment system in my website.
                                I built this web with the help of some technology like Html,Css,Java Script,React,Firebase,Mongodb etc.
                            </p>
                            <div className="card-actions justify-end">
                                <a href="https://medicine-selling-21aeb.web.app"><button className="btn btn-primary text-white">See Website</button></a>

                            </div>
                        </div>
                    </div>

                    <div className="card bg-gradient-to-r from-sky-400  text-blue-700 w-96 shadow-xl mr-5">
                        <div className="card-body">
                            <h2 className="card-title">AlterNative </h2>
                            <p className="text-white">It is a Products searching website .With the help
                                of this web one can compare and find alternative products.
                                Alternative product recommendation is also possible in this website.
                                I built this web with the help of some technology like Html,Css,Java Script,
                                React,Firebase,Mongodb etc. </p>
                            <div className="card-actions justify-end">
                                <a href="https://product-query-client.web.app"><button className="btn btn-primary">See Website</button></a>

                            </div>
                        </div>
                    </div>

                    <div className="card bg-gradient-to-r from-pink-500  to-indigo-500  w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Dream Place</h2>
                            <p className="text-white">It is a tourist based website .With the help of this
                                website one can see many famous tourist sports and
                                also add new tourist sports if he/she can want.I built
                                this web with the help of some technology like Html,Css,Java Script,
                                React,Firebase,Mongodb etc. </p>
                            <div className="card-actions justify-end">
                                <a href="https://assignment-ten-client-f79aa.web.app"><button className="btn btn-primary">See Website</button></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Projects;