const faq = [
	{
		title: 'Can Conversix sync my data to my CRM?',
		description:
			'Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc.',
	},
	{
		title: 'How much data will I receive?',
		description:
			'Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc.',
	},
	{
		title: 'Can marketers use Conversix data on behalf of client?',
		description:
			'Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc.',
	},
	{
		title: 'How accurate is my data?',
		description:
			'Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc.',
	},
]
const FAQ = () => {
	return (
		<section className="faq-section" id="faq">
			<div className="header">
				<div className="sub-heading">Frequently asked questions</div>
				<h2>
					Any Questions?
					<br />
					Find here.
				</h2>
				<button className="btn btn--yellow">Send Message</button>
				<img className="point-illustration" src="/images/point-illustration.png" alt="pointing to questions and answers" />
			</div>
			<div className="accordian">
				{faq.map((qnA, idx) => (
					<details key={qnA.title} open={idx === 0}>
						<summary>
							{qnA.title}{' '}
							<img src="/icons/minus.svg" className="collapse" alt="collapse" />
							<img src="/icons/plus.svg" className="expand" alt="expand" />
						</summary>
						<p>{qnA.description}</p>
					</details>
				))}
			</div>
			<div className="testimonial__wrapper">
				<img src="/icons/Polygon.svg" className="illustration" />
				<h2>What our client&apos;s say</h2>
				<img className="quote" src="/icons/quote.svg" alt="quote" />
				<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
				<div className="author">Adrian Smith</div>
				<div className="reviewer__wrapper">
					<button className="left-icon">
						<img src="/icons/left-chevron.svg" alt="previous reviewer" />
					</button>
					<div className="reviewer">
						<img src="/images/reviewer2.png" alt="" />
						<img src="/images/reviewer3.png" alt="" />
						<img className="active" src="/images/reviewer1.png" alt="" />
						<img src="/images/reviewer4.png" alt="" />
						<img src="/images/reviewer5.png" alt="" />
					</div>
					<button className="right-icon">
						<img src="/icons/right-chevron.svg" alt="next reviewer" />
					</button>
				</div>
			</div>
		</section>
	)
}

export default FAQ
