export const initialState = {
    nav: {
        // img: src(""),
        menu: ["studio", "work", "team", "careers", "contact"] 
    },
    contact: {
        galeryImgSrc: [
            {id: 1, imageUrl: "contact-img1.jpg" },
            {id: 2, imageUrl: "contact-img2.jpg" },
            {id: 3, imageUrl: "contact-img3.jpg" },
            {id: 4, imageUrl: "contact-center.jpg" },
            {id: 5, imageUrl: "contact-img4.jpg" },
            {id: 6, imageUrl: "contact-img5.jpg" },
            {id: 7, imageUrl: "contact-img6.jpg" }
        ],
        form: [
            {id: 1, name: "Name*", type: "text", placeholder: "Michael Corleone"},
            {id: 2, name: "Email Address*", type: "email", placeholder: "mcorleone@gencooliveoil.com"},
            {id: 3, name: "Phone", type: "phone", placeholder: "732-555-1234"},
            {id: 4, name: "Message*", type: "textarea", placeholder: "We're looking forward to hearing from you"}
        ]
    }
}