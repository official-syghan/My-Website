import '@testing-library/jest-dom'
import React from 'react'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    fill,
    priority,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & {
    fill?: boolean
    priority?: boolean
  }) => {
    return React.createElement('img', props)
  },
}))
