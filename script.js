//Sidebar click logic
const sidebarItems = document.querySelectorAll('li')

sidebarItems.forEach((item) =>
  item.addEventListener('click', function (e) {
    for (i of sidebarItems) {
      i.classList.remove('clicked')
    }
    e.target.classList.add('clicked')
  })
)

//hide side menu event listener
const hiddenMenu = document.querySelector('.hiddenMenu')
hiddenMenu.addEventListener('click', () => {
  const sidebar = document.querySelector('#sidebar')
  const body = document.querySelector('body')
  sidebar.classList.toggle('hidden')
  body.classList.toggle('body-class')
  // body.setAttribute('id', 'body-id')
})
