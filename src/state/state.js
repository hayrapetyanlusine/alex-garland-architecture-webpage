export const initialState = {
    nav: {
        // img: src(""),
        menu: ["studio", "work", "team", "careers", "contact"]
    },
    careers: {
        imagesUrl: ["careers-bg.jpg", "careers-last.jpg"],
        interests: [
            { id: 1, name: "Administrative" },
            { id: 2, name: "Architectural" },
            { id: 3, name: "Interior Design" },
            { id: 4, name: "Financial" },
            { id: 5, name: "Marketing" }
        ]
    },
    contact: {
        galeryImgSrc: [
            { id: 1, imageUrl: "contact-img1.jpg" },
            { id: 2, imageUrl: "contact-img2.jpg" },
            { id: 3, imageUrl: "contact-img3.jpg" },
            { id: 4, imageUrl: "contact-center.jpg" },
            { id: 5, imageUrl: "contact-img4.jpg" },
            { id: 6, imageUrl: "contact-img5.jpg" },
            { id: 7, imageUrl: "contact-img6.jpg" }
        ],
        form: [
            {
                id: 1,
                DBName: "name",
                name: "Name*",
                type: "text",
                placeholder: "Michael Corleone",
                required: true,
                errorMessage: "Invalid name"
            },
            {
                id: 2,
                DBName: "email",
                name: "Email Address*",
                type: "email",
                placeholder: "mcorleone@gencooliveoil.com",
                required: true,
                errorMessage: "Invalid email address"
            },
            {
                id: 3,
                DBName: "phone",
                name: "Phone",
                type: "phone",
                placeholder: "732-555-1234",
                required: false,
                errorMessage: "Invalid phone number"
            },
            {
                id: 4,
                DBName: "message",
                name: "Message*",
                type: "textarea",
                placeholder: "We're looking forward to hearing from you",
                required: true,
                errorMessage: "Please enter a message"
            }
        ]
    },
    team: {
        staff: [
            {id: 1, imgSrc: "staff-1.jpg", name: "Tony Scott", position: "Principal AIA, LEED AP BD+C"},
            {id: 2, imgSrc: "staff-2.jpg", name: "Sarah Conner", position: "Principal, AIA, LEED AP BD+C"},
            {id: 3, imgSrc: "staff-3.jpg", name: "Leslie Knope", position: "Principal, AIA, LEED AP BD+C"},
            {id: 4, imgSrc: "staff-4.jpg", name: "Marty McFly", position: "Senior Associate, AIA"},
            {id: 5, imgSrc: "staff-5.jpg", name: "Buffy Summers", position: "Senior Associate"},
            {id: 6, imgSrc: "staff-6.jpg", name: "Liz Lemon", position: "Associate, AIA, LEED AP BD+C"},
            {id: 7, imgSrc: "staff-7.jpg", name: "Felicity Smoak", position: "Associate, AIA, LEED AP BD+C"},
            {id: 8, imgSrc: "staff-8.jpg", name: "John McClane", position: "Associate, AIA, LEED AP BD+C"},
            {id: 9, imgSrc: "staff-9.jpg", name: "Kate Beckett", position: "Associate, AIA, LEED AP BD+C"},
            {id: 10, imgSrc: "staff-10.jpg", name: "Erika Murphy", position: "Communications Coordinator"},
            {id: 11, imgSrc: "staff-11.jpg", name: "Han Solo", position: "3D Studio Lead"},
            {id: 12, imgSrc: "staff-12.jpg", name: "Elaine Benes", position: "Executive Assistant"},
            {id: 13, imgSrc: "staff-13.jpg", name: "Hans Landa", position: "Executive Assistant"},
            {id: 14, imgSrc: "staff-14.jpg", name: "Nora durst", position: "Executive Assistant"},
        ]
    },
    work: {
        galleryImages: [
            {id: 1, src: "work-1.jpg", title: "Commercial"},
            {id: 2, src: "work-2.jpg", title: "Residential"},
            {id: 3, src: "work-3.jpg", title: "Education"},
            {id: 4, src: "work-4.jpg", title: "Hospitality"},
        ],
        sliderImages: [
            {id: 1, src: "work-slide1.jpg"},
            {id: 2, src: "work-slide2.jpg"},
            {id: 3, src: "work-slide3.jpg"},
            {id: 4, src: "work-slide4.jpg"},
            {id: 5, src: "work-slide5.jpg"},
        ]
    }
}