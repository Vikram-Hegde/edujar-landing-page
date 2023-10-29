import { useState } from 'react'

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)
	return (
		<header>
			<div className="logo">
				Edu<span className="highlight--green">jar</span>
			</div>
			<ul
				role="list"
				className={`nav ${showMenu ? 'active' : ''}`}
				onClick={() => setShowMenu(!showMenu)}
			>
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#courses">Courses</a>
				</li>
				<li>
					<a href="#partners">Partners</a>
				</li>
				<li>
					<a href="#universities">Universities</a>
				</li>
				<li>
					<a href="#blog">Blog</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="buttons">
				<button className="btn btn--outline">Sign Up</button>
				<div className="icon" onClick={() => setShowMenu(!showMenu)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-menu"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M4 8l16 0"></path>
						<path d="M4 16l16 0"></path>
					</svg>
				</div>
			</div>
		</header>
	)
}

export default Header
