import Gradient from "../components/Gradient"

const cards = [
	{
		lesson: 25,
		tag: 'Design',
		title: 'Supervised Machine Learning: Regression and Classification',
		description:
			'For athletes, high altitude produces two contradi effects on performance.',
		company: 'Monday',
	},
	{
		lesson: 16,
		tag: 'Marketing',
		title: 'Programming for Everybody (Getting Started with Python)',
		description:
			'For athletes, high altitude produces two contradi effects on performance.',
		company: 'LiveChat',
	},
	{
		lesson: 38,
		tag: 'Programming',
		title: 'Leading Teams: Developing as a Leader',
		description:
			'For athletes, high altitude produces two contradi effects on performance.',
		company: 'Monday',
	},
	{
		lesson: 25,
		tag: 'Design',
		title: 'Powerful mental tools to help you master tough subjects',
		description:
			'For athletes, high altitude produces two contradi effects on performance.',
		company: 'HubSpot',
	},
	{
		lesson: 16,
		tag: 'Marketing',
		title: 'Programming for Everybody (Getting Started with Python)',
		description:
			'For athletes, high altitude produces two contradi effects on performance.',
		company: 'ClickUp',
	},
	{
		lesson: 38,
		tag: 'Programming',
		title: 'Leading Teams: Developing as a Leader',
		description:
			'For athletes, high altitude produces two contradi effects on performance.',
		company: 'LiveChat',
	},
]

const Courses = () => {
	return (
		<section className="courses-section" id="courses">
			<div className="header">
				<h3>Popular Courses</h3>
				<p>
					Let&apos;s join our best classes with our famous instructor and
					institutes
				</p>

				<div className="icons">
					<button className="left-icon">
						<img src="/icons/left-chevron.svg" />
					</button>
					<button className="right-icon">
						<img src="/icons/right-chevron.svg" />
					</button>
				</div>
			</div>
			<div className="cards">
				<Gradient />
				{cards.map((card, idx) => (
					<div className="card" key={idx}>
						<div className="header">
							<div className="lesson">
								<svg
									width="18"
									height="18"
									viewBox="0 0 28 28"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="13.9407"
										cy="13.7034"
										r="13.7034"
										fill="var(--bg, var(--green))"
									/>
									<path
										d="M18.3456 12.8558C18.9981 13.2326 18.9981 14.1744 18.3456 14.5512L12.4727 17.9419C11.8201 18.3186 11.0045 17.8477 11.0045 17.0942L11.0045 10.3128C11.0045 9.5593 11.8201 9.08837 12.4727 9.46512L18.3456 12.8558Z"
										fill="#364C65"
									/>
								</svg>
								{card.lesson + 'x'} Lesson
							</div>
							<div className="tag">{card.tag}</div>
						</div>
						<h4>{card.title}</h4>
						<p>{card.description}</p>
						<hr />
						<div className="footer">
							<button className="btn btn--green">Join</button>
							<img
								className="company"
								src={`/images/${card.company}.png`}
								alt={card.company}
							/>
						</div>
					</div>
				))}
			</div>
			<button className="btn btn--outline">Explore Courses</button>
			<Gradient />
		</section>
	)
}

export default Courses
