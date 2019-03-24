/**
 * Refer to 'Register User API'
 * Creates a new user. 
 * @param user (string) username
 * @param password (string) password
 * @param mobile (string) phone number
 * @param fname (string) first name
 * @param lname (string) last name
 * @param email (string) email (requires a valid email structure)
*/

let input = {
    "username": ""+req.body["user"],
    "password": ""+req.body["password"],
    "phone": ""+req.body["mobile"],
    "first_name": ""+req.body["fname"],
    "last_name": ""+req.body["lname"],
    "email": ""+req.body["email"]
   };

var unirest = require("unirest");

var req = unirest("POST", "https://ug-api.acnapiv3.io/swivel/acnapi-common-services/common/users");

req.headers({
  "Postman-Token": "f8d1c2a4-24e0-4ab9-b28a-8fc70c0bda43",
  "cache-control": "no-cache",
  "Content-Type": "application/json",
  "Server-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6Y3hRVEl5UkRVeU1qYzNSakEzTnpKQ01qVTROVVJFUlVZelF6VTRPRUV6T0RreE1UVTVPQSJ9.eyJpc3MiOiJodHRwczovL2FjbmFwaS1wcm9kLmF1dGgwLmNvbS8iLCJzdWIiOiI1NHV5OTFrTjNCVVV6aDhDaU5ZRzBTZFY5c0k0eTVpSkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9wbGFjZWhvbGRlci5jb20vcGxhY2UiLCJpYXQiOjE1NDk5NTI2ODIsImV4cCI6MTU1MjU0NDY4MiwiYXpwIjoiNTR1eTkxa04zQlVVemg4Q2lOWUcwU2RWOXNJNHk1aUoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.u7EGUdWpwO0D97ZcIq-IddhlneWK9ambxMtdK7sChU7Ykc_60A90Nd25D4VnwkV_emdZLQH5Vo_UkuHUQD3E7lxLsCJt_Bm77VbkJDKiAVJ_Tj0qeD3pBl5M-ghoO_NL2_Gf6OSHGH5iZbVSL7oShq8ozZHd6JUj9SX5iex5HGhirbi3eoWMLfXFkgoE_4gd6eotMCGTjva4dUt5qe2CzKH4b3QR5l00JJUlDc6OwmDE5p-XnlMDts45mGqZ0Fd3jp69i7iIKde7MEnZ1XmTl47WmOmlMCah9Stzlz1651T6AGP0ZCSrbpKBqyUFJviFIsS2IlIw2LSG9ATSUxkSyw"
});

req.type("json");

// req.send(
//     {
//   "username": "IAmUser1",
//   "password": "password123",
//   "phone": "12345678",
//   "email": "email_address@email.com",
//   "first_name": "FirstName",
//   "last_name": "LastName",
//   "ticket_history": ""
//     }
// );

req.send(input);

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);

  var data = Object(res.body);
  var user = data.objectId; //userID
  console.log(user);

});





/**
 * Refer to 'Create History API'
 * Creates ticket history for new user.
 * @param user (string) user's objectID
*/

let input = {
    "user": "DDBzWKbWc1", //refers to user's object id! Not username!
    "pending": [],
    "attended": [],
    "resolved": []
   };

var unirest = require("unirest");

var req = unirest("PUT", "https://ug-api.acnapiv3.io/swivel/acnapi-common-services/common/classes/GameScore/HVeNCndrTA");

req.headers({
  "Postman-Token": "970de554-a8b0-4a89-aa1a-457088c0b95a",
  "cache-control": "no-cache",
  "Content-Type": "application/json",
  "Server-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6Y3hRVEl5UkRVeU1qYzNSakEzTnpKQ01qVTROVVJFUlVZelF6VTRPRUV6T0RreE1UVTVPQSJ9.eyJpc3MiOiJodHRwczovL2FjbmFwaS1wcm9kLmF1dGgwLmNvbS8iLCJzdWIiOiI1NHV5OTFrTjNCVVV6aDhDaU5ZRzBTZFY5c0k0eTVpSkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9wbGFjZWhvbGRlci5jb20vcGxhY2UiLCJpYXQiOjE1NDk5NTI2ODIsImV4cCI6MTU1MjU0NDY4MiwiYXpwIjoiNTR1eTkxa04zQlVVemg4Q2lOWUcwU2RWOXNJNHk1aUoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.u7EGUdWpwO0D97ZcIq-IddhlneWK9ambxMtdK7sChU7Ykc_60A90Nd25D4VnwkV_emdZLQH5Vo_UkuHUQD3E7lxLsCJt_Bm77VbkJDKiAVJ_Tj0qeD3pBl5M-ghoO_NL2_Gf6OSHGH5iZbVSL7oShq8ozZHd6JUj9SX5iex5HGhirbi3eoWMLfXFkgoE_4gd6eotMCGTjva4dUt5qe2CzKH4b3QR5l00JJUlDc6OwmDE5p-XnlMDts45mGqZ0Fd3jp69i7iIKde7MEnZ1XmTl47WmOmlMCah9Stzlz1651T6AGP0ZCSrbpKBqyUFJviFIsS2IlIw2LSG9ATSUxkSyw"
});

