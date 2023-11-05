import { useAppSelector } from '@/store'
import React, { memo } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { useRef } from 'react'
import { shallowEqual } from 'react-redux'
import { AlbumWrapper } from './style'
import { Carousel } from 'antd'
import AreaHeaderV1 from '@/components/area-header-v1'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  /*事件处理函数*/
  function handlePrevClick() {
    console.log('handlePrevClick')
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    console.log('handleNextClick')
    bannerRef.current?.next()
  }
  /*从store中获取数据*/
  const { newAlbums } = useAppSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums
    }),
    shallowEqual
  )

  console.log(newAlbums)
  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <div className="sprite_02 arrow arrow-left" onClick={handlePrevClick} />
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={2000}>
            {[1, 2].map((item) => {
              return (
                <h1 className="item" key={item}>
                  {item}
                </h1>
              )
            })}
          </Carousel>
        </div>
        <div
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        />
      </div>
      NewAlbum
    </AlbumWrapper>
  )
}
export default memo(NewAlbum)
