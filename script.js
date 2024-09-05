// let theme = document.getElementById('theme');
// let body = document.querySelector('body');

// function cambiartema(){    
//     if(theme.checked){
//         body.style.background = "#09090b";
//         body.style.color = "#fafafa";
//     }else{
//         body.style.background = "#fafafa";
//         body.style.color = "#09090b";
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const fadeElements = document.querySelectorAll('.fade-in');
  
//     const handleScroll = () => {
//       const viewportHeight = window.innerHeight-80;
//       console.log(viewportHeight)
//       fadeElements.forEach(element => {
//         const rect = element.getBoundingClientRect();
//         const elementTop = rect.top;
//         const elementBottom = rect.bottom;
        
//         const visibleTop = Math.max(0, elementTop);
//         const visibleBottom = Math.min(viewportHeight, elementBottom);
        
//         const visibleHeight = Math.max(0, visibleBottom - visibleTop);
//         const elementHeight = elementBottom - elementTop;
        
//         let opacity = visibleHeight / elementHeight;
//         opacity = Math.max(0, Math.min(1, opacity));
        
//         element.style.opacity = opacity;
//       });
//     };
  
//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//   });
  
