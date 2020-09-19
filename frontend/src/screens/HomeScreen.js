import axios from 'axios'
import { apiUrl } from '../config'
import Desktop from '../components/Desktop'
import Mobile from '../components/Mobile'
import Browser from '../components/Browser'

const HomeScreen = {
  after_render: () => {
    const active = document.getElementsByClassName('active-item')
    function removeClasses() {
      while (active[0]) {
        active[0].classList.remove('active-item')
      }
    }
    function addDot() {
      const dot = document.createElement('div')
      const item = document.getElementById('desktop')
      item.appendChild(dot)
      dot.classList.add('dot')
    }

    const desktop = document.getElementById('desktop')
    desktop.addEventListener('click', () => {
      document.getElementById('right').innerHTML = Desktop.render()
      removeClasses()
      desktop.classList.add('active-item')
      addDot()
    })
    const mobile = document.getElementById('mobile')
    mobile.addEventListener('click', () => {
      document.getElementById('right').innerHTML = Mobile.render()
      removeClasses()
      mobile.classList.add('active-item')
      addDot()
    })
    const browser = document.getElementById('browser')
    browser.addEventListener('click', () => {
      document.getElementById('right').innerHTML = Browser.render()
      removeClasses()
      browser.classList.add('active-item')
      addDot()
    })
  },
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
          <ul class='list-items'>
            <li>
              <div id='desktop' class='item'>
                <img class='item-icon' src='../images/monitor.svg' alt='Desktop'>
                <span>Desktop<span>
              </div>
            </li>
            <li>
              <div id='mobile' class='item'>
                <img class='item-icon' src='../images/smartphone.svg' alt='Mobile'>
                <span>Mobile<span>
              </div>
            </li>
            <li>
              <div id='browser' class='item'>
                <img class='item-icon' src='../images/code.svg' alt='Mobile'>
                <span>Browser<span>
              </div>
            </li>
          </ul>
        </div>
        <div id='right' class='right-content'>
          <img class='left-arrow' src='../images/left-curve-arrow.svg' alt='left-arrow'>
          <p>Select your betting device</p>
        </div>
      </div>
    </div>
 `
  },
}

export default HomeScreen
