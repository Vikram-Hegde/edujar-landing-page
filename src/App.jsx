import Courses from './sections/Courses'
import Categories from './sections/Categories'
import Header from './sections/Header'
import Home from './sections/Home'
import './styles/App.scss'
import Process from './sections/Process'
import FAQ from './sections/FAQ'

function App() {
	return (
		<>
			<Header />
			<Home />
			<Categories />
			<Courses />
			<Process />
			<FAQ />
		</>
	)
}

export default App
