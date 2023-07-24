async function getAllCryptos() {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false')

    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}
export default getAllCryptos