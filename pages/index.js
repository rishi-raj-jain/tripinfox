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
      <footer className="mt-8 w-full py-8">
        <div className="mx-auto w-full px-2.5 lg:px-20 pt-10">
          <div className="xl:grid xl:grid-cols-5 xl:gap-8">
            <div className="space-y-8 xl:col-span-2">
              <a href="/">
                <span className="sr-only">Dub.co Logo</span>
                <img loading="lazy" src="/logo.png" className="h-[80px] border border-gray-100" />
              </a>
              <p className="max-w-xs text-sm text-gray-500">Where trips are tailor made for you.</p>
              <div className="flex items-center gap-x-4">
                <a href="https://m.facebook.com/Tripinfox/" target="_blank" className="h-[20px] w-[20px]">
                  <img loading="lazy" src="https://cdn.svgporn.com/logos/facebook.svg" className="h-[20px]" />
                </a>
                <div className="h-8 border-l border-gray-200"></div>
                <a href="https://in.linkedin.com/in/trip-info-x-282132222" target="_blank" className="h-[20px] w-[20px]">
                  <img loading="lazy" src="https://cdn.svgporn.com/logos/linkedin-icon.svg" className="h-[20px]" />
                </a>
                <div className="h-8 border-l border-gray-200"></div>
                <a href="https://www.instagram.com/tripinfox/" target="_blank" className="h-[20px] w-[20px]">
                  <img loading="lazy" src="https://cdn.svgporn.com/logos/instagram-icon.svg" className="h-[20px]" />
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-3 xl:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-8">
                <div>
                  <h3 className="mt-4 text-sm font-semibold text-gray-900">Corporate Office</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li className="text-sm">792, 7th Floor, Aggarwal Cyber Plaza 2, Netaji Subhash Place, Pitampura, New Delhi - 110034</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mt-4 text-sm font-semibold text-gray-900">Head Office</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li className="text-sm">35/891 Moo2 kohkaew, Mueang District, Phuket, Thailand - 83000</li>
                    <li className="text-xs text-gray-400">Approved by Tourism Authority of Thailand (License No. 34/02735)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mt-4 text-sm font-semibold text-gray-600">Gujarat Office</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li className="text-sm">408, Westface, Zydus Hospital Road, Near Baghban Party Plot. Ahmedabad, Gujarat</li>
                    <li className="text-xs text-gray-400">Landmark : Domino’s Pizza Outlet</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
