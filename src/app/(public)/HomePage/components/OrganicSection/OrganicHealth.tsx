import { Button } from '@/components/ui/button'
import React from 'react'

const OrganicHealth = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-6 space-y-5">
          <span className="block text-2xl text-right font-sans font-bold max-w-64 leading-normal">
            Organic & Healthy Vegetables
          </span>
          <div className="flex gap-1 justify-end items-center">
            <span className="text-xl font-extrabold font-sans">25%</span>
            <span className="font-sans text-[#2B2B2D] font-bold">off</span>
          </div>
          <div className="flex justify-end">
            <Button
              variant={"destructive"}
              className="text-lg font-bold font-sans capitalize "
            >
              Shop now
            </Button>
          </div>
        </div>
  )
}

export default OrganicHealth
