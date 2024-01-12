import { useEffect } from 'react'

const WA = ({ ID }) => {
  useEffect(() => {
    if (ID) {
      const script = document.createElement('script')
      script.id = 'waa'
      script.defer = 'defer'
      script.setAttribute('data-waa-late-init', 'true')
      script.src = `https://stats.wideangle.co/script/${ID}.js`
      script.onload = () => {
        waaCreate().then((waa) => {
          window.waa = waa
        })
      }
      document.head.appendChild(script)
    }
    // Clean up the script when the component unmounts
    return () => {
      const existingScript = document.getElementById('waa')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [ID])
  return null
}

export default WA
