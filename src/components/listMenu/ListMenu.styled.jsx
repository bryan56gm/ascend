import styled from 'styled-components'
import device from '../../styles/responsive/breakpoints'

export const List = styled.ul`
  text-align: center;
  display: grid;
  gap: 2rem 3rem;

  ${device.tablet`
    display: flex;
  `}

`
export const ListLink = styled.a`
  color: hsl(353, 90%, 16%);
  font-weight: 500;
  &:hover {
    color: var(--first-color-alt);
  }
`
