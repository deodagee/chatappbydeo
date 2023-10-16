import { db } from '@/lib/db'

export default async function Home() {
  await db.set("aye", "aye" )
  return <div className='text-red-500'>Good day to you too!</div>
}
