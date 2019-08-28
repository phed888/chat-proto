export const questions = [
  {
    index: 3,
    content: "Did you reach someone with authority to approve the request?",
    type: "incoming",
    quickReplies: ["Yes", "No"]
  },
  {
    index: 4,
    content: "What is the name of the person you reached?",
    type: "incoming",
    quickReplies: ["Anje Keizer", "I don't know"]
  },
  {
    index: 5,
    content: "What is the title of the person you reached?",
    type: "incoming",
    quickReplies: []
  },
  {
    index: 6,
    content: "Did they approve the customer's request?",
    type: "incoming",
    quickReplies: ["Yes", "No", "Partially"]
  },
  {
    index: 7,
    content:
      "Great! I will send the customer an email and let them know that a full refund is on the way. Go ahead and close this tab – you don't need to do anything more.",
    type: "incoming",
    quickReplies: []
  }
];


export const srsummary = [
  {
    index: 0,
    content:
      "What happened: Chachi Arredondo called on Aug 4, 2019 to cancel their stay at Hotel Theodore, Seattle during Aug 11, 2019 - Aug 14, 2019, due to medical emergency.  (Itinerary: 1234567890123)",
    type: "incoming",
    quickReplies: []
  },
  {
    index: 1,
    content:
      "What to do: Call the Hotel Theodore, Seattle and ask Anje Keizer, General Manager to approve the waiver for this cancellation.",
    type: "incoming",
    quickReplies: []
  },
  {
    index: 2,
    content:
      "Please note: This is the first out of 3 attempts to get the waiver",
    type: "incoming",
    quickReplies: ["Call hotel"]
  }
];

