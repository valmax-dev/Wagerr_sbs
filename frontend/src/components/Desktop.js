const Desktop = {
  render: () => {
    return `
    <div class='desktop-container'>
      <div class='wallets'>
        <div class='wallet'>
          <img class='wallet-icon' src='../images/electrum.png' alt='Desktop'>
          <span>Electrum</span>
        </div>
        <div class='wallet'>
          <img class='wallet-icon' src='../images/electron.png' alt='Desktop'>
          <span>Electron</span>
        </div>
        <div class='wallet'>
          <img class='wallet-icon' src='../images/qt.png' alt='Desktop'>
          <span>Qt</span>
        </div>
      </div>
    </div>
    `
  },
}

export default Desktop
