// import React, {Component} from 'react'
import React from 'react'
import {render} from 'react-dom' 
import './index.css'
import Options from './Options'
import Quiz from './Quiz'
// import words from './components/words'

let words = [
  {Chinese: "贪心 ", Pinyin: "Tānxīn ", English: "(adj.) Greed; avarice; rapacity " },
  {Chinese: "俯卧撑 ", Pinyin: "Fǔwòchēng ", English: "(n.) Push ups" },
  {Chinese: "勉强 ", Pinyin: "Miǎnqiáng ", English: "(adj)reluctant; (v.) force; (adv.) reluctantly  " },
  {Chinese: "力量 ", Pinyin: "Lìliàng ", English: "(n.) physical strength; force; power " },
  {Chinese: "各位 ", Pinyin: "Gèwèi ", English: "(n.) Everybody; everyone (term of address)" },
  {Chinese: "立场 ", Pinyin: "Lìchǎng ", English: "(n.) position; stand; standpoint " },
  {Chinese: "下礼拜 ", Pinyin: "Xià lǐbài ", English: "(n.) next week (used in Taiwan) " },
  {Chinese: "魂魄 ", Pinyin: "Húnpò ", English: "(n.) soul  " },
  {Chinese: "多媒体 ", Pinyin: "Duōméitǐ ", English: "(n.) multimedia " },
  {Chinese: "起哄 ", Pinyin: "Qǐhòng ", English: "(v.) to heckle " },
  {Chinese: "残杀 ", Pinyin: "Cánshā ", English: "(v.) murder in cold blood; massacre " },
  {Chinese: "设计 ", Pinyin: "Shèjì ", English: "(v.) design; plan " },
  {Chinese: "蛋黄 ", Pinyin: "Dànhuáng ", English: "(n.) yolk " },
  {Chinese: "尖叫 ", Pinyin: "Jiānjiào ", English: "(v.) scream; shriek; yell " },
  {Chinese: "魔法师 ", Pinyin: "Mófǎshī ", English: "(n.) Magician; wizard; sorcerer" },
  {Chinese: "联络 ", Pinyin: "Liánluò ", English: "(n.) contact " },
  {Chinese: "留恋 ", Pinyin: "Liúliàn ", English: "(v.) be reluctant to leave (a place); cant bear to part (something or someone); recall with nostalgia  " },
  {Chinese: "喜剧 ", Pinyin: "Xǐjù ", English: "(n.) comedy " },
  {Chinese: "耐心 ", Pinyin: "Nàixīn ", English: "(n.) patience " },
  {Chinese: "固执 ", Pinyin: "Gùzhí ", English: "(adj.)obstinate; stubborn " },
  {Chinese: "订婚 ", Pinyin: "Dìnghūn ", English: "(v.) engaged to be married " },
  {Chinese: "家伙 ", Pinyin: "Jiāhuo ", English: "(n.) tool; weapon; guy; livestock " },
  {Chinese: "挑剔 ", Pinyin: "Tiāotì ", English: "(v.) nitpick; hypercritica" },
  {Chinese: "流利 ", Pinyin: "Liúlì ", English: "(adj) fluent; smooth " },
  {Chinese: "梅雨 ", Pinyin: "Méiyǔ ", English: "(n.) monsoon  " },
  {Chinese: "分店 ", Pinyin: "Fēndiàn ", English: "(n.) branch (of a shop) " },
  {Chinese: "动漫 ", Pinyin: "Dòngmàn ", English: "(n.) cartoon and animation" },
  {Chinese: "高级 ", Pinyin: "Gāojí ", English: "(adj.) senior; high-ranking  " },
  {Chinese: "稍微 ", Pinyin: "Shāowéi ", English: "(adv.) a little; a bit; slightly  " },
  {Chinese: "顺畅 ", Pinyin: "Shùnchàng ", English: "(adj.) smooth and easy; unhindered " },
  {Chinese: "来得及 ", Pinyin: "Láidéjí ", English: "(v.) there’s still time; be able to make it  " },
  {Chinese: "体内 ", Pinyin: "Tǐnèi ", English: "Within the body " },
  {Chinese: "意见 ", Pinyin: "Yìjiàn ", English: "(n.) idea; view; opinion; objection " },
  {Chinese: "一阵子 ", Pinyin: "Yī zhènzi ", English: "(n.) burst, fit; period (of time); spell " },
  {Chinese: "想得美 ", Pinyin: "Xiǎng dé měi ", English: "In your dreams! " },
  {Chinese: "吸引 ", Pinyin: "Xīyǐn ", English: "(v.) attract; draw; fascinate " },
  {Chinese: "记录 ", Pinyin: "Jìlù ", English: "(n.)  minutes; notes; record; notetaker " },
  {Chinese: "按键 ", Pinyin: "Ànjiàn ", English: "(n.) key; button " },
  {Chinese: "大一 ", Pinyin: "Dà yī ", English: "(n.) general idea; main points; gist" },
  {Chinese: "迎合 ", Pinyin: "Yínghé ", English: "(v.) cater to; pander to " },
  {Chinese: "破绽 ", Pinyin: "Pòzhàn ", English: "(n.) original meaning a burst seam; split also flaw; weak point " },
  {Chinese: "处死 ", Pinyin: "Chǔsǐ ", English: "(v.) execute; put to death " },
  {Chinese: "长知识 ", Pinyin: "Zhǎng zhīshì ", English: "(v.) to acquire knowledge " },
  {Chinese: "搭讪 ", Pinyin: "Dāshàn ", English: "(v.) strike up a conversation with somebody  " },
  {Chinese: "计划 ", Pinyin: "Jìhuà ", English: "(v.) plan (n.) plan " },
  {Chinese: "处置 ", Pinyin: "Chǔzhì ", English: "(v.) handle; deal with; manage; punish " },
  {Chinese: "庆祝 ", Pinyin: "Qìngzhù ", English: "(v.) celebrate " },
  {Chinese: "滴水 ", Pinyin: "Dīshuǐ ", English: "(v.) drip " },
  {Chinese: "推荐 ", Pinyin: "Tuījiàn ", English: "(v.) recommend " },
  {Chinese: "理性 ", Pinyin: "Lǐxìng ", English: "(n.) reason (adj.) rational  " },
  {Chinese: "砍 ", Pinyin: "Kǎn ", English: "(v.) cut; chop; hack; reduce " },
  {Chinese: "梨子 ", Pinyin: "Lízi ", English: "(n.) pear " },
  {Chinese: "某处 ", Pinyin: "Mǒu chù ", English: "(n.) somewhere " },
  {Chinese: "概念 ", Pinyin: "Gàiniàn ", English: "(n.) concept; conception; notion, idea, new design " },
  {Chinese: "探员 ", Pinyin: "Tàn yuán ", English: "(n.) detective " },
  {Chinese: "状态 ", Pinyin: "Zhuàngtài ", English: "(n.) state; condition; state of affairs " },
  {Chinese: "出现 ", Pinyin: "Chūxiàn ", English: "(v.) appear; arise; emerg" },
  {Chinese: "签约 ", Pinyin: "Qiānyuē ", English: "Sign an agreement or contract " },
  {Chinese: "辛苦 ", Pinyin: "Xīnkǔ ", English: "(v.) work hard (adj.) hard " },
  {Chinese: "统计学 ", Pinyin: "Tǒngjì xué", English: "(n.) statistics (the science) " },
]

