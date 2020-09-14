import axios from 'axios'

const HomeScreen = {
  render: async () => {
    const response = await axios({
      url: 'http://localhost:5000/api/test',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response || response.statusText !== 'OK') {
      return '<div>Error in getting data</div>'
    }
    const test = response.data
    return `
    ${test.map(
      (x) => `
      <h1>${x.name}</h1>
   `
    )}
 `
  },
}

export default HomeScreen
