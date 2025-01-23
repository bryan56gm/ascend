import styled from 'styled-components'
// Responsive
import device from '../../styles/responsive/breakpoints'

export const HeaderBox = styled.header`
  position: fixed;
  width: 100%;
  display: grid;
  align-content: center;
  z-index: 100;
  height: var(--header-height);
`
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.a`
  display: flex;
  align-items: center;
  column-gap: .25rem;
`
export const LogoImg = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 2rem;
`
export const LogoText = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: hsl(353, 90%, 16%);
  &:hover {
    color: var(--first-color-alt);
  }
`
export const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  background-color: hsla(353, 98%, 90%, 0.4);
  backdrop-filter: blur(16px);
  padding-block: 5rem 4rem;
  transition: all .3s ease-in-out;
  transform: ${({ $showMenu }) => $showMenu ? 'translateY(0%)' : 'translateY(-100%)'};

  ${device.tablet`
    padding-block: 0;
    position: static;
    height: auto;
    width: max-content;
    background-color: transparent;
    backdrop-filter: blur(0px);
    transform: translateY(0%);
  `}
`
export const MenuClose = styled.img`
  position: absolute;
  top: 6%;
  right: 10%;
  width: 20px;
  cursor: pointer;
  ${device.tablet`
    display: none;
  `}
  `
export const MenuToggle = styled.img`
  cursor: pointer;
  width: 25px;
  ${device.tablet`
    display: none;
  `}
`
