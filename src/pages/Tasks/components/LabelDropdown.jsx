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

export default function LabelDropdown() {

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
<div className=' flex-col '>
      
      <section className='border border-transparent border-b-gray-400 mb-2'>
        <input 
        type="text" 
        onChange={(e)=>setEnteredLabel(e.target.value)}
        value={enteredLabel}
        className=' border-b-gray-700 outline-none p-1 w-full'
        />
      </section>

     <section className='overflow-y-auto max-h-80'>
       {/* if entered label is empty, then show whole list,  */}
       {
          enteredLabel.includes(filteredLabel) || enteredLabel === ""?
          <ul className='text-sm'>
            {
              labels.map((item)=>
                <label htmlFor="label" key={item.id}>
                  <li key = {item.id} className='flex items-center justify-between my-1 py-2 px-3  hover:bg-green-200 cursor-pointer'>
                  <span className='flex items-center gap-3'>
                    <MdOutlineLabel/>
                    <p>{item.name}</p>
                  </span>
                  <span>
                    <input 
                    type="checkbox" 
                    name="label"
                    className='p-3'
                    />
                  </span>
                </li>
                </label>
              )
            }
          </ul>
          :
          <div>
            <ul className='text-sm'>
              <li className='my-1 py-2 px-4 cursor-not-allowed text-xs text-gray-400'>
                <p>Lable not found</p>
              </li>
              
              <li className='flex items-center gap-2 my-1 py-2 px-4 hover:bg-green-200 cursor-pointer text:sm' 
              onClick={()=>createLabelHandler({
                id: 4,
                name: enteredLabel
              })}>
              <GrAdd/>
                <span className='flex items-center gap-1'>
                  <p className='font-semibold'>Create</p> 
                  "{enteredLabel}"</span>
              </li>
            </ul>
          </div>

       }
     </section>

    </div>
  )
}
