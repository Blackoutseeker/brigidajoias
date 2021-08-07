import firebase from '@utils/firebase'
import { Product } from '@components/ProductCard'

/**
 * Get all products from the database
 * @returns {Promise<Product[]>} an array of all products
 * @example
 * const allProducts: Product[] = await getAllProductsFromDatabase()
 */

export const getAllProductsFromDatabase = async (): Promise<Product[]> => {
  const allProducts: Product[] = []
  await firebase
    .database()
    .ref('products')
    .once('value', products => {
      products.forEach(productType => {
        productType.forEach(product => {
          allProducts.push({
            title: product.val().title,
            price: product.val().price,
            imageUrl: product.val().imageUrl
          })
        })
      })
    })
  return allProducts
}

/**
 * Get products by type from the database
 * @param {string} productType - the type of products to get
 * @returns {Promise<Product[]>} an array of products of the given type
 * @example
 * const productType: string = 'Rings'
 * const products: Product[] = await getProductsByType(productType)
 */

export const getProductsByType = async (
  productType: string
): Promise<Product[]> => {
  const products: Product[] = []
  await firebase
    .database()
    .ref(`products/${productType}`)
    .once('value', productsByType => {
      productsByType.forEach(product => {
        products.push({
          title: product.val().title,
          imageUrl: product.val().imageUrl,
          price: product.val().price
        })
      })
    })
  return products
}

/**
 * Get products by title from the database
 * @param {Product[]} allProducts - an array of all products from the database
 * @param {string} searchedTitle - the searched title of the products to be get
 * @returns {Product[]} an array of products with the given title
 */

export const getProductsByTitle = (
  allProducts: Product[],
  searchedTitle: string
): Product[] => {
  console.log(searchedTitle)
  const productsFilteredByTitle = allProducts.filter(product =>
    product.title.toLowerCase().includes(searchedTitle.toLowerCase())
  )
  return productsFilteredByTitle
}
