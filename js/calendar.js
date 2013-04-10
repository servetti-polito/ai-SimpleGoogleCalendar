/**
 * Created with JetBrains WebStorm.
 * User: servetti
 * Date: 3/27/13
 * Time: 6:45 PM
 * To change this template use File | Settings | File Templates.
 */


var calSettings = {
    dayWidth: 150,
    hourHeight: 40,
    scrollbarW: 15,
    workHours: 12,
    rowHeaderWidth: 45
};

var weekdayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

$(

    function () {

	var cs = calSettings;

        var i; var o;

        $('.calendar').width(cs.dayWidth*(7)+cs.rowHeaderWidth+cs.scrollbarW)
            .height(cs.hourHeight*cs.workHours + $('.cal_header').height());
        $('.cal_body').width(cs.dayWidth*(7)+cs.rowHeaderWidth+cs.scrollbarW+2).height(cs.hourHeight*cs.workHours);
        $('.cal_times').height(cs.hourHeight*24);
        $('.cal_header').css('padding-left',cs.rowHeaderWidth);
        $('.cal_days').width(cs.dayWidth*7).height(cs.hourHeight*24);
        $('.cal_day').width(cs.dayWidth).height(cs.hourHeight*24);

        for(i=0; i<7; i++) {
            $('.cal_header').append( ($('<div>').addClass('cal_day_header')
                .width(cs.dayWidth-1)).append($('<span>').text(weekdayNames[i])));
        }
        for(i=0; i<24; i++) {
            o = $('<div>').addClass('cal_time').height(cs.hourHeight-1).text(i);
            o.append( $('<span>').css('vertical-align','super').css('font-size','x-small').text("00") );
            $('.cal_times').append(o);
        }
        for(i=0; i<24; i++) {
            o = $('<div>').addClass('cal_half_hour').width(cs.dayWidth-1).height(cs.hourHeight-1);
            $('.cal_day').append(o);
        }

    }

);
