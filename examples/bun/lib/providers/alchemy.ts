import { fetchBalance } from 'viem/actions/public'
import { mainnet } from 'viem/chains'
import { alchemyProvider } from 'viem/providers'

////////////////////////////////////////////////////////////

const mainnetProvider = alchemyProvider({ chain: mainnet })

////////////////////////////////////////////////////////////

export async function alchemy() {
  const balance = await fetchBalance(mainnetProvider, {
    address: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
  })
  console.log(`Balance: ${balance} wei`)
}
