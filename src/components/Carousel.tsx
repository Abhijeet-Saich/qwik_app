import { component$, useStore,$ } from '@builder.io/qwik';
import './Carousel.css'

export const Carousel = component$(() => {
  const state = useStore({
    currentIndex: 0,
    images: [
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXN0YXRlfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1680300960892-bd11b59b469b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXN0YXRlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXN0YXRlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
    ]
  });

  const nextImage$ = $(() => {
    state.currentIndex = (state.currentIndex + 1) % state.images.length;
  });

  const prevImage$ = $(() => {
    state.currentIndex = (state.currentIndex - 1 + state.images.length) % state.images.length;
  });

  return (
    <div>
      <div class="carousel-container">
        <img src={state.images[state.currentIndex]} alt="Carousel Image" class="carousel-image" width={500} height={500}/>
        <div class="navigation-buttons">
          <button class="button" onClick$={prevImage$}>Previous</button>
          <button class="button" onClick$={nextImage$}>Next</button>
        </div>
        <div class="image-counter">Image {state.currentIndex + 1} of {state.images.length}</div>
      </div>
    </div>
  );
});
