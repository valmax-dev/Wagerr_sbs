import { getWallets } from '../api'

const Desktop = {
  after_render: () => {
    const electrum = document.getElementById('electrum')
    electrum.addEventListener('click', () => {
      console.log('test')
    })
  },

  render: async () => {
    const wallets = await getWallets()
    if (wallets.error) {
      return `<div class="error">${wallets.error}</div>`
    }
    // const wallet = 'electrum'
    return `
    <div class='desktop-container'>
      <div class='desktop-items'>
        <div id='electrum' class='desktop-item'>
          <img class='wallet-icon' src='../images/electrum.png' alt='Desktop'>
  <span>Electrum</span>
        </div>
        <div class='desktop-item'>
          <img class='wallet-icon' src='../images/electron.png' alt='Desktop'>
          <span>Electron</span>
        </div>
        <div class='desktop-item'>
          <img class='wallet-icon' src='../images/qt3.png' alt='Desktop'>
          <span>Qt</span>
        </div>
      </div>
      <h1>${wallets.electrum.name}</h1>
      <p>
      ${wallets.electrum.desc}
      </p>
      <h2>Operating system</h2>
      <div class='desktop-items'>
        <div id='electrum' class='desktop-item'>
          <img class='wallet-icon' src='../images/windows-logo.svg' alt='Desktop'>
          <span>Windows</span>
        </div>
        <div class='desktop-item'>
          <img class='wallet-icon' src='../images/mac-os-logo.svg' alt='Desktop'>
          <span>Mac</span>
        </div>
        <div class='desktop-item'>
          <img class='wallet-icon' src='../images/linux.svg' alt='Desktop'>
          <span>Linux</span>
        </div>
      </div>
      <div class='desktop-button-container'>
          <div class='desktop-button-guide'>Installation Guide</div>
          <div class='desktop-button-download'>Download</div>
        </div>
    </div>
    `
  },
}

export default Desktop
