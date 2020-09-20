import axios from 'axios'
import { apiUrl } from '../config'
import Desktop from '../components/Desktop'
import Mobile from '../components/Mobile'
import Browser from '../components/Browser'

const HomeScreen = {
  after_render: () => {
    function addActiveItem(elem) {
      const element = document.getElementById(elem)
      element.classList.add('active-item')
    }
    function removeActiveItem() {
      const active = document.getElementsByClassName('active-item')
      while (active[0]) {
        active[0].classList.remove('active-item')
      }
    }

    function addDot(elem) {
      const dot = document.createElement('div')
      const item = document.getElementById(elem)
      item.appendChild(dot)
      dot.classList.add('dot')
    }
    function removeDot() {
      const active = document.getElementsByClassName('dot')
      while (active[0]) {
        active[0].remove('dot')
      }
    }

    const desktop = document.getElementById('desktop')
    desktop.addEventListener('click', () => {
      document.getElementById('right').innerHTML = Desktop.render()
      removeActiveItem()
      addActiveItem('desktop')
      removeDot()
      addDot('desktop')
    })
    const mobile = document.getElementById('mobile')
    mobile.addEventListener('click', () => {
      document.getElementById('right').innerHTML = Mobile.render()
      removeActiveItem()
      addActiveItem('mobile')
      removeDot()
      addDot('mobile')
    })
    const browser = document.getElementById('browser')
    browser.addEventListener('click', () => {
      document.getElementById('right').innerHTML = Browser.render()
      removeActiveItem()
      addActiveItem('browser')
      removeDot()
      addDot('browser')
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
        <div id='right' class='right-container'>
          <div class='right-content'>
            <img class='left-arrow' src='../images/left-curve-arrow.svg' alt='left-arrow'>
            <p>Select your betting device</p>
          </div>
        </div>
      </div>
    </div>
 `
  },
}

export default HomeScreen