//creates and destoys a copy of an array, then randomizes order of the copy
function equivalentExchangeRandomize(array){
  let newArray = []
  let copy = array.slice()
  for (let i = copy.length; 0 < copy.length; i--)
    newArray.push(copy.splice(Math.floor(Math.random()*copy.length),1))
  return newArray
}
// takes the index of any inputed array and turns the indexes into array elements
const indexNumToArray = (arrayToBeOrdNum) => arrayToBeOrdNum.map((x)=>arrayToBeOrdNum.indexOf(x));


let quizWordstoNumbers = indexNumToArray(words);
let randomizeIndexArray = equivalentExchangeRandomize(quizWordstoNumbers);
//takes any array of numbers and uses the numbers as the indexes for the target array's elements of the same index
const useAlteredIndexForTargetArray = (targetArray, indexes) => indexes.map(indexes => targetArray[indexes]);
let randomQuizWords = useAlteredIndexForTargetArray(words, randomizeIndexArray);
//makes it possible to only use first X elements from an array... if the first arg is undefined it slices all

let chinese = randomQuizWords.map((x)=> x.Chinese)
let pinyin = randomQuizWords.map((x)=> x.Pinyin)
let english = randomQuizWords.map((x)=> x.English)


class Flashcard extends React.Component {

    state = { 
        responded: false,
        totalClicks: 0, 
        clicksCorrect: 0,
        flashcardAppStarted: false, 
        wordIndex: 0, 
        maxWordIndex: 4, 
        completed: false
    }

