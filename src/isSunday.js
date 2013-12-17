function isSunday() {
  var now = new Date();
 
  return now.getDay() === 0; // 0は日曜日
}
