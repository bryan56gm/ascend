// Styled Component
import { Container } from '../../styles/base/Container.styled'
// Components
import { HeroData, HeroTitle, HeroDescription, HeroButton, HeroLantern1, HeroLantern2, HeroImagesBg, HeroImage1, HeroImage2, HeroImage3, HeroImage4, HeroImage5, HeroImage6, HeroSection } from './Hero.styled'
// Hooks
import useHeroAnimations from '../../hooks/useHeroAnimations'

export default function Hero () {
  useHeroAnimations()

  return (
    <HeroSection>
      <Container>
        <HeroData className='hero-data'>
          <HeroTitle>Welcome to <br />Ascend</HeroTitle>
          <HeroDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sed. Obcaecati molestiae cumque debitis quisquam ipsum. In molestiae magni nisi culpa. Nostrum nemo eligendi iure vel fugit ab amet nam?</HeroDescription>
          <HeroButton href='#'>Get Started</HeroButton>

          <HeroLantern1 className='lantern-1' src='assets/img/lantern-1.svg' alt='Lantern image' />
          <HeroLantern2 className='lantern-2' src='assets/img/lantern-2.svg' alt='Lantern image' />
        </HeroData>
      </Container>

      <HeroImagesBg>
        <HeroImage1 className='sakura-1' src='assets/img/img-1.svg' alt='Hero image' />
        <HeroImage2 className='sakura-2' src='assets/img/img-2.svg' alt='Hero image' />
        <HeroImage3 className='sakura-3' src='assets/img/img-3.svg' alt='Hero image' />
        <HeroImage4 className='sakura-4' src='assets/img/img-4.svg' alt='Hero image' />
        <HeroImage5 className='sakura-5' src='assets/img/img-5.svg' alt='Hero image' />
        <HeroImage6 className='sakura-6' src='assets/img/img-6.svg' alt='Hero image' />
      </HeroImagesBg>
    </HeroSection>
  )
}
