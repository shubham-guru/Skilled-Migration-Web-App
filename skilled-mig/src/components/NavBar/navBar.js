export function ul(index){
    // console.log('click!' + index);
    //  alert("hii2");
    var underline = document.querySelectorAll(".underline");

	for (var i = 0; i < underline.length; i++) {
		underline[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
	}
}