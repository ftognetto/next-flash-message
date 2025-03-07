import { cookies } from 'next/headers'
import { FlashMessageClient } from './flash-message-client'

export async function FlashMessage() {
  const _cookies = (await cookies()).getAll()
  const flash = _cookies.filter((c) => c.name.startsWith('flash-'))
  return (
    <>
      <FlashMessageClient flash={flash.map((f) => f.value)} />
    </>
  )
}

export async function setFlash(flash: { type: 'success' | 'error'; message: string }) {
  const _cookies = await cookies()
  const timestamp = Date.now()
  _cookies.set(`flash-${timestamp}`, JSON.stringify({ ...flash, timestamp }), {
    //path: '/' + timestamp,
    expires: new Date(Date.now() + 10 * 1000),
  })
}
