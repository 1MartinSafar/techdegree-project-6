$('video').mediaelementplayer({
  features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen'],

  success: function(mediaElement, domObject) {
    const t1 = document.querySelector('#t1');
    const t2 = document.querySelector('#t2');
    const t3 = document.querySelector('#t3');
    const t4 = document.querySelector('#t4');
    const t5 = document.querySelector('#t5');
    const t6 = document.querySelector('#t6');
    const t7 = document.querySelector('#t7');
    const t8 = document.querySelector('#t8');
    const t9 = document.querySelector('#t9');
    const t10 = document.querySelector('#t10');
    const t11 = document.querySelector('#t11');
    const t12 = document.querySelector('#t12');
    const t13 = document.querySelector('#t13');
    const t14 = document.querySelector('#t14');
    const t15 = document.querySelector('#t15');
    const t16 = document.querySelector('#t16');

    const spans = document.querySelectorAll('p span');

    // function reset() {
    //   spans.forEach( (span) => {
    //     span.style.color = "black";
    //   });
    // }
    // function reset() {
    //   spans.forEach(function()  {
    //     span.style.color = "black";
    //   });
    // }

    // for (let i = 0; i < spans.length; i++) {
    //   spans[i].style.color = "black";
    // }

    function reset() {
      for (let i = 0; i < spans.length; i++) {
        spans[i].style.color = "black";
      }
    }

    // var divs = document.querySelectorAll('div'), i;
    //
    // for (i = 0; i < divs.length; ++i) {
    //   divs[i].style.color = "green";
    // }

    mediaElement.addEventListener('timeupdate', function() {
        let current = mediaElement.currentTime;
        console.log(current);

        if (current < 0.240) {
          t1.style.color = "black";
        }
        else if (current < 4.130) {
          t1.style.color = "orange";
        }
        else if (current < 7.535) {
          reset();
          t2.style.color = "orange";
        }
        else if (current < 11.270) {
          reset();
          t3.style.color = "orange";
        }
        else if (current < 13.960) {
          reset();
          t4.style.color = "orange";
        }
        else if (current < 17.940) {
          reset();
          t5.style.color = "orange";
        }
        else if (current < 22.370) {
          reset();
          t6.style.color = "orange";
        }
        else if (current < 26.880) {
          reset();
          t7.style.color = "orange";
        }
        else if (current < 32.100) {
          reset();
          t8.style.color = "orange";
        }
        else if (current < 34.730) {
          reset();
          t9.style.color = "orange";
        }
        else if (current < 39.430) {
          reset();
          t10.style.color = "orange";
        }
        else if (current < 42.350) {
          reset();
          t11.style.color = "orange";
        }
        else if (current < 46.300) {
          reset();
          t12.style.color = "orange";
        }
        else if (current < 49.270) {
          reset();
          t13.style.color = "orange";
        }
        else if (current < 53.760) {
          reset();
          t14.style.color = "orange";
        }
        else if (current < 57.780) {
          reset();
          t15.style.color = "orange";
        }
        else if (current < 60.150) {
          reset();
          t16.style.color = "orange";
        }

        // LEAVING IT SO THAT THE LAST HIGHLIGHTING STAYS - CONVENIENT
        // FOR THE READERS KIND OF

        // else {
        //   reset();
        // }


            // DIFFERENT ELSE IFs
            // if (current === 0.240) {
            //   console.log("HERE COMES 0.240");
            //   t1.style.color = "orange";
            // }
            // else if (current === 4.130) {
            //   console.log("HERE COMES 4.130");
            //   t2.style.color = "orange";
            // }
            // else if (current === 7.535) {
            //   reset();
            //   t3.style.color = "orange";
            // }
            // else if (current === 11.270) {
            //   reset();
            //   t4.style.color = "orange";
            // }
            // else if (current === 13.960) {
            //   reset();
            //   t5.style.color = "orange";
            // }
            // else if (current === 17.940) {
            //   reset();
            //   t6.style.color = "orange";
            // }
            // else if (current === 22.370) {
            //   reset();
            //   t7.style.color = "orange";
            // }
            // else if (current === 26.880) {
            //   reset();
            //   t8.style.color = "orange";
            // }
            // else if (current === 32.100) {
            //   reset();
            //   t9.style.color = "orange";
            // }
            // else if (current === 34.730) {
            //   reset();
            //   t10.style.color = "orange";
            // }
            // else if (current === 39.430) {
            //   reset();
            //   t11.style.color = "orange";
            // }
            // else if (current === 42.350) {
            //   reset();
            //   t12.style.color = "orange";
            // }
            // else if (current === 46.300) {
            //   reset();
            //   t13.style.color = "orange";
            // }
            // else if (current === 49.270) {
            //   reset();
            //   t14.style.color = "orange";
            // }
            // else if (current === 53.760) {
            //   reset();
            //   t15.style.color = "orange";
            // }
            // else if (current === 57.780) {
            //   reset();
            //   t16.style.color = "orange";
            // }
            // // else if (current === 60.150) {
            // //   reset();
            // //   t16.style.color = "orange";
            // // }


            // switch (current) {
            //     // 1
            //     case 0.240:
            //
            //     break;
            //     // 2
            //     case 4.130:
            //     parag.style.color = "orange";
            //     break;
            //     // 3
            //     case 7.535:
            //
            //     break;
            //     // 4
            //     case 11.270:
            //
            //     break;
            //     // 5
            //     case 13.960:
            //
            //     break;
            //     // 6
            //     case 17.940:
            //
            //     break;
            //     // 7
            //     case 22.370:
            //
            //     break;
            //     // 8
            //     case 26.880:
            //
            //     break;
            //     // 9
            //     case 32.100:
            //
            //     break;
            //     // 10
            //     case 34.730:
            //
            //     break;
            //     // 11
            //     case 39.430:
            //
            //     break;
            //     // 12
            //     case 42.350:
            //
            //     break;
            //     // 13
            //     case 46.300:
            //
            //     break;
            //     // 14
            //     case 49.270:
            //
            //     break;
            //     // 15
            //     case 53.760:
            //
            //     break;
            //     // 16
            //     case 57.780:
            //
            //     break;
            //   }
        }, false);
    }
});



