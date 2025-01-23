import { useState } from 'react'
// Styled Component
import { Container } from '../../styles/base/Container.styled'
// Components
import ListMenu from '../listMenu/ListMenu'

import { HeaderBox, Navigation, Logo, LogoImg, LogoText, MenuContainer, MenuClose, MenuToggle } from './Header.styled'

export default function Header () {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <HeaderBox>
      <Container>
        <Navigation>
          <Logo href='#'>
            <LogoImg src='assets/icons/temple.svg' alt='Logo Temple' />
            <LogoText>Ascend</LogoText>
          </Logo>

          <MenuContainer $showMenu={showMenu}>
            <ListMenu handleClick={handleClick} />
            <MenuClose src='assets/icons/close.svg' alt='Close' onClick={handleClick} />
          </MenuContainer>

          <MenuToggle src='assets/icons/menu.svg' alt='Menu' onClick={handleClick} />
        </Navigation>
      </Container>
    </HeaderBox>
  )
}
