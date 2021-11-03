const timeArr = process.argv.slice(2);
if(timeArr.length === 0 ){
  console.log("please enter a number");
  process.exit();
}
const time = timeArr.map(elem=>Number(elem)).filter(e=>!Number.isNaN(e) && e>0)

for(let sec of time){
  setTimeout(()=>{
    process.stdout.write('\x07');
    console.log(`beep ${sec}`)
  },sec*1000)
}




// const timer = process.argv.slice(2).sort();
// //console.log(timer)

// let alarmTimer = timer.map(Number);

// //console.log(alarmTimer);
// for(let i = 0;i<alarmTimer.length;i++){
//   setTimeout(()=>{
//     //console.log("hi")
//     process.stdout.write('\x07');
//   },alarmTimer[i]*1000)
// }
