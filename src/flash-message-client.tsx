'use client'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export function FlashMessageClient(props: { flash: string[] | undefined }) {
  const [flashed, setFlashed] = useState<number[]>([])

  useEffect(() => {
    if (!!props.flash && props.flash.length) {
      props.flash.forEach((flash) => {
        const { type, message, timestamp } = JSON.parse(flash)
        if (!flashed.includes(timestamp)) {
          if (type === 'success') {
            toast.success(message)
          } else if (type === 'error') {
            toast.error(message)
          }
          setFlashed((prev) => [...prev, timestamp])
        }
      })
    }
  }, [props.flash, flashed])

  return null
}
