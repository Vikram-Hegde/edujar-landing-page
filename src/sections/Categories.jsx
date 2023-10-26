const categories = [
	{
		text: 'Art & Design',
		icon: '/icons/art.svg',
	},
	{
		text: 'Development',
		icon: '/icons/development.svg',
	},
	{
		text: 'Communication',
		icon: '/icons/communication.svg',
	},
	{
		text: 'Finance & Book',
		icon: '/icons/finance.svg',
	},
	{
		text: 'Photography',
		icon: '/icons/photography.svg',
	},
	{
		text: 'Marketing',
		icon: '/icons/marketing.svg',
	},
]
const Categories = () => {
	return (
		<section className="categories-section full-bleed" id="categories">
			<h3>Explore Top Categories</h3>
			<p>Click on the categories and explore all courses</p>
			<div className="categories__wrapper">
				<button className="left-icon">
					<img src="/icons/left-chevron.svg" />
				</button>
				<div className="categories">
					{categories.map((category) => (
						<div className="category" key={category.text}>
							<div className="icon">
								<img src={category.icon} />
							</div>
							{category.text}
						</div>
					))}
				</div>
				<button className="right-icon">
					<img src="/icons/right-chevron.svg" />
				</button>
			</div>
		</section>
	)
}

export default Categories
