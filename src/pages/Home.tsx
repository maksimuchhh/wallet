import { useState } from 'react'
import { MONOBANK_API_URL, MONOBANK_TOKEN_KEY } from '../constants'
import LocalStorage from '../utils/localStorage'
import Slider from '../components/Slider'

function Home() {
  const [data, setData] = useState<any>()
  const fetchPersonalData = async () => {
    const requestHeaders: HeadersInit = new Headers()
    const token = LocalStorage.get(MONOBANK_TOKEN_KEY)

    if (!token) return

    requestHeaders.set('X-Token', token)
    return await fetch(`${MONOBANK_API_URL}/personal/client-info`, {
      headers: requestHeaders,
    })
  }

  if (!data) {
    fetchPersonalData()
      .then((res) => res?.json())
      .then((personalData) => !personalData.errorDescription && setData(personalData))
  }

  return (
    <div>
      <Slider data={data} />
    </div>
  )
}

export default Home
