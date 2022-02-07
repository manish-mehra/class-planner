
import {useState, useEffect} from 'react'

import {MdOutlineLabel} from 'react-icons/md'
import {GrAdd} from 'react-icons/gr'



import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


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



export default function Label({label, onLabelSelect}) {

  const [labels, setLabels] = useState(labelList)
  const [enteredLabel, setEnteredLabel] = useState('')

  let filteredLabel

  useEffect(()=>{
    filteredLabel = labels.map((item)=>item.name)
  }, [labels])

  const createLabelHandler = (newLabel)=>{
    setLabels((prev)=>[...prev, newLabel])
    setEnteredLabel("")
  }

  const ifChecked = (labelId)=>{
    return label?.some((el)=> el.id === labelId)
  }


  
 
  return (
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="inline-flex justify-center w-full shadow-sm  bg-white text-sm font-medium text-gray-700 hover:bg-green-200 outline-none">
        <MdOutlineLabel/>
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="origin-top-left -right-1 absolute  mt-2 w-64 rounded-md shadow-lg bg-white border border-gray-200">
        <div>
        
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
                    <label htmlFor="label" key={item.name}>
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
                        checked = {ifChecked(item.id) || false}
                        onChange = {(e)=>onLabelSelect(item,e)}
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
                    id: Math.random(Math.floor()*1000),
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


        </div>
      </Menu.Items>
    </Transition>
</Menu>
  )
}

