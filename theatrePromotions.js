function theatrePromotions(day, age) {
    let price;
    switch (day) {
        case 'Weekday':
            if ((age <= 18 && age >= 0) || (age > 64 && age <= 122)) {
                price = 12;
            } else if (age > 18 && age <= 64) {
                price = 18;
            }
            break;
        case 'Weekend':
            if ((age <= 18 && age >= 0) || (age > 64 && age <= 122)) {
                price = 15;
            } else if (age > 18 && age <= 64) {
                price = 20;
            }
            break;

        case 'Holiday':
            if (age <= 18 && age >= 0) {
                price = 5;
            } else if (age > 18 && age <= 64) {
                price = 12;
            } else if (age > 64 && age <= 122) {
                price = 10;
            }
            break;
    }
    if (age >= 0 && age <= 122) {
        console.log(`${price}$`);
    } else {
        console.log(`Error!`)
    }
}
theatrePromotions('Weekday', 4);
theatrePromotions('Holiday', -12);
theatrePromotions('Weekend', 2);
theatrePromotions('Holiday', 65);
