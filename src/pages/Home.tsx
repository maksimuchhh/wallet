import { useState } from 'react'
import { MONOBANK_API_URL, MONOBANK_TOKEN_KEY } from '../constants'
import LocalStorage from '../utils/localStorage'
import CardsSlider from '../components/CardsSlider'

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
      .then((personalData) => !personalData?.errorDescription && setData(personalData))
  }

  const monobankCardsList = data?.accounts?.map(
    (el: { maskedPan: string[]; balance: number; currencyCode: number }) => ({
      number: el.maskedPan?.[0],
      type: 'MasterCard',
      amount: el.balance / 100,
      currency: el.currencyCode,
    })
  )

  return (
    <div>
      <CardsSlider cardsList={monobankCardsList} />
    </div>
  )
}

export default Home
