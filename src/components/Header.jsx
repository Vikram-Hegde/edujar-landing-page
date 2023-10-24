const Header = () => {
	return (
		<header>
			<div className="logo">
				Edu<span className="highlight highlight--green">jar</span>
			</div>
			<ul role="list" className="nav">
				<li><a href="#home">Home</a></li>
				<li><a href="#courses">Courses</a></li>
				<li><a href="#partners">Partners</a></li>
				<li><a href="#universities">Universities</a></li>
				<li><a href="#blog">Blog</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
			<button className="btn btn--outline">Sign Up</button>
		</header>
	)
}

export default Header
