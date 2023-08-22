const Promotional = () => {
  return (
    <div className="w-full flex flex-col items-center bg-gray-50 break-all py-4 lg:py-2 px-4 md:px-0">
      <div className="w-full flex flex-row flex-wrap gap-y-5 lg:gap-y-0 items-center justify-center md:justify-between md:max-w-screen-xl md:px-10">
        <div className="gap-x-2 flex flex-row flex-wrap gap-y-1 lg:gap-y-0 items-center justify-center">
          <div className="flex flex-row flex-wrap items-center justify-center">
            <svg height="15" width="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            <a href="tel:+918860947424" className="ml-1 text-sm text-black">
              +91-8860947424
            </a>
            ,
            <a href="tel:+919999228200" className="text-sm text-black">
              +91-9999228200
            </a>
            ,
            <a href="tel:+66966428409" className="text-sm text-black">
              +66-966428409
            </a>
          </div>
          <span className="hidden lg:block text-sm text-black/50">|</span>
          <div className="flex flex-row items-center gap-x-1">
            <svg height="15" width="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            <a href="mailto:sales@tripinfox.com" className="ml-1 text-sm text-black">
              sales@tripinfox.com
            </a>
          </div>
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
