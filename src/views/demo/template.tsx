import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Tempalte: FC<IProps> = () => {
  return <div>Tempalte</div>
}
export default memo(Tempalte)
