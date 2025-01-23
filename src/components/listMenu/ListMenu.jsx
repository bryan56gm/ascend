// Styled Component
import { List, ListLink } from './ListMenu.styled'
// Id generator
import { nanoid as id } from 'nanoid'

export default function ListMenu ({ handleClick }) {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Location', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Explore', href: '#' },
    { name: 'Contact', href: '#' }
  ]

  return (
    <List>
      {
        navLinks.map((link) => (
          <li key={id()}>
            <ListLink
              onClick={handleClick}
              href={link.href}
            >
              {link.name}
            </ListLink>
          </li>
        ))
      }
    </List>
  )
}
