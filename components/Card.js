const Card = () => {
  return (
    <div className="w-full rounded-b bg-gray-50 flex flex-col">
      <img
        className="rounded-t w-full h-[200px] object-cover"
        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80"
      />
      <div className="p-5 flex flex-col">
        <span className="font-bold">CAPTIVATING BANGKOK & PATTAYA</span>
        <span className="mt-2 font-semibold text-sm text-gray-600">04 Nights - 05 Days</span>
      </div>
    </div>
  )
}

export default Card
