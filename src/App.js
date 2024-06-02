import React, { useState, useEffect } from "react";
import './App.css'
import Contacts from "./Contacts";
import Conversation from "./Conversation";

const data = [
  {
    userId: 'user1',
    name: 'Sam',
    unreadCount: 1,
    profilePictureURL:
    "https://images.pexels.com/photos/1460365/pexels-photo-1460365.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    chat: [
      {
        user1: {
          message: 'Hello',
          timeStamp: '10:40',
        },
        you: {
          message: 'Hey',
          timeStamp: '10:41',
        },
      },
      {
        user1: {
          message: 'How are you doing?',
          timeStamp: '10:41',
        },
        you: {
          message: 'Fine mate, how about you?',
          timeStamp: '10:42',
        },
      },
      {
        user1: {
          message: 'great',
          timeStamp: '10:44',
        },
        you: {
          message: "Coming to my wedding right? I don't think you confirmed.",
          timeStamp: '10:44',
        },
      },
      {
        user1: {
          message: 'Oh yes. There is no way i am going to miss that.',
          timeStamp: '10:44',
        },
        you: {
          message:
            'Awesome. See ya there. Let me know if you want me to book tickets.',
          timeStamp: '10:45',
        },
      },
    ],
  },
  {
    userId: 'user2',
    name: 'Elon',
    unreadCount: 0,
    profilePictureURL:
      'https://images.pexels.com/photos/3966283/pexels-photo-3966283.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    chat: [
      {
        user2: {
          message: 'there?',
          timeStamp: '11:39',
        },
        you: {
          message: 'yeah, whats up?',
          timeStamp: '11:47',
        },
      },
      {
        user2: {
          message: 'movie tomorrow?',
          timeStamp: '11:49',
        },
        you: {
          message: 'Yeah sure. let me know the timings. and which movie again?',
          timeStamp: '11:52',
        },
      },
      {
        user2: {
          message: 'the new mad max movie. Reviews are great.',
          timeStamp: '11:52',
        },
        you: {
          message: 'Oh yes, i have been waiting for that one.',
          timeStamp: '11:54',
        },
      },
    ],
  },
  {
    userId: 'user3',
    name: 'Kate',
    unreadCount: 1,
    profilePictureURL:
      'https://images.pexels.com/photos/23644605/pexels-photo-23644605/free-photo-of-a-woman-standing-by-the-water-in-front-of-houses.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    chat: [
      {
        user2: {
          message: 'that burger was delicious!',
          timeStamp: '13:12',
        },
        you: {
          message: 'Oh yes, no doubt.',
          timeStamp: '13:13',
        },
      },
      {
        user2: {
          message: 'We are definetely going to that place again.',
          timeStamp: '13:13',
        },
        you: {
          message: 'we are. My mouth waters whenever drive thorugh that area',
          timeStamp: '13:14',
        },
      },
      {
        user2: {
          message: 'haha, I bet. Lets take Tony and Natasha too next time',
          timeStamp: '13:14',
        },
        you: {
          message: 'Sure. they would love it',
          timeStamp: '13:15',
        },
      },
    ],
  },
];


const App = () => {

   const[selected, setSelected] = useState(0);

   const [contactClicked, setContactClicked] = useState(false);


   useEffect(()=>{
    if(window.innerWidth>650){
      setContactClicked(false)
    }
   },[])
  
   const selectContact = (e) => {
    let closest = e.target.closest('.container');
    console.log(e.target.className);
    if(closest!==null && e.target.className!=="container__icon"){
      let idx = data.findIndex((obj)=> obj.name===closest.id);
      setSelected(idx);

      if(window.innerWidth<=650){
        setContactClicked(true);
      }
    }
   }



    return(

      <>
      {
        contactClicked?

        <div className="app" style={{display: "inline-block"}}>

        <div className="app__conversation" onClick={()=>{setContactClicked(false)}} style={{
          display: "block"
        }}>
            {
              <Conversation
                name={data[selected].name}
                image={data[selected].profilePictureURL}
                chat={data[selected].chat}
              />
            }
        </div>
        </div>

        :

        <div className="app">

        <div className="app__contacts">
        <h2 className="contacts__heading">Chats</h2>
        <div onClick={(e)=>selectContact(e)}>
            {data.map((user) => (
                <Contacts
                image={user.profilePictureURL}
                name={user.name}
                lastMessage={
                    user.chat[user.chat.length-1].you.message
                }
                count={user.unreadCount}
                />
            ))}
        </div>

        </div>

        <div className="app__conversation">
            {
              <Conversation
                name={data[selected].name}
                image={data[selected].profilePictureURL}
                chat={data[selected].chat}
              />
            }
        </div>
        </div>
      }
      </>
        
    );
}

export default App;