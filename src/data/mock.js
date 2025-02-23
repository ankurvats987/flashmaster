const MockDeck = {
  id: 1,
  timestamp: Date.now(),
  image:
    "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  title: "Why Spiderman is goated?",
  description:
    "Because he always saves the day and his web-slinging is on point!",
  color: "bg-yellow",
  lastStudied: "Today",
  totalCards: 3,
  cards: [
    { id: 1, front: "What is Spiderman's real name?", back: "Peter Parker" },
    {
      id: 2,
      front: "Which city does Spiderman protect?",
      back: "New York City",
    },
    {
      id: 3,
      front: "What is Spiderman's signature ability?",
      back: "Spider-sense",
    },
  ],
};

export default MockDeck;
