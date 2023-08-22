const Footer = () => {
  return (
    <footer className="px-8 md:px-0 mt-8 w-full py-8">
      <div className="mx-auto w-full px-2.5 lg:px-20 pt-10">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="space-y-8 xl:col-span-2">
            <a href="/">
              <span className="sr-only">Tripinfox Logo</span>
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
  )
}

export default Footer
