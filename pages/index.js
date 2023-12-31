import Card from 'components/Card'
import Slider from 'components/Slider'
import Footer from 'components/Footer'
import Gallery from 'components/Gallery'
import Promotional from 'components/Promotional'
import { useEffect } from 'react'

const thailandPackages = [
  {
    days: 5,
    nights: 4,
    image: '/packages/bangkok.jpeg',
    name: 'Captivating BANGKOK and PATTAYA',
  },
  {
    days: 4,
    nights: 3,
    image: '/packages/koh-samui.jpeg',
    name: 'Mesmerizing KOH SAMUI',
  },
  {
    days: 7,
    nights: 6,
    image: '/packages/phuket.jpeg',
    name: 'Wonderful PHUKET',
  },
]

const Home = () => {
  useEffect(() => {
    const loadVideos = () => {
      document.querySelectorAll('video').forEach((i) => {
        i.setAttribute('preload', 'auto')
      })
      window.loaded = true
    }
    document.addEventListener('DOMContentLoaded', loadVideos)
    const intervalLoadCheck = setInterval(() => {
      if (window.loaded) {
        clearInterval(intervalLoadCheck)
      } else {
        loadVideos()
      }
    }, 2000)
  }, [])
  return (
    <>
      <Promotional />
      <Slider />
      <div className="w-full flex-col max-w-screen-xl px-10 lg:px-0">
        <h1 className="mt-24 text-3xl font-extrabold tracking-tight lg:text-4xl">Our Most Popular Packages Thailand</h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {thailandPackages.map((i, _) => (
            <Card key={_} {...i} />
          ))}
        </div>
        <h1 className="mt-24 text-3xl font-extrabold tracking-tight lg:text-4xl">Amazing Videos Of Thailand</h1>
        <div className="mt-8 flex flex-row overflow-x-scroll gap-4">
          {new Array(8).fill(0).map((i, _) => (
            <video key={_} preload={_ === 0 ? 'auto' : 'none'} width="320" height="240" className="rounded max-w-full min-h-[200px] md:min-h-[300px] h-auto" controls>
              <source src={`/videos/${_ + 1}.mp4`} type="video/mp4" />
            </video>
          ))}
        </div>
      </div>
      <div className="mt-24 w-full flex-col max-w-screen-xl px-10 md:px-0">
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">A sneak peek into the fun in Thailand</h1>
        <Gallery />
      </div>
      <Footer />
    </>
  )
}

export default Home
