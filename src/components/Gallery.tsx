import React from 'react';

const Gallery: React.FC = () => {
    const images = [
        { src: "https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400", alt: "roof"},
        { src: "https://hips.hearstapps.com/hmg-prod/images/190130-tofu-stir-fry-horizontal-150-1549302524.jpg?crop=0.8893333333333334xw:1xh;center,top&resize=1200:*", alt: "Image of lawn that we've worked on" },
        { src: "https://vancouverwithlove.com/wp-content/uploads/2023/05/vegan-avocado-toast-34.jpg", alt: "Image of lawn that we've worked on" },
        { src: "https://static01.nyt.com/images/2020/04/10/dining/gh-vegan-pancakes/gh-vegan-pancakes-superJumbo.jpg", alt: "Image of lawn that we've worked on" },
        { src: "https://www.feastingathome.com/wp-content/uploads/2021/10/Lentil-Bolognese-23-1024x1536.jpg", alt: "Image of lawn that we've worked on" },
        { src: "https://www.feastingathome.com/wp-content/uploads/2018/02/Frankie-Recipe-Indian-Burrito-100-3.jpg", alt: "Image of lawn that we've worked on" },
    ];

    return (
        <div className="max-w-[74rem] mx-auto py-40 font-outfit px-8">
            <div className="flex flex-col gap-y-12">
                <div className="flex flex-col md:flex-row md:items-end gap-y-4 justify-between">
                    <div className="flex flex-col gap-y-4">
                        <h4 className="tracking-widest text-main text-black">GALLERY</h4>
                        <h1 className="font-medium text-black text-5xl lg:text-6xl">Some of our <br /> Incredible Recipes</h1>
                    </div>
                    <a href='/order' className="text-white bg-[#06402B] px-6 py-2 rounded-full tracking-widest w-max shadow-md h-max">
                        ORDER NOW
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <img 
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-64 object-cover rounded-lg shadow-lg" 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;