/*
function solution(obj) {
    //console.log("reached")
    var year = [], month = [], day = [], values = [];
    var check = 1, i = 0;
    for(x in obj) {
       // console.log("loop")
        year[i] = parseInt(x.slice(0,4));
        month[i] = parseInt(x.slice(5,7));
        day[i] = parseInt(x.slice(8,10));
        values[i] = obj[x];
       // console.log(values[i])
        let days = 0;
        let increment = 0;
        
        if(check > 1) {
            if(year[i] != year[i-1]) {

            }
            else if(month[i] != month[i-1]) {

            }
            else if(day[i] + 1 != day[i-1] ) {
                days = getDays(day[i], day[i-1]);
                //console.log(days);
                increment =  calculateIncrement(days, values[i], values[i-1])
                //console.log(increment);
                getOutput(days,year[i-1], month[i-1], day[i-1], increment, values[i-1]);
            }
        }
        console.log(x ,":", obj[x]);
        check++;
        i++;
    }
}

function getDays(day2, day1, month2 = 0, month1 = 0, year2 = 0, year1 = 0) {
    if(month1 == 0 && year1 == 0) {
        return day2 - day1;
    }
}

function calculateIncrement(days, val2, val1) {
    return (val2 - val1) / (days);
}

function getOutput(days, year, month, day, increment, values) {
    while(days > 1) {
        days--;
        day = day + 1;
        day = day < 9 ? '0' + day.toString() : day;
        values = values + increment;
        var str = year.toString() + '-'+month.toString() + '-' + day.toString();
        day = parseInt(day);
        console.log(str,":",values)
    }
}

solution({'2020-12-01' : 105, '2020-12-04' : 120, '2020-12-06':125})

*/
function solution(obj) {
    var dates = Object.keys(obj);
    var dates2 = Object.keys(obj);
    //console.log(dates);
    var values = Object.values(obj)
    //console.log(values);
    var diff = []
   // console.log(dates2)
    for(var i=0; i<dates.length; i++) {
        dates[i] = new Date(dates[i])
        if(i > 0) {
            diff[i-1] = Math.ceil((dates[i] - dates[i-1])/(1000 * 60 * 60 * 24));
        }
    }
    //console.log(diff);
    
    for(var j = 0; j < dates.length; j++) {
        //console.log(dates2[j],":", values[j])
        
        let increment = 0;
        if( j > 0 && diff[ j - 1] > 1) {
            //console.log(j, values, diff);
            increment = (values[j] - values[j - 1]) / diff[j - 1]; 
            //console.log(increment);
            getAns(j, increment, dates, values, diff);
            console.log(dates[j].toISOString().slice(0, 10), ':', values[j]);
        }
        else{
            console.log(dates[j].toISOString().slice(0, 10), ':', values[j]);
        }
       
      //  console.log(dates)
    }
}


function getAns(j, increment, dates, values, diff) {
   // console.log("reached",j,  increment, dates, values, diff);
   //console.log(diff[j-1])
    for(let i = 0; i < diff[j - 1] - 1; i++) {
        //console.log(i)
        dates[j-1].setDate(dates[j-1].getDate()+1);
        console.log(dates[j - 1].toISOString().slice(0, 10), ":", (values[j-1] + increment * (i+1)).toFixed(2))
    }
}
solution({'2020-12-01' : 105, '2020-12-02' : 120, '2020-12-04' : 140})
console.log("  ");
solution({'2020-12-01' : 105, '2020-12-04' :120})
console.log("  ");
solution({'2020-12-01' : 105, '2020-12-31' :120, '2021-01-03':150 })
