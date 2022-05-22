import calender from "../public/images/calendar.png"
import profile from "../public/images/profile.png"
import user2 from "../public/images/user2.png"
import category from "../public/images/category.png"
import grant from "../public/images/grant.png"
import interns from "../public/images/interns.png"
import TechnologyProgram from "./tech"
import SessionProgram from "./session"
import AccountabilityProgam from "./accountability"
import IntershipProgram from "./intership"
import BusinessGrants from "./businessgrants"
import EventsProgram from "./events"
import webb from "../public/images/webb.png"
import oval from "../public/images/oval.png"
import mbutton from "../public/images/mbutton.png"
import ibutton from "../public/images/ibutton.png"
import events from "../public/images/events.png"
import ddbg from "../public/images/ddbg.png"
import apt from "../public/images/apt.png"
import swt from "../public/images/swt.png"



export const programsUtils = [
    { 
        "id": 0,
        "image" : category,
        "text" : "Technology Mentorship Program"
    },
    { 
        "id": 1,
        "image" : interns,
        "text" : "Internship (Coming soon)"
    },
    { 
        "id": 2,
        "image" : profile,
        "text" : "Accountability Partner in Technology"
    },
    { 
        "id": 3,
        "image" : user2,
        "text" : "1:1 Session with a Tech Mentor"
    },
    { 
        "id": 4,
        "image" : grant,
        "text" : "D&D Business Grant (Coming Soon)"
    },
    { 
        "id": 5,
        "image" : calender,
        "text" : "D&D Events"
    },
]

export const programsArray = [
    { 
        "id":0,
        "component": <TechnologyProgram />,
    },
    { 
        "id":1,
        "component": <IntershipProgram />,
    },
    { 
        "id":2,
        "component": <AccountabilityProgam />,
    },
    { 
        "id":3,
        "component": <SessionProgram />,
    },
    { 
        "id":4,
        "component": <BusinessGrants />,
    },
    { 
        "id":5,
        "component": <EventsProgram />,
    },
    
    
]


export const review_utils = [
{ 
        image: webb,
        name: "Theresa Webb",
        profession:"UI Designer",
        review : "Having a like-minded community makes me feel like I’m part of something bigger. I thought online learning was lonely and unengaging."
    },
    { 
        image: oval,
        name: "Theresa Webb",
        profession:"UI Designer",
        review : "According to Cesar Millan, licking behaviors stem from ingrained personality traits bred through canines as a communication."
    },
    { 
        image: oval,
        name: "Theresa Webb",
        profession:"UI Designer",
        review : "According to Cesar Millan, licking behaviors stem from ingrained personality traits bred through canines as a communication."
    },
]


export const programs = [
    { 
        id: 0,
        image: mbutton,
        head:"Technology Mentorship Program",
        text:"This is a technology mentoring program which aims to provide vibrant and ambitious young women in the information technology industry or women wanting to transition into the field of IT with adequate access."
     },
     { 
        id: 1,
        image: ibutton,
        head:"Internship (Coming soon)",
        text:"Dreams & Degrees is currently working to introduce a program that offers females interested in technology the opportunity to gain real world experience, invaluable training as well as confidence and network building. Click here to Join waitlist."
     },
     
     { 
        id: 2,
        image: apt,
        head:"Accountability Partner in Technology",
        text:"Our accountability partner program aims to match interested community members with ambitious, intentional and like-minded individual(s) in technology that would help you stay committed to your goals for the new year."
     },
     { 
        id: 3,
        image: ddbg,
        head:"D&D Business Grant (Coming Soon)",
        text:"Our small business grants are designed for female entrepreneurs in Africa. The grant would be open to for-profit businesses that are one to three years old and woman led. In addition to the grant, grant winners also get to be featured on our website, newsletter and social media platforms."
     },
     { 
        id: 4,
        image: swt,
        head:"1:1 Session with a Tech Mentor.",
        text:"Book/schedule a 1:1 session with an experienced professional in tech instantly when you join our slack community."
     },
     { 
        id: 5,
        image: events,
        head:"D&D Events",
        text:"We organize virtual hangouts, twitter space discussions, workshops, and webinars for females to connect, learn and grow in a safe virtual or physical environment. Keep your eye open for all the details in the events section of this website, newsletter or follow us on social media and we will keep you posted about dates and venues."
     },
]