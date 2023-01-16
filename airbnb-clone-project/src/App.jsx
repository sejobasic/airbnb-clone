import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import experiencesData from './utils/data'

function App() {
  const cards = experiencesData.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className='main-container'>
      <Navbar />
      <Hero />
      <section className='cards-list'>{cards}</section>
    </div>
  )
}

export default App
