

//Kilometer to meter.
function kilometerToMeter(km){
    var meter = km * 1000;
    return meter;
}

//Budget Calculator
function budgetCalculator(watch, mobile, laptop){
    var totalWatchPrice = watch*50;
    var totalMobilePrice = mobile*100;
    var totalLaptopPrice = laptop*500;
    var totalBudget = totalWatchPrice + totalMobilePrice + totalLaptopPrice;
    return totalBudget;
}


//Hotel cost.
function hotelCost(days){
    if(days<=0){
        var invalidDays = 'Please input valid days';
        return invalidDays;
    }else if(days<=10){
        var firstTenDays = days*100;
        return firstTenDays;
    }else if(days>10 && days<=20){
        var afterTenDays = (days-10)*80+1000;
        return afterTenDays;
    }else if(days>20){
        var afterTwentyDays = (days-20)*50+1800;
        return afterTwentyDays;
    }
}


//Mega friend name.
function megaFriend(friends){
    var maxword = 0;
    var longest;
    for(var i = 0; i<friends.length; i++){
        if(friends[i].length > maxword){
            maxword = friends[i].length;
            longest = friends[i];
        }
    }
    return longest;
}