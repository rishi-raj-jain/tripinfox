import { useEffect, useState } from 'react'

const imageList = [
  '/cover.jpeg',
  '/gallery/2.jpeg',
  '/gallery/3.jpeg',
  '/gallery/4.jpeg',
  '/gallery/7.jpeg',
  '/gallery/8.jpeg',
  '/gallery/9.jpeg',
  '/gallery/12.jpeg',
  '/gallery/13.jpeg',
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
