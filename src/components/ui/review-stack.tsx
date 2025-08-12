import { AnimatedTooltip } from "./animated-tooltip";

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
