$(document).ready(function(){
    	$(".container").fitVids();
    	$(".rslides").responsiveSlides({
	    	auto: true,             // Boolean: Animate automatically, true or false
			speed: 500,            // Integer: Speed of the transition, in milliseconds
			timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
			pager: false,           // Boolean: Show pager, true or false
			nav: false,             // Boolean: Show navigation, true or false
    	});
    	$('#js-news').ticker({
    		controls: false,
    		displayType: 'reveal',
    		fadeInSpeed: 600,      // Speed of fade in animation
			fadeOutSpeed: 300,
			titleText: 'Latest News:',    
        });

    	$('#js-tips').ticker({
    		controls: false,
    		displayType: 'fade',
    		fadeInSpeed: 600,      // Speed of fade in animation
			fadeOutSpeed: 300,
			titleText: 'Tips:',  
        });        

    $('#gauge').highcharts({
	
	    chart: {
	        type: 'gauge',
	        plotBackgroundColor: 'red',
	        plotBackgroundImage: null,
	        plotBorderWidth: 0,
	        plotBackgroundColor: 'white',
	        plotBorderColor: '#ffac02',
	        plotShadow: false,
	        spacingBottom: 0,
	    },
	    
	    title: {
	        text: 'Current Energy Usage',
			align: 'left',
			floating: true,
			color: '#ec2d21'
			
	    },
	    
	    pane: {
	        startAngle: -150,
	        endAngle: 150,
	        background: [{
	            backgroundColor: {
	                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
	                stops: [
	                    [0, '#FFF'],
	                    [1, '#333']
	                ]
	            },
	            borderWidth: 0,
	            outerRadius: '120%'
	        }, {
	            backgroundColor: {
	                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
	                stops: [
	                    [0, '#333'],
	                    [1, '#FFF']
	                ]
	            },
	            borderWidth: 1,
	            outerRadius: '107%'
	        }, {
	            // default background
	        }, {
	            backgroundColor: 'white',
	            borderWidth: 0,
	            outerRadius: '105%',
	            innerRadius: '103%'
	        }]
	    },
	       
	    // the value axis
	    yAxis: {
	        min: 0,
	        max: 1000,
	        
	        minorTickInterval: 'auto',
	        minorTickWidth: 1,
	        minorTickLength: 10,
	        minorTickPosition: 'inside',
	        minorTickColor: 'white',
	
	        tickPixelInterval: 30,
	        tickWidth: 4,
	        tickPosition: 'inside',
	        tickLength: 10,
	        tickColor: 'white',
	        labels: {
	            step: 2,
	            rotation: 'auto'
	        },
	        title: {
	            text: 'kW'
	        },
	        plotBands: [{
	            from: 0,
	            to: 600,
	            color: '#008703' // green
	        }, {
	            from: 600,
	            to: 800,
	            color: '#ffac02' // yellow
	        }, {
	            from: 800,
	            to: 1000,
	            color: '#ec2d21' // red
	        }]        
	    },
	
	    series: [{
	        name: 'Speed',
	        data: [424.00],
	        tooltip: {
	            valueSuffix: ' km/h'
	        }
	    }]
	
	}, 
	// Add some life
	function (chart) {
		if (!chart.renderer.forExport) {
		    setInterval(function () {
		        var point = chart.series[0].points[0],
		            newVal,
		            inc = Math.round((Math.random() - 0.5) * 20);
		        
		        newVal = point.y + inc;
		        if (newVal < 0 || newVal > 200) {
		            newVal = point.y - inc;
		        }
		        
		        point.update(newVal);
		        
		    }, 3000);
		}
	});
	

      $('#barChart').highcharts({
            chart: {
                type: 'bar'
            },
            colors: [
			'#ffac02', 
			'#00355e', 
			'#c61d27',
			'#dedede'
			],
            title: {
                text: 'Stacked bar chart',
                align: 'left',
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
                }
            },
            legend: {
                backgroundColor: '#FFFFFF',
                reversed: true,
                align: 'right',
				verticalAlign: 'top',
				x: 0,
				y: 0,
            	floating: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
                series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Jane',
                data: [2, 2, 3, 2, 1]
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5]
            }]
        });	  
	
	
	});