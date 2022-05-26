import React from 'react';
import emonBg from '../../assets/images/emonBg.png';
import website1 from '../../assets/images/11.jpg';
import website2 from '../../assets/images/10.jpg';
import website3 from '../../assets/images/9.jpg';

const PortFolio = () => {
    const handleBtn = () => {
        window.location.href = 'https://www.linkedin.com/in/abdul-awal-emon-6489a6216/'
    }
    const handleDentaCare = () => {
        window.location.href = 'https://dentacare-f083f.web.app/'
    }
    const handleGlobal = () => {
        window.location.href = 'https://inventory-management-5ed59.web.app/'
    }
    const handleIntrumentMart = () => {
        window.location.href = 'https://product-analysis-app.netlify.app/'
    }
    return (
        <div className='mx-12'>
            <h2 className='text-3xl font-bold text-center text-primary my-10'>My PortFolio</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={emonBg} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Abdul Awal Emon</h1>
                        <p className="py-6">Hey, It's Emon. I am a Software Engineering graduate from Yangzhou University, China. I am a junior Web Developer committed to build the most beautiful, functional, and user-friendly websites and web applications. Love to think in React and currently, working and growing on MERN stack..</p>
                        <h2>Name: Abdul Awal Emon</h2>
                        <h2>Educational Background: Bachelor of Software Engineering.</h2>
                        <h2>University: Yangzhou University, China</h2>
                        <h2>Email: abdulawalemon1@gmail.com</h2>



                        <button onClick={handleBtn} className="btn btn-primary mt-5">Connect Now</button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center text-primary text-3xl font-bold my-5'> My Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={website2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Denta Care</h2>
                            <p>An Independent Service Provider Website</p>
                            <div className="card-actions justify-end">
                                <button onClick={handleDentaCare} className="btn btn-primary">Visit Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-300 shadow-xl">
                        <figure><img src={website1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Global Emporium</h2>
                            <p>A Car inventory management website</p>
                            <div className="card-actions justify-end">
                                <button onClick={handleGlobal} className="btn btn-primary">Visit Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={website3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Instrument Mart</h2>
                            <p>A product analysis website</p>
                            <div className="card-actions justify-end">
                                <button onClick={handleIntrumentMart} className="btn btn-primary">Visit Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className="card my-10 lg:card-side bg-base-300 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className='mt-8 mb-5 text-2xl  text-primary font-bold'>Expertise</h2>
                        <ul className='list-disc '>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap/Tailwind</li>
                            <li>JavaScript(ES6)</li>
                            <li>React.js</li>
                            <li>Mongo DB</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default PortFolio;