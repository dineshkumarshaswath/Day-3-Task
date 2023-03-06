
//2. Create your own resume data in JSON format.

let MyResume = {
    "Bio-data": {
        "name": "DINESHKUMAR R",
        "email": "dineshshaswath@gamil.com",
        "phone": 9585612456,
        "degree": "B.Sc",
        "location": {
            "address": "4/218, S.Kathirnarasingapuram, Ammapatty(po), Aundipatty(tk),Theni(dt)",
            "postalCode": 625512,
            "city": "Theni",
            "state": "Tamilnadu",
            "country": "India"
        },
        "profiles": [
            {

                "github": "https://github.com/dineshkumarshaswath"
            }
        ]
    },
    "Education": [
        {
            "Grade": "SSLC",
            "Year": "2015",
            "Percentage": "93",
            "School Name": "Government High school, S. Kathirnarasingapuram"

        },
{
            "Grade": "HSCC",
            "Year": "2017",
            "Percentage": "88",
            "School Name": "SKA HR SEC SCHOOL, AUNDIPATTY"

        },

        {
            "institution": "KARPAGAM ACADEMY OF HIGHER EDUCATRION",
            "department": "Mathematics",
            "studyType": "fulltime",
            "batch start year": 2017,
            "batch end year": 2020,
            "gpa": 8.3,
        }
    ],
    "Skills": [
        {
            "Programming language": "c,c++",
            "level": "beginer",
            "Application": "MS Office"

        }
    ],
    "Languages": [
        {
            "language": "Tamil,Enlish",
        }
    ],
    "Interests": [
        {
            "1": "learning new skills about web development",
            "2": "Reading self development books",
            "3":"criket",
            "4":"silambam"
        }
    ]
}
console.log(MyResume);
