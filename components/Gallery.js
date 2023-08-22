const Gallery = () => {
  return (
    <div class="relative mt-8 w-[95%] columns-1 gap-4 sm:columns-2 md:columns-3">
      {new Array(14).fill(0).map((i, _) => (
        <div key={_} class="mt-4 break-inside-avoid relative flex flex-col rounded bg-gray-200 p-[0.1rem]">
          <img loading="lazy" src={`/gallery/${_ + 1}.jpeg`} className="w-full h-auto rounded" />
        </div>
      ))}
    </div>
  )
}

export default Gallery
