
window.addEventListener('DOMContentLoaded', () => {
    console.log('woshishui');
  })
const func = async () => {
    console.log('ping');
    const response = await window.versions.ping()
    console.log(response) // 打印 'pong'
  }
  
  func()

const information = document.getElementById('info')
information.innerHTML = `本地使用Chrome （v${versions.chrome()}）, NODE.js (v${versions.node()}), Electron (v${versions.electron()})`


