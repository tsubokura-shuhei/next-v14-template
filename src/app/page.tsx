
import Link from 'next/link'

export default function Home() {

  return (
    <div>
      <main>
        <h1>Photo Appliation</h1>
        <div>
          <Link href="/about">
            about
          </Link>
        </div>
        <div>
          <Link href="/photos-ssr">
            Photos - SSR
          </Link>
        </div>
        <div>
          <Link href="/photos-client">
            Photos - client
          </Link>
        </div>
      </main>
    </div>
  )
}
