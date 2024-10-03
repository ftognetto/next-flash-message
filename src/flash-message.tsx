import { cookies } from 'next/headers'
import { FlashMessageClient } from './flash-message-client'

export function FlashMessage() {
  const _cookies = cookies().getAll()
  const flash = _cookies.filter((c) => c.name.startsWith('flash-'))
  return (
    <>
      <FlashMessageClient flash={flash.map((f) => f.value)} />
    </>
  )
}

export function setFlash(flash: { type: 'success' | 'error'; message: string }) {
  const timestamp = Date.now()
  cookies().set(`flash-${timestamp}`, JSON.stringify({ ...flash, timestamp }), {
    //path: '/' + timestamp,
    expires: new Date(Date.now() + 10 * 1000),
  })
}
