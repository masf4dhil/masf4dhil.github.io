// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import express from "./images/express.svg"
import mongodb from "./images/mongodb.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import instagramIcon from "./images/instagram.svg"
import twitterIcon from "./images/twitter.png"
import linkindIcon from "./images/linkdin.svg"

//portofolio
import nusa from "./images/nusakamera.jpg"
import stay from "./images/stay.jpg"
import mobile from "./images/mobile.jpg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Fadhil",
  headerTagline: [
    //Line 1 For Header
    "Lets get in touch",
    //Line 2 For Header
    "Im Software Developer",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "Im working with newest front-end framework like React Native and React. Love to lern React and Express. Cant wait to be a touch with you!",

  //Contact Email
  contactEmail: "fadhil.alfatayah@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Nusa Kamera", //Project Title - Add Your Project Title Here
      para:
        "Web Apps to provide information, product, booking and estimate order in rental camera ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: nusa,
      //Project URL - Add Your Project Url Here
      url: "https://www.nusakamera.com/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "BAF Mobile", //Project Title - Add Your Project Title Here
      para:
        "Mobile apps to help customers submit credit product, track the installment credit and estimatation credit product", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: mobile,
      //Project URL - Add Your Project Url Here
      url:
        "https://play.google.com/store/apps/details?id=com.id.bussanautofinance&hl=in&gl=US",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Staycation", //Project Title - Add Your Project Title Here
      para:
        "Web Apps to provide admin booking hotel to book hotel, check status room and validation payment for rent", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: stay,
      //Project URL - Add Your Project Url Here
      url: "https://admin-book-hotel.herokuapp.com/",
    },
    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hi guys, nice to meet you! , Im software developer interested in Mobile Apps. Im currently work at PT Bussan Auto Finance. Im focused to build product with react native. Happy to lern the new thing about tech",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para: "80%",
    },
    {
      id: 2,
      img: cssIcon,
      para: "70%",
    },
    {
      id: 3,
      img: jsIcon,
      para: "80%",
    },
    {
      id: 4,
      img: reactIcon,
      para: "75%,",
    },
    {
      id: 5,
      img: express,
      para: "75%",
    },
    {
      id: 6,
      img: mongodb,
      para: "70%,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/masf4dhil" },
    {
      img: linkindIcon,
      url: "https://www.linkedin.com/in/fadhillah-alfatayah-1b5976130/",
    },
    {
      img: twitterIcon,
      url: "https://twitter.com/masf4dhil",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/masf4dhil/",
    },
  ],

  // End Contact Section ---------------
}
