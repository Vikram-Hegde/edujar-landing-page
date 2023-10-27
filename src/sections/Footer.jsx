const Footer = () => {
	return (
		<footer className="footer-section" id="footer">
			<div className="companies__wrapper">
				<button className="left-icon">
					<img src="/icons/left-chevron.svg" alt="previous companies" />
				</button>
				<div className="companies">
					<img src="/images/HubSpot-full.png" alt="hubspot" />
					<img src="/images/Loom-full.png" alt="loom" />
					<img src="/images/GitLab-full.png" alt="gitlab" />
					<img src="/images/LiveChat-full.png" alt="livechat" />
					<img src="/images/Monday-full.png" alt="monday" />
				</div>
				<button className="right-icon">
					<img src="/icons/right-chevron.svg" alt="next companies" />
				</button>
			</div>
			<section>
				<div className="info">
					<h4 className="logo">
						Edu<span className="highlight--green">jar</span>
					</h4>
					<p>
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat...
					</p>
					<p>
						2023 <span className="highlight--yellow">uitaskca</span> - All
						rights reserved
					</p>
				</div>
				<div className="quick-links">
					<h4>Quick Links</h4>
					<ul role="list">
						<li>Home</li>
						<li>Pricing</li>
						<li>About us</li>
						<li>Service</li>
						<li>Blog</li>
					</ul>
				</div>
				<div className="legal">
					<h4>Legal</h4>
					<ul role="list">
						<li>Terms of use</li>
						<li>Terms and conditions</li>
						<li>Privacy policy</li>
						<li>Cookie policy</li>
					</ul>
				</div>
				<div className="contact">
					<h4>Contact</h4>
					<p>Join over 68,000 people getting our emails</p>
					<form>
						<input placeholder="Enter Email" type="text" />
						<button className="btn btn--green">Subscribe</button>
					</form>
					<p>We only send interesting and relevant emails.</p>
				</div>
			</section>
		</footer>
	)
}

export default Footer
