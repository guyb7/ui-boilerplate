import { grey100, grey700, grey900 } from '../../../style/colors'

export default {
  menu: {
    backgroundColor: grey100,
    border: 0,
    borderRadius: 0,
    height: '100%',
    width: 200,
    margin: 0
  },
  mainMenuItem: {
    height: 49
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: grey700,
    borderRadius: 0
  },
  menuItemActive: {
    color: grey900,
  }
}
