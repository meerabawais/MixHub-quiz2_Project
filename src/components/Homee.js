import React from 'react';
import { motion } from 'framer-motion';
 
function Homee() {
  return (
<div>
    <img src="https://img.freepik.com/premium-photo/woman-juggling-her-work-while-balancing-her-personal-life_14117-1161633.jpg"
     width="100%" height="250px"/>
     <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        style={{ fontSize: '55px', fontWeight: 'bold', color:'chocolate',
            fontFamily:'initial', textAlign:'center'
         }}
      >
        Welcome to MixHUB
      </motion.h1>
<div style={{ width:'50%', margin :'0 auto'}}>
      <p style={{ textAlign: 'center', fontSize: '18px', marginTop: '50px',
       }}>
       MixHUB provides you with a fun and dynamic experience by combining multiple features 
       all in one place. Whether you're looking to enjoy quick games, take interesting quizzes, 
       or get in touch through our contact page, MixHUB brings it all together.
       <br></br> Each section is designed to keep you engaged and entertained while offering something new at every click.
       Dive in and explore the mix!
      </p>
</div>
<footer style={{ backgroundColor:'burlywood',color:'ActiveBorder',textAlign: 'center',
padding: '15px', marginTop: '120px',position: 'relative',width: '100%'
}}>
  © 2025 MixHUB. All rights reserved.
</footer>

 </div>
  );
}
export default Homee;