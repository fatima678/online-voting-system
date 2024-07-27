import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../Navbar'; // Adjust the import path if necessary

const data = [
  {
    name: "Imran Khan",
    img: "/student/imran.jpeg",
    review: "He is a great leader",
    route: "/imran"
  },
  {
    name: "Tayyab Erdagan",
    img: "/student/Tayyab.jpeg",
    review: "He is a great leader",
    route: "/tayyab"
  },
  {
    name: "Be Nazeer Bhutto",
    img: "/student/butto.jpeg",
    review: "She is a great leader",
    route: "/butto"
  },
  {
    name: "Mian Nawaz Shareef(Ganju)",
    img: "/student/nawz.jpeg",
    review: "He is a great leader",
    route: "/nawz"
  },
  {
    name: "Maryam Nawz",
    img: "/student/maryam.jpeg",
    review: "She is a great leader",
    route: "/maryam"
  },
];

function CandidateProfile() {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Enable center mode to better handle spacing
  };

  return (
    <div className='bg-gray-300'>
      <Navbar /> {/* Adding Navbar component */}
      <div className="pt-24 w-3/4 m-auto mt-10 " > {/* Added pt-24 to create space for the Navbar */}
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className="p-4"> {/* Added padding to create space between cards */}
                <div className="bg-white h-[450px] text-black rounded-xl shadow-lg"> {/* Added shadow for better card distinction */}
                  <div className="h-56 rounded-t-xl bg-slate-700 flex justify-center items-center">
                    <img src={d.img} alt={d.name} className="h-44 w-44 rounded-full" />
                  </div>
                  <div className="flex flex-col justify-center gap-4 p-4">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p>{d.review}</p>
                    <div className="flex justify-center">
                      <button
                        className="bg-slate-700 text-white text-lg px-6 py-1 rounded-xl"
                        onClick={() => navigate(d.route)}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CandidateProfile;
