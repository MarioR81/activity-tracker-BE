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
    "first_name": "Joe",
    "last_name": "Smith",
    "email": "joesmith@email.com"
}


# LOGIN
## POST: /api/auth/login

https://activkid.herokuapp.com/api/auth/login

Users can login to their accounts by hitting this endpoint with USERNAME & PASSWORD. User will recieve a message from the BackEnd saying "Welcome {username}!", along with their token.

{
  "message": "Welcome Joe!",
  "token": "XVCVRCt2plFhwyAGw6Ik7tFImkzODc2TU4pdCTcCZBY14nMyzjo1WNVybXfth8oztGoShHLhI6M0zGKxLCJ1Mj" (fake token),
  "user_id": 3
}


# USERS LIST
## GET: /api/users

https://activkid.herokuapp.com/api/users

## RESTRICTED: REQUIRES HEADER

Will retrieve a list of ALL users.

[
    {
        "id": 1,
        "username": "user1",
        "first_name": "User",
        "last_name": "One",
        "email": "userone@email.com"
    },
    {
        "id": 1,
        "username": "user2",
        "first_name": "User",
        "last_name": "Two",
        "email": "usertwo@email.com"
    },
    {
        "id": 1,
        "username": "User3",
        "first_name": "User",
        "last_name": "Three",
        "email": "userthree@email.com"
    }
]
