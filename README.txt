MongoDB requests

POST "localhost:1688/doctors/createDoctor" - Request to create Doctor in the database, with information send in JSON format in the body

GET "/" - A quick message

GET "localhost:1688/doctors/getAll" - Request to display all current Doctors in the database, returns JSON array of Doctor objects

GET "localhost:1688/doctors/getDoctorByName/:doctorname" - Request to display Doctor with matching name to "doctorname" including spaces

PATCH "localhost:1688/doctors/updateDoctorElementById/:doctorid" Request to update an element of a Doctor with generated ID matching "doctorid", elements sent as body of request in JSON format

DELETE "localhost:1688/doctors/removeDoctorByName/:doctorname" - Request to delete Doctor in the database, with name matching "doctorname", including spaces

DELETE "localhost:1688/doctors/removeAllDoctors" - Request to delete all Doctors held in the database! Be careful!