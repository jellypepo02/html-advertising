// Sec social media advertising
// Register scrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Get all .js-pinned-images
const pinnedImageWrappers = document.querySelectorAll('.side-scroll-wrap');

// Check if pinned image containers exist
if (pinnedImageWrappers) {
    pinnedImageWrappers.forEach((wrapper) => {
        const inner = wrapper.querySelector('.side-scroll-inner');

        gsap.to(inner, {
            x: () => -(inner.scrollWidth - document.documentElement.clientWidth) + 'px',
            ease: 'none',
            scrollTrigger: {
                start: 'top',
                trigger: wrapper,
                pin: '.content-inner',
                scrub: true,

                invalidateOnRefresh: true,
                end: () => `+=${inner.offsetWidth}`
            }
        });
    });
}


// tab-showcase
var tabs = document.getElementById('tab-showcase').children;
var tabcontents = document.getElementById('tab-list-content').children;

var myFunction = function() {
    var tabchange = this.mynum;
    for (var int = 0; int < tabcontents.length; int++) {
        tabcontents[int].className = ' tabcontent';
        tabs[int].className = ' tab-list';
    }
    tabcontents[tabchange].classList.add('tab-active');
    this.classList.add('current-tab');
}


for (var index = 0; index < tabs.length; index++) {
    tabs[index].mynum = index;
    tabs[index].addEventListener('click', myFunction, false);
}