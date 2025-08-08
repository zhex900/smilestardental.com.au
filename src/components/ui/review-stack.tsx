import { AnimatedTooltip } from "./animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
const dentistReviews = [
  "The best dental experience I've ever had! 😁🦷",
  "Very gentle and professional. 👨‍⚕️✨",
  "Made me feel completely at ease. 🙌🛋️",
  "Quick, painless, and efficient. ⏱️😌",
  "Staff was super friendly and helpful. 👩‍⚕️😊",
  "I actually look forward to my appointments now. 📅😁",
  "Clean clinic and modern equipment. 🧼🔧",
  "Explained everything clearly before starting. 💬👍",
  "Didn’t feel a thing during the procedure. 💉😮‍💨",
  "Highly recommend this dental clinic! ⭐⭐⭐⭐⭐",
  "My kids love coming here. 👶🦷❤️",
  "Very thorough and detail-oriented. 🔍📋",
  "Was nervous at first, but they made it easy. 😬➡️😌",
  "Appointments always run on time. ⌛✅",
  "Helped me overcome my fear of dentists. 😨➡️😊",
  "Excellent service and great results. 🏆🦷",
  "They truly care about your comfort. 💖🛋️",
  "The hygienist was amazing! 🙏🪥",
  "Fixed my tooth quickly and pain-free. ⚡🦷😄",
  "So glad I found this place! 🙌📍",
];
const randomAvatars = (number: number) => {
  const avatars = [];
  // Create a copy of reviews array to shuffle
  const availableReviews = [...dentistReviews];

  // Fisher-Yates shuffle algorithm
  for (let i = availableReviews.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [availableReviews[i], availableReviews[j]] = [
      availableReviews[j],
      availableReviews[i],
    ];
  }

  for (let i = 0; i < number; i++) {
    const gender = Math.random() < 0.5 ? "women" : "men";
    avatars.push({
      id: i,
      image: `https://randomuser.me/api/portraits/${gender}/${i}.jpg`,
      alt: `Avatar ${i}`,
      name: `Avatar ${i}`,
      // Take reviews in order from shuffled array
      designation: availableReviews[i % availableReviews.length],
      fallback: `A${i}`,
    });
  }
  return avatars;
};

export function ReviewStack() {
  const people = randomAvatars(8);

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
