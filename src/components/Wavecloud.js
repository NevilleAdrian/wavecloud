import React, { useState } from 'react'

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const data = [
    {
      userId: "1",
      title: "Love",
      image: "images/m1.png",
      star: "images/star.svg",
      amount: "$112",
    },
    {
        userId: "2",
        title: "hate",
        image: "images/m2.png",
        star: "images/star.svg",
        amount: "$112",
      },
      {
        userId: "3",
        title: "Love",
        image: "images/m3.png",
        star: "images/star.svg",
        amount: "$112",
      },
      {
        userId: "4",
        title: "hate",
        image: "images/m4.png",
        star: "images/star.svg",
        amount: "$112",
      },
      {
        userId: "5",
        title: "love",
        image: "images/m1.png",
        star: "images/star.svg",
        amount: "$112",
      },
      {
        userId: "6",
        title: "hate",
        image: "images/m2.png",
        star: "images/star.svg",
        amount: "$112",
      },
      {
        userId: "7",
        title: "love",
        image: "images/m3.png",
        star: "images/star.svg",
        amount: "$112",
      },
      {
        userId: "8",
        title: "hate",
        image: "images/m4.png",
        star: "images/star.svg",
        amount: "$112"
      },
  ];
const upload = [
{
    userId: "1",
    title: "Love",
    image: "images/m1.png",
    star: "images/star.svg",
    amount: "$112",
},
{
    userId: "2",
    title: "hate",
    image: "images/m2.png",
    star: "images/star.svg",
    amount: "$112",
    },
    {
    userId: "3",
    title: "Love",
    image: "images/m3.png",
    star: "images/star.svg",
    amount: "$112",
    },
    {
    userId: "4",
    title: "hate",
    image: "images/m4.png",
    star: "images/star.svg",
    amount: "$112",
    },
    {
    userId: "5",
    title: "love",
    image: "images/m2.png",
    star: "images/star.svg",
    amount: "$112",
    },
    {
    userId: "6",
    title: "hate",
    image: "images/m1.png",
    star: "images/star.svg",
    amount: "$112",
    },
    {
    userId: "7",
    title: "love",
    image: "images/m4.png",
    star: "images/star.svg",
    amount: "$112",
    },
    {
    userId: "8",
    title: "hate",
    image: "images/m3.png",
    star: "images/star.svg",
    amount: "$112"
    },
];

const categories = [
  {
    id: 1,
    name: "Hip Hop/ Trap"
  },
  {
    id: 2,
    name: "Afro Beat"
  },
  {
    id: 2,
    name: "House"
  },
  {
    id: 4,
    name: "R & B"
  },
  {
    id: 5,
    name: "EDM/ Electronic"
  },
]
export default function Wavecloud() {
  const [beat, setBeat]= useState()

  const beatStore = () => {
    document.getElementById("store").style.display = "none";
    document.getElementById("find").style.display = "none";
     setBeat(true)
  }
  
  const [name, setName] = useState()
  
  const genre = () => {
    document.getElementById("cat").style.display = "none";
    setName(true)
  }
    return (
     
        <div className="banner-bottom-agile text-center">
		<div className="py-xl-5 py-lg-3">
			<div className="mb-lg-5 mb-sm-4 mb-3">
				<h3 className="title-wthree mb-2">
				  <span className="mt-2 text-uppercase font-weight-bold">What’s On Wavcloud</span>
                  </h3>
			</div>
                <button id="store" onClick={beatStore} className="beatstore">
                  <span>
                    <img className="headphone" src="images/Group.png" ></img>
                      </span>Beatstore
                    <img className="icon-drop" src="images/Polygon.png"></img>
                 </button>

                 <div className={beat ? "beat container" : "beat-none"}>
                  <h3 className="what">What will you like to hear?</h3>
                  <div className="row" id="cat">
                  {categories.map((category) => (
                      <div className="beat-store-padding">
                      <button onClick={genre} className="beatstore">
                       {category.name}
                     </button>
                      </div>
                  ))}
                  </div>             
                 </div>
                <div className={name ?"beat": "beat-none"}>
                <button>hey</button>
                </div>
                 

                 <button id="find" className="beatstore"><span>
                    <img className="search-button" src="images/groupsearch.png" ></img>
                      </span>Studiofind
                    <img className="icon-drop" src="images/Polygon.png"></img>
                 </button>
                 <div className="contain">
                 <div className="top-padding">
               <OwlCarousel
                     items="5"
                     className="owl-theme"
                     autoplay
                     dots
                     loop
                     >
               {data.map((datum) => (
                    
                    <div className="item item-carousel">                         
                        <div className="card widthy">
                            <div>
                              <img className="imaging" src={datum.image}/>
                              <img className="play-it" src="images/play.png"></img>   
                            </div>
                            <div className="card-body">
                               <h2 className="title">{datum.title}</h2>                           
                               <img className="star-ish" src={datum.star} />
                              <p className="amount">{datum.amount}</p>
                            </div>
                        </div>
                  </div>
         
    
               ))}
                 </OwlCarousel>
               </div>
         
                 </div>
                 <div className="container">
             <div className="top-padding">
				  <h3 className="uploaded">New Uploads</h3>
                  
               <OwlCarousel
                     items="4"
                     className="owl-theme"
                     autoplay
                     dots
                     loop
                     >
               {upload.map((datum) => (
                    
                    <div className="item item-carousel">                         
                        <div className="card widthy">
                        <div>
                              <img className="imaging" src={datum.image}/>
                              <img className="play-it" src="images/play.png"></img>   
                            </div>
                            <div className="card-body">
                               <h2 className="title">{datum.title}</h2>
                               <img className="star-ish" src={datum.star}/>
                               <p className="amount">{datum.amount}</p>
                            </div>
                        </div>
                  </div>
         
    
               ))}
                 </OwlCarousel>
               </div>
            
               
             </div>
            
         
                    </div>
                </div>
    
                )
            }
