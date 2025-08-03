import React, { useState, useEffect } from 'react';

function Quote() {

const [quote, setQuote] = useState("No Quote loaded yet !!!");
const [author, setAuthor] = useState("");


useEffect(() => {

fetchQuote();

}, []);

 const fetchQuote = () => {
    fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": "rAIjvVamW5UsbF4tDI4+MA==mBI0nUvMANbGshoP",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setQuote(data[0].quote);
          setAuthor(data[0].author);
        }
      })
      .catch((err) => console.error("Error fetching quote:", err));
  };
return(
    <div> 
    <div style={{ width:'50%', margin :'0 auto'}}>
    <h2 style={{textAlign:'center',fontSize:'50px' }}>Quote Generator</h2>
    <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '16px' }}>
  Feeling low or lacking motivation? Our website offers a quick quote generator to uplift your mood and get you inspired instantly.
</p>

    <div style={{padding: '30px', fontFamily:'Arial',
          border: '2px dashed',
          borderRadius: '10px',
          padding: '16px',
          margin: '10px',
          width: '550px',
          backgroundColor:'aliceblue',
          height:'150px'
    }}>
    <p style={{ fontstyle:'italic',marginTop:'40px', textAlign:'center'}}> {quote}</p>
    </div>

   <div style={{ textAlign: 'center', marginTop: '10px' }}>
  <button 
    onClick={fetchQuote}
    style={{
      backgroundColor:'navy',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
    }}
  >
    Get New Quote
  </button>
</div>
</div>
<br></br><br></br>

<img src="https://i.pinimg.com/originals/8f/ba/9a/8fba9a4d1dd565535fb210d49343fbbd.jpg"
 width="25%" height="250px"/>
 <img src="https://media.istockphoto.com/id/1152614033/vector/think-positive-feel-positive-live-positive-for-fashion-shirts-poster-gift-or-other-printing.jpg?s=612x612&w=0&k=20&c=mlCyH7u5SBcfUd5xDC6mddlLbZ_9u1mbwWULulwLsJw="
 width="25%" height="250px"/>
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNNrpOBZFG5dopt2DjNspGPr75xj_DXXk_w&s"
 width="25%" height="250px"/>
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOw5kz779rFSPV64_r6Vr2kX0BhJ6zqHPpw&s"
 width="25%" height="250px"/>

 <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '16px' }}>
  Quotes that brighten your day and lift your spirit — one click, one quote at a time.
</p>

 <footer style={{ backgroundColor:'burlywood',color:'ActiveBorder',textAlign: 'center',
    padding: '15px', marginTop: '60px',position: 'relative',width: '100%'}}>
     © 2025 MixHUB. All rights reserved.
    </footer>
</div>
);
}
export default Quote;