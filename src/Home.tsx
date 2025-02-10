
import GamblingLossWarning from "./components/CTA"
import FAQ from "./components/FAQ"
import FeaturedMeals from "./components/FeaturedMeals"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Solution from "./components/Solution"
import Testimonials11 from "./components/Testimonials"



const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <FeaturedMeals />
        <GamblingLossWarning />
        <Solution />
        <Testimonials11 />
        <FAQ />
        <Footer />
    </div>
  )
}

export default Home