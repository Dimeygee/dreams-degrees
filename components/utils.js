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