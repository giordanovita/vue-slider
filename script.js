function vueSlider(){
    new Vue({
        el:'#app',
        data:{
            'title':'SLIDER',
            'img':['img/mountains.jpg','img/mountains1.jpg','img/mountains2.jpg'],
            'loop':"",
            'index':0
        },
        created: function () {
            this.slidesLoop();
        },
         methods:{
            prevSlide:function(){
               this.index--;
               if(this.index < 0){
                   this.index = (this.img.length - 1)
               }
        },
            nextSlide:function(){
                this.index++;
               if(this.index >= this.img.length){
                   this.index = 0;
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