import Card from './Card'
import data from '../dummyData'

export default function MainContent() {

  return(
    <main>
      {data.map(datum => {
        return(
          <Card 
            key={datum.id}
            image={datum.image}
            region={datum.region}
            googleMapLink={datum.googleMapLink}
            location={datum.location}
            dateRange={datum.dateRange}
            details={datum.details}
          />
        )
      })}
    </main>
  )
};
