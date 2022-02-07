let sliderAwardsLaunch = document.querySelectorAll('.slider-awards-launch__container');

if (sliderAwardsLaunch) {
	sliderAwardsLaunch.forEach((el) => {
		el = new Swiper(el, {
			slideClass: 'slide-awards-launch',
			slidesPerView: 1,
			speed: 800,
			spaceBetween: 15,
			pagination: {
				el: el.querySelector('.slider-awards-launch__pagging'),
				clickable: true,
				type: 'bullets',
			},
		})
	});
};

//===================================================================================================================

let slidersReviewsBlock = document.querySelectorAll('.reviews-block__slider');

let mysliderReviewsBlock = [];
if (slidersReviewsBlock) {
	function initialSliderReviewsBlock() {
		slidersReviewsBlock.forEach((el) => {
			mysliderReviewsBlock.push(
				new Swiper(el, {
					slideClass: 'slide-reviews-block',
					speed: 800,
					loop: true,
					pagination: {
						el: el.querySelector('.reviews-block__pagging'),
						clickable: true,
						type: 'bullets',
					},
					navigation: {
						nextEl: '.reviews-block__arrows .arrow-next',
						prevEl: '.reviews-block__arrows .arrow-prev',
					},
					breakpoints: {
						320: {
							spaceBetween: 31,
							slidesPerView: 1,
						},
						600: {
							spaceBetween: 0,
							slidesPerView: 1,
						},
						769: {
							slidesPerView: 1.5,
							spaceBetween: 0,
							loopAdditionalSlides: 1,
						},
						1025: {
							slidesPerView: 1.8,
							spaceBetween: 0,
							loopAdditionalSlides: 1,
						}
					}
				})
			)
		});
	};

	initialSliderReviewsBlock();
}



//===================================================================================================================


let sliderRatingBlock = document.querySelectorAll('.rating-block__slider');

if (sliderRatingBlock) {
	sliderRatingBlock.forEach((el) => {
		el = new Swiper(el, {
			slideClass: 'rating-block__slide',
			slidesPerView: 1,
			speed: 800,
			spaceBetween: 40,
			pagination: {
				el: el.querySelector('.rating-block__pagging'),
				clickable: true,
				type: 'fraction',
			},
			navigation: {
				nextEl: el.querySelector('.rating-block__navigation .arrow-next'),
				prevEl: el.querySelector('.rating-block__navigation .arrow-prev'),
			},
		})
	});
};

//===================================================================================================================


let sliderTeamGallery = document.querySelectorAll('.team-gallery__slider');

if (sliderTeamGallery) {
	sliderTeamGallery.forEach((el) => {
		el = new Swiper(el, {
			slideClass: 'team-gallery__slide',
			slidesPerView: 1,
			speed: 800,
			breakpoints: {
				320: {
					spaceBetween: 21,
				},
				480: {
					spaceBetween: 0,
				}
			},
			navigation: {
				nextEl: el.querySelector('.team-gallery__arrows .arrow-next'),
				prevEl: el.querySelector('.team-gallery__arrows .arrow-prev'),
			},
		})
	});

};

//===================================================================================================================


let sliderDiplomasBlock = document.querySelectorAll('.slider-diplomas__container');
if (sliderDiplomasBlock) {
	sliderDiplomasBlock.forEach((el) => {
		el = new Swiper(el, {
			slideClass: 'slide-diplomas',
			speed: 800,
			loop: true,
			slidesPerView: "auto",
			pagination: {
				el: el.querySelector('.slider-diplomas__pagging'),
				clickable: true,
				type: 'fraction',
			},
			navigation: {
				nextEl: el.querySelector('.slider-diplomas__nav .arrow-next'),
				prevEl: el.querySelector('.slider-diplomas__nav .arrow-prev'),
			},
			breakpoints: {
				320: {
					spaceBetween: 26,
				},
				480: {
					spaceBetween: 31,
				},
				850: {
					spaceBetween: 21,
				},
			},
		});
	});
};

//===================================================================================================================

