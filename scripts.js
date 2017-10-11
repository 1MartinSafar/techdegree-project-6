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
const textDiv = document.querySelector(".text-container");

const times = [
  0.240,
  4.130,
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
  60.150
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

// A FUCTION to reset the color of the transscript back to black
function reset() {
  for (let i = 0; i < spans.length; i++) {
    spans[i].style.color = "black";
  }
}

// A FUNCTION FOR sync HIGHLIGHTING the text
function hightlight(mediaElement, times, t) {
  for (let i = 1; i <= 16; i++) {
    let current = mediaElement.currentTime;
    if (current < 0.240) {
      reset();
    }
    else if (current < times[i]) {
      reset();
      // console.log("CURRENT: " + current);
      // console.log("TIMES[i] = " + times[i]);
      // console.log("ORANGE TO TEXT: " + i);
      t[i-1].style.color = "orange";
      break;
    }
  }
}

// When the user clicks on any sentence in the transcript
// the video player jumps to the appropriate time in the video.
function jump(mediaElement, event, times, t) {
  if (event.target.tagName == 'SPAN') {
    for (let i = 0; i <= 15; i++) {
      let current = mediaElement.currentTime;
      // console.log("CLICKED ON SPAN: " + i);
      // console.log("CURRENT: " + current);
      // console.log("TIMES[i] = " + times[i]);
      // console.log("ORANGE TO TEXT: " + i);
      if (event.target == t1) {
        mediaElement.currentTime = 0.240;
      }
      else if (event.target == t[i]) {
        mediaElement.currentTime = times[i];
        break;
      }
    }
  }
}

$('video').mediaelementplayer({
  features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen'],

  success: function(mediaElement, domObject) {

    textDiv.addEventListener('click', (event) => {
      jump(mediaElement, event, times, t);
    });

    mediaElement.addEventListener('timeupdate', function() {
        let current = mediaElement.currentTime;

        hightlight(mediaElement, times, t);
        // LEAVING IT SO THAT THE LAST HIGHLIGHTING STAYS - CONVENIENT
        // FOR THE READERS I THINK
        }, false);
    }
});




//
