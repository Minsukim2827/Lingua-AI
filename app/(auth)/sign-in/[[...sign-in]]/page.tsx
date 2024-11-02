import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <SignIn />
      </main>
      <Footer />
    </div>
  )
}