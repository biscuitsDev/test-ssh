import { signIn, signOut, useSession } from "next-auth/react"

export default function ExistUser() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className='flex items-center mt-2 mr-3'>
        <span className="text-xl mr-2 text-neutral-900">{session.user.name}</span>
        <button className=' text-white rounded-md py-2 px-5 text-lg bg-slate-900' onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}