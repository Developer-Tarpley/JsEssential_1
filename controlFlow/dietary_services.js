function dietServiceEligibilty(userAccess){
    let eligibilty;

    switch(userAccess){
        case "employee":
            eligibilty = "Authorized for complete Dietary Services.";
            break;
        case "member":
            eligibilty = "You have partial access to 'Dietary Services', and one-on-one iteraction with a dietician.";
            break;
        case "subscriber":
            eligibilty = "You have access to facilitate 'Dietary Services' only.";
            break;

        default:
            eligibilty = "Please enroll or subscribe first to avail this facility.";
    }

    return eligibilty;
}

console.log("Dietary Access :", dietServiceEligibilty("employee"));
console.log("Dietary Access :", dietServiceEligibilty("member"));
console.log("Dietary Access :", dietServiceEligibilty("subscriber"));
console.log("Dietary Access :", dietServiceEligibilty("non-subscriber"));