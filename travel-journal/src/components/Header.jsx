import { HeaderContainer } from "./styles"
import World from '../images/world.png'

export default function Header() {
  
  return(
    <HeaderContainer>
      <p
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <img 
          src={World}
          style={{
            display: 'inline-block', 
            height: '1.75em'
          }}
        />
        <span style={{margin: '10px 5px'}}>
          my travel journal.
        </span>
      </p>
    </HeaderContainer>
  )
};
