/**
 * Refer to 'GET ALL TICKETS API'
 * See all tickets created (sorted by status).
*/

var unirest = require("unirest");

var req = unirest("GET", "https://ug-api.acnapiv3.io/swivel/acnapi-common-services/common/classes/GameScore/n0UAIXjL7H");

req.headers({
  "Postman-Token": "970de554-a8b0-4a89-aa1a-457088c0b95a",
  "cache-control": "no-cache",
  "Content-Type": "application/json",
  "Server-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6Y3hRVEl5UkRVeU1qYzNSakEzTnpKQ01qVTROVVJFUlVZelF6VTRPRUV6T0RreE1UVTVPQSJ9.eyJpc3MiOiJodHRwczovL2FjbmFwaS1wcm9kLmF1dGgwLmNvbS8iLCJzdWIiOiI1NHV5OTFrTjNCVVV6aDhDaU5ZRzBTZFY5c0k0eTVpSkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9wbGFjZWhvbGRlci5jb20vcGxhY2UiLCJpYXQiOjE1NDk5NTI2ODIsImV4cCI6MTU1MjU0NDY4MiwiYXpwIjoiNTR1eTkxa04zQlVVemg4Q2lOWUcwU2RWOXNJNHk1aUoiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.u7EGUdWpwO0D97ZcIq-IddhlneWK9ambxMtdK7sChU7Ykc_60A90Nd25D4VnwkV_emdZLQH5Vo_UkuHUQD3E7lxLsCJt_Bm77VbkJDKiAVJ_Tj0qeD3pBl5M-ghoO_NL2_Gf6OSHGH5iZbVSL7oShq8ozZHd6JUj9SX5iex5HGhirbi3eoWMLfXFkgoE_4gd6eotMCGTjva4dUt5qe2CzKH4b3QR5l00JJUlDc6OwmDE5p-XnlMDts45mGqZ0Fd3jp69i7iIKde7MEnZ1XmTl47WmOmlMCah9Stzlz1651T6AGP0ZCSrbpKBqyUFJviFIsS2IlIw2LSG9ATSUxkSyw"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});





/**
 * Refer to 'EDIT MAIN TICKETS LIST API'
 * Edits MAIN TICKETS LISTING. Used when status of ticket changed OR new tickets are created.
 * @param pending (list of strings) amended pending list
 * @param attended (list of strings) amended attended list
 * @param resolved (list of strings) amended resolved list
*/

let input = {
    "pending": [], //E.g. ["EZihnesGG7"]
    "attended": [],
    "resolved": []
   };

var unirest = require("unirest");

var req = unirest("PUT", "https://ug-api.acnapiv3.io/swivel/acnapi-common-services/common/classes/GameScore/n0UAIXjL7H");

req.headers({
  "Postman-Token": "970de554-a8b0-4a89-aa1a-457088c0b95a",
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

