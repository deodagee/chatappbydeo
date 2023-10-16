import AddFriendButton from '@/components/AddFriendButton'
import { FC } from 'react'

const page: FC = () => {
  return (
    <main className='pt-8 pl-10'>
      <h1 className=' text-sky-900 font-bold text-4xl mb-8 mr-15'>Add a friend</h1>
      <AddFriendButton />
    </main>
  )
}

export default page