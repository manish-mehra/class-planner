import {format, isToday} from 'date-fns'
import ExamMenu from './ExamMenu'

export default function ExamCard({exam}) {
    const {name, subject, date} = exam
  return (
    <div className='flex justify-between items-start mt-3 border border-gray-200 p-3 rounded-md shadow-sm'>
        <section className='flex-col'>
            <p className='mb-2 text-sm font-semibold'>{name}</p>
            <span className='flex gap-2'>
              <p className='mb-2 text-xs'>{subject.name}</p>
              <p className='mb-2 text-xs'>{isToday(date)? 'Today': format(date, 'MM/dd/yyyy')}</p>
            </span>
        </section>

        <section>
            <ExamMenu exam={exam}/>
        </section>
    </div>
  )
}
