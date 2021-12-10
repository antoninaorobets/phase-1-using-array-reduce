const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//const totalBatteries = batteryBatches.reduce((x,accumulator)=> {x+accumulator},0)


const totalBatteries = batteryBatches.reduce((element,accumulator) => accumulator+element ,0)