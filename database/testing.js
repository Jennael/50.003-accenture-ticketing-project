//THE OBJECT ID FOR MAIN TICKETS LIST IS: n0UAIXjL7H
//ALL NEW TICKETS AND CHANGES TO TICKET STATUS MUST ACCOUNT FOR THE CONTENTS OF THIS LIST

const unirest = require("unirest");

var req = unirest("GET", "https://ug-api.acnapiv3.io/swivel/acnapi-common-services/common/classes/GameScore/EZihnesGG7");
  req.headers({
    "Postman-Token": "4aaab1bc-5b88-4e15-b6c7-709f4626ec52",
    "cache-control": "no-cache",
    "Content-Type": "application/json",
    "Server-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6Y3hRVEl5UkRVeU1qYzNSakEzTnpKQ01qVTROVVJFUlVZelF6VTRPRUV6T0RreE1UVTVPQSJ9.eyJpc3MiOiJodHRwczovL2FjbmFwaS1wcm9kLmF1dGgwLmNvbS8iLCJzdWIiOiI1NHV5OTFrTjNCVVV6aDhDaU5ZRzBTZFY5c0k0eTVpSkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9wbGFjZWhvbGRlci5jb20vcGxhY2UiLCJpYXQiOjE1NDk5NTI2ODIsImV4cCI6MTU1MjU0NDY4MiwiYXpwIjoiNTR1eTkxa04zQlVVemg4Q2lOWUcwU2RWOXNJNHk1aUoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.u7EGUdWpwO0D97ZcIq-IddhlneWK9ambxMtdK7sChU7Ykc_60A90Nd25D4VnwkV_emdZLQH5Vo_UkuHUQD3E7lxLsCJt_Bm77VbkJDKiAVJ_Tj0qeD3pBl5M-ghoO_NL2_Gf6OSHGH5iZbVSL7oShq8ozZHd6JUj9SX5iex5HGhirbi3eoWMLfXFkgoE_4gd6eotMCGTjva4dUt5qe2CzKH4b3QR5l00JJUlDc6OwmDE5p-XnlMDts45mGqZ0Fd3jp69i7iIKde7MEnZ1XmTl47WmOmlMCah9Stzlz1651T6AGP0ZCSrbpKBqyUFJviFIsS2IlIw2LSG9ATSUxkSyw"
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);
    console.log("ticket data:");
    console.log(res.body);


    //Length of JSON Output
    var keys = Object.keys(res.body);
    console.log(keys.length);  

    //Get Value of JSON Output with Key
    var data = Object(res.body);
    console.log(data.objectId);
    console.log(data.conversation)

    //Add value to list. E.g. addadmin objectID to admin
    var adminList = res.body.admin;

    console.log(adminList);    
    adminList.push("DDBzWKbWc1");
    console.log("new admin data:");
    console.log(adminList);

  }
);


//Get conversation data

var req = unirest("GET", "https://ug-api.acnapiv3.io/swivel/acnapi-common-services/common/classes/GameScore/gV7CUb1pd0");
req.headers({
  "Postman-Token": "4aaab1bc-5b88-4e15-b6c7-709f4626ec52",
    "cache-control": "no-cache",
    "Content-Type": "application/json",
    "Server-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6Y3hRVEl5UkRVeU1qYzNSakEzTnpKQ01qVTROVVJFUlVZelF6VTRPRUV6T0RreE1UVTVPQSJ9.eyJpc3MiOiJodHRwczovL2FjbmFwaS1wcm9kLmF1dGgwLmNvbS8iLCJzdWIiOiI1NHV5OTFrTjNCVVV6aDhDaU5ZRzBTZFY5c0k0eTVpSkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9wbGFjZWhvbGRlci5jb20vcGxhY2UiLCJpYXQiOjE1NDk5NTI2ODIsImV4cCI6MTU1MjU0NDY4MiwiYXpwIjoiNTR1eTkxa04zQlVVemg4Q2lOWUcwU2RWOXNJNHk1aUoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.u7EGUdWpwO0D97ZcIq-IddhlneWK9ambxMtdK7sChU7Ykc_60A90Nd25D4VnwkV_emdZLQH5Vo_UkuHUQD3E7lxLsCJt_Bm77VbkJDKiAVJ_Tj0qeD3pBl5M-ghoO_NL2_Gf6OSHGH5iZbVSL7oShq8ozZHd6JUj9SX5iex5HGhirbi3eoWMLfXFkgoE_4gd6eotMCGTjva4dUt5qe2CzKH4b3QR5l00JJUlDc6OwmDE5p-XnlMDts45mGqZ0Fd3jp69i7iIKde7MEnZ1XmTl47WmOmlMCah9Stzlz1651T6AGP0ZCSrbpKBqyUFJviFIsS2IlIw2LSG9ATSUxkSyw"
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);
    console.log("conversation data:");
    console.log(res.body);

    var jsonConversation = res.body;
    jsonConversation.c9 = [];
    jsonConversation.c9[0] = "next sender id";
    jsonConversation.c9[1] = "new message";

    console.log(jsonConversation.c9[0]);
    console.log(jsonConversation.c9[1]);
  });

//Extras - Callback

// var data; 

// function ticket(callback) {
//   var req = unirest("GET", "https://ug-api.acnapiv3.io/swivel/acnapi-common-services/common/classes/GameScore/8Mb3vaemCZ");
//   req.headers({
//     "Postman-Token": "4aaab1bc-5b88-4e15-b6c7-709f4626ec52",
//     "cache-control": "no-cache",
//     "Content-Type": "application/json",
//     "Server-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6Y3hRVEl5UkRVeU1qYzNSakEzTnpKQ01qVTROVVJFUlVZelF6VTRPRUV6T0RreE1UVTVPQSJ9.eyJpc3MiOiJodHRwczovL2FjbmFwaS1wcm9kLmF1dGgwLmNvbS8iLCJzdWIiOiI1NHV5OTFrTjNCVVV6aDhDaU5ZRzBTZFY5c0k0eTVpSkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9wbGFjZWhvbGRlci5jb20vcGxhY2UiLCJpYXQiOjE1NDk5NTI2ODIsImV4cCI6MTU1MjU0NDY4MiwiYXpwIjoiNTR1eTkxa04zQlVVemg4Q2lOWUcwU2RWOXNJNHk1aUoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.u7EGUdWpwO0D97ZcIq-IddhlneWK9ambxMtdK7sChU7Ykc_60A90Nd25D4VnwkV_emdZLQH5Vo_UkuHUQD3E7lxLsCJt_Bm77VbkJDKiAVJ_Tj0qeD3pBl5M-ghoO_NL2_Gf6OSHGH5iZbVSL7oShq8ozZHd6JUj9SX5iex5HGhirbi3eoWMLfXFkgoE_4gd6eotMCGTjva4dUt5qe2CzKH4b3QR5l00JJUlDc6OwmDE5p-XnlMDts45mGqZ0Fd3jp69i7iIKde7MEnZ1XmTl47WmOmlMCah9Stzlz1651T6AGP0ZCSrbpKBqyUFJviFIsS2IlIw2LSG9ATSUxkSyw"
//   });

//   req.end(function (res) {
//     if (res.error) throw new Error(res.error);
//     callback(res.body)

//   });

// }

// ticket(function(res) {
//   data = res;
//   console.log(data);
// });

