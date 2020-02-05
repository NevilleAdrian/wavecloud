import React, { useState } from 'react'



export default function Header() {
const [topMenu, setTopMenu] = useState(false)
const [bottomMenu, setBottomMenu] = useState(true)

console.log(topMenu, bottomMenu)

const setStarter = () => {
	setTopMenu(() => true)
	setBottomMenu(() => true)
}


    return (
      <>
	   <div class="main-banner-w3ls">
      <header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="index.html">
          <img src="images/WAVCLOUD.png" className="logo img-fluid" alt=""/>
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-toggle" aria-controls="navbarNavAltMarkup"
				 aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse navbar-toggle " id="navbarNavAltMarkup">
					<ul className="navbar-nav mx-lg-auto" style={{paddingRight: "180px"}}>
						<li>
							<a className="nav-link active" href="index.html">Home</a>
						</li>
						<li>
							<a className="nav-link" href="about.html">About Us</a>
						</li>

						<li className="nav-item dropdown fix-it">
							
							<img
							src="images/menu.png" className="nav-link img-hover"
						/>
							<div className="dropdown-menu d-hover second" style={{paddingTop:"20px"}}>
								<div className="bg-white">
									<a className="dropdown-item scroll" href="#models">Beatstore/Instrumentals</a>
									<a className="dropdown-item scroll" href="#pricing">StudioFind</a>
									<a className="dropdown-item" href="about.html">My Profile</a>
								</div>
							   </div>
						</li>

						<li  className="search">
							<img src="images/search.png" className="nav-link "/>
						</li>
						<li>
							<a className="nav-link" href="gallery.html">Blog</a>
						</li>
						<li>
							<a className="nav-link" href="contact.html">Contact Us</a>
						</li>
					</ul>
					
				</div>
			</nav>
		</header>

		<div className="banner-agile-text">
			<div className="container">
				<div className="banner-text-size-w3ls">
					<p className="mt-3 mb-5 banner-para-wthree">
						Let’s Hear It</p>
					<a href="about.html" className="btn button-style">Register</a>
					<a href="about.html" className="btn button-style-login">Login</a>
				</div>
				
			</div>
		</div>
		</div>
    </>

    )
}
