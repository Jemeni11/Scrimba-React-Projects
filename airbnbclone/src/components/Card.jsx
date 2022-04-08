import star from '../images/Star.png'

export default function Card({item}) {
  let badgeText
  badgeText = item.openSpots === 0 ? "SOLD OUT"
  : item.location === "Online" ? "ONLINE"
  : undefined
  
  return (
    <div className="card">
      {(item.openSpots === 0 || item.location === "Online") && <div className='card--badge'>{badgeText}</div>}
      <img src={`src/images/${item.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star"/>
        <span>{item.stats.rating}</span>
        <span className="gray">({item.stats.reviewCount}) • </span>
        <span className="gray"> {item.location}</span>
      </div>
      <p className='card--title'>{item.title}</p>
      <p className='card--price'><span className="bold">From ${item.price}</span> / person</p>
    </div>
  )
}