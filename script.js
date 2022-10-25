function go(){

    const timer = Number(document.querySelector("#minutes").value);
    let amountTime = (timer*60) + Number(document.querySelector("#seconds").value);
    

function calculateTime(){
  
    const countdown=document.querySelector("#countdown");
    
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;
    
    amountTime--;
    
    if (seconds<10) {
       seconds = "0"+seconds;
    }
        
    countdown.textContent = `${minutes} : ${seconds}`;
    if (amountTime<0) {
        stopTimer();
        amountTime=0;
        document.querySelector("#startBtn").textContent= "¡Listo!";
    }
      
  function stopTimer(){
  
      clearInterval(timerId);
  }
  
    }
  
  let timerId = setInterval(calculateTime,1000);
    
    }


const button = document.querySelector("#startBtn");
  button.addEventListener ("click", function(){
   go();
    document.querySelector("#startBtn").disabled = true;
    document.querySelector("#minutes").value="";
    document.querySelector("#seconds").value="";
  })
    
const btnReload = document.querySelector('#btnReload')
  btnReload.addEventListener('click', ()=>{
    location.reload()
})

clock();
    
  function clock() {
      const date = new Date();
    
      const hours = ((date.getHours() + 11) % 12 + 1);
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      
      const hour = hours * 30;
      const minute = minutes * 6;
      const second = seconds * 6;
      
      document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
      document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
      document.querySelector('.second').style.transform = `rotate(${second}deg)`
    }
    
    setInterval(clock, 1000);


    particlesJS("particles-js", 
    {"particles":{
        "number":{
            "value":6,
            "density":{
                "enable":true,
                "value_area":800
            }
        },
        "color":{
            "value":"#d1d5f0"
        },
        "shape":{
            "type":"circle",
            "stroke":{
                "width":0,
                "color":"#000"
            },
            "polygon":{
                "nb_sides":6
            },
            "image":{
                "src":"img/github.svg","width":100,"height":100}
            },"opacity":{
                "value":0.3,
                "random":true,
                "anim":{
                    "enable":false,
                    "speed":1,
                    "opacity_min":0.1,
                    "sync":false
                }
            },
            "size":{
                "value":160,
                "random":false,
                "anim":{
                    "enable":true,
                    "speed":5,
                    "size_min":40,
                    "sync":false
                }
            },
            "line_linked":{
                "enable":false,
                "distance":200,
                "color":"#ffffff",
                "opacity":1,
                "width":2
            },
            "move":{
                "enable":true,
            "speed":5,
            "direction":"none",
            "random":false,
            "straight":false,
            "out_mode":"out",
            "bounce":false,
            "attract":{
                "enable":false,
                "rotateX":600,
                "rotateY":1200
            }
        }
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
        "onhover":{
          "enable":false,
          "mode":"grab"
        },
        "onclick":{
          "enable":false,
          "mode":"push"
        },
        "resize":true
      },
      "modes":{
        "grab":{
          "distance":400,"line_linked":{
            "opacity":1
          }
        },
        "bubble":{
          "distance":400,
          "size":40,
          "duration":2,
          "opacity":8,
          "speed":3
        },
        "repulse":{
          "distance":200,"duration":0.4
        },
        "push":{
          "particles_nb":4
                 },
        "remove":{
          "particles_nb":2
        }
      }
    },
     "retina_detect":true
    }
  );


    gsap.from("h1", {y:-300, delay:0.2, duration:3, opacity:0.5, ease:"power4.out"});
    gsap.from("label", {x:-300, delay:0.4, duration:3, opacity:0, ease:"power4.out"});
    gsap.from("input", {x:300, delay:0.4, duration:3, opacity:0, ease:"power4.out"});
    gsap.from("#startBtn", {x:-20, delay:2, duration:3, opacity:0, ease:"power4.out"});
    gsap.from("#btnReload", {x:20, delay:2, duration:3, opacity:0, ease:"power4.out"});
    gsap.from("#countdown", {y:100, delay:0.8, duration:3, opacity:0, ease:"power4.out"});
    gsap.from(".block", {y:100, delay:0.8, duration:3, opacity:0, ease:"power4.out"});
