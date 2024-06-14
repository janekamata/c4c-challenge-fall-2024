import express from 'express';

const app = express();
const port = 4000;

// Sample partner data to show on page load
const partners = {
  "sftt": {
    "thumbnailUrl": "https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/sfft-project-page.png",
    "name": "Speak For The Trees",
    "description": "Speak for the Trees Boston aims to improve the size and health of the urban forest in the greater Boston area, with a focus on under-served and under-canopied neighborhoods. They work with volunteers to inventory (collect data) trees, plant trees, and educate those about trees. C4C has built a tree stewardship application for SFTT that allows users to participate in conserving Boston's urban forest. Across Boston, hundreds of trees have been adopted and cared for. Speak for the Trees Boston aims to improve the size and health of the urban forest in the greater Boston area, with a focus on under-served and under-canopied neighborhoods. They work with volunteers to inventory (collect data) trees, plant trees, and educate those about trees. C4C has built a tree stewardship application for SFTT that allows users to participate in conserving Boston's urban forest. Across Boston, hundreds of trees have been adopted and cared for.",
    "active": "Active"
  },
  "bt": {
    "thumbnailUrl": "https://static.wixstatic.com/media/1193ef_371853f9145b445fb883f16ed7741b60~mv2.jpg/v1/crop/x_0,y_2,w_1842,h_332/fill/w_466,h_84,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Breaktime%20Logo%20Comfortaa-2.jpg",
    "name": "Breaktime",
    "description": "Breaktime’s mission is to break the cycle of homelessness by equipping young adults with the job and financial security they need to establish housing security. A key part of the program is by providing meaningful employment. We are assisting Breaktime in building a bespoke system for their unique needs.",
    "active": "Inactive"
  },
  "tswgo": {
    "thumbnailUrl": "https://images.squarespace-cdn.com/content/v1/5afe1b373e2d09d58a8b7629/1548818988674-PNHSLS67AF1SRNW6JAX4/LOGO_TSWGO_1.png?format=1500w",
    "name": "This Start Won't Go Out",
    "description": "Since its founding in 2011, TSWGO has helped hundreds of families, with gifts totaling over $450,000 to help families suffering from financial hardship related to childhood cancer. We're helping to streamline this system so that TSWGO can focus their attention on helping families.",
    "active": "Active"
  }
}

/* 
  APPLICATION MIDDLEWARE
  This section contains some server configuration.
  You will likely not need to change anything here to meet the requirements.
  (but you are welcome to, if you'd like)
*/

// Parse request bodies as JSON
app.use(express.json())
// Enable CORS for the frontend so it can call the backend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  next();
})

/*
  APPLICATION ROUTES
*/

// GET endpoint to return partners data
app.get('/', (req, res) => {
  res.status(200).send(partners);
})

// POST endpoint that adds the info sent in the body as a new partner
// key of the entry is the partner name
app.post('/', (req, res) => {
  const { thumbnailUrl, name, description, active } = req.body;
  partners[name] = {
    thumbnailUrl,
    name,
    description,
    active
  }
  res.status(201).send({ message: 'Partner added' });
});

// DELETE endpoint that deletes the partner based on the given key
app.delete('/', (req, res) => {
  delete partners[req.body.key];
  res.status(200).send({ message: 'Partner deleted' });
});

// Start the backend
app.listen(port, () => {
  console.log(`Express server starting on port ${port}!`);
})