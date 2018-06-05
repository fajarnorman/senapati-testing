$(document).ready(function(){
	$('.list-content-promo').slick({
		infinite: true,
		arrows: false,
		dots: false,
		slidesToScroll: 1,
		variableWidth: true
	});

	if($('.rating').length == 1){
		$('.rating').rating();
	}
	
	$('.show-filter').on('click', function(e){
		e.preventDefault();
		$('.hero').find('.form-filter').toggleClass('show-filter');
		$(this).toggleClass('open');
		if($(this).hasClass('open')){
			$(this).text('Sembunyikan Filter');
		}else{
			$(this).text('Tampilkan Filter');
		}
	});

	$('.booking-status').on('click', function(e){
		e.preventDefault();
		$('.booking-status-content').toggleClass('open');
	});

	$('.slider-paket').slick({
		infinite: false,
		arrows: true,
		dots: false,
		slidesToScroll: 1
	});

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		e.target // newly activated tab
		e.relatedTarget // previous active tab
		$('.itenary-gallery').slick({
			infinite: true,
			arrows: false,
			dots: false,
			slidesToScroll: 1,
			variableWidth: true
		});
	});

	$('.signin-profile').on('click', function(e){
		e.preventDefault();
		$('.sign-tool-tips').toggleClass('open');
	});

	$('.datepicker-input').datepicker({
	    autoclose: true,
	    format: 'dd/MM/yyyy'
	});

	$('.custom-image-per').on('click',function(e){
		e.preventDefault();
		$('#custom-image-per').click();
	});

	$('#custom-image-per').on('change', function(){
		readUrl(this);
	});

	function readUrl(input){
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$('.custom-image-per .img').css('background-image', 'url('+e.target.result+')');
			}
			reader.readAsDataURL(input.files[0]);
		}
	}

	$('.modal').on('shown.bs.modal', function () {
		$('.rating').rating();
	});

	$('.package-modal').on('click', function(){
		$('#modal-pilih-paket').modal('show');
	});

	$(document).on('click', '.trigger-paket', function(e){
		e.preventDefault();
		var value = $('.list-paket .value-paket:checked').val();
		$('.package-modal').val(value);
		$('#modal-pilih-paket').modal('hide');
	});

	$(document).on('click', '.accordion-click', function(e){
		e.preventDefault();
		var parent = $(this).closest('.item-dropdown');
		parent.toggleClass('open');
		parent.find('.content-dropdown').slideToggle();
	});


	var substringMatcher = function(strs) {
		return function findMatches(q, cb) {
			var matches, substringRegex;

			// an array that will be populated with substring matches
			matches = [];

			// regex used to determine if a string contains the substring `q`
			substrRegex = new RegExp(q, 'i');

			// iterate through the pool of strings and for any string that
			// contains the substring `q`, add it to the `matches` array
			$.each(strs, function(i, str) {
				if (substrRegex.test(str)) {
					matches.push(str);
				}
			});

			cb(matches);
		};
	};

	var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
	'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
	'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
	'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
	'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
	'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
	'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
	'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
	'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
	];

	$('.typeahead').typeahead({
		hint: true,
		minLength: 1
	},
	{
		name: 'states',
		source: substringMatcher(states)
	});

	$(document).on('click', '.tt-suggestion', function(e){
		e.preventDefault();
		$('.tt-suggestion').removeClass('actived');
		$(this).addClass('actived');
	});

});