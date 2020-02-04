import React from 'react'

export default function header() {
    return (
      <>
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

						<li className="nav-item dropdown fix-it ">
							<img src="images/menu.png" className="nav-link "/>
							
							<div className="dropdown-menu second mt-2" style={{display: "none", marginLeft: "30px"}}>
								<a className="dropdown-item scroll" href="#models">Beatstore/Instrumentals</a>
								<a className="dropdown-item scroll" href="#pricing">StudioFind</a>
								<a className="dropdown-item" href="about.html">My Profile</a>
							</div>
						</li>

						<li>
							<img className="search" src="images/search.png" className="nav-link "/>
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
    </>

    )
}
