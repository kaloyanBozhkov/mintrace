import { numInputVal, txtInputVal } from 'utils/common'

import Shape, { type IShape } from './Shape'

interface IRectangle extends IShape {
  width: number
  height: number
  depth: number
}

export default class Rectangle extends Shape {
  width: number
  height: number
  depth: number

  constructor({ width, height, depth, ...shapeProps }: IRectangle) {
    super(shapeProps)
    this.width = width
    this.height = height
    this.depth = depth
  }

  getThreeShape({ onClick }: { onClick?: () => void }) {
    return super.getThreeShape({
      args: [this.width, this.height, this.depth],
      onClick,
    })
  }

  static getInitialFormFields = () => ({
    width: 0,
    height: 0,
    depth: 0,
    ...Shape.getInitialFormFields(),
  })

  static getFormValidaor = () => ({
    width: numInputVal('Width', 10, 0.01),
    height: numInputVal('Width', 10, 0.01),
    depth: numInputVal('Width', 10, 0.01),
    ...Shape.getFormValidaor(),
  })
}
