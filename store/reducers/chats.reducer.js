import { createSlice } from '@reduxjs/toolkit';
import { checkCurrentDate } from '@/utils';


const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

// Helper function to generate a random chat message
const generateRandomChatMessage = (from) => {
    const messages = {
        ME: [
            "Hey, I was just thinking about you and wanted to see how everything's going on your end. Hope you're having a fantastic day!",
            "What's been new and exciting in your world lately? I feel like we haven't properly caught up in a bit.",
            "I'm planning something really cool for the upcoming weekend. Do you have any availability or ideas for what we could do?",
            "Just finished up a massive project at work, and I'm feeling pretty accomplished! Time for some well-deserved relaxation.",
            "I stumbled upon this incredible article/video today and immediately thought of you. I'm sending you the link – let me know what you think!",
            "I've been brainstorming some new hobbies or activities to try. Any recommendations or things you've been wanting to explore?",
            "Hey! Just a quick check-in to see if you're free later this week for a casual coffee or a quick chat.",
            "I had a really interesting conversation earlier that sparked a lot of thoughts. I'd love to pick your brain on it sometime.",
            "I'm trying to organize a small get-together with some friends. Would you be interested in joining us if I put something together?",
            "Just enjoying a quiet moment and reflecting on some good memories. Hope you're finding some peace in your day too.",
            "I'm feeling a bit adventurous today! Any spontaneous plans you're up for, or should we cook something up?",
            "I was looking at old photos and saw one of us from way back. It brought back so many great memories!",
            "Thinking about starting a new book/series. Have you read or watched anything compelling recently that you'd recommend?",
            "Just wanted to send some positive vibes your way. Hope everything's going smoothly and you're feeling good!",
            "I've been making some progress on that personal goal we talked about. It's challenging, but rewarding!"
        ],
        FRIEND: [
            "Hey! I'm doing really well, thanks for asking! My day's been pretty productive so far, how about yours?",
            "Things have been a bit busy, but in a good way! I've actually got a couple of exciting updates I could share when we chat.",
            "That sounds absolutely fantastic! I'm definitely interested. What kind of ideas are swirling around in your head?",
            "Oh, that's brilliant news about your project! It's always a great feeling to wrap something like that up. Enjoy your chill time!",
            "Awesome! I'll take a look at the link right away. I'm always keen to see what you find interesting.",
            "Hmm, that's a great question! I've been eyeing [mention a general hobby, e.g., pottery, hiking] myself. We could explore it together!",
            "I might be free later this week, let me just double-check my schedule and get back to you with a definite time.",
            "I'm definitely curious! I love a good thought-provoking discussion. Let's make sure we find time to dive into that.",
            "Absolutely, I'd love to join! Just let me know the details once you've ironed them out. Sounds like fun!",
            "Thanks for the good vibes! I'm definitely taking a moment to appreciate the little things today. Hope you are too.",
            "Spontaneous plans? You know I'm always game! What kind of adventure are you thinking of embarking on?",
            "Oh, I love looking through old photos! We've definitely had some unforgettable times together.",
            "Funnily enough, I just finished [mention a book/series] and it was absolutely captivating. I think you'd really enjoy it!",
            "Thanks so much for that! Everything's moving along, feeling pretty positive. Hope the same for you!",
            "That's fantastic to hear about your goal! Keep up the amazing work – I knew you could do it!"
        ]
    };
    const randomMessage = messages[from][Math.floor(Math.random() * messages[from].length)];
    return { message: randomMessage, from: from, sentTime: new Date() };
};

// Helper function to generate a set of random chats for a day
const generateRandomDailyChats = (date) => {
    const chats = [];
    for (let i = 0; i < 5; i++) { // Generate 5 "big" messages per day to keep it from getting too long
        chats.push(generateRandomChatMessage("ME"));
        chats.push(generateRandomChatMessage("FRIEND"));
    }
    return { onDay: date, chats: chats };
};

