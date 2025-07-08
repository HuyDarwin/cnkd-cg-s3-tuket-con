import { getDatabase, ref, set, update, onValue, remove } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();
		
		// Rotate
		
		$.fn.rotate = function(angle, duration, start, easing, complete) {
		  var args = $.speed(duration, easing, complete);
		  var step = args.step;
		  return this.each(function(i, e) {
			args.complete = $.proxy(args.complete, e);
			args.step = function(now) {
			  $.style(e, 'transform', 'rotate(' + now + 'deg)');
			  if (step) return step.apply(e, arguments);
			};

			$({deg: start}).animate({deg: angle}, args);
		  });
		};
		
		// Sound
		
		var at = '';
		var at2 = '';
		var at3 = '';
		var at4 = '';
		var at5 = '';
		
		con.PlaySound = function(filename, n){
			if (n == 1){
				try{			
					at =  new Audio(filename);
					at.play();
					at.volume = 0.2;
				}
				catch(e){
					// do nothing
				}				
			}
			else if (n == 2){
				try{			
					at2 =  new Audio(filename);
					at2.play();
					at2.volume = 0.2;
				}
				catch(e){
					// do nothing
				}				
			}
			else if (n == 3){
				try{			
					at3 =  new Audio(filename);
					at3.play();
					at3.volume = 0.2;
				}
				catch(e){
					// do nothing
				}				
			}
			else if (n == 4){
				try{			
					at4 =  new Audio(filename);
					at4.play();
					at4.volume = 0.15;
				}
				catch(e){
					// do nothing
				}				
			}
			else if (n == 5){
				try{			
					at5 =  new Audio(filename);
					at5.play();
					at5.volume = 0.1;
				}
				catch(e){
					// do nothing
				}				
			}
		};
		
		con.StopAllSounds = function(a,b) {
			try {
				if(a == 1 && at != ''){
					at.pause();
          if(b != 1){
            at.currentTime = 0;
            at = '';
          }
				}
				if(a == 2 && at2 != ''){
					at2.pause();
          if(b != 1){
            at2.currentTime = 0;
            at2 = '';
          }
				}
				if(a == 3 && at3 != ''){
					at3.pause();
          if(b != 1){
            at3.currentTime = 0;
            at3 = '';
          }
				}
				if(a == 4 && at4 != ''){
					at4.pause();
          if(b != 1){
            at4.currentTime = 0;
            at4 = '';
          }
				}
				if(a == 5 && at5 != ''){
					at5.pause();
          if(b != 1){
            at5.currentTime = 0;
            at5 = '';
          }
				}
				if(a != 1 && a != 2 && a != 3 && a != 4 && a != 5){
					if(at != ''){
						at.pause();
            if(b != 1){
              at.currentTime = 0;
              at = '';
            }
					}
					if(at2 != ''){
						at2.pause();
	          if(b != 1){
              at2.currentTime = 0;
              at2 = '';
            }
					}
					if(at3 != ''){
						at3.pause();
            if(b != 1){
              at3.currentTime = 0;
              at3 = '';
            }
					}
					if(at4 != ''){
						at4.pause();
            if(b != 1){
              at4.currentTime = 0;
              at4 = '';
            }
					}
					if(at5 != ''){
						at5.pause();
            if(b != 1){
              at5.currentTime = 0;
              at5 = '';
            }
					}
				}
			}
			catch(e){
				// swallow
			}
		};	
		
		// Final Spin Timer
		var timer = 0;
		var is_timer_running = false;
		var timer_int;

        con.ResetTimer = function(){
          clearInterval(timer_int);
          is_timer_running = false;
          timer = 0;
		  update(ref(db, 'variables'), { timer : timer });
        }
        con.PlayTimer = function(secs, is_final_spin) {
          ResetTimer();
          is_timer_running = true;
          timer = secs;
          update(ref(db, 'variables'), { timer : timer });
          timer_int = setInterval(function () {
            if(is_timer_running && timer == 0){
              ResetTimer();
            }
            else if (is_timer_running && timer != 0) {
              timer--;
			  update(ref(db, 'variables'), { timer : timer });

			  if (timer == 0 && is_final_spin == true) {
				uupdate(ref(db, 'commands'), { sound_wrong: 1 });
			  }
            }
          }, 1000);
        }
        con.PauseTimer = function(){
          is_timer_running = false;
        }
        con.ResumeTimer = function(){
          is_timer_running = true;
        }

		con.PlayFinalSpinTimer = function() {
			con.PlayTimer(3, true);
		}
		
		con.StopFinalSpinTimer = function() {
			con.ResetTimer();
		}



	}(window.CNKDCGV = window.CNKDCGV || {}));
});