
window.addEventListener('DOMContentLoaded', () => {
    console.log('woshishui');
  })
 
  const func = async() => {
    const pingSpan = document.getElementById('ping')
    pingSpan.innerHTML = await window.versions.ping()
  }
func()

const information = document.getElementById('info')
information.innerHTML = `本地使用Chrome （v${versions.chrome()}）, NODE.js (v${versions.node()}), Electron (v${versions.electron()})`

const setButton = document.getElementById('btn')
const titleInput = document.getElementById('title')
setButton.addEventListener('click', () => {
  const title = titleInput.value
  window.electronAPI.setTitle(title)
})

const opBtn = document.getElementById('op-btn')
const filePathElement = document.getElementById('filePath')
opBtn.addEventListener('click',async()=>{
  const filePath = await window.electronAPI.openFile()
  filePathElement.innerHTML = filePath
})


