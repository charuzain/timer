const timer = process.argv.slice(2).sort();
//console.log(timer)

let alarmTimer = timer.map(Number);

for(let i = 0;i<alarmTimer.length;i++){
  setTimeout(()=>{
   
    process.stdout.write('\x07');
  },alarmTimer[i]*1000)
}
