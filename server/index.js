const express = require('express');
const app = express();

const events = [
    {
        id: 1,
        name: 'TES-The Entrepreneur Show',
        date: 'February 17th',
        speaker: 'Mr. Sandeep Jain',
        description: 'Join us for the highly anticipated TES-The Entrepreneur Show where you\'ll have the chance to hear directly from the founder of Geeks for Geeks, Mr. Sandeep Jain. Learn from his success story and gain valuable insights into the world of entrepreneurship.'
    },
    {
        id: 2,
        name: 'Startup Weekend',
        date: 'March 5th - 7th',
        speaker: 'Mr. John Doe',
        description: 'Startup Weekend is a 54-hour event where developers, designers, and entrepreneurs come together to build a startup. Join us for a weekend full of learning, networking, and fun.'
    },
    {
        id: 3,
        name: 'Women in Tech Summit',
        date: 'April 10th',
        speaker: 'Ms. Jane Doe',
        description: 'The Women in Tech Summit is a one-day conference that brings together women in the tech industry to share their experiences, knowledge, and ideas. Join us for a day of inspiration, education, and empowerment.'
    },
];

app.use(express.json());

app.get('/api/events', (req, res) => {
    res.send(events);
});

app.listen(5000, () => console.log('Server started on port 5000'));
