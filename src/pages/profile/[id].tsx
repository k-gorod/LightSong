import { useRouter } from 'next/router'

export default function ProfilePage() {
  const router = useRouter()
  const id = router.query.id as string

  return (
    <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center',
    minHeight:'100vh'}}>
      Portfolio user with id: { id } 
    </div>
  )
}