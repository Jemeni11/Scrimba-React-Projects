export default function ImageHeader({imgsrc}) {
  return(
    <div className="div--img">
      <img 
        src={imgsrc} 
        alt='Profile' 
        width='100%'
      />
    </div>
  )
};
