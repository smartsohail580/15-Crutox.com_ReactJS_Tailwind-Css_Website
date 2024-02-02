import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bx1 from '../../src/assests/image/bx1.jpg';
import bx2 from '../../src/assests/image/bx2.jpg';
import bx3 from '../../src/assests/image/bx3.jpg';
import bx4 from '../../src/assests/image/bx4.jpg';
import bx5 from '../../src/assests/image/bx5.jpg';
import bx6 from '../../src/assests/image/bx6.jpg';
import bx7 from '../../src/assests/image/bx7.jpg';

function HorizontalSlider() {
  const images = [bx1, bx2, bx3, bx4, bx5, bx6, bx7];
  const textAbove = ["Founder", "Co-Founder", "Lead Blockchain Developer", "Lead Marketing Manager", "Marketing Manager", "Lead Community Manager", "App Developer"];
  const textBelow = ["Zozo", "Jinzo", "Carlos Rodriguez", "Camilo Garcia", "Mert Öztürk", "Luca Costa", "Emre Yilmaz"];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <div className="text-center py-7">
        <h2 className="font-bold text-3xl mb-4 ">Team Members</h2>
        <hr className="my-4 w-40 mx-auto border-teal-600" />
      </div>

      <div className="mx-auto max-w-6xl">
        <Slider {...settings} slidesToShow={3} responsive={[
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
            },
          },
         
        ]}>
          {images.map((image, index) => (
            <div key={index} className="px-2 py-5 text-center">
              <div className="mb-4">
                {/* Text above the image */}
                <p className="text-lg text-[#178A9E] font-semibold text-center">{textAbove[index]}</p>
              </div>
              <img
                src={image}
                alt={`Team Member ${index + 1}`}
                className="w-36 h-36 md:w-52 md:h-52  outline outline-8 outline-[#DBFAFF] object-cover rounded-full mx-auto"
              />
              <div className="mt-4">
                {/* Text below the image */}
                <p className="text-lg text-[#178A9E] font-semibold text-center">{textBelow[index]}</p>
                {/* Render the icon only for the first two images */}
                {index < 2 && (
                  <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" className='mx-auto'>
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/>
                  </svg>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HorizontalSlider;
