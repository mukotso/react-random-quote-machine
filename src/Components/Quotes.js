import {useEffect, useState} from "react";
import axios from "axios";
const Quotes = () => {
    const [new_quote, setQuote] = useState('')
    const [fetch_quote, fetchQuote] = useState(false)

    useEffect(()=>{

        const api_url ="https://zenquotes.io/api/quotes/";

        async function getapi(url)
        {
            const response = await fetch(url);
            var data = await response.json();
            setQuote(data)
        }

        getapi(api_url);



    },[fetch_quote])



    const handleClick = ()=>{
        fetchQuote(true)
    }
    return (
        <>
            <div id="quote-box">
                <div id="text">
                    <p>{new_quote}</p>
                </div>

                <div id="author">
                    <h3>- John Njue</h3>
                </div>
                <div>
                    <a href="#" id="tweet-quote">Tweet</a>
                    <button onClick={handleClick} id="new-quote"> New Quote</button>
                </div>


            </div>
        </>
    )
}

export default Quotes;