import { getDatabase, ref, set, update, onValue, remove, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();

		// Get data

		var h;
		var i;
		onValue(ref(db, 'variables'), (snapshot) => {
			h = snapshot.val().round
			i = snapshot.val().win_or_lose
		})

		onValue(ref(db, 'commands'), (snapshot) => {
			const data = snapshot.val();

			if (data.sound_intro == 1) {
				con.PlaySound("Assets/Intro.mp3", 1);
				update(ref(db, 'commands'), { sound_intro: 0 });
			}
			if (data.sound_he == 1) {
				con.PlaySound("Assets/Host_Entrance.mp3", 2);
				update(ref(db, 'commands'), { sound_he: 0 });
			}
			if (data.sound_theme == 1) {
				setTimeout(function () {
					con.StopAllSounds(4);
				}, 1000)
				con.PlaySound("Assets/Theme_1_-6_amplify.mp3", 5);
				update(ref(db, 'commands'), { sound_theme: 0 });
			}
			if (data.sound_bg_1 == 1) {
				con.PlaySound("Assets/Background_1.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_1: 0 });
			}
			if (data.sound_bg_2 == 1) {
				con.PlaySound("Assets/y2mate.com%20-%20Background%20Suspense%20Music%20%20Suspenseful%20%20Dramatic%20Film%20Soundtracks%20ANTICIPATION.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_2: 0 });
			}
			if (data.sound_bg_3 == 1) {
				con.PlaySound("Assets/Background%203.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_3: 0 });
			}
			if (data.sound_bg_4 == 1) {
				con.PlaySound("Assets/Background%204.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_4: 0 });
			}
			if (data.sound_bg_5 == 1) {
				con.PlaySound("Assets/Background%205.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_5: 0 });
			}
			if (data.sound_bg_6 == 1) {
				con.PlaySound("Assets/Background%206.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_6: 0 });
			}
			if (data.sound_bg_7 == 1) {
				con.PlaySound("Assets/Wheel%20of%20Fortune%201983-1989%20Changing%20Keys%20Theme.mp3", 1);
				update(ref(db, 'commands'), { sound_bg_7: 0 });
			}
			if (data.sound_bg_8 == 1) {
				con.PlaySound("Assets/Background%208.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_8: 0 });
			}
			if (data.sound_bg_9 == 1) {
				con.PlaySound("Assets/Background%209.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_9: 0 });
			}
			if (data.sound_bg_10 == 1) {
				con.PlaySound("Assets/Background%2010.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_10: 0 });
			}
			if (data.sound_bg_11 == 1) {
				con.PlaySound("Assets/Background%2011.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_11: 0 });
			}
			if (data.sound_bg_12 == 1) {
				con.PlaySound("Assets/Background%2012.mp3", 3);
				update(ref(db, 'commands'), { sound_bg_12: 0 });
			}
			if (data.sound_bg_13 == 1) {
				con.PlaySound("Background%2013.wav", 3);
				update(ref(db, 'commands'), { sound_bg_13: 0 });
			}

			if (data.sound_giaima == 1) {
				con.PlaySound("SFX%20ô%20chữ%20có%20CHP.mp3", 2);
				update(ref(db, 'commands'), { sound_giaima: 0 });
			}
			if (data.sound_wrong == 1) {
				con.StopAllSounds(4);
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Letter%20Buzzer.wav?v=1688742910074', 2);
				update(ref(db, 'commands'), { sound_wrong: 0 });
			}
			if (data.sound_br_double_buzzer == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Double%20Buzzer%20(For%20Bonus%20Round).mp3?v=1688889850747', 2);
				update(ref(db, 'commands'), { sound_br_double_buzzer: 0 });
			}

			if (data.sound_1m == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/1%20Tri%E1%BB%87u%20CG.wav?v=1688741945417', 2);
				update(ref(db, 'commands'), { sound_1m: 0 });
			}
			if (data.sound_br == 1) {
				con.StopAllSounds(5);
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Bankrupt.wav?v=1688741987558', 2);
				update(ref(db, 'commands'), { sound_br: 0 });
			}
			if (data.sound_ch == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/C%C6%A1%20H%E1%BB%99i.wav?v=1688742025638', 2);
				update(ref(db, 'commands'), { sound_ch: 0 });
			}
			if (data.sound_jack == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/%C4%90%E1%BB%99c%20%C4%90%E1%BA%AFc.wav?v=1688742086801', 2);
				update(ref(db, 'commands'), { sound_jack: 0 });
			}
			if (data.sound_dd == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/%C4%90%E1%BB%95i%20%C4%90i%E1%BB%83m.wav?v=1688742120334', 2);
				update(ref(db, 'commands'), { sound_dd: 0 });
			}
			if (data.sound_st == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Express%20SFX.mp3?v=1688742242581', 2);
				update(ref(db, 'commands'), { sound_st: 0 });
			}
			if (data.sound_mm == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/May%20M%E1%BA%AFn.wav?v=1688742246533', 2);
				update(ref(db, 'commands'), { sound_mm: 0 });
			}
			if (data.sound_mr == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/May%20R%E1%BB%A7i.wav?v=1688742247692', 2);
				update(ref(db, 'commands'), { sound_mr: 0 });
			}
			if (data.sound_mys == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Mystery.mp3?v=1688742249817', 2);
				update(ref(db, 'commands'), { sound_mys: 0 });
			}
			if (data.sound_tl == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Th%C3%AAm%20L%C6%B0%E1%BB%A3t.wav?v=1688742259238', 2);
				update(ref(db, 'commands'), { sound_tl: 0 });
			}
			if (data.sound_half == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/1_2%20CG.mp3?v=1694320485522', 2);
				update(ref(db, 'commands'), { sound_half: 0 });
			}
			if (data.sound_ml == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Lose%20A%20Turn%20(_).wav?v=1688742497171', 2);
				update(ref(db, 'commands'), { sound_ml: 0 });
			}
			if (data.sound_pt == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Ph%E1%BA%A7n%20Th%C6%B0%E1%BB%9Fng.wav?v=1688742609453', 2);
				update(ref(db, 'commands'), { sound_pt: 0 });
			}
			if (data.sound_qn == 1) {
				con.PlaySound('https://cdn.glitch.global/bf5bd97f-d51e-485d-8828-ce615120e2e0/club_levelup.wav?v=1739803424162', 2);
				update(ref(db, 'commands'), { sound_qn: 0 });
			}
			if (data.sound_ks == 1) {
				con.PlaySound('https://cdn.glitch.global/bf5bd97f-d51e-485d-8828-ce615120e2e0/lucky_coin_redeem.wav?v=1739803427736', 2);
				update(ref(db, 'commands'), { sound_ks: 0 });
			}
			if (data.sound_ex_bg == 1) {
				con.StopAllSounds(4);
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Express%20Music.mp3?v=1689866207653', 5);
				update(ref(db, 'commands'), { sound_ex_bg: 0 });
			}

			if (data.sound_br_spin == 1) {
				con.PlaySound('https://cdn.glitch.global/bf5bd97f-d51e-485d-8828-ce615120e2e0/Bonus%20Spin%20Cue.mp3?v=1736350832422', 1);
				update(ref(db, 'commands'), { sound_br_spin: 0 });
			}
			/*
				  if (data.sound_br_trans == 1){
			  con.StopAllSounds(1)
					  con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Bonus%20Round%20Transition.mp3?v=1688743124414',3);
					  update(ref(db, 'commands'), { sound_br_trans : 0 });
				  }
			*/
			if (data.sound_br_rstlne == 1) {
				con.StopAllSounds(1)
				con.PlaySound('https://cdn.glitch.global/bf5bd97f-d51e-485d-8828-ce615120e2e0/RSTLNE%20Reveal%20Cue.mp3?v=1736350824408', 5);
				update(ref(db, 'commands'), { sound_br_rstlne: 0 });
			}
			if (data.sound_br_3c1v == 1) {
				con.StopAllSounds(5)
				con.PlaySound('https://cdn.glitch.global/bf5bd97f-d51e-485d-8828-ce615120e2e0/3%20Consonants%201%20Vowel%20Cue.mp3?v=1736350840215', 5);
				update(ref(db, 'commands'), { sound_br_3c1v: 0 });
			}
			if (data.sound_br_10s_think == 1) {
				con.StopAllSounds(5)
				con.PlaySound('https://cdn.glitch.global/bf5bd97f-d51e-485d-8828-ce615120e2e0/10%20Seconds%20thinking%20.mp3?v=1736350835347', 1);
				update(ref(db, 'commands'), { sound_br_10s_think: 0 });
			}
			if (data.sound_br_10s == 1) {
				con.StopAllSounds(3)
				con.PlaySound('https://cdn.glitch.global/bf5bd97f-d51e-485d-8828-ce615120e2e0/10%20Second%20Timer%20(With%20Buzzer).mp3?v=1736350837107', 1);
				update(ref(db, 'commands'), { sound_br_10s: 0 });
			}
			if (data.sound_br_win == 1) {
				con.StopAllSounds(1);
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Bonus%20Round%20Win.mp3?v=1688743540836', 4);
				update(ref(db, 'commands'), { sound_br_win: 0 });
			}
			if (data.sound_br_1m_win == 1) {
				con.StopAllSounds(1);
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Bonus%20Round%201%20Million%20Win.mp3?v=1688743561009', 4);
				update(ref(db, 'commands'), { sound_br_1m_win: 0 });
			}
			if (data.sound_br_lose == 1) {
				con.StopAllSounds(1);
				con.PlaySound('https://cdn.glitch.global/bf5bd97f-d51e-485d-8828-ce615120e2e0/BR%20Loss%20Cue_.mp3?v=1736350831976', 4);
				update(ref(db, 'commands'), { sound_br_lose: 0 });
			}

			if (data.sound_letter == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Letter%20_Ding_.mp3?v=1688522326911', 2);
				update(ref(db, 'commands'), { sound_letter: 0 });
			}
			if (data.sound_double_buzzer == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Double%20Buzzer.wav?v=1688874562005', 2);
				update(ref(db, 'commands'), { sound_double_buzzer: 0 });
			}

			if (data.spin == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Wheel%20Spin%20Edit%202%20(With%20Spin%20SFX).mp3?v=1688483399926', 1);
				//con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/CNKD%20-%20Nh%E1%BA%A1c%20quay%202010%20(Clean).mp3.mp3?v=1718198152200',1);
				update(ref(db, 'commands'), { spin: 0 });
			}
			if (data.puzzle_reveal == 1) {
				if (h != 'bonus_round') {
					con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Puzzle%20Reveal.wav?v=1688483404659', 1);
				}
				update(ref(db, 'commands'), { puzzle_reveal: 0 });
			}
			if (data.open_letter == 1) {
				if (h == 'tossup_1' || h == 'tossup_2' || h == 'triple_tossup_1') {
					con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Triple%20Toss%20Up%20%231.mp3?v=1688483426714', 4);
				}
				else if (h == 'triple_tossup_2') {
					con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Triple%20Toss%20Up%20%232.mp3?v=1688483428181', 4);
				}
				else if (h == 'triple_tossup_3') {
					con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Triple%20Toss%20Up%20%233.mp3?v=1688483429345', 4);
				}
				update(ref(db, 'commands'), { open_letter: 0 });
			}
			if (data.tossup_buzzer == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Letter%20_Ding_.mp3?v=1688522326911', 2);
				update(ref(db, 'commands'), { tossup_buzzer: 0 });
			}
			if (data.puzzle_solve == 1) {
				if (h == 'tossup_1' || h == 'tossup_2' || h == 'triple_tossup_3') {
					con.StopAllSounds(4);
					con.PlaySound('https://cdn.glitch.global/bf5bd97f-d51e-485d-8828-ce615120e2e0/Toss%20Up%20Solve%20Cue.mp3?v=1736350826645', 1);
				}
				else if (h == 'triple_tossup_1' || h == 'triple_tossup_2') {
					con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Triple%20Toss%20Up%20Solve.mp3?v=1688483431947', 1);
					setTimeout(function () {
						con.StopAllSounds(4);
					}, 250)
				}
				else if (h == 'bonus_round') {
					if (i != 2) {
						con.StopAllSounds(1);
						con.StopAllSounds(4);
						con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Theme%201%20-6%20amplify.mp3?v=1690100609642', 1);
					}
				}
				else {
					con.StopAllSounds(4);
					con.PlaySound('https://cdn.glitch.global/bf5bd97f-d51e-485d-8828-ce615120e2e0/Solve%20Cue%20Remake%20(Cre_%20Doug%20Roberts).mp3?v=1736350825405', 1);
				}
				update(ref(db, 'commands'), { puzzle_solve: 0 });
			}

			if (data.sound_cus_1 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Ti%E1%BA%BFng%20c%C6%B0%E1%BB%9Di%20VTV%20ver%202.mp3?v=1705591783243', 1);
				update(ref(db, 'commands'), { sound_cus_1: 0 });
			}
			if (data.sound_cus_2 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/y2mate.com%20-%20ROS%C3%89%20%20Gone%20MV.mp3?v=1693532272922', 1);
				update(ref(db, 'commands'), { sound_cus_2: 0 });
			}
			if (data.sound_cus_3 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Gi%E1%BB%9D%20th%E1%BB%A9%209999999%2B%20-%20by%20Hi%E1%BA%BFu.mp3?v=1690467330778', 1);
				update(ref(db, 'commands'), { sound_cus_3: 0 });
			}
			if (data.sound_cus_4 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/y2mate.com%20-%20LISA%20%20LALISA%20MV.mp3?v=1693532275998', 1);
				update(ref(db, 'commands'), { sound_cus_4: 0 });
			}
			if (data.sound_cus_5 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/y2mate.com%20-%20IVE%20%EC%95%84%EC%9D%B4%EB%B8%8C%20I%20AM%20MV.mp3?v=1693533008825', 1);
				update(ref(db, 'commands'), { sound_cus_5: 0 });
			}
			if (data.sound_cus_6 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/y2mate.com%20-%20IVE%20%EC%95%84%EC%9D%B4%EB%B8%8C%20Kitsch%20MV.mp3?v=1693533551628', 1);
				update(ref(db, 'commands'), { sound_cus_6: 0 });
			}
			if (data.sound_cus_7 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/y2mate.com%20-%20LE%20SSERAFIM%20%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C%20UNFORGIVEN%20feat%20Nile%20Rodgers%20OFFICIAL%20MV.mp3?v=1693533552451', 1);
				update(ref(db, 'commands'), { sound_cus_7: 0 });
			}
			if (data.sound_cus_8 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/y2mate.com%20-%20%EC%97%AC%EC%9E%90%EC%95%84%EC%9D%B4%EB%93%A4GIDLE%20%20%ED%80%B8%EC%B9%B4%20Queencard%20Official%20Music%20Video.mp3?v=1693533552706', 1);
				update(ref(db, 'commands'), { sound_cus_8: 0 });
			}
			if (data.sound_cus_9 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/y2mate.com%20-%20NewJeans%20%EB%89%B4%EC%A7%84%EC%8A%A4%20Super%20Shy%20Official%20MV.mp3?v=1693533554179', 1);
				update(ref(db, 'commands'), { sound_cus_9: 0 });
			}
			if (data.sound_cus_10 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/y2mate.com%20-%20LE%20SSERAFIM%20%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C%20ANTIFRAGILE%20OFFICIAL%20MV.mp3?v=1693533720145', 1);
				update(ref(db, 'commands'), { sound_cus_10: 0 });
			}
			if (data.sound_cus_11 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/y2mate.com%20-%20%EC%97%AC%EC%9E%90%EC%95%84%EC%9D%B4%EB%93%A4GIDLE%20%20Nxde%20Official%20Music%20Video.mp3?v=1693533720928', 1);
				update(ref(db, 'commands'), { sound_cus_11: 0 });
			}
			if (data.sound_cus_12 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/y2mate.com%20-%20FIFTY%20FIFTY%20%ED%94%BC%ED%94%84%ED%8B%B0%ED%94%BC%ED%94%84%ED%8B%B0%20%20Cupid%20%20Official%20MV.mp3?v=1693555493682', 1);
				update(ref(db, 'commands'), { sound_cus_12: 0 });
			}
			if (data.sound_cus_13 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/y2mate.com%20-%20Rick%20Astley%20%20Never%20Gonna%20Give%20You%20Up%20Official%20Music%20Video.mp3?v=1690939849518', 1);
				update(ref(db, 'commands'), { sound_cus_13: 0 });
			}
			if (data.sound_cus_14 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/y2mate.com%20-%20PSY%20%20GANGNAM%20STYLE%EA%B0%95%EB%82%A8%EC%8A%A4%ED%83%80%EC%9D%BC%20MV.mp3?v=1695466628055', 1);
				update(ref(db, 'commands'), { sound_cus_14: 0 });
			}
			if (data.sound_cus_15 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/10s%20Countdown.mp3?v=1699258643521', 1);
				update(ref(db, 'commands'), { sound_cus_15: 0 });
			}
			if (data.sound_cus_16 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/60s.mp3?v=1699258647337', 1);
				update(ref(db, 'commands'), { sound_cus_16: 0 });
			}
			if (data.sound_cus_17 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/RightObstacle.mp3?v=1699258655459', 1);
				update(ref(db, 'commands'), { sound_cus_17: 0 });
			}
			if (data.sound_cus_18 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/30s%20Countdown.mp3?v=1699258660660', 1);
				update(ref(db, 'commands'), { sound_cus_18: 0 });
			}
			if (data.sound_cus_19 == 1) {
				con.PlaySound('https://cdn.glitch.global/a7d5a62e-3fb6-4d15-a49b-bbf78da026bd/Start.mp3?v=1699284623172', 1);
				update(ref(db, 'commands'), { sound_cus_19: 0 });
			}

			if (data.sound_stop == 1) {
				con.StopAllSounds();
				update(ref(db, 'commands'), { sound_stop: 0 });
			}
		})

	}(window.CNKDCGV = window.CNKDCGV || {}));
});
