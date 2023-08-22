const Promotional = () => {
  return (
    <div className="w-full flex flex-col items-center bg-gray-50 break-all py-3">
      <div className="w-full flex flex-row flex-wrap gap-y-5 lg:gap-y-0 items-center justify-center md:justify-between md:max-w-4xl">
        <div className="gap-x-2 flex flex-row flex-wrap gap-y-1 lg:gap-y-0 items-center justify-center">
          <div className="flex flex-row items-center">
            <a href="tel:+917011462410" className="text-sm text-black">
              +917011462410 (India),
            </a>
            <a href="tel:+66929808716" className="text-sm text-black">
              +66929808716 (Thailand)
            </a>
          </div>
          <span className="hidden lg:block text-sm text-black/50">|</span>
          <a href="mailto:sales@journeysexotica.com" className="text-sm text-black">
            sales@journeysexotica.com
          </a>
        </div>
        <div className="flex flex-row gap-x-5 items-center justify-center">
          <img src="https://cdn.svgporn.com/logos/facebook.svg" className="h-[20px]" />
          <img src="https://cdn.svgporn.com/logos/twitter.svg" className="h-[20px]" />
          <img src="https://cdn.svgporn.com/logos/instagram-icon.svg" className="h-[20px]" />
        </div>
      </div>
    </div>
  )
}

export default Promotional
