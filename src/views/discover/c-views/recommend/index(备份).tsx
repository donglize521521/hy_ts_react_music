import React, { memo, useState, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import hyRequest from '@/service'

interface IProps {
  children?: ReactNode
}
export interface IBannerData {
  bannerBizType: string
  encodeId: string
  exclusive: boolean
  imageUrl: string
  scm: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBannerData[]>([])
  console.log(banners)
  // 测试网络请求
  useEffect(() => {
    hyRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        setBanners(res.banners)
      })
  }, [])
  return (
    <div>
      {banners.map((item, index) => {
        return <div key={index}>{item.imageUrl}</div>
      })}
    </div>
  )
}
export default memo(Recommend)
