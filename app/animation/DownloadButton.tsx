'use client'
import React, { useRef, useEffect } from 'react'
import { LottieRefCurrentProps } from 'lottie-react'

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
        onClick={downloadcv}
      >
        Download CV
      </button>
    </div>
  )
}

export default DownloadButton
