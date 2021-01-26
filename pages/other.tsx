import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Page from '../components/Page'
import { wrapper } from '@/store'
import { serverRenderClock, startClock } from '@/store/slices/tickSlice'
import { increment } from '@/store/slices/countSlice'

const Other = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = dispatch(startClock())

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <Page title="Other Page" linkTo="/" />
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(serverRenderClock(true))
    store.dispatch(increment())
  }
)
export default Other