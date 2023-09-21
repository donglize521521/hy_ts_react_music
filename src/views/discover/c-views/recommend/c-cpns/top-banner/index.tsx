import { useAppSelector } from '@/store'
import React, { memo, useRef, useState } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import { Carousel } from 'antd'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  /*定义内部的数据*/
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  /*从store中获取数据*/
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  function handleBeforeChange() {
    console.log('000')
  }
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }
  /**数据处理函数**/
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  let imageUrl = banners[currentIndex]?.imageUrl
  if (imageUrl) {
    imageUrl = `${imageUrl}?imageView&blur=40x20`
  }
  console.log(imageUrl)
  return (
    <BannerWrapper
      style={{ background: `url('${imageUrl}') center center/6000px` }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            dots={false}
            effect="fade"
            autoplaySpeed={3000}
            ref={bannerRef}
            beforeChange={handleBeforeChange}
            afterChange={handleAfterChange}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: index === currentIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick} />
          <button className="btn right" onClick={handleNextClick} />
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}
export default memo(TopBanner)
