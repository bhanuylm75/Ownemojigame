import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <div className="navbar">
      <div className="card">
        <img
          className="img"
          alt="emojiLogo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
        />
        <p className="para1"> Emoji Game</p>
      </div>
      <div className="nav-card">
        <p className="para">Score:{score}</p>
        <p className="para"> Top Score:{topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
