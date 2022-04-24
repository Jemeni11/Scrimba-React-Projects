export default function Die(props) {
  return (
    <div 
      className="die-face" 
      onClick={props.handleClick} 
      style={{backgroundColor: props.isHeldValue ? '#59E391' : 'white' }}
    >
      <h2>{props.value}</h2>
    </div>
  )
};
