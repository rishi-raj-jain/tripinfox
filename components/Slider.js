import { useEffect, useState } from 'react'

const imageList = [
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80',
]

const Slider = () => {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setIndex((lastIndex) => (lastIndex + 1) % imageList.length)
    }, 3000)
  })
  return <img src={imageList[index]} className="h-[30vh] md:h-[50vh] lg:h-[75vh] w-full object-cover" />
}

export default Slider
