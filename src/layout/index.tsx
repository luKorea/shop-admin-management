import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PageLayoutWrapper } from './styled'

interface IProps {
  children?: ReactNode
}

const PageLayout: FC<IProps> = () => {
  return <PageLayoutWrapper></PageLayoutWrapper>
}

export default memo(PageLayout)
