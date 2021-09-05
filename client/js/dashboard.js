"use strict";
var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var config1 = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        datasets: [{
            label: 'My First dataset',
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
            label: 'My Second dataset',

            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            point: {
                radius: 0
            }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart - Stacked Area'
        },
        tooltips: {
            mode: 'index',
        },
        hover: {
            mode: 'index'
        },
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                }
                    }],
            yAxes: [{
                display: false,
                stacked: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                }
                    }]
        }
    }
};

var randomScalingFactor = function () {
    return Math.ceil(Math.random() * 10.0) * Math.pow(10, Math.ceil(Math.random() * 5));
};

var config2 = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            fill: false,
            data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }, {
            label: 'My Second dataset',
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            fill: false,
            data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            point: {
                radius: 0
            }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart - Logarithmic'
        },

        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false,
                },
                display: true,
                    }],
            yAxes: [{
                ticks: {
                    display: false,
                },
                display: false,
                type: 'logarithmic',
                    }]
        }
    }
};

var color = Chart.helpers.color;
var barChartData1 = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Raw Material',
        backgroundColor: color(window.chartColors.red).alpha(1).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, {
        label: 'Manufactured',
        backgroundColor: color(window.chartColors.blue).alpha(1).rgbString(),
        borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }]

};
var config3 = {
    type: 'bar',
    data: barChartData1,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
            }
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart'
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false,
                },
                display: true,
                    }],
            yAxes: [{
                ticks: {
                    display: false,
                },
                display: false,
                type: 'logarithmic',
                    }]
        }
    }
};

var config4 = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
            backgroundColor: ['#ffffff', 'rgba(255,255,255,0.5)'],
            borderWidth: 0,
            label: 'Dataset 1'
                }],
        labels: {
            display: false,
        }
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
};

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
    var ctx1 = document.getElementById('mixedchartjs').getContext('2d');
    window.myLine = new Chart(ctx1, config1);


    var ctx3 = document.getElementById('barcharts').getContext('2d');
    window.myBar = new Chart(ctx3, config3);

    var ctx4 = document.getElementById('piecharts').getContext('2d');
    window.myPie = new Chart(ctx4, config4);

    var ctx5 = document.getElementById('linechartarea').getContext('2d');
    window.myLine2 = new Chart(ctx5, config5);







    $(function() {
        $('.datepicker').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            drops:'up',
            minYear: 1901               
        }, function(start, end, label) { });
    });

    $("a[href='#tabhome2']").on('shown.bs.tab', function (e) {
        console.log('shown - after the tab has been shown');
        var ctx2 = document.getElementById('linechart').getContext('2d');
        window.myLine = new Chart(ctx2, config2);

        window.myLine.update();
    });

    $("a[href='#tabhome1']").on('shown.bs.tab', function (e) {
        var ctx1 = document.getElementById('mixedchartjs').getContext('2d');
        window.myLine = new Chart(ctx1, config1);
        window.myLine.update();

    });



    /* footable  */
    $(".footable").footable({
        "paging": {
            "enabled": true,
            "position": "center"
        }
    });


    /* vector map */
    $('#mapwrap').vectorMap({
        map: 'world_mill',
        regionStyle: {
            initial: {
                fill: '#7a99ff'
            }
        }
    });
    /* date range picker */
    $(function () {

        var start = moment().subtract(29, 'days');
        var end = moment();

        function cb(start, end) {
            $('#reportrange span').html(start.format('MM/D/YY') + ' to ' + end.format('MM/D/YY'));
        }

        $('#reportrange').daterangepicker({
            startDate: start,
            endDate: end,
            opens: 'left',
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);

        cb(start, end);

    });

    $(function () {
        $('input[name="daterange"]').daterangepicker({
            opens: 'left'
        }, function (start, end, label) {
            console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });
    });

    $.toast({
        heading: 'Welcome,',
        text: 'Thank you for being here! We hope you will love this and Do share ❤',
        position: 'bottom-center',
        stack: false,
        hideAfter: 6000,
        icon: 'success'
    });



};

setInterval(function () {
    config1.data.datasets.forEach(function (dataset) {
        dataset.data = dataset.data.map(function () {
            return randomScalingFactor();
        });

    });

    config2.data.datasets.forEach(function (dataset) {
        dataset.data = dataset.data.map(function () {
            return randomScalingFactor();
        });

    });

    config4.data.datasets.forEach(function (dataset) {
        dataset.data = dataset.data.map(function () {
            return randomScalingFactor();
        });

    });
    config5.data.datasets.forEach(function (dataset) {
        dataset.data = dataset.data.map(function () {
            return randomScalingFactor();
        });

    });

    window.myPie.update();
    window.myLine.update();
    window.myLine2.update();
}, 1500);
