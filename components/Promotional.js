const Promotional = () => {
  return (
    <div className="w-full flex flex-col items-center bg-gray-50 break-all py-3">
      <div className="w-full flex flex-row flex-wrap gap-y-5 lg:gap-y-0 items-center justify-center md:justify-between md:max-w-4xl">
        <div className="gap-x-2 flex flex-row flex-wrap gap-y-1 lg:gap-y-0 items-center justify-center">
          <div className="flex flex-row items-center">
            <a href="tel:+918860947424" className="text-sm text-black">
              +918860947424
            </a>
            ,
            <a href="tel:+919999228200" className="text-sm text-black">
              +919999228200
            </a>
          </div>
          <span className="hidden lg:block text-sm text-black/50">|</span>
          <a href="mailto:sales@tripinfox.com" className="text-sm text-black">
            sales@tripinfox.com
          </a>
        </div>
        <div className="flex flex-row gap-x-5 items-center justify-center">
          <a href="https://m.facebook.com/Tripinfox/" target="_blank" className="h-[20px] w-[20px]">
            <img loading="lazy" src="https://cdn.svgporn.com/logos/facebook.svg" className="h-[20px]" />
          </a>
          <a href="https://in.linkedin.com/in/trip-info-x-282132222" target="_blank" className="h-[20px] w-[20px]">
            <img loading="lazy" src="https://cdn.svgporn.com/logos/linkedin-icon.svg" className="h-[20px]" />
          </a>
          <a href="https://www.instagram.com/tripinfox/" target="_blank" className="h-[20px] w-[20px]">
            <img loading="lazy" src="https://cdn.svgporn.com/logos/instagram-icon.svg" className="h-[20px]" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Promotional
