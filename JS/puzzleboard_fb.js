import { getDatabase, ref, set, update, onValue, remove, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();
    
    const maxhang = 4;
    const maxcot = 14;
		
		// Reset variables and commands
		
		update(ref(db, 'variables'), {
			
		})
		
		update(ref(db, 'commands'), {
			
		})
    
    // Function
    
    function PlayVideoOnce(video) {
      $(video).css('opacity',1)
      $(video).trigger('play');
      $(video)[0].playbackRate = 1;
      $(video).on('ended',function(){
        $(video).css('opacity',0)
        $(video).trigger('pause');
        $(video)[0].currentTime = 0;
      });
    }
    
    function StopVideo(video) {    
      $(video).css('opacity',0)
      $(video).trigger('pause');
      $(video)[0].currentTime = 0;
    }
    
    function ShowLoopVideo(video) {
      $(video).css('opacity',1);
    }
    
    function HideLoopVideo(video) {
      $(video).css('opacity',0);
    }
		
		// Get data
    
    var a = "";
		
		onValue(ref(db, 'variables'), (snapshot) => {
			const data = snapshot.val();
      
      a = data.round;
			
		})
		
		onValue(ref(db, 'variables/letters/status'), (snapshot) => {
			const data = snapshot.val();
			for(var i = 1; i <= maxhang * maxcot; i++) {
          
          if(i == 1 || i == maxcot || i == (maxhang - 1) * maxcot + 1 || i == maxhang * maxcot){
            continue;
          }
          else{
            if(eval('data.letter_' + i) != undefined && eval('data.letter_' + i) != null){
              if(eval('data.letter_' + i) == 0){
                $('#letter_' + i).css('background-image', 'url("https://cdn.glitch.global/bf5bd97f-d51e-485d-8828-ce615120e2e0/o%20chu%20xanh%20luc.jpg?v=1736265520207")');
              }
              if(eval('data.letter_' + i) == 1 || eval('data.letter_' + i) == 3 || eval('data.letter_' + i) == 4){
                $('#letter_' + i).css('background-image', 'url("https://cdn.glitch.global/bf5bd97f-d51e-485d-8828-ce615120e2e0/o%20chu%20trang.jpg?v=1736265521415")');
              }
              if(eval('data.letter_' + i) == 2){
                $('#letter_' + i).css('background-image', 'url("https://cdn.glitch.global/bf5bd97f-d51e-485d-8828-ce615120e2e0/o%20chu%20xanh%20lam.jpg?v=1736265520207")');
              }
              if(eval('data.letter_' + i) == 5){
                $('#letter_' + i).css('background-image', 'url("https://cdn.glitch.global/bf5bd97f-d51e-485d-8828-ce615120e2e0/%C3%B4%20ch%E1%BB%AF%20gi%E1%BA%A3i%20m%C3%A3.png?v=1741175203764")');
              }

              if(eval('data.letter_' + i) == 3){
                onValue(ref(db, 'variables/letters/no_tonemark'), (snapshot) => {
                  $('#letter_' + i + ' div').html(eval('snapshot.val().letter_' + i));
                })
              }
              else if(eval('data.letter_' + i) == 4){
                onValue(ref(db, 'variables/letters/having_tonemark'), (snapshot) => {
                  $('#letter_' + i + ' div').html(eval('snapshot.val().letter_' + i));
                })
              }
              else{
                $('#letter_' + i + ' div').html('');
              }
            }
          }
      }
		})
		
		onValue(ref(db, 'commands'), (snapshot) => {
			const data = snapshot.val();
			
			if (data.reload == 1){
				location.reload(true);
				update(ref(db, 'commands'), { reload : 0 });
			}
			
			if(data.reset_puzzleboard == 1){
				update(ref(db, 'commands'), { reset_puzzleboard : 0 })
			}
			if(data.reset_puzzleboard_data == 1){
				update(ref(db, 'commands'), { reset_puzzleboard_data : 0 })
			}
			if(data.puzzle_reveal == 1){
        if(a == "bonus_round") {
          PlayVideoOnce("#puzzle_bonus_reveal");
        }
        else {
          PlayVideoOnce("#puzzle_reveal");
        }
				update(ref(db, 'commands'), { puzzle_reveal : 0 })
			}
			if(data.play_vid_puzzle_tossup == 1){
        PlayVideoOnce("#puzzle_tossup");
				update(ref(db, 'commands'), { play_vid_puzzle_tossup : 0 })
			}
			if(data.reveal_backdrop == 1){
				$('.backdrop').css('opacity', 1);
				update(ref(db, 'commands'), { reveal_backdrop : 0 })
			}
			if(data.hide_backdrop == 1){
				$('.backdrop').css('opacity', 0);
				update(ref(db, 'commands'), { hide_backdrop : 0 })
			}
			if(data.reveal_camera == 1){
				$('.camera_source').css('opacity', 1);
				update(ref(db, 'commands'), { reveal_camera : 0 })
			}
			if(data.hide_camera == 1){
				$('.camera_source').css('opacity', 0);
				update(ref(db, 'commands'), { hide_camera : 0 })
			}
      
      if(data.puzzle_back_1 == 1) {
        $("#puzzle_back_main, #puzzle_back_bonus, #puzzle_back_end_bonus").css('opacity', 0);
        $("#puzzle_back_main").css('opacity', 1);
				update(ref(db, 'commands'), { puzzle_back_1 : 0 })
      }   
      if(data.puzzle_back_2 == 1) {
        $("#puzzle_back_main, #puzzle_back_bonus, #puzzle_back_end_bonus").css('opacity', 0);
        $("#puzzle_back_bonus").css('opacity', 1);
				update(ref(db, 'commands'), { puzzle_back_2 : 0 })
      }   
      if(data.puzzle_back_3 == 1) {
        $("#puzzle_back_main, #puzzle_back_bonus, #puzzle_back_end_bonus").css('opacity', 0);
        $("#puzzle_back_end_bonus").css('opacity', 1);
				update(ref(db, 'commands'), { puzzle_back_3 : 0 })
      }
      if(data.puzzle_solve == 1) {
        if (a == "tossup_1" || a == "tossup_2" || a == "triple_tossup_1" || a == "triple_tossup_2" || a == "triple_tossup_3"){
          setTimeout(function(){
            StopVideo("#puzzle_tossup");
          }, 500)
				  PlayVideoOnce("#puzzle_solve_tossup");
        }
        else if(a == "round_1" || a == "round_2" || a == "round_3" || a == "audience_round" || a == "round_4") {
          PlayVideoOnce("#puzzle_solve_main");
        }
				update(ref(db, 'commands'), { puzzle_solve : 0 })
      }
		})
		
		// Action
		
		var string = "";
		for(var j = 0; j < maxhang; j++){
			string += "<tr>";
			for(var i = 1; i <= maxcot; i++){
				string += "<td class='letter' id='letter_" + (i + ((maxcot - 1) * j) + j) + "'><div></div></td>"
			}
			string += "</tr>";
		}
		$('.puzzleboard').html(string);
		
	}(window.CNKDCGV = window.CNKDCGV || {}));
});