let sliderAwardsWins = document.querySelectorAll('.thubms-awards-wins__container');
if (sliderAwardsWins) {
	sliderAwardsWins.forEach((el) => {
		el = new Swiper(el, {
			slideClass: 'thubms-awards-wins__slide',
			speed: 1000,
			slidesPerView: 1,
			effect: 'fade',
			// autoplay: {
			// 	delay: 2500,
			// 	disableOnInteraction: true,
			// },
			spaceBetween: 100,
			mousewheel: true,
			pagination: {
				el: el.querySelector('.thubms-awards-wins__pagging'),
				clickable: true,
				type: 'bullets',
			},
			breakpoints: {
				320: {
					autoHeight: true,
					direction: 'horizontal',
				},
				480: {
					autoHeight: true,
					direction: 'vertical',
				},
			},
			thumbs: {
				swiper: {
					el: '.slider-awards-wins__container',
					slideClass: 'slider-awards-wins__slide',
					speed: 1000,
					slidesPerView: 1,
					simulateTouch: false,
					effect: 'fade',
				}
			},
		});
	});

};

//===================================================================================================================

let slidersExperts = document.querySelectorAll('.team-management__slider');

let myExpertsSwiper = [];
if (slidersExperts) {
	function initialExpertsSlider() {
		slidersExperts.forEach((el) => {
			if (window.innerWidth <= 425) {
				myExpertsSwiper.push(
					new Swiper(el, {
						slideClass: 'experts-block__column',
						slidesPerView: 1,
						speed: 800,
						spaceBetween: 30,
						navigation: {
							nextEl: '.team-management__arrows .arrow-next',
							prevEl: '.team-management__arrows .arrow-prev',
						},
						pagination: {
							el: '.team-management__pagging',
							clickable: true,
							type: 'fraction',
						},
					})
				);
			} else if (el.classList.contains('swiper-container-initialized')) {
				myExpertsSwiper.forEach((slide) => slide.destroy());
				myExpertsSwiper = [];
			}
		});
	}

	initialExpertsSlider();




	window.addEventListener('resize', () => {
		myExpertsSwiper.forEach((slide) => slide.destroy());
		myExpertsSwiper = [];
		initialExpertsSlider();
	});
}

//===================================================================================================================

let slidersExpertsBlock = document.querySelectorAll('.experts-block__slider');

let myExpertsBlockSwiper = [];
if (slidersExpertsBlock) {
	function initialExpertsBlockSlider() {
		slidersExpertsBlock.forEach((el) => {
			if (window.innerWidth <= 425) {
				myExpertsBlockSwiper.push(
					new Swiper(el, {
						slideClass: 'experts-block__column',
						slidesPerView: 1,
						speed: 800,
						spaceBetween: 30,
						navigation: {
							nextEl: '.experts-block__arrows .arrow-next',
							prevEl: '.experts-block__arrows .arrow-prev',
						},
					})
				);
			} else if (el.classList.contains('swiper-container-initialized')) {
				myExpertsBlockSwiper.forEach((slide) => slide.destroy());
				myExpertsBlockSwiper = [];
			};
		});
	};

	initialExpertsBlockSlider();

	window.addEventListener('resize', () => {
		myExpertsBlockSwiper.forEach((slide) => slide.destroy());
		myExpertsBlockSwiper = [];
		initialExpertsBlockSlider();
	});

}


//===================================================================================================================

let slidersPartners = document.querySelectorAll('.partners-slider');

let myPartnersSwiper = [];
if (slidersPartners) {
	function initialPartnersSlider() {
		slidersPartners.forEach((el) => {
			if (window.innerWidth <= 768) {
				myPartnersSwiper.push(
					new Swiper(el, {
						slideClass: 'partners__slide',
						slidesPerView: 1,
						speed: 800,
						spaceBetween: 30,
						pagination: {
							el: '.partners__pagging',
							clickable: true,
							type: 'bullets',
						},
					})
				);
			} else if (el.classList.contains('swiper-container-initialized')) {
				myPartnersSwiper.forEach((slide) => slide.destroy());
				myPartnersSwiper = [];
			};
		});
	};

	initialPartnersSlider();

	window.addEventListener('resize', () => {
		initialPartnersSlider();
	});
}



//===================================================================================================================

let slidersPortfolioInside = document.querySelectorAll('.portfolio-inside__slider');

let myInsideSwiper = [];
if (slidersPortfolioInside) {
	function initialInsideSlider() {
		slidersPortfolioInside.forEach((el) => {
			if (window.innerWidth <= 599) {
				myInsideSwiper.push(
					new Swiper(el, {
						slideClass: 'slide-portfolio-inside',
						slidesPerView: 1,
						speed: 800,
						effect: "fade",
						autoHeight: true,
						loop: true,
						navigation: {
							nextEl: el.querySelector('.portfolio-inside__arrow-next'),
							prevEl: el.querySelector('.portfolio-inside__arrow-prev'),
						},
					})
				);
			} else if (el.classList.contains('swiper-container-initialized')) {
				myInsideSwiper.forEach((slide) => slide.destroy());
				myInsideSwiper = [];
			};
		});
	};

	initialInsideSlider();

	window.addEventListener('resize', () => {
		myInsideSwiper.forEach((slide) => slide.destroy());
		myInsideSwiper = [];
		initialInsideSlider();
	});
}



