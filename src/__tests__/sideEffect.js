import * as R from 'ramda'

import { sideEffectJs, sideEffectRamda } from '../sideEffect'

describe('sideEffectRamda', () => {
  describe('sum is less than the condition', () => {
    const navigate = jest.fn()
    const data = [
      { id: 10, amount: 0 },
      { id: 11, amount: 1 },
      { id: 12, amount: 5 },
      { id: 13, amount: 0 },
    ]

    sideEffectRamda(data, navigate)

    it('should not call navigate', () => {
      expect(navigate).not.toHaveBeenCalled()
    })
  })

  describe('sum is more than the condition', () => {
    const navigate = jest.fn()

    const data = [
      { id: 10, amount: 32 },
      { id: 11, amount: 1 },
      { id: 12, amount: 5 },
      { id: 13, amount: 0 },
    ]

    sideEffectRamda(data, navigate)

    it('should call navigate', () => {
      expect(navigate).toHaveBeenCalledWith('success-page')
    })
  })

  describe('sum equals the condition', () => {
    const navigate = jest.fn()
    const data = [
      { id: 10, amount: 35 },
      { id: 11, amount: 0 },
      { id: 12, amount: 0 },
      { id: 13, amount: 0 },
    ]

    sideEffectRamda(data, navigate)

    it('should not call navigate', () => {
      expect(navigate).not.toHaveBeenCalled()
    })
  })
})

describe('sideEffectJs', () => {
  describe('sum is less than the condition', () => {
    const navigate = jest.fn()
    const data = [
      { id: 10, amount: 0 },
      { id: 11, amount: 1 },
      { id: 12, amount: 5 },
      { id: 13, amount: 0 },
    ]

    sideEffectJs(data, navigate)

    it('should not call navigate', () => {
      expect(navigate).not.toHaveBeenCalled()
    })
  })

  describe('sum is more than the condition', () => {
    const navigate = jest.fn()

    const data = [
      { id: 10, amount: 32 },
      { id: 11, amount: 1 },
      { id: 12, amount: 5 },
      { id: 13, amount: 0 },
    ]

    sideEffectJs(data, navigate)

    it('should call navigate', () => {
      expect(navigate).toHaveBeenCalledWith('success-page')
    })
  })

  describe('sum equals the condition', () => {
    const navigate = jest.fn()
    const data = [
      { id: 10, amount: 35 },
      { id: 11, amount: 0 },
      { id: 12, amount: 0 },
      { id: 13, amount: 0 },
    ]

    sideEffectJs(data, navigate)

    it('should not call navigate', () => {
      expect(navigate).not.toHaveBeenCalled()
    })
  })
})
