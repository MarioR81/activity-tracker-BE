# activity-tracker-BE
# ActivKid - Backend

## Note: Passwords will never be returned for Safety Reasons.

If you're interested in trying to install the dependencies, run the server, and test the tests locally, feel free to check out STARTHERE.md


# API OFFLINE/ONLINE
GET: /

https://activkid.herokuapp.com/

A single "/" will redirect you to a message if the API is running:

{ The API is up! }

# USERS LIST
## GET: /api/users

https://activkid.herokuapp.com/api/users

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
