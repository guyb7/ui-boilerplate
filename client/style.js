import { boxShadow } from './style/'
import { grey300 } from './style/colors'

export default {
  container: {
    backgroundColor: grey300
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    boxShadow
  },
  content: {
    width: '100%'
  }
}
