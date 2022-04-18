<!-- notes 

Challenges:

intitially made the search trigger onChange with useEffect calling api
everytime, realized that the onChange was triggering new api search with
input which was inefficient and submitting would not work as App state would refresh with keyword set to '', therefore the search wasnt happening
and results did not appear.

Initially tried filtering the results by doing separate api calls for 
each option but quickly realized this was inefficient and that I was approaching it the wrong way.


-->
