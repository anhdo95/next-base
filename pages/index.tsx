import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { wrapper } from '@store'
import { END } from 'redux-saga'
import { tickClock } from '@store/slices/tickSlice'
import { loadUsers } from '@store/slices/userSlice'
import { startClock } from '@saga/actions'
import Page from '@components/Page'

const Index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return <Page title="Index Page" linkTo="/other" />
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(tickClock(false))

  if (!store.getState().user.users.length) {
    store.dispatch(loadUsers())
    store.dispatch(END)
  }

  await store.sagaTask.toPromise()
})

export default Index