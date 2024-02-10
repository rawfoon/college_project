import StudentTable from '@/app/components/Honours/StudentTable';
import React from 'react';

const page = () => {


  const data1 = [{
    "Roll": 1001,
    "first_name": "Cordi",
    "last_name": "Wissbey",
    "email": "cwissbey0@howstuffworks.com",
    "present": 38,
    "phone": "2878656652"
  }, {
    "Roll": 1002,
    "first_name": "Darn",
    "last_name": "Bould",
    "email": "dbould1@bloomberg.com",
    "present": 21,
    "phone": "3939245739"
  }, {
    "Roll": 1003,
    "first_name": "Biddie",
    "last_name": "Broomhead",
    "email": "bbroomhead2@google.com.au",
    "present": 33,
    "phone": "1106524691"
  }, {
    "Roll": 1004,
    "first_name": "Myranda",
    "last_name": "Cheater",
    "email": "mcheater3@acquirethisname.com",
    "present": 81,
    "phone": "0674659392"
  }, {
    "Roll": 1005,
    "first_name": "Madelon",
    "last_name": "Moreton",
    "email": "mmoreton4@pbs.org",
    "present": 88,
    "phone": "0061923923"
  }, {
    "Roll": 1006,
    "first_name": "Adiana",
    "last_name": "Marshalleck",
    "email": "amarshalleck5@hao123.com",
    "present": 76,
    "phone": "7516054038"
  }, {
    "Roll": 1007,
    "first_name": "Addie",
    "last_name": "Waterson",
    "email": "awaterson6@wisc.edu",
    "present": 8,
    "phone": "7933795188"
  }, {
    "Roll": 1008,
    "first_name": "Kristopher",
    "last_name": "Curnock",
    "email": "kcurnock7@aol.com",
    "present": 11,
    "phone": "9747590123"
  }, {
    "Roll": 1009,
    "first_name": "Rebeca",
    "last_name": "Pavlovsky",
    "email": "rpavlovsky8@psu.edu",
    "present": 43,
    "phone": "1486220673"
  }, {
    "Roll": 1010,
    "first_name": "Clemens",
    "last_name": "Hinkins",
    "email": "chinkins9@fema.gov",
    "present": 34,
    "phone": "2684372209"
  }, {
    "Roll": 1011,
    "first_name": "Cammy",
    "last_name": "Dyet",
    "email": "cdyeta@cloudflare.com",
    "present": 2,
    "phone": "4533086462"
  }, {
    "Roll": 1012,
    "first_name": "Dennison",
    "last_name": "Cordelette",
    "email": "dcordeletteb@youtu.be",
    "present": 10,
    "phone": "5643364468"
  }, {
    "Roll": 1013,
    "first_name": "Fabien",
    "last_name": "Mulrooney",
    "email": "fmulrooneyc@sciencedirect.com",
    "present": 83,
    "phone": "8755503004"
  }, {
    "Roll": 1014,
    "first_name": "Tommy",
    "last_name": "Bussen",
    "email": "tbussend@buzzfeed.com",
    "present": 65,
    "phone": "1808581164"
  }, {
    "Roll": 1015,
    "first_name": "Everard",
    "last_name": "Irons",
    "email": "eironse@ibm.com",
    "present": 5,
    "phone": "8437254787"
  }, {
    "Roll": 1016,
    "first_name": "Reggie",
    "last_name": "Bohike",
    "email": "rbohikef@fastcompany.com",
    "present": 14,
    "phone": "1113061324"
  }, {
    "Roll": 1017,
    "first_name": "Alicea",
    "last_name": "Manville",
    "email": "amanvilleg@g.co",
    "present": 70,
    "phone": "5049129605"
  }, {
    "Roll": 1018,
    "first_name": "Devan",
    "last_name": "Mawby",
    "email": "dmawbyh@smugmug.com",
    "present": 99,
    "phone": "4173086075"
  }, {
    "Roll": 1019,
    "first_name": "Alejoa",
    "last_name": "Derrick",
    "email": "aderricki@dailymail.co.uk",
    "present": 93,
    "phone": "8021526033"
  }, {
    "Roll": 1020,
    "first_name": "Welsh",
    "last_name": "McClaurie",
    "email": "wmcclauriej@trellian.com",
    "present": 39,
    "phone": "7814042496"
  }, {
    "Roll": 1021,
    "first_name": "Doralynn",
    "last_name": "Mazella",
    "email": "dmazellak@simplemachines.org",
    "present": 47,
    "phone": "6261790434"
  }, {
    "Roll": 1022,
    "first_name": "Brigitte",
    "last_name": "Gaffey",
    "email": "bgaffeyl@illinois.edu",
    "present": 78,
    "phone": "6000776330"
  }, {
    "Roll": 1023,
    "first_name": "Oliy",
    "last_name": "Attwater",
    "email": "oattwaterm@nasa.gov",
    "present": 85,
    "phone": "9258211375"
  }, {
    "Roll": 1024,
    "first_name": "Melany",
    "last_name": "Tapenden",
    "email": "mtapendenn@jugem.jp",
    "present": 56,
    "phone": "0431145644"
  }, {
    "Roll": 1025,
    "first_name": "Farleigh",
    "last_name": "Creegan",
    "email": "fcreegano@miitbeian.gov.cn",
    "present": 55,
    "phone": "1373754281"
  }, {
    "Roll": 1026,
    "first_name": "Hugues",
    "last_name": "Shurmer",
    "email": "hshurmerp@macromedia.com",
    "present": 9,
    "phone": "7317160474"
  }, {
    "Roll": 1027,
    "first_name": "Mela",
    "last_name": "Dubique",
    "email": "mdubiqueq@epa.gov",
    "present": 39,
    "phone": "5177088693"
  }, {
    "Roll": 1028,
    "first_name": "Waylon",
    "last_name": "Itscowics",
    "email": "witscowicsr@engadget.com",
    "present": 40,
    "phone": "7037319538"
  }, {
    "Roll": 1029,
    "first_name": "Zollie",
    "last_name": "Rosewell",
    "email": "zrosewells@nhs.uk",
    "present": 18,
    "phone": "6961264115"
  }, {
    "Roll": 1030,
    "first_name": "Fernande",
    "last_name": "Torvey",
    "email": "ftorveyt@woothemes.com",
    "present": 82,
    "phone": "7016538354"
  }]
  
  
  

  const data = [data1, {"year": "Honours 1st year"}]




    return (
        <div>
           

            <StudentTable props={data}/>
        </div>
    );
};

export default page;