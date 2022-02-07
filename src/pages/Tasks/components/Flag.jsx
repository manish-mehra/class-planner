import {BsFlag} from 'react-icons/bs'
import {BsFillFlagFill} from 'react-icons/bs'

export default function Flag({flagged}) {
  return (
      <>
          {flagged?
           <BsFillFlagFill fill='green'/> : <BsFlag/> }
      </>
  )
}
