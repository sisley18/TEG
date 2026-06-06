const tegGrammarData = {
    A1: {
        comparatives: {
            title: "Comparatives & Superlatives (A1)",
            description: "Choose the correct comparative or superlative form.",
            items: [
                { q: "My apartment is _____ than yours.", options: ["small", "smaller", "smallest"], correct: "smaller", explanation: "Use 'smaller than' for comparing two things." },
                { q: "This is the _____ movie I have ever seen.", options: ["good", "better", "best"], correct: "best", explanation: "Use 'the best' for the superlative form of good." },
                { q: "New York is _____ than my hometown.", options: ["big", "bigger", "biggest"], correct: "bigger", explanation: "Double the consonant for short adjectives ending in vowel+consonant: bigger." }
            ]
        },
        conditionals: {
            title: "Conditionals (A1)",
            description: "Choose the correct conditional form.",
            items: [
                { q: "If it rains, I _____ an umbrella.", options: ["take", "takes", "taking"], correct: "take", explanation: "Zero conditional for facts: If + present, present." },
                { q: "If she _____ sick, she stays home.", options: ["feels", "feel", "feeling"], correct: "feels", explanation: "Use the present simple 'feels' for she/he/it." },
                { q: "If you heat ice, it _____.", options: ["melt", "melts", "melting"], correct: "melts", explanation: "Zero conditional fact." }
            ]
        },
        modals: {
            title: "Modals (A1)",
            description: "Choose the correct modal verb.",
            items: [
                { q: "I _____ swim very well.", options: ["can", "cans", "to can"], correct: "can", explanation: "Modals do not take 's' in the third person or use 'to'." },
                { q: "You _____ wear a seatbelt in the car.", options: ["must", "can", "would"], correct: "must", explanation: "'Must' shows obligation." },
                { q: "_____ I help you with your groceries?", options: ["May", "Must", "Would"], correct: "May", explanation: "'May I' is a polite offer." }
            ]
        },
        passive: {
            title: "Passive Voice (A1)",
            description: "Choose the correct passive voice form.",
            items: [
                { q: "The mail _____ delivered every morning.", options: ["is", "are", "be"], correct: "is", explanation: "Present simple passive: is + past participle." },
                { q: "These sneakers _____ made in the USA.", options: ["is", "are", "be"], correct: "are", explanation: "Plural subject 'sneakers' takes 'are'." },
                { q: "My homework _____ done.", options: ["is", "are", "am"], correct: "is", explanation: "Homework is uncountable, so use 'is'." }
            ]
        },
        reported: {
            title: "Reported Speech (A1)",
            description: "Choose the correct reported speech form.",
            items: [
                { q: "He says, 'I like soccer.' \nHe says that he _____ soccer.", options: ["likes", "like", "liked"], correct: "likes", explanation: "When the reporting verb is present ('says'), the tense doesn't shift back." },
                { q: "She says, 'I am tired.' \nShe says that she _____ tired.", options: ["is", "am", "are"], correct: "is", explanation: "Change 'am' to 'is' for 'she'." },
                { q: "They say, 'We want cookies.' \nThey say that they _____ cookies.", options: ["want", "wants", "wanted"], correct: "want", explanation: "They want." }
            ]
        },
        gerunds: {
            title: "Gerunds & Infinitives (A1)",
            description: "Choose the correct form.",
            items: [
                { q: "I like _____ pizza.", options: ["eating", "eat", "ate"], correct: "eating", explanation: "Like + gerund ('eating') is very common." },
                { q: "I want _____ to the mall.", options: ["to go", "going", "go"], correct: "to go", explanation: "Want is always followed by the infinitive 'to go'." },
                { q: "She loves _____ books.", options: ["reading", "read", "reads"], correct: "reading", explanation: "Love + gerund." }
            ]
        },
        relative: {
            title: "Relative Clauses (A1)",
            description: "Choose the correct relative pronoun.",
            items: [
                { q: "This is the man _____ works at the store.", options: ["who", "which", "where"], correct: "who", explanation: "Use 'who' for people." },
                { q: "That is the dog _____ bit me.", options: ["which", "who", "where"], correct: "which", explanation: "Use 'which' or 'that' for animals." },
                { q: "This is the park _____ we play baseball.", options: ["where", "who", "which"], correct: "where", explanation: "Use 'where' for places." }
            ]
        }
    },
    A2: {
        comparatives: {
            title: "Comparatives & Superlatives (A2)",
            description: "Choose the correct comparative or superlative form.",
            items: [
                { q: "My new car is _____ than my old one.", options: ["more fast", "faster", "fastest"], correct: "faster", explanation: "Short adjectives take '-er'." },
                { q: "This is the _____ beautiful park in the city.", options: ["more", "most", "much"], correct: "most", explanation: "Long adjectives take 'the most'." },
                { q: "He is _____ as his brother.", options: ["as tall", "taller", "tall"], correct: "as tall", explanation: "Use 'as + adjective + as' for equality." }
            ]
        },
        conditionals: {
            title: "Conditionals (A2)",
            description: "Choose the correct conditional form.",
            items: [
                { q: "If I have enough money, I _____ a new phone.", options: ["will buy", "buy", "would buy"], correct: "will buy", explanation: "First conditional: If + present, will + infinitive." },
                { q: "If she _____ hard, she will pass the test.", options: ["studies", "will study", "study"], correct: "studies", explanation: "The 'if' clause takes the present simple." },
                { q: "We will go to the beach if it _____ sunny.", options: ["is", "will be", "be"], correct: "is", explanation: "Present simple after 'if'." }
            ]
        },
        modals: {
            title: "Modals (A2)",
            description: "Choose the correct modal verb.",
            items: [
                { q: "You _____ smoke in the hospital.", options: ["mustn't", "don't have to", "couldn't"], correct: "mustn't", explanation: "'Mustn't' indicates strict prohibition." },
                { q: "_____ you pass the salt, please?", options: ["Could", "Must", "Should"], correct: "Could", explanation: "'Could you' is a polite request." },
                { q: "I _____ go to the dentist yesterday.", options: ["had to", "must", "should"], correct: "had to", explanation: "'Had to' is the past form of 'must'." }
            ]
        },
        passive: {
            title: "Passive Voice (A2)",
            description: "Choose the correct passive voice form.",
            items: [
                { q: "The window _____ broken by the wind.", options: ["was", "is", "were"], correct: "was", explanation: "Past simple passive for singular subject." },
                { q: "The letters _____ sent yesterday.", options: ["were", "was", "are"], correct: "were", explanation: "Past simple passive for plural subject." },
                { q: "Cheese _____ made from milk.", options: ["is", "was", "are"], correct: "is", explanation: "General fact uses present simple passive." }
            ]
        },
        reported: {
            title: "Reported Speech (A2)",
            description: "Choose the correct reported speech form.",
            items: [
                { q: "He said, 'I am busy.' \nHe said that he _____ busy.", options: ["was", "is", "were"], correct: "was", explanation: "Present simple shifts back to past simple." },
                { q: "She told me, 'I like candy.' \nShe told me she _____ candy.", options: ["liked", "likes", "like"], correct: "liked", explanation: "Present simple 'like' shifts to 'liked'." },
                { q: "They said, 'We are happy.' \nThey said they _____ happy.", options: ["were", "are", "was"], correct: "were", explanation: "Change 'are' to 'were'." }
            ]
        },
        gerunds: {
            title: "Gerunds & Infinitives (A2)",
            description: "Choose the correct form.",
            items: [
                { q: "I enjoy _____ to music on the subway.", options: ["listening", "to listen", "listen"], correct: "listening", explanation: "Enjoy is always followed by a gerund." },
                { q: "She decided _____ a new dress for the vacation.", options: ["to buy", "buying", "buy"], correct: "to buy", explanation: "Decide is followed by the infinitive." },
                { q: "Thank you for _____ me with my homework.", options: ["helping", "to help", "help"], correct: "helping", explanation: "Prepositions are followed by gerunds." }
            ]
        },
        relative: {
            title: "Relative Clauses (A2)",
            description: "Choose the correct relative pronoun.",
            items: [
                { q: "The guy _____ lives next door is very friendly.", options: ["who", "which", "whose"], correct: "who", explanation: "Use 'who' for people." },
                { q: "The camera _____ I bought is amazing.", options: ["that", "who", "where"], correct: "that", explanation: "Use 'that' or 'which' for objects." },
                { q: "I have a friend _____ dad is a doctor.", options: ["whose", "who's", "who"], correct: "whose", explanation: "'Whose' shows possession." }
            ]
        }
    },
    B1: {
        comparatives: {
            title: "Comparatives & Superlatives (B1)",
            description: "Choose the correct comparative or superlative form.",
            items: [
                { q: "The movie was _____ less interesting than the book.", options: ["much", "more", "very"], correct: "much", explanation: "Use 'much' to modify comparatives." },
                { q: "He is easily the _____ talented player on the soccer team.", options: ["most", "more", "much"], correct: "most", explanation: "'Easily the most' emphasizes the superlative." },
                { q: "The further you walk, the _____ tired you will get.", options: ["more", "most", "much"], correct: "more", explanation: "The + comparative, the + comparative structure." }
            ]
        },
        conditionals: {
            title: "Conditionals (B1)",
            description: "Choose the correct conditional form.",
            items: [
                { q: "If I _____ you, I would take that job.", options: ["were", "was", "am"], correct: "were", explanation: "Second conditional uses 'were' for advice." },
                { q: "I would buy a huge house if I _____ the lottery.", options: ["won", "win", "would win"], correct: "won", explanation: "Second conditional if-clause takes the past simple." },
                { q: "Unless you _____ now, you will be late.", options: ["leave", "don't leave", "will leave"], correct: "leave", explanation: "'Unless' means 'if not', so the verb is affirmative." }
            ]
        },
        modals: {
            title: "Modals (B1)",
            description: "Choose the correct modal verb.",
            items: [
                { q: "You _____ not use your cell phone during the exam.", options: ["must", "don't have to", "could"], correct: "must", explanation: "Prohibition uses 'must not'." },
                { q: "I _____ be able to come to the party tonight.", options: ["might", "can", "must"], correct: "might", explanation: "'Might' shows possibility." },
                { q: "You _____ have brought an umbrella; it's not raining.", options: ["needn't", "mustn't", "couldn't"], correct: "needn't", explanation: "'Needn't have' means you did something unnecessary." }
            ]
        },
        passive: {
            title: "Passive Voice (B1)",
            description: "Choose the correct passive voice form.",
            items: [
                { q: "The new highway _____ currently being built.", options: ["is", "was", "has"], correct: "is", explanation: "Present continuous passive: is being built." },
                { q: "My wallet _____ stolen on the subway yesterday.", options: ["was", "has been", "is"], correct: "was", explanation: "Past simple passive for finished time 'yesterday'." },
                { q: "The project must _____ finished by Friday.", options: ["be", "have", "been"], correct: "be", explanation: "Modal passive: modal + be + past participle." }
            ]
        },
        reported: {
            title: "Reported Speech (B1)",
            description: "Choose the correct reported speech form.",
            items: [
                { q: "He said, 'I went to the mall.' \nHe said he _____ to the mall.", options: ["had gone", "went", "has gone"], correct: "had gone", explanation: "Past simple shifts to past perfect." },
                { q: "She asked, 'Where do you live?' \nShe asked me where I _____.", options: ["lived", "live", "did live"], correct: "lived", explanation: "Change question word order to statement order and shift tense back." },
                { q: "He told me, 'Don't be late.' \nHe told me _____ late.", options: ["not to be", "don't be", "to not be"], correct: "not to be", explanation: "Reported commands use 'not to + infinitive'." }
            ]
        },
        gerunds: {
            title: "Gerunds & Infinitives (B1)",
            description: "Choose the correct form.",
            items: [
                { q: "He promised _____ me call when he arrived.", options: ["to", "calling", "call"], correct: "to", explanation: "Promise is followed by 'to + infinitive'." },
                { q: "I don't mind _____ late if the pay is good.", options: ["working", "to work", "work"], correct: "working", explanation: "'Don't mind' is followed by a gerund." },
                { q: "She stopped _____ a coffee on her way to work.", options: ["to buy", "buying", "buy"], correct: "to buy", explanation: "'Stop to do' means stop in order to do something." }
            ]
        },
        relative: {
            title: "Relative Clauses (B1)",
            description: "Choose the correct relative pronoun.",
            items: [
                { q: "My boss, _____ is from Texas, loves barbecue.", options: ["who", "that", "which"], correct: "who", explanation: "Non-defining relative clauses cannot use 'that'." },
                { q: "I finally visited the city _____ my mom was born.", options: ["where", "which", "that"], correct: "where", explanation: "Use 'where' for locations." },
                { q: "That is the student _____ grades are the highest.", options: ["whose", "who's", "whom"], correct: "whose", explanation: "'Whose' shows possession." }
            ]
        }
    },
    B2: {
        comparatives: {
            title: "Comparatives & Superlatives (B2)",
            description: "Choose the correct comparative or superlative form.",
            items: [
                { q: "It was _____ a good movie that I watched it twice.", options: ["such", "so", "very"], correct: "such", explanation: "Use 'such a + adjective + noun'." },
                { q: "The test was nowhere _____ as difficult as I expected.", options: ["near", "close", "much"], correct: "near", explanation: "'Nowhere near as' means 'not almost as'." },
                { q: "This restaurant is slightly _____ expensive than the other one.", options: ["more", "most", "much"], correct: "more", explanation: "'Slightly' modifies the comparative 'more'." }
            ]
        },
        conditionals: {
            title: "Conditionals (B2)",
            description: "Choose the correct conditional form.",
            items: [
                { q: "If I had known about the traffic, I _____ the subway.", options: ["would have taken", "would take", "took"], correct: "would have taken", explanation: "Third conditional: past perfect in if-clause, would have + past participle in result." },
                { q: "I _____ be tired now if I had gone to bed earlier.", options: ["wouldn't", "won't", "hadn't"], correct: "wouldn't", explanation: "Mixed conditional: past condition, present result." },
                { q: "Suppose you _____ a million dollars, what would you do?", options: ["won", "win", "had won"], correct: "won", explanation: "Use past tense after 'suppose' for imaginary situations." }
            ]
        },
        modals: {
            title: "Modals (B2)",
            description: "Choose the correct modal verb.",
            items: [
                { q: "He's late. He _____ have gotten stuck in traffic.", options: ["must", "can", "should"], correct: "must", explanation: "'Must have' for logical deduction in the past." },
                { q: "You _____ have told me! I was so worried.", options: ["should", "must", "can"], correct: "should", explanation: "'Should have' expresses criticism of a past action." },
                { q: "She _____ have left already, her coat is still here.", options: ["can't", "mustn't", "shouldn't"], correct: "can't", explanation: "'Can't have' for negative logical deduction in the past." }
            ]
        },
        passive: {
            title: "Passive Voice (B2)",
            description: "Choose the correct passive voice form.",
            items: [
                { q: "I am having my house _____ next week.", options: ["painted", "paint", "painting"], correct: "painted", explanation: "Causative structure: have + object + past participle." },
                { q: "He is thought _____ the country.", options: ["to have left", "to leave", "leaving"], correct: "to have left", explanation: "Passive reporting with perfect infinitive for an earlier action." },
                { q: "The documents _____ have been signed by the CEO.", options: ["must", "are", "have"], correct: "must", explanation: "Modal past passive: modal + have been + past participle." }
            ]
        },
        reported: {
            title: "Reported Speech (B2)",
            description: "Choose the correct reported speech form.",
            items: [
                { q: "She asked me if I _____ to the party the night before.", options: ["had gone", "went", "was going"], correct: "had gone", explanation: "Past simple shifts to past perfect in reported speech." },
                { q: "He suggested _____ to the beach.", options: ["going", "to go", "go"], correct: "going", explanation: "Suggest is followed by a gerund or a 'that' clause." },
                { q: "She apologized for _____ late.", options: ["being", "to be", "be"], correct: "being", explanation: "Prepositions (like 'for') are followed by gerunds." }
            ]
        },
        gerunds: {
            title: "Gerunds & Infinitives (B2)",
            description: "Choose the correct form.",
            items: [
                { q: "I regret _____ you that the flight is cancelled.", options: ["to inform", "informing", "inform"], correct: "to inform", explanation: "'Regret to inform' is used for bad news. 'Regret informing' is for past actions." },
                { q: "She couldn't help _____ when she saw the silly hat.", options: ["laughing", "to laugh", "laugh"], correct: "laughing", explanation: "The idiom 'can't help' is followed by a gerund." },
                { q: "He is used to _____ up early for his job.", options: ["waking", "wake", "to wake"], correct: "waking", explanation: "'Be used to' is followed by a gerund." }
            ]
        },
        relative: {
            title: "Relative Clauses (B2)",
            description: "Choose the correct relative pronoun.",
            items: [
                { q: "The company _____ I work for is going bankrupt.", options: ["which", "who", "whom"], correct: "which", explanation: "Use 'which' or 'that' for companies/things." },
                { q: "The woman, to _____ I spoke yesterday, was the manager.", options: ["whom", "who", "which"], correct: "whom", explanation: "Use 'whom' after a preposition." },
                { q: "He failed the test, _____ disappointed his parents.", options: ["which", "that", "what"], correct: "which", explanation: "'Which' can refer to the entire preceding clause." }
            ]
        }
    },
    C1: {
        comparatives: {
            title: "Comparatives & Superlatives (C1)",
            description: "Choose the correct comparative or superlative form.",
            items: [
                { q: "It was by _____ the most challenging project I've ever managed.", options: ["far", "much", "way"], correct: "far", explanation: "'By far' is used to emphasize superlatives." },
                { q: "The design is infinitely _____ superior to the previous one.", options: ["(no word)", "more", "much"], correct: "more", explanation: "Wait, 'superior' does not take 'more'. 'Infinitely superior' is correct. Let's fix this question: The design is infinitely _____ to the previous one.", correct: "superior", options: ["superior", "more superior", "better"], explanation: "'Superior' implies comparison and takes 'to', not 'than', without 'more'." },
                { q: "He's not so _____ a genius as a very hard worker.", options: ["much", "many", "good"], correct: "much", explanation: "'Not so much X as Y' means rather Y than X." }
            ]
        },
        conditionals: {
            title: "Conditionals (C1)",
            description: "Choose the correct conditional form.",
            items: [
                { q: "Had _____ known about the delay, I would have taken a cab.", options: ["I", "if I", "I had"], correct: "I", explanation: "Inverted third conditional: 'Had I known'." },
                { q: "But _____ your help, the business would have failed.", options: ["for", "if", "without"], correct: "for", explanation: "'But for' means 'if it hadn't been for'." },
                { q: "Should you _____ any assistance, please contact the front desk.", options: ["require", "requires", "required"], correct: "require", explanation: "Inverted first conditional: 'Should you require' = 'If you require'." }
            ]
        },
        modals: {
            title: "Modals (C1)",
            description: "Choose the correct modal verb.",
            items: [
                { q: "We _____ as well leave now, since the meeting is cancelled.", options: ["might", "should", "must"], correct: "might", explanation: "'Might as well' suggests doing something because there is no better alternative." },
                { q: "He _____ have known about the surprise; he looked genuinely shocked.", options: ["couldn't", "mustn't", "mightn't"], correct: "couldn't", explanation: "'Couldn't have' means it's impossible he knew." },
                { q: "You _____ better see a doctor about that cough.", options: ["had", "would", "should"], correct: "had", explanation: "'Had better' is used for strong advice or warnings." }
            ]
        },
        passive: {
            title: "Passive Voice (C1)",
            description: "Choose the correct passive voice form.",
            items: [
                { q: "The suspect is alleged _____ millions from the bank.", options: ["to have stolen", "to steal", "stealing"], correct: "to have stolen", explanation: "Passive reporting for an earlier action requires perfect infinitive." },
                { q: "It _____ without saying that health is wealth.", options: ["goes", "is", "says"], correct: "goes", explanation: "Idiom: 'It goes without saying'." },
                { q: "I resent _____ spoken to like a child.", options: ["being", "to be", "be"], correct: "being", explanation: "Resent takes a gerund, so the passive is 'being + past participle'." }
            ]
        },
        reported: {
            title: "Reported Speech (C1)",
            description: "Choose the correct reported speech form.",
            items: [
                { q: "He threatened _____ the police if we didn't leave.", options: ["to call", "calling", "call"], correct: "to call", explanation: "Threaten is followed by 'to + infinitive'." },
                { q: "She insisted _____ paying for the meal.", options: ["on", "to", "for"], correct: "on", explanation: "Insist is followed by 'on + gerund'." },
                { q: "He denied _____ anything to do with the robbery.", options: ["having", "to have", "have"], correct: "having", explanation: "Deny takes a gerund (or perfect gerund 'having had')." }
            ]
        },
        gerunds: {
            title: "Gerunds & Infinitives (C1)",
            description: "Choose the correct form.",
            items: [
                { q: "He was on the verge of _____ a breakthrough.", options: ["making", "to make", "make"], correct: "making", explanation: "Preposition 'of' is followed by a gerund." },
                { q: "I strongly advise against _____ the property without an inspection.", options: ["buying", "to buy", "buy"], correct: "buying", explanation: "Advise against + gerund." },
                { q: "She managed to complete the marathon, despite _____ injured.", options: ["being", "to be", "she was"], correct: "being", explanation: "Despite + gerund." }
            ]
        },
        relative: {
            title: "Relative Clauses (C1)",
            description: "Choose the correct relative pronoun.",
            items: [
                { q: "The board members, _____ of whom were present, voted unanimously.", options: ["all", "who", "which"], correct: "all", explanation: "Quantifier + 'of whom' for people." },
                { q: "He offered me a ride, _____ was very kind of him.", options: ["which", "that", "what"], correct: "which", explanation: "Use 'which' to refer to the whole preceding clause." },
                { q: "I can't think of a single reason _____ she would leave.", options: ["why", "which", "that"], correct: "why", explanation: "'Reason why' is standard, though 'reason that' is also possible." }
            ]
        }
    },
    C2: {
        comparatives: {
            title: "Comparatives & Superlatives (C2)",
            description: "Choose the correct comparative or superlative form.",
            items: [
                { q: "It's nothing _____ as complicated as they made it seem.", options: ["like", "near", "much"], correct: "like", explanation: "'Nothing like as' means completely different/not nearly as." },
                { q: "She is _____ the most brilliant scholar of her generation.", options: ["arguably", "argue", "argument"], correct: "arguably", explanation: "Adverb modifying a superlative." },
                { q: "The more I think about it, the _____ convinced I become.", options: ["less", "least", "little"], correct: "less", explanation: "The + comparative, the + comparative structure." }
            ]
        },
        conditionals: {
            title: "Conditionals (C2)",
            description: "Choose the correct conditional form.",
            items: [
                { q: "Were it _____ for her swift intervention, tragedy would have struck.", options: ["not", "no", "never"], correct: "not", explanation: "Inverted second/mixed conditional: 'Were it not for'." },
                { q: "_____ you happen to see him, tell him to call me.", options: ["Should", "If", "Would"], correct: "Should", explanation: "Inverted first conditional, very formal." },
                { q: "Assuming you _____ the promotion, what would your first step be?", options: ["got", "get", "will get"], correct: "got", explanation: "Second conditional phrasing with 'Assuming'." }
            ]
        },
        modals: {
            title: "Modals (C2)",
            description: "Choose the correct modal verb.",
            items: [
                { q: "You _____ well be right, but I need to double-check.", options: ["may", "must", "should"], correct: "may", explanation: "'May well' implies there is a good possibility." },
                { q: "He _____ to have been a great poet, but his works were lost.", options: ["is said", "says", "said"], correct: "is said", explanation: "Passive modal structure for historical assumptions." },
                { q: "She dare _____ challenge the CEO's decision.", options: ["not", "don't", "no"], correct: "not", explanation: "Modal 'dare' takes 'not' without 'do' in formal contexts." }
            ]
        },
        passive: {
            title: "Passive Voice (C2)",
            description: "Choose the correct passive voice form.",
            items: [
                { q: "The problem needs _____ addressed immediately.", options: ["to be", "being", "been"], correct: "to be", explanation: "Need + to be + past participle (or need + gerund)." },
                { q: "Not a single word was _____ during the entire meeting.", options: ["spoken", "spoke", "speak"], correct: "spoken", explanation: "Passive voice with negative subject." },
                { q: "He was subjected _____ intense scrutiny by the press.", options: ["to", "by", "from"], correct: "to", explanation: "Be subjected to something." }
            ]
        },
        reported: {
            title: "Reported Speech (C2)",
            description: "Choose the correct reported speech form.",
            items: [
                { q: "The attorney accused the witness _____ perjury.", options: ["of", "for", "with"], correct: "of", explanation: "Accuse someone OF doing something." },
                { q: "She reproached him _____ forgetting their anniversary.", options: ["for", "about", "on"], correct: "for", explanation: "Reproach someone FOR doing something." },
                { q: "He confessed _____ having tampered with the evidence.", options: ["to", "of", "about"], correct: "to", explanation: "Confess TO doing something." }
            ]
        },
        gerunds: {
            title: "Gerunds & Infinitives (C2)",
            description: "Choose the correct form.",
            items: [
                { q: "She has a tendency _____ overreact in stressful situations.", options: ["to", "of", "for"], correct: "to", explanation: "Tendency is followed by the to-infinitive." },
                { q: "There is no point _____ arguing with him when he's angry.", options: ["in", "to", "for"], correct: "in", explanation: "'There's no point in' + gerund." },
                { q: "It's no use _____ over spilled milk.", options: ["crying", "to cry", "cry"], correct: "crying", explanation: "'It's no use' + gerund." }
            ]
        },
        relative: {
            title: "Relative Clauses (C2)",
            description: "Choose the correct relative pronoun.",
            items: [
                { q: "He gave a lengthy speech, much of _____ was completely irrelevant.", options: ["which", "that", "what"], correct: "which", explanation: "Preposition + which for non-defining clauses about things." },
                { q: "The extent to _____ the crisis will affect the economy is unknown.", options: ["which", "what", "that"], correct: "which", explanation: "Preposition + which." },
                { q: "Whoever _____ responsible for this mess must clean it up.", options: ["is", "be", "are"], correct: "is", explanation: "Whoever acts as a singular subject." }
            ]
        }
    }
};
