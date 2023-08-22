import Card from 'components/Card'
import Slider from 'components/Slider'
import Promotional from 'components/Promotional'

const thailandPackages = [
  {
    days: 5,
    nights: 4,
    name: 'Captivating BANGKOK and PATTAYA',
  },
  {
    days: 4,
    nights: 3,
    name: 'Mesmerizing KOH SAMUI',
  },
  {
    days: 7,
    nights: 6,
    name: 'Wonderful PHUKET',
  },
]

const Home = () => {
  return (
    <>
      <Promotional />
      <Slider />
      <div className="w-full flex-col max-w-4xl px-10 lg:px-0">
        <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-4xl">Our Most Popular Packages Thailand</h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {thailandPackages.map((i, _) => (
            <Card key={_} {...i} />
          ))}
        </div>
        <h1 className="mt-16 text-3xl font-extrabold tracking-tight lg:text-4xl">Amazing Videos Of Thailand</h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <iframe
            width="1000"
            height="1000"
            loading="lazy"
            allow="autoplay; encrypted-media"
            src="https://www.youtube.com/embed/VAV-lDPfuco"
            className="rounded max-w-full min-h-[200px] md:min-h-[300px] h-auto"
          />
          <iframe
            width="1000"
            height="1000"
            loading="lazy"
            allow="autoplay; encrypted-media"
            src="https://www.youtube.com/embed/VAV-lDPfuco"
            className="rounded max-w-full min-h-[200px] md:min-h-[300px] h-auto"
          />
          <iframe
            width="1000"
            height="1000"
            loading="lazy"
            allow="autoplay; encrypted-media"
            src="https://www.youtube.com/embed/VAV-lDPfuco"
            className="rounded max-w-full min-h-[200px] md:min-h-[300px] h-auto"
          />
          <iframe
            width="1000"
            height="1000"
            loading="lazy"
            allow="autoplay; encrypted-media"
            src="https://www.youtube.com/embed/VAV-lDPfuco"
            className="rounded max-w-full min-h-[200px] md:min-h-[300px] h-auto"
          />
        </div>
      </div>
    </>
  )
}

export default Home
