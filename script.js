const navbar = document.querySelector('#navbar')
const btn = document.querySelector('#btn')

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.style.background = 'brown';
        btn.style.display = 'block'
    } else {
        navbar.style.background = '';
        btn.style.display = 'none'

    }
}

// 1
window.onscroll = function () { scrollFunction() }

// 2
// window.addEventListener('scroll', () => {
//     scrollFunction()
// })

// 3
// window.addEventListener('scroll', scrollFunction)


btn.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})