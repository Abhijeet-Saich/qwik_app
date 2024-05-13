import { component$, useStore,$ } from '@builder.io/qwik';
import SwipeCard from './SwipeCard';  // Adjust path as necessary

const img_address = [
    "https://images.unsplash.com/photo-1448630360428-65456885c650?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXN0YXRlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1680300960892-bd11b59b469b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXN0YXRlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXN0YXRlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
  ];

export default component$(() => {
  const state = useStore([...img_address]);

  const imagePopper = $(() =>{
    state.pop();
  })
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',position:"relative" }}>
        {state.map((ele,i) => (
            <SwipeCard img={ele} imagePopper={imagePopper} index={i}/>
        ))}
    </div>
  );
});