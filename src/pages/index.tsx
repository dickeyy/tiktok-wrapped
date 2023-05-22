import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className='
			flex flex-col items-center justify-center
			w-screen h-screen
		'>
			<h1 className="text-3xl font-bold text-center">
				Spotify Wrapped but for TikTok 😱
			</h1>

			<p className='text-zinc-500 mt-2'>
				coming soon...
			</p>
    	</main>
  	)
}
