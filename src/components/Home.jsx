const Home = () => {
	return (
		<>
			<section className="home-section" id="home">
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
						<div className="rating">4.9</div>
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
