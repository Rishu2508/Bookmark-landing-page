const tabNavList = document.querySelectorAll('#tab');
const tabBody = document.querySelectorAll('#tab-body');
const toggler = document.querySelector('.toggler');
const navbar = document.querySelector('.navbar');

tabNavList.forEach((item,index,listArray) => {
	// console.log(`item: ${item},index: ${index},listArray: ${listArray}`);
	item.addEventListener('click',() => {
		//console.log(item.classList.contains('active'));
		if(item.classList.contains('tab-active')) {
			return
		} else {
			document.querySelector('.tab-active').classList.remove('tab-active');
			item.classList.add('tab-active');
		}

		if(listArray[0].classList.contains('tab-active')) {
			tabBody[0].classList.add('tab-body-active');
			tabBody[1].classList.remove('tab-body-active');
			tabBody[2].classList.remove('tab-body-active');
		}

		if(listArray[1].classList.contains('tab-active')) {
			tabBody[0].classList.remove('tab-body-active');
			tabBody[1].classList.add('tab-body-active');
			tabBody[2].classList.remove('tab-body-active');
		}

		if(listArray[2].classList.contains('tab-active')) {
			tabBody[0].classList.remove('tab-body-active');
			tabBody[1].classList.remove('tab-body-active');
			tabBody[2].classList.add('tab-body-active');
		}
	})
});
const carousel = () => {
	var i=0,
	tab = document.querySelectorAll('#tab'),
	body = document.querySelectorAll('#tab-body');
	setInterval(function(){
		if(i < tab.length){
			document.querySelector('.tab-active').classList.remove('tab-active');
			document.querySelector('.tab-body-active').classList.remove('tab-body-active');
			tab[i].classList.add('tab-active');
			body[i].classList.add('tab-body-active');
			i++;
		} else {
			i = 0;
			document.querySelector('.tab-active').classList.remove('tab-active');
			document.querySelector('.tab-body-active').classList.remove('tab-body-active');
			tab[i].classList.add('tab-active');
			body[i].classList.add('tab-body-active');
		}
	},2000);
};
carousel();


toggler.addEventListener('click', function() {
	if(navbar.classList.contains('h-0')) {
		navbar.classList.remove('h-0');	
	} else {
		navbar.classList.add('h-0');
	}
})