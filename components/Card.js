const Card = ({ name, nights, days }) => {
  return (
    <div className="w-full rounded-b bg-gray-50 flex flex-col">
      <img
        className="rounded-t w-full h-[200px] object-cover"
        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80"
      />
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
