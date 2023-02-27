//Sidebar click logic
const sidebarItems = document.querySelectorAll('.sidebar-contents li');

sidebarItems.forEach((item) =>
  item.addEventListener('click', function (e) {
    for (i of sidebarItems) {
      i.classList.remove('clicked');
    }
    e.target.closest('.sidebar-items').classList.add('clicked');

    const sidebarText = e.target
      .closest('.sidebar-items')
      .querySelector('.text-content').textContent;
    // Changing tab logic
    if (sidebarText !== 'Home') {
      // document.querySelector('.main-container').classList.add('hidden');
      // document.querySelector('.container-trending-announcement').classList.add('hidden');
      document.querySelector('main').classList.add('hidden');
      document.querySelector('.msg-content-container').classList.remove('hidden');

      // // If the msgContentDiv already exist, then don't create a new div, just edit the text.
      // if (document.querySelector('.msg-content-sub') === null) {
      //   const msgContent = document.createElement('div');
      //   const msgContentTitle = document.createElement('span');
      //   const msgContentSubTitle = document.createElement('span');

      //   msgContentTitle.classList.add('msg-content-title');
      //   msgContentSubTitle.classList.add('msg-content-sub');
      //   msgContent.classList.add('msg-content');

      //   document.querySelector('body').insertBefore(msgContent, document.querySelector('main'));
      //   msgContent.appendChild(msgContentTitle);
      //   msgContent.appendChild(msgContentSubTitle);
      // }

      if (document.querySelector('.msg-content') !== null) {
        document.querySelector('.msg-content-title').textContent = 'Site is under construction.';
        document.querySelector('.msg-content-sub').textContent =
          sidebarText + ' Page coming soon . . .';
      }
    } else {
      // document.querySelector('.main-container').classList.remove('hidden');
      // document.querySelector('.container-trending-announcement').classList.remove('hidden');
      document.querySelector('main').classList.remove('hidden');
      document.querySelector('.msg-content-container').classList.add('hidden');
    }
  })
);

//hide side menu event listener
const hiddenMenu = document.querySelector('.hiddenMenu');
hiddenMenu.addEventListener('click', () => {
  const sidebar = document.querySelector('#sidebar');
  const body = document.querySelector('body');
  sidebar.classList.toggle('hidden');
  body.classList.toggle('body-class');
});

// profile icon
const profileSelect = document.querySelector('#profile-select');
const profileDropdown = document.querySelector('.dd_main');
profileSelect.addEventListener('click', () => {
  profileDropdown.classList.toggle('active');
});
