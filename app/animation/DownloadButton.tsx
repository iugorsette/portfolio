'use client'
import React, { useRef, useEffect } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import animationData from '../../public/animate/download.json'

const DownloadButton: React.FC = () => {
  const downloadcv = () => {
    const pdfUrl = '/Profile.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'Profile.pdf'
    link.click()
  }

  const lottieRef = useRef<LottieRefCurrentProps | null>(null)

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.stop()
    }
  }, [])

  return (
    <div className="w-full flex justify-center">
      <button
        className="neon-btn bg-local-purple-600 text-white font-bold rounded mt-8 flex items-center gap-2"
        type="button"
        onMouseEnter={() => lottieRef.current?.play()}
        onMouseLeave={() => lottieRef.current?.stop()}
        onClick={downloadcv}
      >
        <div style={{ width: 50, height: 50 }}>
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={false}
            lottieRef={lottieRef}
          />
        </div>
        Download CV
      </button>
    </div>
  )
}

export default DownloadButton
