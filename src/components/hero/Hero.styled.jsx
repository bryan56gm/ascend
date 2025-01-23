import styled, { css } from 'styled-components'
import { Section } from '../../styles/base/Section.styled'
import device from '../../styles/responsive/breakpoints'
// Keyframes
import '../../styles/keyframes/floating.css'

export const HeroSection = styled(Section)`
  position: relative;
  min-height: calc(100vh - var(--header-height));
  ${device.laptop`
    display: grid;
    align-items: center;
  `}
`
export const HeroData = styled.div`
  text-align: center;
  position: relative;
  z-index: 5;
  color: hsl(353, 90%, 16%);
  ${device.tablet`
    max-width: 610px;
    text-align: initial;
  `}
`
export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.3rem;
  font-weight: 600;
  animation: floating ease-in-out 4s infinite;
  ${device.tablet`
    font-size: 5.5rem;
  `}
`
export const HeroDescription = styled.p`
  margin-bottom: 2rem;
  font-weight: 500;
  ${device.tablet`
    padding-right: 8rem;
    margin-bottom: 3rem;
  `}
`
export const HeroButton = styled.a`
  font-weight: 500;
  display: inline-block;
  background: linear-gradient(90deg, var(--first-color),var(--first-color-alt));
  padding: 1rem 2rem;
  border-radius: .5rem;
  transition: box-shadow .4s ease-in-out;
  color: hsl(353, 90%, 16%);

  &:hover {
    box-shadow: 0 16px 48px #FF283C66;
  }
`
export const HeroLantern1 = styled.img`
  position: absolute;
  width: 50px;
  top: 2.5rem;
  right: .5rem;
  rotate: 15deg;
  ${device.tablet`
    width: 80px;
    top: 6.5rem;
  `}
`
export const HeroLantern2 = styled.img`
  position: absolute;
  width: 50px;
  left: .75rem;
  bottom: -5rem;
  rotate: -15deg;
  ${device.tablet`
    width: 80px;
    left: initial;
    right: 14rem;
    bottom: -3.5rem;
  `}
`
export const HeroImagesBg = styled.div`
  
  
`
export const HeroImages = css`
  position: absolute;
  max-width: initial;
  width: 900px;
  right: -8rem;
  bottom: 0;
  filter: saturate(1.3);
  
  ${device.tablet`
    width: 100%;
    right: 0;
  `}
  ${device.laptop`
    height: 100vh;
    object-fit: cover;
  `}
`
export const HeroImage1 = styled.img`
  ${HeroImages}
`
export const HeroImage2 = styled.img`
  ${HeroImages}
`
export const HeroImage3 = styled.img`
  ${HeroImages}
`
export const HeroImage4 = styled.img`
  ${HeroImages}
  ${device.laptop`
    object-position: top;
  `}
`
export const HeroImage5 = styled.img`
  ${HeroImages}
`
export const HeroImage6 = styled.img`
  ${HeroImages}
`
