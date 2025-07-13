let characters = document.querySelectorAll('section.characters-section');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.char-thumbnail');
let paginations = document.querySelectorAll('.char-bullet');
let thumbnailsGroup = document.querySelector('.char-thumbnails')
let charText = document.querySelectorAll('.text-overlay')

let count_char = characters.length;
let active_char = 0;



document.addEventListener("DOMContentLoaded", () => {
	const menuToggle = document.getElementById('menuToggle')
	const menuClose = document.getElementById('menuClose')
	let sidebar = document.querySelector('.sidebar-header')
	document.querySelectorAll('img, iframe').forEach(el => {
		if (!el.hasAttribute('loading')) {
			el.setAttribute('loading', 'lazy')
		}
	})
	if (menuToggle) {
		menuToggle.addEventListener('click', showSidebar);
	}

	if (menuClose) {
		menuClose.addEventListener('click', hideSidebar);
	}

	function showSidebar() {
		sidebar.classList.remove('hide-sidebar')
		sidebar.classList.add('show-sidebar', 'sidebar-inital')
	}

	function hideSidebar() {
		sidebar.classList.add('hide-sidebar')
		sidebar.classList.remove('show-sidebar', 'sidebar-inital')
	}
})


prev.onclick = function(){
	active_char = active_char - 1;
	if(active_char < 0){
		active_char = count_char - 1;
	}
	showChar();
}
next.onclick = function(){
	active_char = active_char + 1;
	if(active_char >= count_char){
		active_char = 0;
	}
	showChar();
}

function showChar(){
	let oldActiveChar = document.querySelector('.characters-section.active')
	let oldActiveThumbnail = document.querySelector('.char-thumbnail.active')
	// let oldActiveBullet = document.querySelector('.char-bullet.active')
	let oldActiveText = document.querySelector('.text-overlay.animate-text')
	oldActiveChar.classList.remove('active')
	oldActiveThumbnail.classList.remove('active')
	// oldActiveBullet.classList.remove('active')
	oldActiveText.classList.remove('animate-text')
	characters[active_char].classList.add('active')
	thumbnails[active_char].classList.add('active')
	// paginations[active_char].classList.add('active')
	charText[active_char].classList.add('animate-text')
	thumbnailsGroup.classList.add('thumbnails-anim-show');
	setTimeout(() => {
		thumbnailsGroup.classList.add('thumbnails-anim-hide'); thumbnailsGroup.classList.remove('thumbnails-anim-show'); 
	}, 5000)
}	

thumbnails.forEach((thumbnail, index) => {
	thumbnail.addEventListener('click', () => {
		active_char = index
		showChar()
	})
})

// paginations.forEach((pagination, index) => {
// 	pagination.addEventListener('click', () => {
// 		active_char = index
// 		showChar()
// 	})
// })
