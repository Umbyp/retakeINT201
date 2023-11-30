function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
}

// Example usage:
const validEmails = [
    "mysite@ourearth.com",
    "my.ownsite@ourearth.org",
    "mysite@you.me.net"
];

const invalidEmails = [
    "mysite.ourearth.com",
    "mysite@.com.my",
    "@you.me.net",
    "mysite123@gmail.b",
    "mysite@.org.org",
    ".mysite@mysite.org",
    "mysite()*@gmail.com",
    "mysite..1234@yahoo.com"
];

console.log("Valid Emails:");
validEmails.forEach(email => {
    console.log(`${email}: ${validateEmail(email)}`);
});

console.log("\nInvalid Emails:");
invalidEmails.forEach(email => {
    console.log(`${email}: ${validateEmail(email)}`);
});


function validateIPAddress(ipAddress) {
    const regex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})){3}$/;
    return regex.test(ipAddress);
}

// Example usage:
const validIPs = [
    "115.42.150.37",
    "192.168.0.1",
    "110.234.52.124"
];

const invalidIPs = [
    "210.110",
    "255",
    "y.y.y.y",
    "255.0.0.y",
    "666.10.10.20",
    "4444.11.11.11",
    "33.3333.33.3"
];

console.log("Valid IP Addresses:");
validIPs.forEach(ip => {
    console.log(`${ip}: ${validateIPAddress(ip)}`);
});

console.log("\nInvalid IP Addresses:");
invalidIPs.forEach(ip => {
    console.log(`${ip}: ${validateIPAddress(ip)}`);
});
