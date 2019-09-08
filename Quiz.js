import React from 'react'

class Quiz extends React.Component {
  render(){
    const {maxWordIndex, responded, revealAnswers, coverAnswers, chinese, pinyin, english, wordIndex, nextWord, clicksCorrect, totalClicks, countCorrectResponses, countQuizResponses} = this.props
    const hidden = {
      visibility: 'hidden'
    }
    const visible = {
      visibility: 'visible'
    }

    return (
        <div> 
          <div className="quiz">
            <div className="restart" onClick={()=>document.location.reload()}>Restart</div>
            <div className="tally">{clicksCorrect}/{totalClicks}<span className="num-correct"></span><span className="num-total"></span>
            </div>
            <div className="correct" style={responded === false? hidden: visible} onClick={()=> {
              coverAnswers()
              countCorrectResponses()
              countQuizResponses()
              nextWord()
            }}>CORRECT</div>
            <div className="wrong" style={responded === false? hidden: visible} onClick={()=> {
              coverAnswers()
              countQuizResponses()
              nextWord()
            }}> WRONG </div>
            <div className="side-a" style={wordIndex < maxWordIndex+1? visible: hidden}onClick={() => {
            wordIndex < maxWordIndex? revealAnswers(): alert("You've finished!")
            }}>{chinese[wordIndex]}</div>
            <div className="side-b-one" style={responded === false? hidden: visible}>{pinyin[wordIndex]}</div>
            <div className="side-b-two" style={responded === false? hidden: visible}>{english[wordIndex]}</div>
          </div>
        </div> 
    )
  }
}


export default Quiz