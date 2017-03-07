// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
window.click1 = () => {
  webview1.setZoomLevel(2)
  btn1.setAttribute('disabled', 'disabled')
  btn2.removeAttribute('disabled')
}
window.click2 = () => {
  target.innerHTML = `<webview src="https://github.com"></webview><p>Notice the zoom level resets</p>`
}