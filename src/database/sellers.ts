import firebase from '@utils/firebase'
import { Seller } from '@components/SellerCard'

/**
 * Get sellers from the database
 * @returns {Promise<Seller[]>} an array of sellers
 * @example
 * const sellers: Seller[] = await getSellersFromDatabase()
 */

const getSellersFromDatabase = async (): Promise<Seller[]> => {
  const sellers: Seller[] = []
  const databaseSellersRef = firebase.database().ref('sellers')

  await databaseSellersRef.once('value', snapshot => {
    snapshot.forEach(seller => {
      sellers.push({
        name: seller.val().name,
        imageUrl: seller.val().imageUrl,
        location: seller.val().location,
        instagram: seller.val().instagram,
        whatsApp: seller.val().whatsApp
      })
    })
  })

  return sellers
}

export default getSellersFromDatabase
