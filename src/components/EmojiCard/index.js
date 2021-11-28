import './index.css'

const EmojiCard = props => {
  const {emojiDetails, secondFun} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onEmoji = () => {
    secondFun(id)
  }
  return (
    <li className="list">
      <img
        className="emojiImg"
        alt={emojiName}
        src={emojiUrl}
        onClick={onEmoji}
      />
    </li>
  )
}
export default EmojiCard
