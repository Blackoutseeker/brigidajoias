/**
 * Formats a price number as a price string in BRL format.
 * @param {number} price - price to format.
 * @returns {string} a string as the price formatted in BRL.
 * @example
 * const price: number = 1780.9
 * formatPriceToBrl(price) // 'R$ 1.780,90'
 */

const formatPriceToBrl = (price: number): string => {
  const priceFormattedForBRLCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price)

  return priceFormattedForBRLCurrency
}

export default formatPriceToBrl