//===================================================================================================================

let slidersAchievements = document.querySelectorAll('.achievements__slider');
let myAchievementsSwiper = [];
if (slidersAchievements) {
	function initialAchievementsSlider() {
		slidersAchievements.forEach((el) => {
			if (window.innerWidth <= 649) {
				myAchievementsSwiper.push(
					new Swiper(el, {
						slideClass: 'achievements__column',
						slidesPerView: 1,
						speed: 800,
						spaceBetween: 40,
						loop: true,
						navigation: {
							nextEl: el.querySelector('.achievements__arrow-next'),
							prevEl: el.querySelector('.achievements__arrow-prev'),
						},
					})
				);
			} else if (el.classList.contains('swiper-container-initialized')) {
				myAchievementsSwiper.forEach((slide) => slide.destroy());
				myAchievementsSwiper = [];
			}
		})
	}

	initialAchievementsSlider();

	window.addEventListener('resize', () => {
		myAchievementsSwiper.forEach((slide) => slide.destroy());
		myAchievementsSwiper = [];
		initialAchievementsSlider();
	});

}



//===================================================================================================================

let slidersMainTeam = document.querySelectorAll('.slider-main-team__container');
let myMainTeamSwiper = [];
if (slidersMainTeam) {
	function initialMainTeamSlider() {
		slidersMainTeam.forEach((el) => {
			myMainTeamSwiper.push(
				new Swiper(el, {
					slideClass: 'slide-main-team',
					speed: 800,
					loop: true,
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						769: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						1025: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
					},
					navigation: {
						nextEl: el.querySelector('.slider-main-team__container .arrow-next'),
						prevEl: el.querySelector('.slider-main-team__container .arrow-prev'),
					},
				})
			);
		});
	};

	initialMainTeamSlider();

}


//===================================================================================================================

let mainSuccesSlidersOne = document.querySelector('.slider-main-succes__container--one');
let thumbsSuccesSlidersOne = document.querySelector('.thumbs-main-succes__container--one');
if (mainSuccesSlidersOne) {
	let myThumbsSuccesSlidersOne = new Swiper(thumbsSuccesSlidersOne, {
		// followFinger: false,
		// simulateTouch: false,
		allowTouchMove: false,
		speed: 1000,
		// freeMode: true,
		loop: true,
		// loopPreventsSlide: true,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		resizeObserver: true,
		// watchOverflow: true,
		// watchSlidesProgress: true,
		// watchSlidesVisibility: true,
		slideClass: 'thumb-main-succes--one',
		breakpoints: {
			320: {
				slidesPerView: 1,
				centeredSlides: false,
				loopAdditionalSlides: 1,
			},
			769: {
				centeredSlides: true,
				slidesPerView: 3,
				loopAdditionalSlides: 0,
			},
			1281: {
				centeredSlides: true,
				slidesPerView: 5,
				loopAdditionalSlides: 0,
			},
		},
		navigation: {
			nextEl: '.thumbs-main-succes__arrows--one .arrow-next',
			prevEl: '.thumbs-main-succes__arrows--one .arrow-prev',
		},
	});

	new Swiper(mainSuccesSlidersOne, {
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		slidesPerView: 1,
		followFinger: false,
		simulateTouch: false,
		speed: 1000,
		autoHeight: true,
		spaceBetween: 50,
		loop: true,
		breakpoints: {
			320: {
				loopAdditionalSlides: 1,
			},
			769: {
				loopAdditionalSlides: 0,
			}
		},
		// loopAdditionalSlides: 1,
		thumbs: {
			swiper: myThumbsSuccesSlidersOne,
		},
		navigation: {
			nextEl: myThumbsSuccesSlidersOne.navigation.nextEl,
			prevEl: myThumbsSuccesSlidersOne.navigation.prevEl,
		},
	});

};

//===================================================================================================================


