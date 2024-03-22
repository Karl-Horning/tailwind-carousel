(() => {
    document.addEventListener("DOMContentLoaded", function () {
        const previousBtn = document.getElementById("previous-button");
        const nextBtn = document.getElementById("next-button");
        const carouselPagination = document.querySelectorAll(".carousel-pagination");
        let slideIndex = 1;

        const showSlide = (slideNum) => {
            const slides = document.getElementsByClassName("slide");

            if (slideNum > slides.length) {
                slideIndex = 1;
            }

            if (slideNum < 1) {
                slideIndex = slides.length;
            }

            // Hide all slides
            for (const slide of slides) {
                slide.classList.add("hidden");
            }

            // Remove active status from all carouselPagination
            for (const dot of carouselPagination) {
                dot.classList.remove("bg-yellow-500");
                dot.classList.add("bg-green-600");
            }

            // Show the active slide
            slides[slideIndex - 1].classList.remove("hidden");

            // Highlight the active pagination dot
            carouselPagination[slideIndex - 1].classList.remove("bg-green-600");
            carouselPagination[slideIndex - 1].classList.add("bg-yellow-500");
        };

        const moveSlide = (moveStep) => {
            slideIndex += moveStep;
            showSlide(slideIndex);
        };

        // Change slide with the pagination dots
        const currentSlide = (n) => {
            slideIndex = n; // Assign the value of n to slideIndex
            showSlide(slideIndex); // Call showSlide with slideIndex as argument
        };

        previousBtn.addEventListener("click", () => moveSlide(-1));
        nextBtn.addEventListener("click", () => moveSlide(1));

        carouselPagination.forEach((dot) => {
            dot.addEventListener("click", () =>
                currentSlide(dot.dataset.index)
            );
        });

        showSlide(slideIndex);
    });
})();
