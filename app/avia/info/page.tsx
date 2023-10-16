import Price from './Price'
import Main from './Main'

export default function Page() {
  return <div className='flex flex-wrap items-center justify-center
      rounded-2xl bg-white shadow'>
    <Main />
    <Price />
  </div>
}