// <script>
// (function(){
//     var v = document.getElementsByTagName('video')[0]
//     var t = document.getElementById('time');
//     v.addEventListener('timeupdate',function(event){
//       t.innerHTML = v.currentTime;
//     },false);
//   })();
// </script>


// const vid = document.querySelector("#vid");
// let current = vid.currentTime;
// let firstp = document.querySelector("p");

// var v = document.getElementsByTagName('video')[0]
// v.addEventListener('timeupdate', () => {
//   let current = v.currentTime;
//   if (current == 4) {
//     // firstp.style.color = "orange";
//     console.log(current);
//   }
// });

// while (current < 60.150) {
//   let current = vid.currentTime;
//   switch (current) {
//     // 1
//     case 0.240:
//
//     break;
//     // 2
//     case 4.130:
//     firstp.style.color = "orange";
//     break;
//     // 3
//     case 7.535:
//
//     break;
//     // 4
//     case 11.270:
//
//     break;
//     // 5
//     case 13.960:
//
//     break;
//     // 6
//     case 17.940:
//
//     break;
//     // 7
//     case 22.370:
//
//     break;
//     // 8
//     case 26.880:
//
//     break;
//     // 9
//     case 32.100:
//
//     break;
//     // 10
//     case 34.730:
//
//     break;
//     // 11
//     case 39.430:
//
//     break;
//     // 12
//     case 42.350:
//
//     break;
//     // 13
//     case 46.300:
//
//     break;
//     // 14
//     case 49.270:
//
//     break;
//     // 15
//     case 53.760:
//
//     break;
//     // 16
//     case 57.780:
//
//     break;
//   }
// }

// let times = [
//   0.240,
//   4.130,
//   7.535,
//   11.270,
//   13.960,
//   17.940,
//   22.370,
//   26.880,
//   32.100,
//   34.730,
//   39.430,
//   42.350,
//   46.300,
//   49.270,
//   53.760,
//   57.780
// ]

// console.log(time);

// switch (time) {
//   case 0.240:
// }

// while (time <= 60.150) {
//   if (time === 0.240) {
//
//   }
//   else if (time )
// }












































//
