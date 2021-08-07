import { FC, useCallback, memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  SearchDrawerContainer,
  SearchDrawerHeader,
  Button,
  SearchInput,
  ItemContent,
  ItemText
} from './styles'
import ListContainer from '@components/ListContainer'
import LeftArrowIcon from '@assets/icons/left_arrow.svg'
import CloseIcon from '@assets/icons/close.svg'
import { PAGE_ROUTES } from '@utils/constants'

interface SearchDrawerProps {
  searchDrawerOpen: boolean
  setSearchDrawerOpen: (value: boolean) => void
  searchInputValue: string
  setSearchInputValue: (value: string) => void
  handleEnterKeyDown: (key: string, closeSearchDrawer: () => void) => void
  productsTitles: string[]
}

const SearchDrawer: FC<SearchDrawerProps> = props => {
  const {
    searchDrawerOpen,
    setSearchDrawerOpen,
    searchInputValue,
    setSearchInputValue,
    handleEnterKeyDown,
    productsTitles
  } = props
  const isOpen = searchDrawerOpen
  const searchPageRoute = PAGE_ROUTES.SEARCH

  const closeSearchDrawer = useCallback(() => {
    setSearchDrawerOpen(false)
  }, [setSearchDrawerOpen])

  const clearSearchInput = useCallback(() => {
    setSearchInputValue('')
  }, [setSearchInputValue])

  const productsFilteredByTitle: string[] = productsTitles.filter(title => {
    const searchInputValueIsNotEmpty = searchInputValue.length > 0
    const searchInputValueIsInTitle = title
      .toLowerCase()
      .includes(searchInputValue.toLowerCase())
    return searchInputValueIsNotEmpty && searchInputValueIsInTitle
  })

  const renderProductsTitles = () =>
    productsFilteredByTitle.map((productTitle: string, index: number) => (
      <Link
        key={index}
        href={{
          pathname: searchPageRoute,
          query: {
            productTitle
          }
        }}
        passHref
        shallow
      >
        <ItemContent onClick={closeSearchDrawer}>
          <ItemText>{productTitle}</ItemText>
        </ItemContent>
      </Link>
    ))

  return (
    <SearchDrawerContainer className={isOpen ? 'opened' : 'closed'}>
      <SearchDrawerHeader>
        <Button onClick={closeSearchDrawer}>
          <Image src={LeftArrowIcon} alt={'Voltar'} />
        </Button>
        <SearchInput
          value={searchInputValue}
          onChange={({ target }) => setSearchInputValue(target.value)}
          onKeyDown={({ key }) => handleEnterKeyDown(key, closeSearchDrawer)}
          placeholder={'Pesquise por produtos'}
        />
        <Button onClick={clearSearchInput}>
          <Image src={CloseIcon} alt={'Limpar campo de busca'} />
        </Button>
      </SearchDrawerHeader>
      <ListContainer>{renderProductsTitles()}</ListContainer>
    </SearchDrawerContainer>
  )
}

export default memo(SearchDrawer)
