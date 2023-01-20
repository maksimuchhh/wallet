import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Keyboard, Mousewheel } from 'swiper'
import BankCard from './BankCard'

type Props = {
  data: any //maybe specify the type
}

export default function Slider({ data }: Props) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      keyboard={{
        enabled: true,
        onlyInViewport: false,
      }}
      mousewheel={{
        invert: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1050: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Keyboard, Mousewheel]}
      className="SliderContainer"
    >
      {data?.accounts?.map((el: any) => (
        <SwiperSlide className="slide">
          <BankCard number={el.maskedPan[0]} type={'MasterCard'} amount={el.balance / 100} currency={el.currencyCode} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
