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

const spans = document.querySelectorAll('.transcript span');

const times = [
  // 0.240,
  4.130,  // 1
  7.535,
  11.270,
  13.960,
  17.940,
  22.370,
  26.880,
  32.100,
  34.730,
  39.430,
  42.350,
  46.300,
  49.270,
  53.760,
  57.780,
  60.150 // 16
]

const t = [
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  t9,
  t10,
  t11,
  t12,
  t13,
  t14,
  t15,
  t16
]

function reset() {
  for (let i = 0; i < spans.length; i++) {
    spans[i].style.color = "black";
  }
}

function hightlight(mediaElement, times, t) {
  for (let i = 0; i <= 15; i++) {
    let current = mediaElement.currentTime;

    if (current < 0.240) {
      reset();
    }

    else if (current < times[i]) {
      reset();
      console.log("CURRENT: " + current);
      console.log("TIMES[i] = " + times[i]);
      console.log("ORANGE TO TEXT: " + i);
      t[i].style.color = "orange";
      break;
    }
  }
}

$('video').mediaelementplayer({
  features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen'],

  success: function(mediaElement, domObject) {

    mediaElement.addEventListener('timeupdate', function() {
        let current = mediaElement.currentTime;

        // A FUNCTION FOR sync HIGHLIGHTING the text
        hightlight(mediaElement, times, t);

        // USE THIS -- OR THE HIGHLIGHT FUNCTION

        // for (let i = 0; i <= 15; i++) {
        //   let current = mediaElement.currentTime;
        //
        //   if (current < 0.240) {
        //     reset();
        //     break;
        //   }
        //
        //   else if (current < times[i]) {
        //     reset();
        //     console.log("CURRENT: " + current);
        //     console.log("TIMES[i] = " + times[i]);
        //     console.log("ORANGE TO TEXT: " + i);
        //     t[i].style.color = "orange";
        //     break;
        //   }
        //
        // }

        // THE FIRST PROTOTYPE :D

        // if (current < 0.240) {
        //   reset();
        // }
        // else if (current < 4.130) {
        //   reset();
        //   t1.style.color = "orange";
        // }
        // else if (current < 7.535) {
        //   reset();
        //   t2.style.color = "orange";
        // }
        // else if (current < 11.270) {
        //   reset();
        //   t3.style.color = "orange";
        // }
        // else if (current < 13.960) {
        //   reset();
        //   t4.style.color = "orange";
        // }
        // else if (current < 17.940) {
        //   reset();
        //   t5.style.color = "orange";
        // }
        // else if (current < 22.370) {
        //   reset();
        //   t6.style.color = "orange";
        // }
        // else if (current < 26.880) {
        //   reset();
        //   t7.style.color = "orange";
        // }
        // else if (current < 32.100) {
        //   reset();
        //   t8.style.color = "orange";
        // }
        // else if (current < 34.730) {
        //   reset();
        //   t9.style.color = "orange";
        // }
        // else if (current < 39.430) {
        //   reset();
        //   t10.style.color = "orange";
        // }
        // else if (current < 42.350) {
        //   reset();
        //   t11.style.color = "orange";
        // }
        // else if (current < 46.300) {
        //   reset();
        //   t12.style.color = "orange";
        // }
        // else if (current < 49.270) {
        //   reset();
        //   t13.style.color = "orange";
        // }
        // else if (current < 53.760) {
        //   reset();
        //   t14.style.color = "orange";
        // }
        // else if (current < 57.780) {
        //   reset();
        //   t15.style.color = "orange";
        // }
        // else if (current < 60.150) {
        //   reset();
        //   t16.style.color = "orange";
        // }
        // LEAVING IT SO THAT THE LAST HIGHLIGHTING STAYS - CONVENIENT
        // FOR THE READERS KIND OF
        }, false);
    }
});










//
