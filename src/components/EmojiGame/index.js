import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
/*
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedImgs: [],
    isGame: true,
  }

  secondFun = id => {
    const {score} = this.state
    this.setState(prevState => ({clickedImgs: [...prevState.clickedImgs, id]}))
    const {clickedImgs} = this.state
    const isEmojiPresent = clickedImgs.includes(id)
    clickedImgs.forEach(each => {
      if (each === id) {
        this.setState({isGame: false})
      }
    })

    if (isEmojiPresent !== true) {
      this.setState(prevState => ({score: prevState.score + 1}))
    }

    return score
  }

  getTotal = () => {
    const {score} = this.state
    const {topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    }
    return topScore
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmoji = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <ul className="un-order">
        {shuffledEmojisList.map(each => (
          <EmojiCard
            emojiDetails={each}
            key={each.id}
            secondFun={this.secondFun}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    this.setState({clickedImgs: [], isGame: true, score: 0})
  }

  renderScoreCard = () => {
    const {clickedImgs} = this.state
    const {emojisList} = this.props
    const {score} = this.state
    const isWon = clickedImgs.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={score}
      />
    )
  }

  render() {
    const {score, isGame} = this.state
    const topScore = this.getTotal()

    return (
      <div className="bg">
        <NavBar topScore={topScore} score={score} />
        <div className="unOrderCon">
          {isGame ? this.renderEmoji() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
