import Courses from './sections/Courses'
import Categories from './sections/Categories'
import Header from './sections/Header'
import Home from './sections/Home'
import './styles/App.scss'

function App() {
	return (
		<>
			<Header />
			<Home />
			<Categories />
			<Courses />
		</>
	)
}

export default App