req.type("json");
req.send({
  "pending": [],
  "attended": [],
  "resolved": []
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);

  var data = Object(res.body);
  var ticket_history = data.objectId; //historyID
  console.log(ticket_history);

});





/**
 * Refer to 'Login Copy API'
 * Log in and retrieve session token.
 * @param username (string) user's username
 * @param password (string) user's password
*/

var unirest = require("unirest");

var req = unirest("GET", "https://ug-api.acnapiv3.io/swivel/acnapi-common-services/common/login");

let input = {
    "username": req.body["user"],
    "password": req.body["password"]
   };

req.headers({
  "Postman-Token": "7081ae93-33b4-469c-856d-3258c9f7784f",
  "cache-control": "no-cache",
  "Content-Type": "application/json",
  "Server-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6Y3hRVEl5UkRVeU1qYzNSakEzTnpKQ01qVTROVVJFUlVZelF6VTRPRUV6T0RreE1UVTVPQSJ9.eyJpc3MiOiJodHRwczovL2FjbmFwaS1wcm9kLmF1dGgwLmNvbS8iLCJzdWIiOiI1NHV5OTFrTjNCVVV6aDhDaU5ZRzBTZFY5c0k0eTVpSkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9wbGFjZWhvbGRlci5jb20vcGxhY2UiLCJpYXQiOjE1NDk5NTI2ODIsImV4cCI6MTU1MjU0NDY4MiwiYXpwIjoiNTR1eTkxa04zQlVVemg4Q2lOWUcwU2RWOXNJNHk1aUoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.u7EGUdWpwO0D97ZcIq-IddhlneWK9ambxMtdK7sChU7Ykc_60A90Nd25D4VnwkV_emdZLQH5Vo_UkuHUQD3E7lxLsCJt_Bm77VbkJDKiAVJ_Tj0qeD3pBl5M-ghoO_NL2_Gf6OSHGH5iZbVSL7oShq8ozZHd6JUj9SX5iex5HGhirbi3eoWMLfXFkgoE_4gd6eotMCGTjva4dUt5qe2CzKH4b3QR5l00JJUlDc6OwmDE5p-XnlMDts45mGqZ0Fd3jp69i7iIKde7MEnZ1XmTl47WmOmlMCah9Stzlz1651T6AGP0ZCSrbpKBqyUFJviFIsS2IlIw2LSG9ATSUxkSyw"
});

req.query(input);

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);

    var data = Object(res.body);
    var data = Object(res.body);
    var sessionToken = data.sessionToken; //historyID
    console.log(sessionToken);
});





/**
 * Refer to 'Add History ID API'
 * Edit user object to reflect user's ticket history ID.
 * @param ticket_history (string) user's ticket_history objectID
 * @param sessionToken
 * @param user
*/

let input = {
    "ticket_history": "HVeNCndrTA" //refers to user's ticket_history object id!
   };

var unirest = require("unirest");

//REQUIRES USER ID
var req = unirest("PUT", "https://ug-api.acnapiv3.io/swivel/acnapi-common-services/common/users/DDBzWKbWc1");

req.headers({
  "Postman-Token": "151cc4c6-f7d5-477c-8573-7bb08f9c6da8",
  "cache-control": "no-cache",
  //REQUIRES SESSION TOKEN FROM USER LOG IN
  "X-Parse-Session-Token": "r:57d875fc7c827a81f8a33c5d276cbe35",
  "Content-Type": "application/json",
  "Server-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6Y3hRVEl5UkRVeU1qYzNSakEzTnpKQ01qVTROVVJFUlVZelF6VTRPRUV6T0RreE1UVTVPQSJ9.eyJpc3MiOiJodHRwczovL2FjbmFwaS1wcm9kLmF1dGgwLmNvbS8iLCJzdWIiOiI1NHV5OTFrTjNCVVV6aDhDaU5ZRzBTZFY5c0k0eTVpSkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9wbGFjZWhvbGRlci5jb20vcGxhY2UiLCJpYXQiOjE1NDk5NTI2ODIsImV4cCI6MTU1MjU0NDY4MiwiYXpwIjoiNTR1eTkxa04zQlVVemg4Q2lOWUcwU2RWOXNJNHk1aUoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.u7EGUdWpwO0D97ZcIq-IddhlneWK9ambxMtdK7sChU7Ykc_60A90Nd25D4VnwkV_emdZLQH5Vo_UkuHUQD3E7lxLsCJt_Bm77VbkJDKiAVJ_Tj0qeD3pBl5M-ghoO_NL2_Gf6OSHGH5iZbVSL7oShq8ozZHd6JUj9SX5iex5HGhirbi3eoWMLfXFkgoE_4gd6eotMCGTjva4dUt5qe2CzKH4b3QR5l00JJUlDc6OwmDE5p-XnlMDts45mGqZ0Fd3jp69i7iIKde7MEnZ1XmTl47WmOmlMCah9Stzlz1651T6AGP0ZCSrbpKBqyUFJviFIsS2IlIw2LSG9ATSUxkSyw"
});

req.type("json");
req.send(input);

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});





