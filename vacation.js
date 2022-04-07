function vacation(count, type, day) {
    let studentsFriday = 8.45;
    let studentsSaturday = 9.8;
    let studentsSunday = 10.46;
    let businessFriday = 10.90;
    let businessSaturday = 15.60;
    let businessSunday = 16;
    let regularFriday = 15;
    let regularSaturday = 20;
    let regularSunday = 22.5;

    let studentsDiscount = 15 / 100;
    let busnessDiscountCount = 10;
    let regularDiscount = 5 / 100;

    let totalPrice = 0;

    if (type === "Business" && count >= 100) {
        count -= busnessDiscountCount;
    }

    if (type === "Students" && day === "Friday") {
        totalPrice += count * studentsFriday;
    } else if (type === "Students" && day === "Saturday") {
        totalPrice += count * studentsSaturday;
    } else if (type === "Students" && day === "Sunday") {
        totalPrice += count * studentsSunday;
    } else if (type === "Business" && day === "Friday") {
        totalPrice += count * businessFriday;
    } else if (type === "Business" && day === "Saturday") {
        totalPrice += count * businessSaturday;
    } else if (type === "Business" && day === "Sunday") {
        totalPrice += count * businessSunday;
    } else if (type === "Regular" && day === "Friday") {
        totalPrice += count * regularFriday;
    } else if (type === "Regular" && day === "Saturday") {
        totalPrice += count * regularSaturday;
    } else if (type === "Regular" && day === "Sunday") {
        totalPrice += count * regularSunday;
    }
    if (type === "Students" && count >= 30) {
        totalPrice -= totalPrice * studentsDiscount;
    } else if (type === "Regular" && count >= 10 && count <= 20) {
        totalPrice -= totalPrice * regularDiscount;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
vacation(100, "Business", "Friday");
