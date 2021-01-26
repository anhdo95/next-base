import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Page from '../components/Page'
import { addCount } from '@/store/count/action'
import { wrapper } from '@/store'
import { serverRenderClock, startClock } from '@/store/tick/action'

const Other = (props) => {
  useEffect(() => {
    const timer = props.startClock()

    return () => {
      clearInterval(timer)
    }
  }, [props])

  return <Page title="Other Page" linkTo="/" />
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(serverRenderClock(true))
    store.dispatch(addCount())
  }
)

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Other)