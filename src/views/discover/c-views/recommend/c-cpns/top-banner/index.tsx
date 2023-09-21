import { useAppSelector } from '@/store'
import React, { memo, useRef } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import { Carousel } from 'antd'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  /*定义内部的数据*/
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  /*从store中获取数据*/
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  /**数据处理函数**/
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay autoplaySpeed={3000} ref={bannerRef}>
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
