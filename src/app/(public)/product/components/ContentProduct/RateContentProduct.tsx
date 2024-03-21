import { Star } from 'lucide-react'
import React from 'react'

const RateContentProduct = () => {
  return (
    <div className="flex gap-2 items-center">
    <div className="flex gap-[0.3rem]">
      <Star color="#F5885F" fill="#F5885F" size={16} />
      <Star color="#F5885F" fill="#F5885F" size={16} />
      <Star color="#F5885F" fill="#F5885F" size={16} />
      <Star color="#F5885F" fill="#F5885F" size={16} />
      <Star color="#F5885F" fill="#F5885F" size={16} />
    </div>
    <span className="font-sans text-base leading-relaxed text-[#7a7a7a]">
      (75 Review)
    </span>
  </div>
  )
}

export default RateContentProduct
