function nextDay(year, mounth, day) {
    let d = new Date(year, mounth - 1, day + 1);
    let newYear = d.getFullYear();
    let newMonth = d.getMonth() + 1;
    let newDate = d.getDate();

    console.log(`${newYear}-${newMonth}-${newDate}`);

}
nextDay(2016, 12, 31);