import React from 'react'

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
export default function Wavecloud() {
    
    return (
        <div className="banner-bottom-agile text-center">
		<div className="py-xl-5 py-lg-3">
			<div className="mb-lg-5 mb-sm-4 mb-3">
				<h3 className="title-wthree mb-2">
				  <span className="mt-2 text-uppercase font-weight-bold">What’s On Wavcloud</span>
                  </h3>
			</div>
                <button className="beatstore"><span>
                    <img className="headphone" src="images/Group.png" ></img>
                      </span>Beatstore
                    <img className="icon-drop" src="images/Polygon.png"></img>
                 </button>
                 <button className="beatstore"><span>
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
