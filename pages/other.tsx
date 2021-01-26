import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Page from '../components/Page'
import { wrapper } from '@/store'
import { startClock } from '@saga/actions'
import { increment } from '@/store/slices/countSlice'
import { tickClock } from '@/store/slices/tickSlice'

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
    store.dispatch(tickClock(true))
    store.dispatch(increment())
  }
)
export default Other