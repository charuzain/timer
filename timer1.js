const timer = process.argv.slice(2).sort();
//console.log(timer)

let alarmTimer = timer.map(Number);

//console.log(alarmTimer);
for(let i = 0;i<alarmTimer.length;i++){
  setTimeout(()=>{
    //console.log("hi")
    process.stdout.write('\x07');
  },alarmTimer[i]*1000)
}