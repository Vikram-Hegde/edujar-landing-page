const procedure = [
	{
		icon: 'signup',
		title: 'Signup',
		description:
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		icon: 'course',
		title: 'Select your Course',
		description:
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		icon: 'creditcard',
		title: 'Select Payment',
		description:
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
]
const Process = () => {
	return (
		<section id="process" className="process-section">
			<div className="header">
				<h3>How Edujar works</h3>
				<p>
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex
				</p>

				<img src="/images/Video.png" alt="play video" />
			</div>
			<div className="procedure__wrapper">
				<div className="procedure">
					{procedure.map((process) => (
						<div className="process" key={process.title}>
							<div className="icon">
								<img src={`/images/${process.icon}.png`} alt="sign up" />
							</div>
							<h4 className="process__heading">{process.title}</h4>
							<div className="process__description">{process.description}</div>
						</div>
					))}
				</div>
				<div className="illustration">
					<img loading="lazy" src="/images/procedure.png" alt="a girl using her computer" />
				</div>
			</div>
		</section>
	)
}

export default Process
