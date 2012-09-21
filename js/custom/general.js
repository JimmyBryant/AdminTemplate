/******************************
* Additional function for this site
* Written by JimmyBryant
*******************************/

$(function(){             //dom ready
    
    //show hide userinfodrop
    var timerId=null;       
    $('.topheader .right').hover(function(){
        clearTimeout(timerId);
       	timerId=setTimeout(function(){$('.userinfodrop').show();},300);
    },function(){
		clearTimeout(timerId);
		timerId=setTimeout(function(){$('.userinfodrop').hide();},500);
    }); 

    //show hide vertical nav
    $('.vernav .menu').click(function(){
        var $this=$(this),url=$this.attr('href');
        var submenu=$(url);
        if(submenu.length>0){
        	if(submenu.is(':visible')){
        		submenu.slideUp();
        	}else{
        		submenu.slideDown();
        	}
        }
        return  false;
 
    });


    //close notice

    $('.noticebar .close').click(function(){
        $(this).parent().fadeOut();
    });

    //generate chart
        var clickNum = [ [1, 6], [2,3], [3, 8], [4, 5], [5, 13], [6, 8],[7, 18],[8, 15],[9, 19],[10, 25],[11, 12],[12, 29]];
        var PV = [ [1, 4], [2,4], [3, 1], [4, 9], [5, 10], [6, 13],[7, 24],[8, 26],[9, 22],[10, 29],[11, 18],[12, 26]];
    var plot = $.plot($("#chartplace"),
       [ { data: clickNum, label: "点击数", color: "#069"}, { data: PV, label: "PV", color: "#FF6600"} ], {
           series: {
               lines: { show: true, fill: true, fillColor: { colors: [ { opacity: 0.05 }, { opacity: 0.15 } ] } },
               points: { show: true }
           },
           legend: { position: 'nw'},
           grid: { hoverable: true, clickable: true, borderColor: '#ccc', borderWidth: 1, labelMargin: 10 },
           yaxis: { min: 0, max: 30 }
    });

    // $("#chartplace").bind("plothover", function (event, pos, item) {
    //   $("#x").text(pos.x.toFixed(2));
    //   $("#y").text(pos.y.toFixed(2));
      
    //   if(item) {
    //     if (previousPoint != item.dataIndex) {
    //       previousPoint = item.dataIndex;
            
    //       $("#tooltip").remove();
    //       var x = item.datapoint[0].toFixed(2),
    //       y = item.datapoint[1].toFixed(2);
            
    //       showTooltip(item.pageX, item.pageY,
    //               item.series.label + " of " + x + " = " + y);
    //     }
      
    //   } else {
    //      $("#tooltip").remove();
    //      previousPoint = null;            
    //   }
    
    // });
    
    // $("#chartplace").bind("plotclick", function (event, pos, item) {
    //   if (item) {
    //     $("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
    //     plot.highlight(item.series, item.datapoint);
    //   }
    // });


});