import removeSpecialCharacters from '@services/removeSpecialChars'

describe('Testing "removeSpecialCharacters" method from "removeSpecialChars" module', () => {
  test('Should remove special characters from a Instagram profile', () => {
    const instagramProfile = '@my_instagram_profile'
    const instagramProfileWithoutSpecialChars = 'my_instagram_profile'
    expect(removeSpecialCharacters(instagramProfile)).toEqual(
      instagramProfileWithoutSpecialChars
    )
  })

  test('Should remove special characters from a WhatsApp number', () => {
    const whatsAppNumber = '+55 (77) xxxxx-xxxx'
    const whatsAppNumberWithoutSpecialChars = '5577xxxxxxxxx'
    expect(removeSpecialCharacters(whatsAppNumber)).toEqual(
      whatsAppNumberWithoutSpecialChars
    )
  })
})
