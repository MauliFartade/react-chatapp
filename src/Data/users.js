import user from '../reducers/user';
 
export const data = {
    profile: {
      id: 1,
      name: "Mauli Fartade",
      image:user.image,
      
      
      contacts: [
        {
          id: 2,
          name: "Ankush Sir",
          image:
            "https://media.licdn.com/dms/image/D4D03AQGN_hSqu1kRUA/profile-displayphoto-shrink_400_400/0/1673838042690?e=1702512000&v=beta&t=Q-HdI6auox4NybWkXDJtcE7NHZt4J8dinlMBlMSIgVw",
          chatlog: [
            {
              text: "Hello Mauli,How are you ?",
              timestamp: "12:36 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Sir. What about you Sir?",
              timestamp: "12:37 PM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great, Mauli.",
              timestamp: "1:00 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Are you facing any difficulty in your course?",
              timestamp: "01:01 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "No, Sir",
              timestamp: "01:05 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 3,
          name: "RM Sagar sir",
          image:"https://media.licdn.com/dms/image/D4D03AQGaY7_GWpe8Ig/profile-displayphoto-shrink_800_800/0/1686072814635?e=2147483647&v=beta&t=HLB47jeoltKIjpF9H1Zu_Kgr1MUQ-2JgTqjfxMcD8aU",
            
          chatlog: [
            {
              text: "Hi,Mauli",
              timestamp: "3:00 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Hello sir",
              timestamp: "3:02 PM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Have you completed your skill test?.",
              timestamp: "3:03 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "React?",
              timestamp: "3:30 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "one is remaining",
              timestamp: "4:00 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 4,
          name: "Coding Ninjas",
          image:
            "data:image/png;base64,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",
          chatlog: [
            {
              text: "Hi Mauli,",
              timestamp: "4:30 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Hi",
              timestamp: "04:32 PM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Yesterday, you raised a doubt",
              timestamp: "04:40 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "What happened ?",
              timestamp: "04:41 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Yes, about my placement ",
              timestamp: "04:50 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 5,
          name: "Suraj",
          image:
            "https://st3.depositphotos.com/1743476/16188/i/600/depositphotos_161885550-stock-photo-proud-latin-man.jpg",
          chatlog: [],
        },
        {
          id: 6,
          name: "Pritam",
          image:
            "https://media.licdn.com/dms/image/D5603AQEpt6RI8cDKIw/profile-displayphoto-shrink_400_400/0/1686583270378?e=1702512000&v=beta&t=qgU3MjInTIhrvugcGET8TcJuuWxe2xBzk3nagZiGvyw",
          chatlog: [
            {
              text: "Hey Mauli, where is your friend, Mayur?",
              timestamp: "05:00 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I don't know bro!",
              timestamp: "05:01 PM", 
              sender: "me",
              message_id: 2,
            },
            {
              text: "Are you sure, Abhijeet ?.",
              timestamp: "05:05 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Yes bro, I am damn sure",
              timestamp: "05:07 PM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "All right Pritam",
              timestamp: "05:09 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 7,
          name: "Chandu",
          image:
            "https://media.licdn.com/dms/image/D5635AQHfEO-5PR2-rQ/profile-framedphoto-shrink_400_400/0/1672154432044?e=1697893200&v=beta&t=_uj2E10YbUFIUc33sc-E0OlWFCJ3XAZuQDUpBjbExa4",
          chatlog: [
            {
              text: "Where are you bro ?",
              timestamp: "7:00 PM",
              sender: "me",
              message_id: 1,
            },
            {
              text: "I'm in Market now",
              timestamp: "07:07 PM",
              sender: "user",
              message_id: 2,
            },
            {
              text: "call me ASAP",
              timestamp: "07:07 PM",
              sender: "me",
              message_id: 3,
            },
            {
              text: "ok",
              timestamp: "07:09 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Is everything fine ?",
              timestamp: "07:10 PM",
              sender: "me",
              message_id: 5,
            },
            {
              text: "Yeah !!",
              timestamp: "07:12 PM",
              sender: "user",
              message_id: 6,
            },
          ],
        },
        {
          id: 8,
          name: "Shubhangi",
          image:"https://media.licdn.com/dms/image/D5603AQEQ3E90uf4g_g/profile-displayphoto-shrink_400_400/0/1684168957172?e=1702512000&v=beta&t=HBdy8D_iRBr-PVnA5RZLPqcDuHhvXuaqWbahieEZh4Y",
          chatlog: [],
        },
        {
          id: 9,
          name: "Stokes",
          image:
            "https://st2.depositphotos.com/1273995/8790/i/600/depositphotos_87904862-stock-photo-portrait-of-bearded-man.jpg",
          chatlog: [],
        },
      ],
    },
  };