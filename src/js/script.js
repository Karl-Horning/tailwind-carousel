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

        /**
         * Displays the slide corresponding to the given slide number.
         * @param {number} slideNum - The index of the slide to display.
         */
        const showSlide = (slideNum) => {
            const slides = document.querySelectorAll(".slide");

            // Handle boundary conditions for slide index
            if (slideNum > TOTAL_SLIDES) {
                slideIndex = 1;
            } else if (slideNum < 1) {
                slideIndex = TOTAL_SLIDES;
            }

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

        // Event listeners for previous and next buttons
        previousBtn.addEventListener("click", () => moveSlide(-1));
        nextBtn.addEventListener("click", () => moveSlide(1));

        // Event listeners for pagination dots
        carouselPagination.forEach((dot) => {
            dot.addEventListener("click", () =>
                currentSlide(dot.dataset.index)
            );
        });

        // Initially display the first slide
        showSlide(slideIndex);
    });
})();
