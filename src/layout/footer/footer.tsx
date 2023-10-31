import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const FooterComponent: FC<IProps> = () => {
  return <div>FooterComponent</div>
}

export default memo(FooterComponent)
