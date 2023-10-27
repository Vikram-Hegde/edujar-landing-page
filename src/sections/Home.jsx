const Home = () => {
	return (
		<>
			<section className="home-section" id="home">
				<div className="illustration illustration-one">
					<img src="/icons/StarsGroup1.svg" />
				</div>
				<div className="illustration illustration-two">
					<img src="/icons/StarsGroup2.svg" />
				</div>
				<h1 className="glow">
					Learn with us anywhere with the best{' '}
					<span className="highlight--yellow">experts</span>
				</h1>
				<p>We collaborate with 275+ leading universities and companies</p>
				<form>
					<input type="text" placeholder="What do you want to learn?" />
					<button className="btn btn--yellow" type="button">
						Explore
					</button>
				</form>
					<div className="arrow">
						<img src="/icons/arrow.svg" />
					</div>
			</section>
			<div className="badges full-bleed">
				<div className="badge">
					<div className="count">60K+</div>
					<span>Live Courses</span>
				</div>
				<div className="badge">
					<div className="count">35+</div>
					<span>Category</span>
				</div>
				<div className="badge wider">
					<div className="heading">
						<div className="reviewer">Trustpilot</div>
						<div className="rating">
							4.9 <img src="/icons/Star.svg" alt="" />
						</div>
					</div>
					<span>
						<a href="#">View our 1,602 reviews</a>
					</span>
				</div>
				<div className="badge">
					<div className="count">20K+</div>
					<span>Professionals</span>
				</div>
				<div className="badge">
					<div className="count">120M+</div>
					<span>Students</span>
				</div>
			</div>
		</>
	)
}

export default Home
