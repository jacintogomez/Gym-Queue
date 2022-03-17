# gymqueue
This is a simple queueing service I created to address problems with the gym in my apartment. 
The building put a limit of 10 visitors per hour due to COVID-19, and had a paper sign up system 
which allowed for insincere reservations. This system allows for tenants to claim a spot by entering 
their name, apartment and time, and to relinquish their spot to another person by entering their 
name and apartment. It uses a MongoDB cluster to collect the entries, and entries are deleted either
by the tenant or at the end of the day. There are no login credentials, but to delete an entry one
would have to enter the correct apartment associated with a name. I am working to make it more secure 
using a randomly generated 4 digit code to act as a temporary "password" so that knowing someone's 
apartment number isn't enough either.
