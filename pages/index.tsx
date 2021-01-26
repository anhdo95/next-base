import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Page from '../components/Page'
import { wrapper } from '../store'
import { serverRenderClock, startClock } from '@store/slices/tickSlice'
import { increment } from '@store/slices/countSlice'

const Index = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    const timer = dispatch(startClock())

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <Page title="Index Page" linkTo="/other" />
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(serverRenderClock(true))
  store.dispatch(increment())
})

export default Index