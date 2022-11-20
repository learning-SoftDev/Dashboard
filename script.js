//Sidebar click logic
const sidebarItems = document.querySelectorAll('li');

sidebarItems.forEach((item) =>
  item.addEventListener('click', function (e) {
    for (i of sidebarItems) {
      i.classList.remove('clicked');
    }
    e.target.classList.add('clicked');
  })
);
