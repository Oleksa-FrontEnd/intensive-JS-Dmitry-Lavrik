window.onload = function () {
/*    let btn_prev = document.querySelector('.gallery .buttons .prev');
    let btn_next = document.querySelector('.gallery .buttons .next');
*/
    let images = document.querySelectorAll('.gallery .photos img');
    console.log(images);
    let slider = new Slider(images);

    document.querySelector('.gallery .buttons .prev').onclick = function () {
        slider.prev()
    }
    document.querySelector('.gallery .buttons .next').onclick = function () {
        slider.next()
    }
}
    function Slider(images) {
        this.images = images;
        let i = 0;

        this.prev = function () {
            this.images[i].classList.remove('showed', ['showed']);
            i--;

            if (i < 0) {
                i = this.images.length - 1;
            }
            this.images.classList.add('showed', ['showed']);
        }

        this.next = function () {
            this.images[i].classList.remove('showed', ['showed']);
            i++;

            if (i > this.images.length) {
                i = 0;
            }
            this.images.classList.add('showed', ['showed']);
        }
    }
