# Thriller-travels-flight-search-api-assessment


API DOCUMENTATION

API DESCRIPTION:
The flight search api, is an api that accepts flight search parameters (e.g., departure airport, arrival airport, date) and returns relevant flight data anywhere around the world.
when trying to search for a flight, the parameters listed above can be used distinctively, especially the departure airport and the arrival airport params. 

To get these paramaters, i created an API endpoint to get the list of airports available in the world using a third party api from RAPID API called FLIGHT RADAR. 
This was important, inorder to have access to the airports IATA code(International Air Transport Association Code). hence, so it can be used to filter and query flight searches by departure airports and arrival airports.
Then created a second enpoint to search for flights across the world and integrated with another endpoint for searching for flights gotten from RAPID API called FLIGHT FARE SEARCH.

API ENDPOINTS CREATED
1. http://localhost:5000/api/v1/flight/airports.
2. http://localhost:5000/api/v1/flight/search.

LIST OF THIRD PARTY ENDPOINTS USED
1. https://flight-radar1.p.rapidapi.com/aircrafts/list >>>>> to get the lists of airports.
2. https://flight-fare-search.p.rapidapi.com/v2/flights/ >>>> to search for flights based on departure and arrival.

HOW TO USE OR CALL THE API

1. Firstly, call these endpoint http://localhost:5000/api/v1/flight/airports, so as to get the list of airports available together with their IATA code(International Air Transport Association Code).
2. Then call these endpoint http://localhost:5000/api/v1/flight/search. these endpoints accepts the following parameters compulsorily, which must be provided for the search to work:
   a. from: which connotes the the departures airport.
   b. to: which connotes the arrivals airport.
   c. date: which connotes date of departure.
   d. adult: which gives a count of the number of people boarding the flight.

   while the parameters below, are optional:
   a. type: which depicts the kind of flight, either economy or business class.
   b. currency: which depicts the currency shown for flight prices.

Then grab the two different IATA Code gotten from the first endpoint(http://localhost:5000/api/v1/flight/airports) and input as a value for the "from" and "to" parameters, then select a date for departure and the number of adults boarding and other optional paramaters if needed.
example:
from: "LHR",
to: "LOS"
date: "2023-08-20,
adult: 1,
type: "economy",
currency: "USD"

After the implementation above, then search. It will show you the list of airlines flying from the departure airport to the arrival airport, with other neccessary fligt details.


KEYS: 
1. LHR: London Heathrow airport, United Kingdom
2. LOS: Murtala Muhammed Airport, Lagos Nigeria
