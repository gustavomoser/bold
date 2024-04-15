import PopperJs from '@popperjs/core'

export default class Popper {
  static placements = (PopperJs as any).placements

  constructor() {
    return {
      destroy: () => null,
      scheduleUpdate: () => null,
    }
  }
}
