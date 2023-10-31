import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const HeaderComponent: FC<IProps> = () => {
  return <div>HeaderComponent</div>
}

export default memo(HeaderComponent)
