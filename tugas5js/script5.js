var heightsyukur = 170;
var heightjaya = 195;
var agesyukur = 36;
var agejaya = 29;
var agemendrofa=26;
var heightmendrofa=165;
function hitungskor(tinggibadan,umur)
{
    var winner = tinggibadan + 5 * umur;
    return winner;
}
var nilaisyukur= hitungskor(heightsyukur,agesyukur);
var nilaijaya=hitungskor(heightjaya,agejaya);
var nilaimendrofa=hitungskor(heightmendrofa,agemendrofa);
console.log(nilaisyukur);
console.log(nilaijaya);
console.log(nilaimendrofa);
if(nilaijaya>nilaisyukur && nilaijaya>nilaimendrofa)
    console.log('Jaya Menang dengan skor '+nilaijaya);
else if(nilaimendrofa>nilaijaya && nilaimendrofa> nilaisyukur)
console.log('Mendrofa Menang dengan skor '+nilaimendrofa);
else
{
console.log('Syukur Menang dengan skor '+nilaisyukur);
}