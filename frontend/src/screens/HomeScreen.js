import axios from 'axios'
import { apiUrl } from '../config'

const HomeScreen = {
  render: async () => {
    const response = await axios({
      url: `${apiUrl}/api/test`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response || response.statusText !== 'OK') {
      return '<div>Error in getting data</div>'
    }
    // const test = response.data
    return `
    <div class='wrapper'>
      <div class='container'>
        <div class='left-menu'>
          <ul class='menu-list'>
            <li>
              <div class='item'>
                <img class='item-icon' src='../images/monitor.svg' alt='Desktop'>
                <span>Desktop<span>
              </div>
            </li>
            <li><div class='item'><img class='item-icon' src='../images/smartphone.svg' alt='Mobile'><span>Mobile<span></div></li>
            <li><div class='item'><img class='item-icon' src='../images/code.svg' alt='Mobile'><span>Browser<span></div></li>
          </ul>
        </div>
        <div class='right-content'><div>Select your betting device</div></div>
      </div>
    </div>
 `
  },
}

export default HomeScreen
