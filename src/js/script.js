/**
 * Initializes the carousel functionality when the DOM content is loaded.
 */
(() => {
    document.addEventListener("DOMContentLoaded", function () {
        // Get references to DOM elements
        const previousBtn = document.getElementById("previous-button");
        const nextBtn = document.getElementById("next-button");
        const carouselPagination = document.querySelectorAll(
            ".carousel-pagination"
        );
        const TOTAL_SLIDES = document.getElementsByClassName("slide").length;
        let slideIndex = 1;
        let slideInterval; // Interval for automatic slide transition
        const slideDelay = 6; // Time in seconds

        /**
         * Displays the slide corresponding to the given slide number.
         * @param {number} slideNum - The index of the slide to display.
         */
        const showSlide = () => {
            const slides = document.querySelectorAll(".slide");

            // Hide all slides
            hideAllSlides(slides);
            // Update pagination dots
            updatePaginationDots();
            // Display the current slide
            slides[slideIndex - 1].classList.remove("hidden");
        };

        /**
         * Hides all slides.
         * @param {NodeList} slides - The NodeList of slide elements.
         */
        const hideAllSlides = (slides) => {
            slides.forEach((slide) => slide.classList.add("hidden"));
        };

        /**
         * Updates the visual appearance of pagination dots based on the current slide index.
         */
        const updatePaginationDots = () => {
            carouselPagination.forEach((dot, index) => {
                dot.classList.toggle("bg-blue-600", index === slideIndex - 1);
                dot.classList.toggle("bg-gray-400", index !== slideIndex - 1);
            });
        };

        /**
         * Moves the slide forward or backward by the specified step.
         * @param {number} moveStep - The step by which to move the slide.
         */
        const moveSlide = (moveStep) => {
            slideIndex += moveStep;
            // Ensure slideIndex wraps around when it reaches the boundaries
            if (slideIndex > TOTAL_SLIDES) {
                slideIndex = 1;
            } else if (slideIndex < 1) {
                slideIndex = TOTAL_SLIDES;
            }
            showSlide(slideIndex);
        };

        /**
         * Displays the slide corresponding to the specified index.
         * @param {string} n - The index of the slide to display.
         */
        const currentSlide = (n) => {
            slideIndex = Number(n);
            showSlide(slideIndex);
        };

        /**
         * Starts automatic slideshow.
         */
        const startSlideShow = () => {
            slideInterval = setInterval(() => {
                moveSlide(1);
            }, slideDelay * 1000);
        };

        /**
         * Stops automatic slideshow.
         */
        const stopSlideShow = () => {
            clearInterval(slideInterval);
        };

        // Event listeners for previous and next buttons
        previousBtn.addEventListener("click", () => {
            stopSlideShow(); // Stop slideshow when user interacts with controls
            moveSlide(-1);
        });
        nextBtn.addEventListener("click", () => {
            stopSlideShow(); // Stop slideshow when user interacts with controls
            moveSlide(1);
        });

        // Event listener for pagination dots
        carouselPagination.forEach((dot) => {
            dot.addEventListener("click", () => {
                stopSlideShow(); // Stop slideshow when user interacts with controls
                currentSlide(dot.dataset.index);
            });
        });

        // Initially display the first slide
        showSlide(slideIndex);

        // Start automatic slideshow
        startSlideShow();
    });
})();
