/**
 * Remove special characters ("@", "+", "()", "-", "space") from a string.
 * @param {string} text - a string to be cleaned without special characters.
 * @returns {string} a string without special characters.
 * @example
 * const instagramProfileName: string = '@my_instagram'
 * removeSpecialCharacters(instagramProfileName) // 'my_instagram'
 *
 * const whatsAppNumber: string = '+55 (77) xxxxx-xxxx'
 * removeSpecialCharacters(whatsAppNumber) // '5577xxxxxxxxx'
 */

const removeSpecialCharacters = (text: string): string => {
  const textWithoutSpecialCharacters = text
    .replace('@', '')
    .replace(/\+/g, '')
    .replace(/\(|\)/g, '')
    .replace(/[-]+/g, '')
    .replace(/\s/g, '')
  return textWithoutSpecialCharacters
}

export default removeSpecialCharacters
