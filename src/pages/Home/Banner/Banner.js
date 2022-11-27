import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://imgcdn.oto.com/large/gallery/exterior/84/2261/yamaha-xsr-155-slant-rear-view-full-image-760629.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to <span className='text-success'>Bikers Station</span></h1>
                    <p className="mb-5 font-bold text-white">Search For Bike Valuation. Find Useful And Attractive Results. Bikers Station will Help You. Discover & Compare The Best Options For Your Search. Easy to Use. Reliable Info. Satisfaction Guarantee.</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;