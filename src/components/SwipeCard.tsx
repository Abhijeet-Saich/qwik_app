import { component$, useStore, $ } from '@builder.io/qwik';

export const SwipeCard = component$(({img,imagePopper,index}) => {
  const state = useStore({
    currentIndex: 0,
    start: {x : 0,y : 0},
    current: {x : 0,y : 0},
    beingSwiped: false,
    rotate : Math.floor(Math.random() * 10)*(Math.random > 0.5 ? -1 : 1),
    img
  });

  const handleTouchStart = $(event => {
    state.start = {x :event.touches[0].clientX, y : event.touches[0].clientY};
    state.beingSwiped = true;
  });

  const handleTouchMove = $(event => {
    if (state.beingSwiped) {
      state.current ={x  : event.touches[0].clientX - state.start.x,y  : event.touches[0].clientY - state.start.y} ;
      state.rotate = ((state.current.x/150)*20)
    }
  });

  const handleTouchEnd = $(() => {
    if (Math.abs(state.current.x) > 150) { 
        imagePopper();
    }
    state.beingSwiped = false;
    state.current = {x : 0,y:0};
  });

  return (
    <div
      onTouchStart$={handleTouchStart}
      onTouchMove$={handleTouchMove}
      onTouchEnd$={handleTouchEnd}
      style={{
        "height": "300px",
        "width": "300px",
        "background-image": `url(${state.img})`,
        "background-size": "cover",
        "background-position": "center",
        "transform": `translate(${state.current.x}px,${state.current.y}px) rotate(${state.rotate}deg)`,
        "transition": state.beingSwiped ? 'none' : 'transform 0.2s ease-out',
        "user-select": 'none',
        "position": 'relative',
        "overflow": 'hidden',
        "border-radius": '10px',
        "position" : 'absolute',
        'z-index' : `${index+1}`
      }}
    >
    </div>
  );
});

export default SwipeCard;
