import React from 'react'
import './MainBody.css'
export const Home = () => {
  return (
    <div>
        <h4 className='text'> Welcome To The Home Page of <i><u>SHARMA HIGH SCHOOL</u></i> Principle.</h4><br/>
         <h5 className='headding'><b><u> History</u></b></h5><br/>
         <p className='para'>
            Our School is a most high profiled school where your get the opportunities to impart your knowledge to the students and also get to learn something new from the student as the student are with a creative mindset and can come up with the question that require logics. And we mostly focus on creative mindset which will enhance the student perception of the outside world.
         </p>
         <h5 className='headding'><b><u><i>Goal</i></u></b></h5>
         <p className='para'>To enhance the students logical thinking and visual perspective of the world. </p>
         <div className='image'>
            <img src='school.jpg' alt='school photo' width={500} height={300} />
         </div>
    </div>
  )
}
