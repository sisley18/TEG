/**
 * Data for 15-Minute Diagnostic Placement Test
 * 35 Questions total covering 4 skills proxies.
 */

const placementData = [
    // --- SECTION 1: READING COMPREHENSION (10 items) ---
    {
        sectionTitle: "Part 1: Reading Comprehension",
        isReading: true,
        readingText: "Read the email from Sarah: 'Hi Tom, I'm going to the supermarket now to buy some milk and bread. Do you need anything for dinner tonight? I will be back in 30 minutes. Let me know!'",
        q: "Where is Sarah right now?",
        options: ["At home", "On her way to the supermarket", "At dinner", "In the office"],
        correct: 1
    },
    {
        isReading: true,
        readingText: "Read the email from Sarah: 'Hi Tom, I'm going to the supermarket now to buy some milk and bread. Do you need anything for dinner tonight? I will be back in 30 minutes. Let me know!'",
        q: "What does Sarah want Tom to do?",
        options: ["Cook dinner", "Buy milk", "Tell her if he needs something", "Wait for 30 minutes"],
        correct: 2
    },
    {
        isReading: true,
        readingText: "New Employee Guidelines: All staff must ensure their workstations are locked when leaving the desk. Confidential documents should never be left unattended. In case of a fire alarm, exit via the stairs, do not use the elevators.",
        q: "What should employees do when leaving their desk?",
        options: ["Turn off the computer", "Lock the workstation", "Hide confidential documents", "Use the stairs"],
        correct: 1
    },
    {
        isReading: true,
        readingText: "New Employee Guidelines: All staff must ensure their workstations are locked when leaving the desk. Confidential documents should never be left unattended. In case of a fire alarm, exit via the stairs, do not use the elevators.",
        q: "According to the guidelines, elevators...",
        options: ["Must be locked", "Are for confidential use only", "Should not be used during a fire alarm", "Are located near the stairs"],
        correct: 2
    },
    {
        isReading: true,
        readingText: "Extract from a scientific journal: 'The proliferation of single-use plastics has culminated in a severe ecological crisis. Mitigating this issue requires not only governmental intervention but a paradigm shift in consumer behavior.'",
        q: "What does the author suggest is necessary to solve the problem?",
        options: ["Only new government laws", "A change in how consumers act", "Manufacturing better plastics", "Funding scientific research"],
        correct: 1
    },
    {
        isReading: true,
        readingText: "Extract from a scientific journal: 'The proliferation of single-use plastics has culminated in a severe ecological crisis. Mitigating this issue requires not only governmental intervention but a paradigm shift in consumer behavior.'",
        q: "The word 'mitigating' in the text is closest in meaning to:",
        options: ["Worsening", "Ignoring", "Alleviating or reducing", "Investigating"],
        correct: 2
    },
    {
        isReading: true,
        readingText: "Historical account: 'Despite facing insurmountable odds and widespread skepticism from his peers, the inventor remained resolute. His eventual triumph was a testament to sheer perseverance rather than inherent genius.'",
        q: "How did the inventor's peers view his work initially?",
        options: ["They were highly supportive", "They doubted his success", "They recognized his genius", "They helped him overcome odds"],
        correct: 1
    },
    {
        isReading: true,
        readingText: "Historical account: 'Despite facing insurmountable odds and widespread skepticism from his peers, the inventor remained resolute. His eventual triumph was a testament to sheer perseverance rather than inherent genius.'",
        q: "The author attributes the inventor's success primarily to:",
        options: ["His natural intelligence", "His colleagues' assistance", "His stubborn refusal to give up", "His financial resources"],
        correct: 2
    },
    {
        isReading: true,
        readingText: "Financial Report Summary: 'The fiscal year's final quarter yielded unprecedented dividend yields, heavily offsetting the stagnation experienced during the summer slump. Stakeholders are advised to maintain current portfolios.'",
        q: "What happened in the final quarter?",
        options: ["Profits dropped heavily", "There was a summer slump", "Dividends were exceptionally high", "Stakeholders sold their portfolios"],
        correct: 2
    },
    {
        isReading: true,
        readingText: "Financial Report Summary: 'The fiscal year's final quarter yielded unprecedented dividend yields, heavily offsetting the stagnation experienced during the summer slump. Stakeholders are advised to maintain current portfolios.'",
        q: "What is the advice given to stakeholders?",
        options: ["Invest more money immediately", "Keep their investments as they are", "Sell their shares before the next quarter", "Complain about the summer stagnation"],
        correct: 1
    },

    // --- SECTION 2: LISTENING COMPREHENSION (10 items) ---
    {
        sectionTitle: "Part 2: Listening Comprehension",
        isListening: true,
        audioText: "Hello, this is the doctor's office. Your appointment tomorrow is at 3:15 PM. Please arrive 10 minutes early.",
        q: "When is the appointment?",
        options: ["2:15 PM", "3:15 PM", "3:30 PM", "10:00 AM"],
        correct: 1
    },
    {
        isListening: true,
        audioText: "Hello, this is the doctor's office. Your appointment tomorrow is at 3:15 PM. Please arrive 10 minutes early.",
        q: "What is the patient asked to do?",
        options: ["Bring medical records", "Call back tomorrow", "Arrive before the scheduled time", "Wait for 10 minutes"],
        correct: 2
    },
    {
        isListening: true,
        audioText: "Excuse me, could you tell me how to get to the train station? Yes, go straight for two blocks, then turn left at the traffic lights. It's right next to the big supermarket.",
        q: "Where should the person turn left?",
        options: ["At the train station", "At the supermarket", "At the traffic lights", "After two blocks, on the right"],
        correct: 2
    },
    {
        isListening: true,
        audioText: "Excuse me, could you tell me how to get to the train station? Yes, go straight for two blocks, then turn left at the traffic lights. It's right next to the big supermarket.",
        q: "What is the train station next to?",
        options: ["A traffic light", "A block of flats", "A supermarket", "A hospital"],
        correct: 2
    },
    {
        isListening: true,
        audioText: "I was planning to go for a run this morning, but the weather forecast predicts heavy thunderstorms. I guess I'll have to hit the gym instead.",
        q: "Why is the speaker changing their plans?",
        options: ["They prefer the gym", "They are injured", "The weather will be bad", "They woke up late"],
        correct: 2
    },
    {
        isListening: true,
        audioText: "I was planning to go for a run this morning, but the weather forecast predicts heavy thunderstorms. I guess I'll have to hit the gym instead.",
        q: "What will the speaker do?",
        options: ["Run in the rain", "Go to the gym", "Stay home and rest", "Check the forecast again"],
        correct: 1
    },
    {
        isListening: true,
        audioText: "The new software update has been deployed. However, several users have reported latency issues when attempting to sync their cloud storage. The engineering team is currently investigating.",
        q: "What problem was reported?",
        options: ["The update failed to install", "Data was deleted", "There are delays with cloud syncing", "Engineers are unavailable"],
        correct: 2
    },
    {
        isListening: true,
        audioText: "The new software update has been deployed. However, several users have reported latency issues when attempting to sync their cloud storage. The engineering team is currently investigating.",
        q: "What is the current status of the issue?",
        options: ["It has been fixed", "Users must reinstall the software", "It is being looked into by engineers", "The cloud storage is completely offline"],
        correct: 2
    },
    {
        isListening: true,
        audioText: "It goes without saying that the merger will necessitate substantial restructuring. While redundancies are regrettable, they are an unavoidable consequence of optimizing our operational efficiency.",
        q: "What is the main topic of this statement?",
        options: ["Hiring new staff", "The consequences of a company merger", "Improving office morale", "Opening a new branch"],
        correct: 1
    },
    {
        isListening: true,
        audioText: "It goes without saying that the merger will necessitate substantial restructuring. While redundancies are regrettable, they are an unavoidable consequence of optimizing our operational efficiency.",
        q: "How does the speaker feel about redundancies (job losses)?",
        options: ["They are excited about them", "They are unfortunate but necessary", "They can be completely avoided", "They are the fault of the employees"],
        correct: 1
    },

    // --- SECTION 3: USE OF ENGLISH (10 items) ---
    {
        sectionTitle: "Part 3: Use of English",
        q: "I _____ 25 years old.",
        options: ["am", "have", "has", "is"],
        correct: 0
    },
    {
        q: "She _____ to the cinema yesterday.",
        options: ["go", "goes", "went", "gone"],
        correct: 2
    },
    {
        q: "If I _____ you, I would accept the job offer.",
        options: ["am", "was", "were", "had been"],
        correct: 2
    },
    {
        q: "I haven't seen him _____ last summer.",
        options: ["for", "since", "during", "until"],
        correct: 1
    },
    {
        q: "By this time next year, I _____ from university.",
        options: ["will graduate", "will be graduating", "will have graduated", "have graduated"],
        correct: 2
    },
    {
        q: "He is entirely dependent _____ his parents for financial support.",
        options: ["in", "of", "on", "with"],
        correct: 2
    },
    {
        q: "Not until I saw the news _____ what had actually happened.",
        options: ["I realized", "did I realize", "I had realized", "that I realized"],
        correct: 1
    },
    {
        q: "I wish I _____ harder when I was in high school.",
        options: ["study", "studied", "had studied", "would study"],
        correct: 2
    },
    {
        q: "Despite _____ highly qualified, she didn't get the position.",
        options: ["she is", "of being", "being", "to be"],
        correct: 2
    },
    {
        q: "The project, _____ was initiated last year, has finally come to fruition.",
        options: ["that", "which", "who", "whose"],
        correct: 1
    },

    // --- SECTION 4: COMMUNICATIVE SITUATIONS (5 items) ---
    {
        sectionTitle: "Part 4: Communicative Situations",
        q: "You are at a restaurant and the waiter brings you the wrong dish. What do you say?",
        options: ["I want another one.", "Excuse me, but I think there's been a mistake with my order.", "You made a mistake, take this away.", "This is not my food, get me the manager."],
        correct: 1
    },
    {
        q: "A colleague asks if you can help them with a project, but you are completely overwhelmed with your own work. What is the most professional response?",
        options: ["No, I'm too busy.", "I can't, do it yourself.", "I'd love to help, but I'm currently at capacity with my own deadlines.", "Maybe later if I have time."],
        correct: 2
    },
    {
        q: "You are interrupting a meeting to deliver an urgent message. What do you say?",
        options: ["Stop talking, I have news.", "Sorry to interrupt, but something urgent has come up.", "Listen to me quickly.", "I am sorry for the breaking."],
        correct: 1
    },
    {
        q: "You didn't catch what someone just said during a loud phone call. What is the most natural way to ask them to repeat it?",
        options: ["What did you say?", "Repeat please.", "I'm sorry, I didn't quite catch that. Could you say it again?", "Speak louder, I can't hear you."],
        correct: 2
    },
    {
        q: "You strongly disagree with a proposal made by your boss during a meeting. How do you express this politely?",
        options: ["You are completely wrong about this.", "That's a terrible idea.", "I see your point, but I have some concerns about how that might work in practice.", "I refuse to accept this proposal."],
        correct: 2
    }
];
