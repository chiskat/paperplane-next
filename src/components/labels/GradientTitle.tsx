import { MantineGradient, Text, TextProps } from '@mantine/core'
import { CSSProperties, ReactNode } from 'react'

import { cn } from '@/lib/style'

export interface GradientTitleProps extends TextProps {
  children: ReactNode
  size?: TextProps['size']
  gradient?: MantineGradient
  className?: string
  style?: CSSProperties
}

export default function GradientTitle(props: GradientTitleProps) {
  const {
    size = 'lg',
    gradient = { from: 'ma', to: 'lb' },
    children,
    className,
    ...restProps
  } = props

  return (
    <Text
      {...restProps}
      variant="gradient"
      gradient={gradient}
      size={size}
      className={cn('cursor-default font-serif', className)}
    >
      {children}
    </Text>
  )
}
