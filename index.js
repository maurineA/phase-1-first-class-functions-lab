// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };

  const returnLastTwoDrivers = function(driver){
    return driver.slice(2)

  }

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

    
  const createFareMultiplier = function (fareMultiplier) {
        return function(value) {
          return value * fareMultiplier;
        }
      }


    const fareDoubler = createFareMultiplier(2);


    const fareTripler = createFareMultiplier(3);

    function selectDifferentDrivers(drivers, driverFun) {
        return driverFun(drivers);
    }