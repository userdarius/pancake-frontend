import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    56: '0x0eb1bc7161424fa5ec42319d32b9e98e7b667410',
    97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
  }

  it(`get address for mainnet (chainId 56)`, () => {
    process.env.REACT_APP_CHAIN_ID = '56'
    const expected = address[56]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    process.env.REACT_APP_CHAIN_ID = '97'
    const expected = address[97]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.REACT_APP_CHAIN_ID = '31337'
    const expected = address[56]
    expect(getAddress(address)).toEqual(expected)
  })
})
