import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const random = () => Math.floor(Math.random() * 5)

const quotes = [
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall", author: "Nelson Mandela"},
  { text: "The way to get started is to quit talking and begin doing", author: "Walt Disney"},
  { text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking", author: "Steve Jobs"},
  { text: "The future belongs to those who believe in the beauty of their dreams", author: 'Eleanor Roosevelt'},
  { text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough", author: "Oprah Winfrey"}
]



const setRandomColor  = () => {
  const red = Math.floor(Math.random() * 180)
  const green = Math.floor(Math.random() * 180)
  const blue = Math.floor(Math.random() * 180)
  return `rgb(${red}, ${green}, ${blue})`
}

function App() {
  const [quote, setQuote] = useState(
    quotes[random()]
  )

  const [randomColor, setColor] = useState(setRandomColor())

  const handleState = () => {
    setQuote(
      quotes[random()],
      setColor(setRandomColor())
    )
  }

  
 
  return (
    <>
    <div className='background' style={{backgroundColor: randomColor}}>
    <div className='quote-display'>
    <wrapper id='quote-box'>
    
    <h1 id='text' style={{color: randomColor}}>
    <i class="bi bi-quote"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16"  style={{color: randomColor}}>
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
</svg></i>
      {quote.text}
      </h1>
      <p id="author">{quote.author}</p>
      <button type='button' className='btn' id='new-quote' onClick={handleState}>New quote</button>
      <button type='button' className='btn tweet-btn' >
        <a id='tweet-quote' href='twitter.com/intent/tweet' target='_blank'><i class="bi bi-twitter"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg></i></a>
      </button>
    </wrapper>
    </div>
    </div>
    </>
  )
}

export default App
