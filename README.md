# activity-tracker-BE
# ActivKid - Backend

## Note: Passwords will never be returned for Safety Reasons.

If you're interested in trying to install the dependencies, run the server, and test the tests locally, feel free to check out STARTHERE.md


# API OFFLINE/ONLINE
## GET: /

https://activkid.herokuapp.com/

A single "/" will redirect you to a message if the API is running:

{ The API is up! }

# REGISTER
## POST: /api/auth/register

https://activkid.herokuapp.com/api/auth/register

Users can create accounts by hitting this endpoint. USERNAME and PASSWORD and EMAIL are required.

Usernames MUST be at LEAST 3 characters long. Usernames MUST be Unique (No 2 people can have the same Username). Passwords MUST be at LEAST 4 characters long.  Email must be unique (no 2 people can have the same email).

{
    "username": "Joe Smith",
    "password": "pineapple",
    "email": "joesmith@email.com"
}


# LOGIN
## POST: /api/auth/login

https://activkid.herokuapp.com/api/auth/login

Users can login to their accounts by hitting this endpoint with USERNAME & PASSWORD. User will recieve a message from the BackEnd saying "Welcome {username}!", along with their token.

{
  "message": "Welcome Joe Smith!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6ImJyYW5keSIsImlhdCI6MTU4MjkzODY1NH0.Gtsg2N4nMz" (fake token),
  "user_id": 3
}

# USERS LIST
## GET: /api/users

https://activkid.herokuapp.com/api/users

## RESTRICTED: REQUIRES HEADER

Will retrieve a list of ALL users.

[{
    "id": 1,
    "username": "superman"
  },
  {
    "id": 2,
    "username": "joker"
  },
  {
    "id": 3,
    "username": "username"
  }]
