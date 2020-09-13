const HomeScreen = {
  render: async () => {
    const response = await fetch('http://localhost:5000/api/test', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response || !response.ok) {
      return `<div>Error in getting data</div>`
    }
    const test = await response.json()
    return `
    ${test.map(
      x => `
      <h1>${x.name}</h1>
    `
    )}
 `
  },
}

export default HomeScreen
