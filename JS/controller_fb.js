import { getDatabase, ref, set, update, onValue, remove, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

$(function () {
	"use strict";

	window.CNKDCGV = window.CNKDCGV || {};

	(function (con) {
		const db = getDatabase();

		// Reset variables and commands

		const maxhang = 4;
		const maxcot = 14;

		var maxochu = 56;

		var play_giai_ma = false;

		remove(ref(db));

		update(ref(db, 'variables'), {
			spinning_miliseconds: 7500,
			//spinning_miliseconds: 10000,
			spinning_rotating_degree: 0,
			spinning_random_degree: 0,
			round: '',

			contestant_1_name: '',
			contestant_2_name: '',
			contestant_3_name: '',

			contestant_1_score_round: 0,
			contestant_2_score_round: 0,
			contestant_3_score_round: 0,

			contestant_1_score_total: 0,
			contestant_2_score_total: 0,
			contestant_3_score_total: 0,

			buzzer_toggle: 0,
			buzzer_status: 0,
			buzzer_number: 0,

			win_or_lose: 0
		})

		update(ref(db, 'variables/letters'), {
			category: '',
			hint: ''
		})

		for (var i = 1; i <= maxochu; i++) {
			update(ref(db, 'variables/letters/no_tonemark'), { ['letter_' + i]: '' })
			update(ref(db, 'variables/letters/having_tonemark'), { ['letter_' + i]: '' })
			update(ref(db, 'variables/letters/letter_existence'), { ['letter_' + i]: false })
			update(ref(db, 'variables/letters/status'), { ['letter_' + i]: 0 })
		}

		update(ref(db, 'commands'), {

		})

		// Get data

		onValue(ref(db, 'variables'), (snapshot) => {
			const data = snapshot.val();

			if (data.buzzer_status == 1) {
				$('#tossup_buzzer').click();
				update(ref(db, 'variables'), { buzzer_status: 0 })
			}

			if (data.buzzer_number != 0 && data.buzzer_number != undefined) {
				$('.buzzer_player').html(data.buzzer_number + '. ' + eval('data.contestant_' + data.buzzer_number + '_name'));
			}
			else {
				$('.buzzer_player').html('');
			}
		})

		onValue(ref(db, 'variables/letters'), (snapshot) => {
			const data = snapshot.val();

			$('#qi_category').html(data.category);
			$('#qi_hint').html(data.hint);
		})

		onValue(ref(db, 'commands'), (snapshot) => {
			const data = snapshot.val();


			// Button Function using Commands Data
		})

		// Button Function

		$('button[name="autocmd"]').click(function () {
			update(ref(db, 'commands'), { [this.id]: 1 })
		})
		$('button[name="autocmd_class"]').click(function () {
			update(ref(db, 'commands'), { [this.className]: 1 })
		})

		$('.change_wheel').click(function () {
			$('.change_wheel').removeAttr('disabled');
			$('#' + this.id).attr('disabled', true);
		})

		$('.change_wheel_back').click(function () {
			$('.change_wheel_back').removeAttr('disabled');
			$('#' + this.id).attr('disabled', true);
		})

		$('#spin').click(function () {
			update(ref(db, 'variables'), { spinning_random_degree: Math.floor(Math.random() * 1250 + 1251) })
		})

		$('.select_round').click(function () {
			$('.select_round').removeAttr('disabled');
			$('#' + this.id).attr('disabled', true);
			if (this.id == 'sr_t1') {
				round = 'tossup_1';
			}
			if (this.id == 'sr_t2') {
				round = 'tossup_2';
			}
			if (this.id == 'sr_1') {
				round = 'round_1';
			}
			if (this.id == 'sr_2') {
				round = 'round_2';
			}
			if (this.id == 'sr_3') {
				round = 'round_3';
			}
			if (this.id == 'sr_tt1') {
				round = 'triple_tossup_1';
			}
			if (this.id == 'sr_tt2') {
				round = 'triple_tossup_2';
			}
			if (this.id == 'sr_tt3') {
				round = 'triple_tossup_3';
			}
			if (this.id == 'sr_4') {
				round = 'round_4';
			}
			if (this.id == 'sr_fs') {
				round = 'final_spin';
			}
			if (this.id == 'sr_tb') {
				round = 'tiebreak';
			}
			if (this.id == 'sr_a') {
				round = 'audience_round';
			}
			if (this.id == 'sr_b') {
				round = 'bonus_round';
			}
			update(ref(db, 'variables'), { round: round })
			$('#get_questions_file').val(null);
			$('#get_questions_file').click();
		})

		$('#get_questions_file').on("change", function (e) {

			for (var i = 1; i <= maxochu; i++) {
				update(ref(db, 'variables/letters/status'), { ['letter_' + i]: 0 })
			}
			play_giai_ma = false;

			var file = e.target.files[0];
			var reader = new FileReader();
			reader.onload = function (e) {
				var data = e.target.result;
				var workbook = XLSX.read(e.target.result);
				var sheet = workbook.Sheets[workbook.SheetNames[0]];

				if (round == 'tossup_1') {
					category = sheet['D5'].v;
					hint = sheet['D6'].v;
				}
				if (round == 'tossup_2') {
					category = sheet['D18'].v;
					hint = sheet['D19'].v;
				}
				if (round == 'triple_tossup_1') {
					category = sheet['D32'].v;
					hint = sheet['D33'].v;
				}
				if (round == 'triple_tossup_2') {
					category = sheet['D45'].v;
					hint = sheet['D46'].v;
				}
				if (round == 'triple_tossup_3') {
					category = sheet['D58'].v;
					hint = sheet['D59'].v;
				}
				if (round == 'tiebreak') {
					category = sheet['D72'].v;
					hint = sheet['D73'].v;
				}
				if (round == 'round_1') {
					category = sheet['D85'].v;
					hint = sheet['D86'].v;
				}
				if (round == 'round_2') {
					category = sheet['D98'].v;
					hint = sheet['D99'].v;
				}
				if (round == 'round_3') {
					category = sheet['D111'].v;
					hint = sheet['D112'].v;
				}
				if (round == 'round_4') {
					category = sheet['D124'].v;
					hint = sheet['D125'].v;
				}
				if (round == 'final_spin') {
					category = sheet['D137'].v;
					hint = sheet['D138'].v;
				}
				if (round == 'audience_round') {
					category = sheet['D150'].v;
					hint = sheet['D151'].v;
				}
				if (round == 'bonus_round') {
					category = sheet['D163'].v;
					hint = sheet['D164'].v;
				}
				update(ref(db, 'variables/letters'), {
					category: category,
					hint: hint
				})

				letters = [];

				for (var i = 1; i <= maxochu; i++) {
					letters.push({
						no_tonemark: '',
						having_tonemark: '',
						letter_existence: false,
						status: 0
					})
				}

				for (var j = 65; j <= 65 + maxcot - 1; j++) {
					for (var i = 1; i <= 4; i++) {
						var d;
						var e;
						var f;

						if (round == 'tossup_1') {
							d = sheet[String.fromCharCode(j) + (i + 7)].v;
							e = sheet[String.fromCharCode(j) + (i + 12)].v;
							if (d != '.' && e != '.') {
								f = true;
							}
							else {
								f = false;
							}
							var id = (j - 64 + (maxcot - 1) * (i - 1) + i - 1);
							update(ref(db, 'variables/letters/no_tonemark'), { ['letter_' + id]: d })
							update(ref(db, 'variables/letters/having_tonemark'), { ['letter_' + id]: e })
							update(ref(db, 'variables/letters/letter_existence'), { ['letter_' + id]: f })
							letters[id - 1].no_tonemark = d;
							letters[id - 1].having_tonemark = e;
							letters[id - 1].letter_existence = f;
							if (d == '$') {
								play_giai_ma = true;
							}
							letters[id - 1].status = 0;
						}
						if (round == 'tossup_2') {
							d = sheet[String.fromCharCode(j) + (i + 20)].v;
							e = sheet[String.fromCharCode(j) + (i + 25)].v;
							if (d != '.' && e != '.') {
								f = true;
							}
							else {
								f = false;
							}
							var id = (j - 64 + (maxcot - 1) * (i - 1) + i - 1);
							update(ref(db, 'variables/letters/no_tonemark'), { ['letter_' + id]: d })
							update(ref(db, 'variables/letters/having_tonemark'), { ['letter_' + id]: e })
							update(ref(db, 'variables/letters/letter_existence'), { ['letter_' + id]: f })
							letters[id - 1].no_tonemark = d;
							letters[id - 1].having_tonemark = e;
							letters[id - 1].letter_existence = f;
							if (d == '$') {
								play_giai_ma = true;
							}
							letters[id - 1].status = 0;
						}
						if (round == 'triple_tossup_1') {
							d = sheet[String.fromCharCode(j) + (i + 34)].v;
							e = sheet[String.fromCharCode(j) + (i + 39)].v;
							if (d != '.' && e != '.') {
								f = true;
							}
							else {
								f = false;
							}
							var id = (j - 64 + (maxcot - 1) * (i - 1) + i - 1);
							update(ref(db, 'variables/letters/no_tonemark'), { ['letter_' + id]: d })
							update(ref(db, 'variables/letters/having_tonemark'), { ['letter_' + id]: e })
							update(ref(db, 'variables/letters/letter_existence'), { ['letter_' + id]: f })
							letters[id - 1].no_tonemark = d;
							letters[id - 1].having_tonemark = e;
							letters[id - 1].letter_existence = f;
							if (d == '$') {
								play_giai_ma = true;
							}
							letters[id - 1].status = 0;
						}
						if (round == 'triple_tossup_2') {
							d = sheet[String.fromCharCode(j) + (i + 47)].v;
							e = sheet[String.fromCharCode(j) + (i + 52)].v;
							if (d != '.' && e != '.') {
								f = true;
							}
							else {
								f = false;
							}
							var id = (j - 64 + (maxcot - 1) * (i - 1) + i - 1);
							update(ref(db, 'variables/letters/no_tonemark'), { ['letter_' + id]: d })
							update(ref(db, 'variables/letters/having_tonemark'), { ['letter_' + id]: e })
							update(ref(db, 'variables/letters/letter_existence'), { ['letter_' + id]: f })
							letters[id - 1].no_tonemark = d;
							letters[id - 1].having_tonemark = e;
							letters[id - 1].letter_existence = f;
							if (d == '$') {
								play_giai_ma = true;
							}
							letters[id - 1].status = 0;
						}
						if (round == 'triple_tossup_3') {
							d = sheet[String.fromCharCode(j) + (i + 60)].v;
							e = sheet[String.fromCharCode(j) + (i + 65)].v;
							if (d != '.' && e != '.') {
								f = true;
							}
							else {
								f = false;
							}
							var id = (j - 64 + (maxcot - 1) * (i - 1) + i - 1);
							update(ref(db, 'variables/letters/no_tonemark'), { ['letter_' + id]: d })
							update(ref(db, 'variables/letters/having_tonemark'), { ['letter_' + id]: e })
							update(ref(db, 'variables/letters/letter_existence'), { ['letter_' + id]: f })
							letters[id - 1].no_tonemark = d;
							letters[id - 1].having_tonemark = e;
							letters[id - 1].letter_existence = f;
							if (d == '$') {
								play_giai_ma = true;
							}
							letters[id - 1].status = 0;
						}
						if (round == 'tiebreak') {
							d = sheet[String.fromCharCode(j) + (i + 74)].v;
							e = sheet[String.fromCharCode(j) + (i + 79)].v;
							if (d != '.' && e != '.') {
								f = true;
							}
							else {
								f = false;
							}
							var id = (j - 64 + (maxcot - 1) * (i - 1) + i - 1);
							update(ref(db, 'variables/letters/no_tonemark'), { ['letter_' + id]: d })
							update(ref(db, 'variables/letters/having_tonemark'), { ['letter_' + id]: e })
							update(ref(db, 'variables/letters/letter_existence'), { ['letter_' + id]: f })
							letters[id - 1].no_tonemark = d;
							letters[id - 1].having_tonemark = e;
							letters[id - 1].letter_existence = f;
							if (d == '$') {
								play_giai_ma = true;
							}
							letters[id - 1].status = 0;
						}
						if (round == 'round_1') {
							d = sheet[String.fromCharCode(j) + (i + 87)].v;
							e = sheet[String.fromCharCode(j) + (i + 92)].v;
							if (d != '.' && e != '.') {
								f = true;
							}
							else {
								f = false;
							}
							var id = (j - 64 + (maxcot - 1) * (i - 1) + i - 1);
							update(ref(db, 'variables/letters/no_tonemark'), { ['letter_' + id]: d })
							update(ref(db, 'variables/letters/having_tonemark'), { ['letter_' + id]: e })
							update(ref(db, 'variables/letters/letter_existence'), { ['letter_' + id]: f })
							letters[id - 1].no_tonemark = d;
							letters[id - 1].having_tonemark = e;
							letters[id - 1].letter_existence = f;
							if (d == '$') {
								play_giai_ma = true;
							}
							letters[id - 1].status = 0;
						}
						if (round == 'round_2') {
							d = sheet[String.fromCharCode(j) + (i + 100)].v;
							e = sheet[String.fromCharCode(j) + (i + 105)].v;
							if (d != '.' && e != '.') {
								f = true;
							}
							else {
								f = false;
							}
							var id = (j - 64 + (maxcot - 1) * (i - 1) + i - 1);
							update(ref(db, 'variables/letters/no_tonemark'), { ['letter_' + id]: d })
							update(ref(db, 'variables/letters/having_tonemark'), { ['letter_' + id]: e })
							update(ref(db, 'variables/letters/letter_existence'), { ['letter_' + id]: f })
							letters[id - 1].no_tonemark = d;
							letters[id - 1].having_tonemark = e;
							letters[id - 1].letter_existence = f;
							if (d == '$') {
								play_giai_ma = true;
							}
							letters[id - 1].status = 0;
						}
						if (round == 'round_3') {
							d = sheet[String.fromCharCode(j) + (i + 113)].v;
							e = sheet[String.fromCharCode(j) + (i + 118)].v;
							if (d != '.' && e != '.') {
								f = true;
							}
							else {
								f = false;
							}
							var id = (j - 64 + (maxcot - 1) * (i - 1) + i - 1);
							update(ref(db, 'variables/letters/no_tonemark'), { ['letter_' + id]: d })
							update(ref(db, 'variables/letters/having_tonemark'), { ['letter_' + id]: e })
							update(ref(db, 'variables/letters/letter_existence'), { ['letter_' + id]: f })
							letters[id - 1].no_tonemark = d;
							letters[id - 1].having_tonemark = e;
							letters[id - 1].letter_existence = f;
							if (d == '$') {
								play_giai_ma = true;
							}
							letters[id - 1].status = 0;
						}
						if (round == 'round_4') {
							d = sheet[String.fromCharCode(j) + (i + 126)].v;
							e = sheet[String.fromCharCode(j) + (i + 131)].v;
							if (d != '.' && e != '.') {
								f = true;
							}
							else {
								f = false;
							}
							var id = (j - 64 + (maxcot - 1) * (i - 1) + i - 1);
							update(ref(db, 'variables/letters/no_tonemark'), { ['letter_' + id]: d })
							update(ref(db, 'variables/letters/having_tonemark'), { ['letter_' + id]: e })
							update(ref(db, 'variables/letters/letter_existence'), { ['letter_' + id]: f })
							letters[id - 1].no_tonemark = d;
							letters[id - 1].having_tonemark = e;
							letters[id - 1].letter_existence = f;
							if (d == '$') {
								play_giai_ma = true;
							}
							letters[id - 1].status = 0;
						}
						if (round == 'final_spin') {
							d = sheet[String.fromCharCode(j) + (i + 139)].v;
							e = sheet[String.fromCharCode(j) + (i + 144)].v;
							if (d != '.' && e != '.') {
								f = true;
							}
							else {
								f = false;
							}
							var id = (j - 64 + (maxcot - 1) * (i - 1) + i - 1);
							update(ref(db, 'variables/letters/no_tonemark'), { ['letter_' + id]: d })
							update(ref(db, 'variables/letters/having_tonemark'), { ['letter_' + id]: e })
							update(ref(db, 'variables/letters/letter_existence'), { ['letter_' + id]: f })
							letters[id - 1].no_tonemark = d;
							letters[id - 1].having_tonemark = e;
							letters[id - 1].letter_existence = f;
							if (d == '$') {
								play_giai_ma = true;
							}
							letters[id - 1].status = 0;
						}
						if (round == 'audience_round') {
							d = sheet[String.fromCharCode(j) + (i + 152)].v;
							e = sheet[String.fromCharCode(j) + (i + 157)].v;
							if (d != '.' && e != '.') {
								f = true;
							}
							else {
								f = false;
							}
							var id = (j - 64 + (maxcot - 1) * (i - 1) + i - 1);
							update(ref(db, 'variables/letters/no_tonemark'), { ['letter_' + id]: d })
							update(ref(db, 'variables/letters/having_tonemark'), { ['letter_' + id]: e })
							update(ref(db, 'variables/letters/letter_existence'), { ['letter_' + id]: f })
							letters[id - 1].no_tonemark = d;
							letters[id - 1].having_tonemark = e;
							letters[id - 1].letter_existence = f;
							if (d == '$') {
								play_giai_ma = true;
							}
							letters[id - 1].status = 0;
						}
						if (round == 'bonus_round') {
							d = sheet[String.fromCharCode(j) + (i + 165)].v;
							e = sheet[String.fromCharCode(j) + (i + 170)].v;
							if (d != '.' && e != '.') {
								f = true;
							}
							else {
								f = false;
							}
							var id = (j - 64 + (maxcot - 1) * (i - 1) + i - 1);
							update(ref(db, 'variables/letters/no_tonemark'), { ['letter_' + id]: d })
							update(ref(db, 'variables/letters/having_tonemark'), { ['letter_' + id]: e })
							update(ref(db, 'variables/letters/letter_existence'), { ['letter_' + id]: f })
							letters[id - 1].no_tonemark = d;
							letters[id - 1].having_tonemark = e;
							letters[id - 1].letter_existence = f;
							if (d == '$') {
								play_giai_ma = true;
							}
							letters[id - 1].status = 0;
						}
					}
				}
			};
			reader.readAsArrayBuffer(file);
			setTimeout(function () {
				$('.open_letter').css({ 'background-color': 'black' });
				$('.open_letter, #puzzle_solve').attr('disabled', true);
				$('#puzzle_reveal').removeAttr('disabled');
				$('#puzzle_giaima').attr('disabled', true);
				$('.open_letter').html('').css('border-color', 'initial');
				for (var i = 1; i <= maxochu; i++) {
					if (letters[i - 1].letter_existence == true) {
						$('#ol_' + i).html(letters[i - 1].having_tonemark);
						if (letters[i - 1].no_tonemark == '$') {
							$('#ol_' + i).css('border-color', 'aqua');
						}
					}
				}
			}, 250)
		})

		$('#reset_puzzleboard_data').click(function () {
			update(ref(db, 'variables/letters'), {
				category: '',
				hint: ''
			})
			for (var i = 1; i <= maxochu; i++) {
				letters.push({
					no_tonemark: '',
					having_tonemark: '',
					letter_existence: false,
					status: 0
				})
				update(ref(db, 'variables/letters/no_tonemark'), { ['letter_' + i]: '' })
				update(ref(db, 'variables/letters/having_tonemark'), { ['letter_' + i]: '' })
				update(ref(db, 'variables/letters/letter_existence'), { ['letter_' + i]: false })
				update(ref(db, 'variables/letters/status'), { ['letter_' + i]: 0 })
			}
			$('.open_letter').html('').css('border-color', 'initial');
			$('.select_round').removeAttr('disabled');
			$('#puzzle_giaima').attr('disabled', true);
			$('.open_letter, #puzzle_reveal, #puzzle_solve').attr('disabled', true);
			$('.open_letter').css({ 'background-color': 'black' });
		})

		$('#puzzle_reveal').click(function () {
			$('#puzzle_reveal').attr('disabled', true);
			$('#puzzle_solve').removeAttr('disabled');
			if (play_giai_ma == false) {
				$('#puzzle_giaima').attr('disabled', true);
			}
			else {
				$('#puzzle_giaima').removeAttr('disabled');
				/*
				setTimeout(function(){
					update(ref(db, 'commands'), { sound_giaima : 1 })
				}, 2000);
				*/
			}
			for (var i = 1; i <= maxochu; i++) {
				if (letters[i - 1].letter_existence == true) {
					if (letters[i - 1].no_tonemark == '$') {
						letters[i - 1].status = 5;
						update(ref(db, 'variables/letters/status'), { ['letter_' + i]: 5 })
					}
					else {
						letters[i - 1].status = 1;
						update(ref(db, 'variables/letters/status'), { ['letter_' + i]: 1 })
						$('#ol_' + i).removeAttr('disabled');
					}
				}
			}
			if (round == 'bonus_round') {
				win_or_lose = 0;
				update(ref(db, 'variables'), { win_or_lose: win_or_lose })
			}
		})
		$('#puzzle_solve').click(function () {
			$('.open_letter, #puzzle_solve, #tossup_buzzer, #tossup_continue').attr('disabled', true);
			for (var i = 1; i <= maxochu; i++) {
				if (letters[i - 1].letter_existence == true && letters[i - 1].status != 5) {
					letters[i - 1].status = 4;
					update(ref(db, 'variables/letters/status'), { ['letter_' + i]: 4 })
				}
			}
			clearInterval(tossup_int)
			tossup_boolean = false;
			update(ref(db, 'variables'), {
				buzzer_toggle: 0,
				buzzer_status: 0,
				buzzer_number: 0
			})
			if (round == 'bonus_round' && win_or_lose == 0) {
				win_or_lose = 1;
				update(ref(db, 'variables'), { win_or_lose: win_or_lose })
			}
			if (round == "bonus_round") {
				$("#puzzle_back_3").click();
			}
		})
		$("#puzzle_giaima").click(function () {
			$('.open_letter, #puzzle_solve, #tossup_buzzer, #tossup_continue, #puzzle_giaima').attr('disabled', true);
			for (var i = 1; i <= maxochu; i++) {
				if (letters[i - 1].letter_existence == true && letters[i - 1].status == 5) {
					letters[i - 1].status = 4;
					update(ref(db, 'variables/letters/status'), { ['letter_' + i]: 4 })
				}
			}
		})

		$('#sound_br_10s').click(function () {
			setTimeout(function () {
				if (round == 'bonus_round' && win_or_lose == 0) {
					win_or_lose = 2;
					update(ref(db, 'variables'), { win_or_lose: win_or_lose })
				}
			}, 10000)
		})

		$('.open_letter').click(function () {
			if (round == 'tossup_1' || round == 'tossup_2' || round == 'triple_tossup_1' || round == 'triple_tossup_2' || round == 'triple_tossup_3') {
				if (letters[Number(this.id.replace('ol_', '')) - 1].status == 1) {
					letters[Number(this.id.replace('ol_', '')) - 1].status = 3;
					update(ref(db, 'variables/letters/status'), { ['letter_' + this.id.replace('ol_', '')]: 3 })
					$('.open_letter').attr('disabled', true);
					$('#tossup_buzzer').removeAttr('disabled');

					update(ref(db, 'variables'), { buzzer_toggle: 1 })
					update(ref(db, 'commands'), { play_vid_puzzle_tossup: 1 })

					tossup_boolean = true;
					var counter;
					tossup_int = setInterval(function () {
						if (tossup_boolean == true) {
							counter = 0;
							for (var i = 1; i <= maxochu; i++) {
								if (letters[i - 1].status == 0 || letters[i - 1].status == 3) {
									counter++;
								}
							}
							if (counter == maxochu) {
								clearInterval(tossup_int)
								tossup_boolean = false;
								// update(ref(db, 'variables'), { buzzer_toggle: 0 })
							}
							else {
								var g = Math.floor(Math.random() * maxochu) + 1;
								while (letters[g - 1].status != 1) {
									g = Math.floor(Math.random() * maxochu) + 1;
								}
								letters[g - 1].status = 3;
								update(ref(db, 'variables/letters/status'), { ['letter_' + g]: 3 })
							}
						}
					}, 1000)
				}
			}
			else {
				if (letters[Number(this.id.replace('ol_', '')) - 1].status == 1) {
					letters[Number(this.id.replace('ol_', '')) - 1].status = 2;
					update(ref(db, 'variables/letters/status'), { ['letter_' + this.id.replace('ol_', '')]: 2 })
					$('#' + this.id).css({ 'background-color': '#23395D' });
					update(ref(db, 'commands'), { sound_letter: 1 })
				}
				else if (letters[Number(this.id.replace('ol_', '')) - 1].status == 2) {
					letters[Number(this.id.replace('ol_', '')) - 1].status = 3;
					update(ref(db, 'variables/letters/status'), { ['letter_' + this.id.replace('ol_', '')]: 3 })
					$('#' + this.id).css({ 'background-color': 'black' });
					$('#' + this.id).attr('disabled', true);
				}
			}
		})

		$('#tossup_buzzer').click(function () {
			$('#tossup_buzzer').attr('disabled', true);
			$('#tossup_continue').removeAttr('disabled');
			tossup_boolean = false;
			update(ref(db, 'variables'), { buzzer_toggle: 0 })
		})

		$('#tossup_continue').click(function () {
			$('#tossup_continue').attr('disabled', true);
			$('#tossup_buzzer').removeAttr('disabled');
			tossup_boolean = true;
			update(ref(db, 'variables'), {
				buzzer_toggle: 1,
				buzzer_number: 0

			})
		})

		$('.add_wedge_tag').click(function () {
			if ($('#' + this.id).css('background-color') == 'rgb(0, 0, 0)') {
				$('#' + this.id).css('background-color', 'rgb(35, 57, 93)');
				update(ref(db, 'commands'), { [this.id]: 1 })
			}
			else if ($('#' + this.id).css('background-color') == 'rgb(35, 57, 93)') {
				$('#' + this.id).css('background-color', 'rgb(0, 0, 0)');
				update(ref(db, 'commands'), { [this.id]: 0 })
			}
		})
		$('#reset_wedges_tags').click(function () {
			$('.add_wedge_tag').css('background-color', 'rgb(0, 0, 0)');
		})

		$('#reveal_backdrop').click(function () {
			$('#reveal_backdrop').attr('disabled', true);
			$('#hide_backdrop').removeAttr('disabled');
		})
		$('#hide_backdrop').click(function () {
			$('#hide_backdrop').attr('disabled', true);
			$('#reveal_backdrop').removeAttr('disabled');
		})

		$('#update_names').click(function () {
			update(ref(db, 'variables'), {
				contestant_1_name: $('#cn_1').val(),
				contestant_2_name: $('#cn_2').val(),
				contestant_3_name: $('#cn_3').val(),
				ket_sat_property: $('.ket_sat_property').val()
			})
		})

		$('#add_to_round').click(function () {
			$('#csr_1').html(Number($('#csr_1').val()) + Number($('#csi_1').val()));
			$('#csr_2').html(Number($('#csr_2').val()) + Number($('#csi_2').val()));
			$('#csr_3').html(Number($('#csr_3').val()) + Number($('#csi_3').val()));
		})

		$('#subtract_from_round').click(function () {
			$('#csr_1').html(Number($('#csr_1').val()) - Number($('#csi_1').val()));
			$('#csr_2').html(Number($('#csr_2').val()) - Number($('#csi_2').val()));
			$('#csr_3').html(Number($('#csr_3').val()) - Number($('#csi_3').val()));
		})

		$('#replace_round').click(function () {
			$('#csr_1').html(Number($('#csi_1').val()));
			$('#csr_2').html(Number($('#csi_2').val()));
			$('#csr_3').html(Number($('#csi_3').val()));
		})

		$('#reset_round').click(function () {
			$('#csr_1').html(0);
			$('#csr_2').html(0);
			$('#csr_3').html(0);
		})

		$('#add_to_total').click(function () {
			$('#cst_1').html(Number($('#cst_1').val()) + Number($('#csr_1').val()));
			$('#cst_2').html(Number($('#cst_2').val()) + Number($('#csr_2').val()));
			$('#cst_3').html(Number($('#cst_3').val()) + Number($('#csr_3').val()));
		})

		$('#subtract_from_total').click(function () {
			$('#cst_1').html(Number($('#cst_1').val()) - Number($('#csr_1').val()));
			$('#cst_2').html(Number($('#cst_2').val()) - Number($('#csr_2').val()));
			$('#cst_3').html(Number($('#cst_3').val()) - Number($('#csr_3').val()));
		})

		$('#replace_total').click(function () {
			$('#cst_1').html(Number($('#csr_1').val()));
			$('#cst_2').html(Number($('#csr_2').val()));
			$('#cst_3').html(Number($('#csr_3').val()));
		})

		$('#reset_total').click(function () {
			$('#cst_1').html(0);
			$('#cst_2').html(0);
			$('#cst_3').html(0);
		})

		$("#reset_input").click(function () {
			$(".contestant_score_input").val(0);
		});
		$('.update_round_score').click(function () {
			update(ref(db, 'variables'), {
				contestant_1_score_round: $('#csr_1').val(),
				contestant_2_score_round: $('#csr_2').val(),
				contestant_3_score_round: $('#csr_3').val()
			})
		})
		$('.update_total_score').click(function () {
			update(ref(db, 'variables'), {
				contestant_1_score_total: $('#cst_1').val(),
				contestant_2_score_total: $('#cst_2').val(),
				contestant_3_score_total: $('#cst_3').val()
			})
		})

		$("#puzzle_back_1").click(function () {
			$("#puzzle_back_1, #puzzle_back_2, #puzzle_back_3").removeAttr("disabled");
			$("#puzzle_back_1").attr("disabled", true);
		});
		$("#puzzle_back_2").click(function () {
			$("#puzzle_back_1, #puzzle_back_2, #puzzle_back_3").removeAttr("disabled");
			$("#puzzle_back_2").attr("disabled", true);
		});
		$("#puzzle_back_3").click(function () {
			$("#puzzle_back_1, #puzzle_back_2, #puzzle_back_3").removeAttr("disabled");
			$("#puzzle_back_3").attr("disabled", true);
		});

		// Action

		$('#cw_v1').click();
		$('#cwb_main').click();
		$('#reset_wedges_tags').click();
		$('#hide_backdrop').click();
		$('#puzzle_back_1').click();

		$('.open_letter, #puzzle_reveal, #puzzle_solve, #tossup_buzzer, #tossup_continue, .contestant_score_round, .contestant_score_total, .question_info, .buzzer_player').attr('disabled', true);

		for (var i = 1; i <= maxochu; i++) {
			letters.push({
				no_tonemark: '',
				having_tonemark: '',
				letter_existence: false,
				status: 0
			})
		}

	}(window.CNKDCGV = window.CNKDCGV || {}));
});