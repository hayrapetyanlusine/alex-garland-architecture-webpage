export const initialState = {
    nav: {
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
            { id: 1, imgSrc: "staff-1.jpg", name: "Tony Scott", position: "Principal AIA, LEED AP BD+C" },
            { id: 2, imgSrc: "staff-2.jpg", name: "Sarah Conner", position: "Principal, AIA, LEED AP BD+C" },
            { id: 3, imgSrc: "staff-3.jpg", name: "Leslie Knope", position: "Principal, AIA, LEED AP BD+C" },
            { id: 4, imgSrc: "staff-4.jpg", name: "Marty McFly", position: "Senior Associate, AIA" },
            { id: 5, imgSrc: "staff-5.jpg", name: "Buffy Summers", position: "Senior Associate" },
            { id: 6, imgSrc: "staff-6.jpg", name: "Liz Lemon", position: "Associate, AIA, LEED AP BD+C" },
            { id: 7, imgSrc: "staff-7.jpg", name: "Felicity Smoak", position: "Associate, AIA, LEED AP BD+C" },
            { id: 8, imgSrc: "staff-8.jpg", name: "John McClane", position: "Associate, AIA, LEED AP BD+C" },
            { id: 9, imgSrc: "staff-9.jpg", name: "Kate Beckett", position: "Associate, AIA, LEED AP BD+C" },
            { id: 10, imgSrc: "staff-10.jpg", name: "Erika Murphy", position: "Communications Coordinator" },
            { id: 11, imgSrc: "staff-11.jpg", name: "Han Solo", position: "3D Studio Lead" },
            { id: 12, imgSrc: "staff-12.jpg", name: "Elaine Benes", position: "Executive Assistant" },
            { id: 13, imgSrc: "staff-13.jpg", name: "Hans Landa", position: "Executive Assistant" },
            { id: 14, imgSrc: "staff-14.jpg", name: "Nora durst", position: "Executive Assistant" },
        ]
    },
    work: {
        galleryImages: [
            { id: 1, src: "work-1.jpg", title: "Commercial" },
            { id: 2, src: "work-2.jpg", title: "Residential" },
            { id: 3, src: "work-3.jpg", title: "Education" },
            { id: 4, src: "work-4.jpg", title: "Hospitality" },
        ],
        sliderImages: [
            { id: 1, src: "work-slide1.jpg" },
            { id: 2, src: "work-slide2.jpg" },
            { id: 3, src: "work-slide3.jpg" },
            { id: 4, src: "work-slide4.jpg" },
            { id: 5, src: "work-slide5.jpg" },
        ],
        quote: {
            text: "We couldn't be happier with our decision to work with Alex Garland Architects. They exceeded our expectations on every level and designed a building we love being in every day.",
            name: "- Zack Morris, Bayside High School"
        }
    },
    studio: {
        article: {
            imgUrl: "inspiration-img.jpg",
            title: "Form & function",
            text: "Some say form should follow function, but true innovation occurs when form and function influence each other to produce something truly elegant. This is one of AGA’s guiding principles.<br /> Although perfection is unattainable, every new project renews our passion to reach for it. Determining which designs, materials, and methods will best bring our clients’ dreams to fruition is our perpetual source of inspiration and is what drives us to constantly push the limitations of what architecture can be."
        },
        quote: {
            text: "Alex Garland Architects designed my new restaurant, and they surpassed my wildest dreams. They listened to me and delivered everything I wanted, and then some. Thanks, Alex Garland Architects!",
            name: "- Jessica Day, The Griffin Restaurant & Bar"
        }
    },
    home: {
        animationImages: [
            { id: 1, url: "home-animation1.jpg" },
            { id: 2, url: "home-animation2.jpg" },
            { id: 3, url: "home-animation3.jpg" },
        ],
        projects: [
            { id: 1, url: "home-proj1.jpg", name: "Utah House", type: "Private Residence" },
            { id: 2, url: "home-proj2.jpg", name: "New Headquarters", type: "Weyland Corporation" },
            { id: 3, url: "home-proj3.jpg", name: "Mickel House", type: "Private Residence" },
        ],
        article: {
            imgUrl: "about-staff.jpg",
            title: "Why work with us",
            text: "Because creating stunning and functional spaces that reflect our clients’ unique needs and personalities is what we do best. Our team of experienced architects, designers, and engineers have a passion for design and a dedication to excellence that is evident in every project we undertake. <br/> Our portfolio of work speaks for itself, with a diverse range of projects that showcase our creativity, attention to detail, and commitment to excellence. Whether you are looking to build a new home, renovate an existing space, or design a commercial building, we have the expertise and experience to bring your vision to life. <br/> So why should you work with AGA? Because we are passionate about design, innovative, and have a long history of exceeding expectations. Contact us today to learn more about how we can help you achieve your vision."
        },
        quote: {
            text: "Working with Alex Garland Architects was a great experience. They understood my vision, exceeded my expectations, and completed the project on time and within budget. I highly recommend them to anyone looking for a talented and dedicated team of architects. Thanks, Alex Garland Architects!",
            name: "- Gordon Pritchard, Harrison University"
        }
    }
}