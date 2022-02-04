import {useState, useEffect} from 'react'

import {MdOutlineLabel} from 'react-icons/md'
import {GrAdd} from 'react-icons/gr'

const labelList = [
  {
    id: 1,
    name: "history",
  },
  {
    id: 2,
    name: "english",
  },
  {
    id: 3,
    name: "maths",
  }
]

export default function Label() {

  const [labels, setLabels] = useState(labelList)
  const [enteredLabel, setEnteredLabel] = useState('')

  let filteredLabel

  useEffect(()=>{
    filteredLabel = labels.map((item)=>item.name)
  }, [labels])

  const createLabelHandler = (newLabel)=>{
    setLabels((prev)=>[...labels, newLabel])
    setEnteredLabel("")
  }

  
 
  return (

         <div className='flex-col absolute top-5 right-1/3'>
      
         <section>
           <input 
           type="text" 
           onChange={(e)=>setEnteredLabel(e.target.value)}
           value={enteredLabel}
           className='border border-2 border-b-gray-700'
           />
         </section>
   
        <section>
          {/* if entered label is empty, then show whole list,  */}
          {
             enteredLabel.includes(filteredLabel) || enteredLabel === ""?
             <ul>
               {
                 labels.map((item)=>
                   <li key = {item.id} className='flex items-center justify-between'>
                     <span className='flex items-center gap-1'>
                       <MdOutlineLabel/>
                       <p>{item.name}</p>
                     </span>
                     <span>
                       <input type="checkbox" name="label"/>
                     </span>
                   </li>
                 )
               }
             </ul>
             :
             <div>
               <ul>
                 <li>
                   <p>Lable not found</p>
                 </li>
                 
                 <li className='flex items-center gap-2' 
                 onClick={()=>createLabelHandler({
                   id: 4,
                   name: enteredLabel
                 })}>
                 <GrAdd/>
                   <p>Create "{enteredLabel}"</p>
                 </li>
               </ul>
             </div>
   
          }
        </section>
   
       </div>
  )
}
