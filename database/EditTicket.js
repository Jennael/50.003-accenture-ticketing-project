/**
 * Refer to 'Edit Ticket API'
 * Edits an existing ticket. 
 * @param ticket (string) ticket's objectID
 * @param status (string) ticket's status
 * @param company (string) company name
 * @param admin (string) admin's objectID to be added
 * @param details (string) detail of support request
*/

let input = {
    "status": "", //OPTIONAL new status (when admin attends to ticket)
    "company": ""+req.body["company"], //OPTIONAL new company
    "admin": [], //OPTIONAL add new admin responder (when admin attends to ticket)
    "details": ""+req.body["company"] //OPTIONAL edit details (when user edits ticket info)
   };

var unirest = require("unirest");

//REQUIRES TICKET ID
var req = unirest("PUT", "https://ug-api.acnapiv3.io/swivel/acnapi-common-services/common/classes/GameScore/EZihnesGG7");

req.headers({
  "Postman-Token": "891e484a-aa1d-44b3-b8a9-c5f1e3f0db2c",
  "cache-control": "no-cache",
  "Content-Type": "application/json",
  "Server-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6Y3hRVEl5UkRVeU1qYzNSakEzTnpKQ01qVTROVVJFUlVZelF6VTRPRUV6T0RreE1UVTVPQSJ9.eyJpc3MiOiJodHRwczovL2FjbmFwaS1wcm9kLmF1dGgwLmNvbS8iLCJzdWIiOiI1NHV5OTFrTjNCVVV6aDhDaU5ZRzBTZFY5c0k0eTVpSkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9wbGFjZWhvbGRlci5jb20vcGxhY2UiLCJpYXQiOjE1NDk5NTI2ODIsImV4cCI6MTU1MjU0NDY4MiwiYXpwIjoiNTR1eTkxa04zQlVVemg4Q2lOWUcwU2RWOXNJNHk1aUoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.u7EGUdWpwO0D97ZcIq-IddhlneWK9ambxMtdK7sChU7Ykc_60A90Nd25D4VnwkV_emdZLQH5Vo_UkuHUQD3E7lxLsCJt_Bm77VbkJDKiAVJ_Tj0qeD3pBl5M-ghoO_NL2_Gf6OSHGH5iZbVSL7oShq8ozZHd6JUj9SX5iex5HGhirbi3eoWMLfXFkgoE_4gd6eotMCGTjva4dUt5qe2CzKH4b3QR5l00JJUlDc6OwmDE5p-XnlMDts45mGqZ0Fd3jp69i7iIKde7MEnZ1XmTl47WmOmlMCah9Stzlz1651T6AGP0ZCSrbpKBqyUFJviFIsS2IlIw2LSG9ATSUxkSyw"
});

req.type("json");
req.send(input);

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
