# Rover

My submission for Cedrus Application Build.

## Setup

In order to setup, follow these steps:

* Clone the app by running this command:

```
https://github.com/JTFeinberg/Rover.git
```

* Run `npm install` to install all dependencies.

* Make sure to have PostgreSQL installed and run `createdb rover` and
  `createdb rover-test`

* Run `npm run seed` to sync databases

* Finally, run `npm run start-dev` and open your browser to http://localhost:8080 to run app.

## Testing

Some tests have been written for this app. To see tests, run `npm test`.

## Future Implementations

These are some ideas that I want to integrate into the app some day:

* Styling

* A setup script

* Users ability to Swipe left/right on vets they approve or disapprove of

* Users ability to make appointments after swiping right on vet

* Remove disapproved vets from users view
