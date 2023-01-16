import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import experiencesData from './utils/data'

function App() {
  const cardData = experiencesData.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        desc={item.description}
        price={item.price}
        coverImg={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        openSpots={item.openSpots}
      />
    )
  })
  return (
    <div className='main-container'>
      <Navbar />
      <Hero />
      {cardData}
    </div>
  )
}

export default App
