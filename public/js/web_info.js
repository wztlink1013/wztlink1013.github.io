var BirthDay = new Date(new Date('2020/01/04'));
var today = new Date();
var timeold = (today.getTime() - BirthDay.getTime());
var daysold = Math.floor(timeold / (24 * 60 * 60 * 1000));
document.getElementById('webinfo-runtime-count').innerHTML = daysold + '<span>天</span>';