    countQuizResponses = () => {
      this.setState(
        {totalClicks: this.state.totalClicks <= this.state.maxWordIndex? this.state.totalClicks +1: this.state.totalClicks +0}
      )
    }
    

    countCorrectResponses = () => {
        this.setState(
          {clicksCorrect: this.state.totalClicks <= this.state.maxWordIndex? this.state.clicksCorrect +1: this.state.clicksCorrect +0}
        )
    }
    
    setFiveWords = () => {
      this.setState(
        {maxWordIndex: this.state.maxWordIndex = 5}
      )
    }

    setTenWords = () => {
      this.setState(
        {maxWordIndex: this.state.maxWordIndex = 10}
      )
    }

    setTwentyfiveWords = () => {
      this.setState(
        {maxWordIndex: this.state.maxWordIndex = 25}
      )
    }

    setFiftyWords = () => {
      this.setState(
        {maxWordIndex: this.state.maxWordIndex = 45}
      )
    }

    setAllWords = () => {
      this.setState(
        {maxWordIndex: this.state.maxWordIndex = chinese.length}
      )
    }

    startFlashcardApp = () => {
      this.setState(prevState => ({
        flashcardAppStarted: !prevState.flashcardAppStarted
      }))
    }

    revealAnswers = () => {
      this.setState({responded: this.state.responded = true})
    }

    coverAnswers = () => {
      this.setState({responded: this.state.responded = false})
    }


    nextWord = () => {
      this.setState({wordIndex: this.state.wordIndex < this.state.maxWordIndex? this.state.wordIndex + 1: this.state.wordIndex + 0})
    } 

 

    render(){
      return (
        <div className="app">
          <div className="heading">
          </div>
          <div className="flashcard-wrap">
            <div>
            <h1>
                React JS Flashcard App
            </h1>
            <p className="info">
                Flashcard Example Data Consist of Chinese Words
            </p>
            </div>
            {this.state.flashcardAppStarted === false? <Options 
            startFlashcardApp = {this.startFlashcardApp}
            setFiveWords = {this.setFiveWords}
            setTenWords = {this.setTenWords}
            setTwentyfiveWords = {this.setTwentyfiveWords}
            setFiftyWords = {this.setFiftyWords}
            setAllWords = {this.setAllWords}
            />: 
            <Quiz 
            maxWordIndex = {this.state.maxWordIndex}
            responded = {this.state.responded}
            revealAnswers = {this.revealAnswers}
            coverAnswers = {this.coverAnswers}
            chinese = {chinese}
            pinyin = {pinyin}
            english = {english}
            clicksCorrect = {this.state.clicksCorrect}
            totalClicks = {this.state.totalClicks}
            countCorrectResponses = {this.countCorrectResponses}
            countQuizResponses = {this.countQuizResponses}
            wordIndex = {this.state.wordIndex}
            nextWord = {this.nextWord}
            />}

          </div> 
          <div className="footer"></div>
        </div>
      )
  }
  changeStatusColor = () =>  {
    let statusColor = '';
    statusColor += this.state.fiveWordsStatus === false ? 'turnRed' : 'turnBlue'
    //this.setState({fiveWordsStatus: statusColor += this.state.fiveWordsStatus === false ? 'turnRed' : 'turnBlue';})
    return statusColor;
    
  }

  
    showStatus() {
      const {fiveWordsStatus} = this.state
     return fiveWordsStatus === false? 'FALSE': 'TRUE'
    }
}



render(
    <
    Flashcard
    />, 
    document.getElementById('root')
)