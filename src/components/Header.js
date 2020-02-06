import React, { useState } from 'react';
import { Link } from 'react-router-dom';



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
				<a className="navbar-brand" >
          <img src="images/WAVCLOUD.png" className="logo img-fluid" alt=""/>
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-toggle" aria-controls="navbarNavAltMarkup"
				 aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse navbar-toggle " id="navbarNavAltMarkup">
					<ul className="navbar-nav mx-lg-auto" style={{paddingRight: "180px"}}>
						<li>
							<Link className="nav-link active"  to="/" >Home</Link>
						</li>
						<li>
						      <Link className="nav-link"  to="/about" >About</Link>
						</li>

						<li className="nav-item dropdown fix-it">
							
							<img
							src="images/menu.png" className="nav-link img-hover"
						/>
							<div className="dropdown-menu d-hover second" style={{paddingTop:"20px"}}>
								<div className="bg-white purple">
									<a className="dropdown-item scroll" href="#models">Beatstore/Instrumentals</a>
									<a className="dropdown-item scroll" href="#pricing">StudioFind</a>
									<a className="dropdown-item" >My Profile</a>
								</div>
							   </div>
						</li>

						<li  className="search">
							<img src="images/search.png" className="nav-link "/>
						</li>
						<li>
						     <Link className="nav-link"  to="/blog" >Blog</Link>
						</li>
						<li>
						    <Link className="nav-link"  to="/contact" >Contact</Link>
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
					<a className="btn button-style">Register</a>
					<a  className="btn button-style-login">Login</a>
				</div>
				
			</div>
		</div>
		</div>
    </>

    )
}
