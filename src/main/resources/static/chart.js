document.addEventListener('DOMContentLoaded', function () {
    /*const chart = Highcharts.chart('container', {

        title: {
            text: 'XU HƯỚNG THÔNG SỐ'
        },

        subtitle: {
            text: 'Design By Le Duc'
        },

        yAxis: {
            title: {
                text: 'Giá Trị'
            }
        },

        xAxis: {
            title: {
                text: 'Khung giờ ghi'
            },
            /!*accessibility: {
                rangeDescription: 'Range: 0 to 24'
            },*!/
            series: [{
                // name: 'Installation',
                data: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
            }, ],
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2,

            }
        },

        series: [{
            name: 'Installation',
            data: [0, 2, 8, 4, 6, 10, 20, 12, 16, 14, 18, 22]
        }, ],

        responsive: {
            rules: [{
                /!*condition: {
                    maxWidth: 500
                },*!/
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });*/
    const chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'line'
        },
        title: {
            text: 'XU HƯỚNG THÔNG SỐ'
        },
        xAxis: {
            title: {
                text: 'Khung giờ ghi'
            },

            // tickInterval: 2,
            /*accessibility: {
                rangeDescription: 'Range: 0 to 24',
                step: 2
            },*/

        },
        yAxis: [{
            title: {
                text: 'Giá Trị'
            },

        },
            {
                showEmpty: false
            }
            ],
        series: [
            {
                // data: [[0,0], 2, 8, 4, 6, 10, 20, 12, 16, 14, 18, 22]
                data: [ [2,2], [4,4], [6,1], [8,6], [10,12], [12,1], [14,3], [16,5], [18,7], [20,6], [22,2], [24,9]]

            }

        ],

    });

})