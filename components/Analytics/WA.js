import { useEffect } from 'react'

const WA = ({ ID }) => {
  useEffect(() => {
    if (ID) {
      const script = document.createElement('script')
      script.src = `https://stats.wideangle.co/script/${ID}.js`
      document.head.appendChild(script)
    }
    // Clean up the script when the component unmounts
    return () => {
      const existingScript = document.getElementById('waanalytics')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [ID])
  return null
}

export default WA
