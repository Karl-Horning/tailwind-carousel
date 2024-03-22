# Tailwind CSS Carousel

A carousel using Tailwind CSS and JavaScript. This will form the basis for a Next.js component.

## Carousel

The properties that the Carousel will use are:

```javascript
interface CarouselProps {
    width: string;
}
```

## CarouselSlide

The properties that the CarouselSlide will use are:

```javascript
interface CarouselSlideProps {
    height: string;
    src: string;
    alt: string;
    caption: string;
    captionPosition: "top" | "middle" | "bottom";
}
```