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


# KIDS LIST
## GET: /api/kids

https://activkid.herokuapp.com/api/kids

## RESTRICTED: REQUIRES HEADER

Will retrieve a list of ALL kids.

[
    {
        "id": 1,
        "name": "kid 1",
        "points": 10,
        "created_on": "2020-04-03 04:54:36",
        "rewards_array": "[{test1}, {test2}, {test3}]",
        "parents_id": 1
    },
    {
        "id": 2,
        "name": "kid 2",
        "points": 50,
        "created_on": "2020-04-03 04:54:41",
        "rewards_array": "[{test1}, {test2}, {test3}]",
        "parents_id": 1
    },
    {
        "id": 4,
        "name": "kid 3",
        "points": 55,
        "created_on": "2020-04-03 05:16:07",
        "rewards_array": null,
        "parents_id": 1
    }
]



# KIDS LIST
## POST: /api/kids

https://activkid.herokuapp.com/api/kids

## RESTRICTED: REQUIRES HEADER

Will add a row to the kids table.

Example data:
{
    "name": "kid 4",
    "points": 40,
    "parents_id": 1
}

will RETURN:
{
    "id": 4,
    "name": "kid 4",
    "points": 40,
    "created_on": "2020-04-03 05:30:09",
    "rewards_array": null,
    "parents_id": 1
}


# KIDS LIST
## PUT: /api/kids/:id

https://activkid.herokuapp.com/api/kids/:id

## RESTRICTED: REQUIRES HEADER

Will edit or update an individual row on the kids table.

{
    "name": "kid 9",
    "points": 90,
    "rewards_array": "[{test1}, {test2}, {test3}]"
}


# KIDS LIST
## DELETE: /api/kids/:id

https://activkid.herokuapp.com/api/kids/:id

## RESTRICTED: REQUIRES HEADER

Will Delete an individual child from the kids table.

Example response:

{
    "removed": 1,
    "message": "Kid deleted successfully!"
}

