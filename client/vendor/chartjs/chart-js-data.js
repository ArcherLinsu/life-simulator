/*!
 * GoTRI(http://maxartkiller.com)
 * Copyright 2018 The Adminux Author: Maxartkiller
 * purchase licence before use
 * You can not resale or modify without prior licences.
 */

/* Dashboard chart combo line and bar */
bar();

function bar() {
    var color = Chart.helpers.color;
    var barChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            type: 'bar',
            label: 'Dataset 1',
            backgroundColor: color(window.chartColors.blue).alpha(0.8).rgbString(),
            borderColor: window.chartColors.blue,
            data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, {
            type: 'line',
            label: 'Dataset 2',
            borderWidth: 1,
            backgroundColor: color(window.chartColors.yellow).alpha(0.2).rgbString(),
            borderColor: window.chartColors.yellow,
            data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: color(window.chartColors.red).alpha(0.8).rgbString(),
            borderColor: window.chartColors.red,
            data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }]
    };

    // Define a plugin to provide data labels

    var ctx = $("#mixchartfull");
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: false,
                text: 'Chart.js Combo Bar Line Chart',

            },
            legend: {
                display: false,
                labels: {
                    fontColor: "#cccccc"
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "#cccccc",
                    },
                    gridLines: {
                        color: "rgba(0,0,0,0.05)",
                        zeroLineColor: "rgba(255,255,255,0.2)"
                    }
                        }],
                xAxes: [{
                    ticks: {
                        fontColor: "#666666"
                    },
                    gridLines: {
                        color: "rgba(0,0,0,0.05)",
                        zeroLineColor: "rgba(0,0,0,0.2)"
                    }
                        }]
            }
        }
    });


    setInterval(function () {
        barChartData.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                return randomScalingFactor();
            })
        });
        window.myBar.update();
    }, 3000);


}



bubblechart();

function bubblechart() {

    var DEFAULT_DATASET_SIZE = 7;

    var addedCount2 = 0;
    var color2 = Chart.helpers.color;
    var bubbleChartData = {
        animation: {
            duration: 10000
        },
        datasets: [{
            label: "My First dataset",
            backgroundColor: color2(window.chartColors.red).alpha(0.5).rgbString(),
            borderColor: window.chartColors.red,
            borderWidth: 1,
            data: [{
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
                }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
                }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
                }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
                }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
                }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
                }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
                }]
            }, {
            label: "My Second dataset",
            backgroundColor: color2(window.chartColors.blue).alpha(0.5).rgbString(),
            borderColor: window.chartColors.blue,
            borderWidth: 1,
            data: [{
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
                }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
                }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
                }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
                }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
                }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
                }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
                }]
            }]
    };

    window.onload = function () {
        var ctx2 = document.getElementById("bubble").getContext("2d");
        window.myChart2 = new Chart(ctx2, {
            type: 'bubble',
            data: bubbleChartData,
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: 'Chart.js Bubble Chart'
                },
                tooltips: {
                    mode: 'point'
                },
                legend: {
                    labels: {
                        fontColor: "#cccccc"
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "#cccccc",
                        },
                        gridLines: {
                            color: "rgba(0,0,0,0.05)",
                            zeroLineColor: "rgba(0,0,0,0.2)"
                        }
                        }],
                    xAxes: [{
                        ticks: {
                            fontColor: "#666666"
                        },
                        gridLines: {
                            color: "rgba(0,0,0,0.05)",
                            zeroLineColor: "rgba(0,0,0,0.2)"
                        }
                        }]
                }
            }
        });
    };


    setInterval(function () {
        bubbleChartData.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                return {
                    x: randomScalingFactor(),
                    y: randomScalingFactor(),
                    r: Math.abs(randomScalingFactor()) / 5,
                };
            });
        });
        window.myChart2.update();
    }, 1800);


}


donutchart();

function donutchart() {
    var ctx3 = document.getElementById("donutchart-area").getContext("2d");
    window.myDoughnut = new Chart(ctx3, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.green,
                    window.chartColors.blue,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "Red",
                "Orange",
                "Yellow",
                "Green",
                "Blue"
            ]
        },
        options: {
            responsive: true,
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });

    setInterval(function () {
        myDoughnut.data.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                return randomScalingFactor();
            });
        });
        window.myDoughnut.update();
    }, 2000);


}

myRadarChart();

function myRadarChart() {
    var color = Chart.helpers.color;
    var ctx5 = document.getElementById("radar-area").getContext("2d");
    window.myRadarChart = new Chart(ctx5, {
        type: 'radar',
        data: {
            labels: [["Eating", "Dinner"], ["Drinking", "Water"], "Sleeping", ["Designing", "Graphics"], "Coding", "Cycling", "Running"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
                borderColor: window.chartColors.red,
                pointBackgroundColor: window.chartColors.red,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, {
                label: "My Second dataset",
                backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
                borderColor: window.chartColors.blue,
                pointBackgroundColor: window.chartColors.blue,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, {
                label: "My Third dataset",
                backgroundColor: color(window.chartColors.yellow).alpha(0.2).rgbString(),
                borderColor: window.chartColors.yellow,
                pointBackgroundColor: window.chartColors.yellow,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, ]
        },
        options: {
            responsive: true,
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Radar Chart'
            },
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    });

    setInterval(function () {
        myRadarChart.data.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                return randomScalingFactor();
            });
        });
        window.myRadarChart.update();
    }, 2000);


}
myPolarChart();

function myPolarChart() {
    var chartColors = window.chartColors;
    var color = Chart.helpers.color;
    var ctx6 = document.getElementById("polar-area");
    window.mypolarChart = new Chart.PolarArea(ctx6, {
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                backgroundColor: [
                    color(chartColors.red).alpha(0.5).rgbString(),
                    color(chartColors.orange).alpha(0.5).rgbString(),
                    color(chartColors.yellow).alpha(0.5).rgbString(),
                    color(chartColors.green).alpha(0.5).rgbString(),
                    color(chartColors.blue).alpha(0.5).rgbString(),
                ],
                label: 'My dataset' // for legend
            }],
            labels: [
                "Red",
                "Orange",
                "Yellow",
                "Green",
                "Blue"
            ]
        },
        options: {
            responsive: true,
            legend: {
                display: false,
                position: 'right',
            },
            title: {
                display: false,
                text: 'Chart.js Polar Area Chart'
            },
            scale: {
                ticks: {
                    beginAtZero: true
                },
                reverse: false
            },
            animation: {
                animateRotate: false,
                animateScale: true
            }
        }
    });

    setInterval(function () {
        mypolarChart.data.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                return randomScalingFactor();
            });
        });
        window.mypolarChart.update();
    }, 2000);

}
myPeChart();

function myPeChart() {
    var chartColors = window.chartColors;
    var color = Chart.helpers.color;
    var ctx6 = document.getElementById("pie-area");
    window.mypieChart = new Chart(ctx6, {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.green,
                    window.chartColors.blue,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "Red",
                "Orange",
                "Yellow",
                "Green",
                "Blue"
            ]
        },
        options: {
            responsive: true,
            legend: {
                display: false,
            }
        }
    });

    setInterval(function () {
        mypieChart.data.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                return randomScalingFactor();
            });
        });
        window.mypieChart.update();
    }, 2000);

}