let mainSuccesSlidersTwo = document.querySelector('.slider-main-succes__container--two');
let thumbsSuccesSlidersTwo = document.querySelector('.thumbs-main-succes__container--two');
if (mainSuccesSlidersTwo) {
	let myThumbsSuccesSlidersTwo = new Swiper(thumbsSuccesSlidersTwo, {
		// followFinger: false,
		// simulateTouch: false,
		allowTouchMove: false,
		speed: 1000,
		// freeMode: true,
		loop: true,
		// loopPreventsSlide: true,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		resizeObserver: true,
		// watchOverflow: true,
		// watchSlidesProgress: true,
		// watchSlidesVisibility: true,
		slideClass: 'thumb-main-succes--two',
		breakpoints: {
			320: {
				slidesPerView: 1,
				centeredSlides: false,
				loopAdditionalSlides: 1,
			},
			769: {
				centeredSlides: true,
				slidesPerView: 3,
				loopAdditionalSlides: 0,
			},
			1281: {
				centeredSlides: true,
				slidesPerView: 5,
				loopAdditionalSlides: 0,
			},
		},
		navigation: {
			nextEl: '.thumbs-main-succes__arrows--two .arrow-next',
			prevEl: '.thumbs-main-succes__arrows--two .arrow-prev',
		},
	});

	new Swiper(mainSuccesSlidersTwo, {
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		slidesPerView: 1,
		followFinger: false,
		simulateTouch: false,
		speed: 1000,
		autoHeight: true,
		spaceBetween: 50,
		loop: true,
		breakpoints: {
			320: {
				loopAdditionalSlides: 1,
			},
			769: {
				loopAdditionalSlides: 0,
			}
		},
		thumbs: {
			swiper: myThumbsSuccesSlidersTwo,
		},
		navigation: {
			nextEl: myThumbsSuccesSlidersTwo.navigation.nextEl,
			prevEl: myThumbsSuccesSlidersTwo.navigation.prevEl,
		},
	});

};
//===================================================================================================================



let contextCasesSlider = document.querySelector('.slider-context-cases__container');
let contextCasesThumbs = document.querySelector('.thumbs-context-cases__container');
if (contextCasesThumbs) {
	let myContextCasesThumbs = new Swiper(contextCasesThumbs, {
		// followFinger: false,
		// simulateTouch: false,
		speed: 800,
		// freeMode: true,
		centeredSlides: true,
		loop: true,
		direction: "vertical",
		// observer: true,
		// observeParents: true,
		// observeSlideChildren: true,
		// resizeObserver: true,
		// loopPreventsSlide: true,
		slidesPerView: 'auto',
		slideClass: 'thumb-context-cases',
		navigation: {
			nextEl: '.context-cases__nav .arrow-next',
			prevEl: '.context-cases__nav .arrow-prev',
		},
	});

	new Swiper(contextCasesSlider, {
		// observer: true,
		// observeParents: true,
		// observeSlideChildren: true,
		slideClass: 'slide-context-cases',
		slidesPerView: 1,
		// followFinger: false,
		// simulateTouch: false,
		speed: 800,
		spaceBetween: 50,
		loop: true,
		thumbs: {
			swiper: myContextCasesThumbs,
		},
		navigation: {
			nextEl: myContextCasesThumbs.navigation.nextEl,
			prevEl: myContextCasesThumbs.navigation.prevEl,
		},
		pagination: {
			el: '.context-cases__fraction',
			clickable: true,
			type: 'fraction',
		},
	});

};



let slidersPlanExpert = document.querySelectorAll('.plan-expert__slider');

if (slidersPlanExpert) {
	slidersPlanExpert.forEach((el) => {
		el = new Swiper(el, {
			slideClass: 'slide-plan-expert',
			speed: 800,
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
				nextEl: '.plan-expert__arrows .arrow-next',
				prevEl: '.plan-expert__arrows .arrow-prev',
			},
		})
	});
};



//==============================================




let complexPlanSlider = document.querySelector('.plan-mobile__slider');
let complexPlanThumbs = document.querySelector('.plan-mobile__thumbs');
if (complexPlanThumbs) {
	let mycomplexPlanThumbs = new Swiper(complexPlanThumbs, {
		speed: 800,
		slidesPerView: 4,
		slideClass: 'plan-mobile__thumb',
		navigation: {
			nextEl: '.plan-mobile__arrows .arrow-next',
			prevEl: '.plan-mobile__arrows .arrow-prev',
		},
	});

	new Swiper(complexPlanSlider, {
		slideClass: 'plan-mobile__slide',
		slidesPerView: 1,
		speed: 800,
		spaceBetween: 30,
		thumbs: {
			swiper: mycomplexPlanThumbs,
		},
		navigation: {
			nextEl: mycomplexPlanThumbs.navigation.nextEl,
			prevEl: mycomplexPlanThumbs.navigation.prevEl,
		},
	});
}

