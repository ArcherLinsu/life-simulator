"use strict";
var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var config5 = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
            fill: false,
				}]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        spanGaps: false,
        elements: {
            line: {
                tension: 0.000001
            }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false,
                },
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                }
					}],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                }
					}]
        }
    }
};



window.onload = function () {

    var ctx5 = document.getElementById('linechartarea').getContext('2d');
    window.myLine2 = new Chart(ctx5, config5);


};

setInterval(function () {
    config5.data.datasets.forEach(function (dataset) {
        dataset.data = dataset.data.map(function () {
            return randomScalingFactor();
        });
    });

    window.myLine2.update();
}, 1500);


/* swiper control */
var mySwiper = new Swiper('.swiper-story', {
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 15
});
var mySwiper2 = new Swiper('.swiper-post', {
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

$(document).ready(function(){
    /* photos gallery */
    $('.grid').masonry({
         itemSelector: '.grid-item',
         percentPosition: true
    });
    
   
});
$(window).on("load resize", function () {
     $('.grid').masonry({
         itemSelector: '.grid-item',
         percentPosition: true
     });
 });
