window.onload = function () {
/*    let btn_prev = document.querySelector('.gallery .buttons .prev');
    let btn_next = document.querySelector('.gallery .buttons .next');
*/
    let images = document.querySelectorAll('.gallery .photos img');

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
        this.i = 0;

        this.prev = function () {
            this.images[this.i].classList.remove('showed');
            this.i--;

            if (this.i < 0) {
                this.i = this.images.length - 1;
            }
            this.images.classList.add('showed');
        }

        this.next = function () {
            this.images[this.i].classList.remove('showed');
            this.i++;

            if (this.i >= this.images.length) {
                this.i = 0;
            }
            this.images.classList.add('showed');
        }
    }