export const initialState = [
  {
    friendId: 1,
    details: [
      {
        onDay: today,
        chats: [
          { message: "Hey Donald!", from: 'ME', sentTime: today },
          { message: "Hello!", from: 'FRIEND', sentTime: today },
          { message: "Wanna go fishing later?", from: 'ME', sentTime: today },
          { message: "Sounds fun. Let's do it!", from: 'FRIEND', sentTime: today },
          { message: "Don’t forget the sandwiches 🍞🥪", from: 'ME', sentTime: today },
          { message: "Haha, I won’t.", from: 'FRIEND', sentTime: today },
          { message: "Also bring extra bait!", from: 'ME', sentTime: today },
          { message: "Of course. Ready at 5 PM?", from: 'FRIEND', sentTime: today },
          { message: "Perfect. See you then!", from: 'ME', sentTime: today },
          { message: "Bye for now 👋", from: 'FRIEND', sentTime: today }
        ]
      },
      {
        onDay: yesterday,
        chats: [
          { message: "Did you watch the new episode?", from: 'ME', sentTime: yesterday },
          { message: "Yeah! It was hilarious 😂", from: 'FRIEND', sentTime: yesterday },
          { message: "Classic Donald chaos!", from: 'ME', sentTime: yesterday },
          { message: "That part with the balloons 😭", from: 'FRIEND', sentTime: yesterday },
          { message: "I laughed so hard!", from: 'ME', sentTime: yesterday },
          { message: "We should rewatch it tonight.", from: 'FRIEND', sentTime: yesterday },
          { message: "Count me in 🎥", from: 'ME', sentTime: yesterday },
          { message: "Bring snacks 🍿", from: 'FRIEND', sentTime: yesterday },
          { message: "Already packed. Nachos too!", from: 'ME', sentTime: yesterday },
          { message: "Let’s do it 😎", from: 'FRIEND', sentTime: yesterday }
        ]
      }
    ]
  },

  {
    friendId: 2,
    details: [
      {
        onDay: today,
        chats: [
          { message: "Lawliet, got any new leads?", from: 'ME', sentTime: today },
          { message: "A few. But nothing solid yet.", from: 'FRIEND', sentTime: today },
          { message: "Your brain is scary smart.", from: 'ME', sentTime: today },
          { message: "Just caffeine and logic ☕", from: 'FRIEND', sentTime: today },
          { message: "Don't forget to sleep!", from: 'ME', sentTime: today },
          { message: "Sleep is for the weak.", from: 'FRIEND', sentTime: today },
          { message: "Haha, alright genius.", from: 'ME', sentTime: today },
          { message: "Thanks. Talk later.", from: 'FRIEND', sentTime: today },
          { message: "Bye detective 🕵️‍♂️", from: 'ME', sentTime: today },
          { message: "Things have been a bit busy 🏃‍♂️💨", from: 'ME', sentTime: today }
        ]
      },
      {
        onDay: yesterday,
        chats: [
          { message: "You cracked the last case fast.", from: 'ME', sentTime: yesterday },
          { message: "It was too easy.", from: 'FRIEND', sentTime: yesterday },
          { message: "You scare me sometimes 😂", from: 'ME', sentTime: yesterday },
          { message: "Don't worry, I’m on your side.", from: 'FRIEND', sentTime: yesterday },
          { message: "Glad to hear that!", from: 'ME', sentTime: yesterday },
          { message: "Let's meet for coffee tomorrow?", from: 'FRIEND', sentTime: yesterday },
          { message: "Sure, usual spot?", from: 'ME', sentTime: yesterday },
          { message: "Yep, 10 AM.", from: 'FRIEND', sentTime: yesterday },
          { message: "I'll be there!", from: 'ME', sentTime: yesterday },
          { message: "Bye then!", from: 'FRIEND', sentTime: yesterday }
        ]
      }
    ]
  },
  {
    friendId: 3,
    details: [
        generateRandomDailyChats(today),
        generateRandomDailyChats(yesterday)
    ]
  },
  {
    friendId: 4,
    details: [
        generateRandomDailyChats(today),
        generateRandomDailyChats(yesterday)
    ]
  },
  {
    friendId: 5,
    details: [
        generateRandomDailyChats(today),
        generateRandomDailyChats(yesterday)
    ]
  },
  {
    friendId: 6,
    details: [
        generateRandomDailyChats(today),
        generateRandomDailyChats(yesterday)
    ]
  },
  {
    friendId: 7,
    details: [
        generateRandomDailyChats(today),
        generateRandomDailyChats(yesterday)
    ]
  },
  {
    friendId: 8,
    details: [
        generateRandomDailyChats(today),
        generateRandomDailyChats(yesterday)
    ]
  },
  {
    friendId: 9,
    details: [
        generateRandomDailyChats(today),
        generateRandomDailyChats(yesterday)
    ]
  },
  {
    friendId: 10,
    details: [
        generateRandomDailyChats(today),
        generateRandomDailyChats(yesterday)
    ]
  },
  {
    friendId: 11,
    details: [
        generateRandomDailyChats(today),
        generateRandomDailyChats(yesterday)
    ]
  },
  {
    friendId: 12,
    details: [
        generateRandomDailyChats(today),
        generateRandomDailyChats(yesterday)
    ]
  },
  {
    friendId: 13,
    details: [
        generateRandomDailyChats(today),
        generateRandomDailyChats(yesterday)
    ]
  },
  {
    friendId: 14,
    details: [
        generateRandomDailyChats(today),
        generateRandomDailyChats(yesterday)
    ]
  },
  {
    friendId: 15,
    details: [
        generateRandomDailyChats(today),
        generateRandomDailyChats(yesterday)
    ]
  }
];


export const chatsReducer = createSlice({
    name: 'chatDetails',
    initialState,
    reducers: {
        updateChats: (state, action ) => {
            state.push(action.payload);
        },
        addMessage: (state, action) => {   
            const chatDetails = state.filter(chat => chat.friendId === action.payload.friendId)[0];
            const index = chatDetails.details.findIndex(d => checkCurrentDate(d.onDay));     
            
            if(index !== -1) {
                chatDetails.details[index].chats.push(action.payload.newChat)
            } else {
                chatDetails.details.unshift({ onDay: new Date(), chats: [action.payload.newChat] })
            }
        }
    }
});


export const { updateChats, addMessage } = chatsReducer.actions;
export default chatsReducer.reducer;