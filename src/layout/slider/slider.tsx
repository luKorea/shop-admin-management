import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const SliderComponent: FC<IProps> = () => {
  return <div>SliderComponent</div>
}

export default memo(SliderComponent)
