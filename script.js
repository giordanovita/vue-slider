function vueSlider(){
    new Vue({
        el:'#app',
        data:{
            'title':'SLIDER',
            'img':'img/mountains.jpg',
            'loop':""
        },
        created: function () {
            this.slidesLoop();
        },
         methods:{
            prevSlide:function(){
                if(this.img=='img/mountains.jpg'){
                    this.img='img/mountains2.jpg'
                }else if(this.img=='img/mountains2.jpg'){
                    this.img='img/mountains1.jpg'
                }else{
                    this.img='img/mountains.jpg'
            }
        },
            nextSlide:function(){
                if(this.img=='img/mountains.jpg'){
                    this.img='img/mountains1.jpg'
                }else if(this.img=='img/mountains1.jpg'){
                    this.img='img/mountains2.jpg'
                }else{
                    this.img='img/mountains.jpg'
                }
            },

            slidesLoop: function() {
                this.loop = setInterval(this.nextSlide, 3000)

            },

            stopSlidesLoop: function() {

                clearInterval(this.loop);
            }
    }
    })

}


function init(){
    vueSlider()
}
document.addEventListener('DOMContentLoaded', init)