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