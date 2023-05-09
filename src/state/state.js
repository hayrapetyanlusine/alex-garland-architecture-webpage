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
    }
}