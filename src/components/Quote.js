import React from 'react'
import './Quote.css';

const Quote = () => {
  return (
    <div>
           <div class="wrapper">
        <header>Quote of the Day</header>
        <div class="content">
            <div class="quote-area">
                <i class="fas fa-quote-left"></i>
                <p class="quote">Never give up because you never know if the next try is going to be the one that works
                </p>
                <i class="fas fa-quote-right"></i>
            </div>
            <div class="author">
                <span>--</span>
                <span class="name">Mary Kay Ash</span>
            </div>
        </div>
        <div class="buttons">
            <div class="features">
                <ul>
                    <li class="sound"><i class="fas fa-volume-up"></i></li>
                    <li class="copy"><i class="fas fa-copy"></i></li>
                    <li class="twitter"><i class="fab fa-twitter"></i></li>
                </ul>
                <button>New Quote</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Quote