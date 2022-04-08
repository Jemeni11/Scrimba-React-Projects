import pin from '../images/pin.png'
import { CardContainer, InfoContainer, RegionSpan, MapLink, LocationName, DateRange } from './styles'

export default function Card({ image, region, googleMapLink, location, dateRange, details}) {
  return(
    <CardContainer>
      <img src={`src/images/${image}`}  style={{margin: '5px'}}/>
      <InfoContainer>
        <img src={pin} style={{marginTop: '5px'}}/>
        <RegionSpan>{region}</RegionSpan>
        <MapLink 
          href={googleMapLink} 
          target='_blank' 
          rel='noopenner'
        >
          <small>View on Google Maps</small> 
        </MapLink>
        <LocationName>{location}</LocationName>
        <DateRange>{dateRange}</DateRange>
        <p style={{lineHeight: '15px'}}>{details}</p>
      </InfoContainer>
    </CardContainer>
  )
};
