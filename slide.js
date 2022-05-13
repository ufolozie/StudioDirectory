document.addEventListener('DOMContentLoaded', function() { 
    
    var $slideWrap = document.querySelector('.container'),
        $slideContainer = document.querySelector('.slider-container'),
        $slide = document.querySelectorAll('.slide'),
        $navPrev = document.getElementById('prev'),
        $slideHeight = 0,
        $slideCount = $slide.length,
        $currentIndex = 0,
        $timer,
        $navNext = document.getElementById('next');
                   
        for (var i = 0; i < $slideCount ; i++) {
           if ($slideHeight < $slide[i].offsetHeight) {
                $slideHeight = $slide[i].offsetHeight;
           }
        }
        console.log($slideHeight);

        $slideWrap.style.height = $slideHeight +'px';
        $slideContainer.style.height = $slideHeight +'px';

        for (var a = 0; a < $slideCount; a++) {
            $slide[a].style.left = a * 100 + '%'; 
        }
        function goToSlide(idx) {
            $slideContainer.classList.add('animated');
            $slideContainer.style.left = -100 * idx + '%';
            $currentIndex = idx;         
        }

        goToSlide(0);

        /*$navPrev.addEventListener('click',function() {            
            if ($currentIndex == 0) {
                goToSlide($slideCount - 1);
            } else {
                goToSlide($currentIndex - 1);
            } 
        });

        $navNext.addEventListener('click',function() {
           if($currentIndex == $slideCount - 1) {
               goToSlide(0);
           } else {
               goToSlide($currentIndex + 1);
           }
        });*/

    function startAutoSlide() {
        $timer = setInterval(function() {
            var nextIdx = ($currentIndex + 1) % $slideCount;
            goToSlide(nextIdx);
        } ,4000);
    }

    startAutoSlide();
});