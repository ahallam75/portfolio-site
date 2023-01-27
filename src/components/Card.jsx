import './card.css'

const Card = ({children, className, onClick}) => {
  return (
    <article className={`card ${className}`} onClick={onClick}>
        {children}
    </article>
  )
}

//Test comment

export default Card