
import AssignmentMenu from './AssignmentMenu'

export default function AssignmentCard({assignment}) {
    const {name, description, subject} = assignment
  return (
    <div className='flex justify-between items-start mt-3 border border-gray-200 p-3 rounded-md shadow-sm'>
        <section className='flex-col'>
            <p className='mb-2 text-sm font-semibold'>{name}</p>
            <p className='mb-2 text-sm font-semibold'>{subject.name}</p>
            <p className='text-xs'>{description}</p>
        </section>

        <section>
            <AssignmentMenu assignment={assignment}/>
        </section>
    </div>
  )
}