const About = () => {
    return (
        <section id="about" className="p-10 bg-black pt-[150px] ">
            <h2 className="text-5xl font-bold text-center font-bold mb-4 text-white">About Me</h2>
            <p className="text-center text-white">
                Passionate about creating beautiful and functional digital experiences that <br /> make a difference
            </p>
            <div className="flex">
                <div>
                    <div className="w-[400px] h-[500px] bg-gradient-to-r from-indigo-500  to-pink-500  rounded-lg mt-10">
                        <img className="w-[800px] h-[1000px] pb-[500px]" src="https://i.ibb.co/MfS5rxY/1720062798988-removebg-preview.png" alt="" />
                    </div>

                </div>
                <div>

                </div>
            </div>
        </section>
    );
};

export default About;