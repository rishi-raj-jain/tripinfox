const Card = ({ name, nights, days, image }) => {
  return (
    <div className="w-full rounded-b bg-gray-50 flex flex-col">
      <img src={image} loading="lazy" height="300px" className="rounded-t w-full h-[300px] object-cover" />
      <div className="p-5 flex flex-col">
        <span className="font-bold">{name}</span>
        <span className="mt-2 font-semibold text-sm text-gray-600">
          {nights} Nights - {days} Days
        </span>
      </div>
      <a href="tel:+919999228200" className="m-4 hover:border-black mt-auto max-w-max border rounded px-2 py-1">
        &#128222; &nbsp; Enquire Now
      </a>
    </div>
  )
}

export default Card
