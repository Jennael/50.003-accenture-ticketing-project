/**
 * Refer to 'Get Conversation API'
 * Gets conversation data for ticket.
 * @param ticket_conversation (string) conversation's objectID
*/

var unirest = require("unirest");

// REQUIRES CONVERSATION ID IDgV7CUb1pd0
var req = unirest("GET", "https://ug-api.acnapiv3.io/swivel/acnapi-common-services/common/classes/GameScore/gV7CUb1pd0");

req.headers({
  "Postman-Token": "b1beb492-0dfc-43e5-9c14-28b8c3447f2c",
  "cache-control": "no-cache",
  "Content-Type": "application/json",
  "Server-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6Y3hRVEl5UkRVeU1qYzNSakEzTnpKQ01qVTROVVJFUlVZelF6VTRPRUV6T0RreE1UVTVPQSJ9.eyJpc3MiOiJodHRwczovL2FjbmFwaS1wcm9kLmF1dGgwLmNvbS8iLCJzdWIiOiI1NHV5OTFrTjNCVVV6aDhDaU5ZRzBTZFY5c0k0eTVpSkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9wbGFjZWhvbGRlci5jb20vcGxhY2UiLCJpYXQiOjE1NDk5NTI2ODIsImV4cCI6MTU1MjU0NDY4MiwiYXpwIjoiNTR1eTkxa04zQlVVemg4Q2lOWUcwU2RWOXNJNHk1aUoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.u7EGUdWpwO0D97ZcIq-IddhlneWK9ambxMtdK7sChU7Ykc_60A90Nd25D4VnwkV_emdZLQH5Vo_UkuHUQD3E7lxLsCJt_Bm77VbkJDKiAVJ_Tj0qeD3pBl5M-ghoO_NL2_Gf6OSHGH5iZbVSL7oShq8ozZHd6JUj9SX5iex5HGhirbi3eoWMLfXFkgoE_4gd6eotMCGTjva4dUt5qe2CzKH4b3QR5l00JJUlDc6OwmDE5p-XnlMDts45mGqZ0Fd3jp69i7iIKde7MEnZ1XmTl47WmOmlMCah9Stzlz1651T6AGP0ZCSrbpKBqyUFJviFIsS2IlIw2LSG9ATSUxkSyw"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
  var keys = Object.keys(res.body);
  console.log(keys.length); //use this length value to help create index for new conversation message

});






/**
 * Refer to 'New Message API'
 * Edits conversation for ticket.
 * @param ticket_conversation (string) conversation's objectID
 * @param index (string) index as key for new message
 * @param sender (string) sender's objectID
 * @param message (string) message that is sent
*/

let input = {
    "index": ["sender", ""+req.body["message"]]
};

//Example input
// {
//     "c1": ["DDBzWKbWc1", {"message": "msg"}]
//   }

var unirest = require("unirest");

// REQUIRES CONVERSATION ID IDgV7CUb1pd0
var req = unirest("PUT", "https://ug-api.acnapiv3.io/swivel/acnapi-common-services/common/classes/GameScore/gV7CUb1pd0");

req.headers({
  "Postman-Token": "9ab8b51a-9688-4bc8-a2ad-f01b5bbaa4e1",
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


