console.log('这是一个自定义脚本内容1')

// 当页面加载完成时，在页面右上角显示一个悬浮框
window.addEventListener('DOMContentLoaded', () => {
    const floatingBox = document.createElement('div')
    floatingBox.style.position = 'fixed'
    floatingBox.style.top = '10px'
    floatingBox.style.right = '10px'
    floatingBox.style.width = '200px'
    floatingBox.style.height = '200px'
    floatingBox.style.backgroundColor = 'red'
    floatingBox.innerText = '这是一个悬浮框'
    floatingBox.style.color = 'white'
    floatingBox.style.textAlign = 'center'
    floatingBox.style.lineHeight = '200px'
    floatingBox.style.fontSize = '20px'
    floatingBox.style.fontWeight = 'bold'
    floatingBox.style.borderRadius = '10px'
    floatingBox.style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.5)'
    floatingBox.style.cursor = 'pointer'
    floatingBox.addEventListener('click', () => {
        alert('这是一个悬浮框')
    })
    document.body.appendChild(floatingBox)
})
