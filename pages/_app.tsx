
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <div className='md:container md:mx-auto bg-yellow-100'>
    <Component {...pageProps} />
 </div>
  
}

export default MyApp
