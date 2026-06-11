/**
 * TEG (Tests, Exercises & Games) - Levels A1 & A2
 */

const tegDataA1A2 = {
    A1: {
        levelName: "A1 (Beginner)",
        badge: "🥉 A1",
        colorClass: "badge-a1",
        exercises: {
            word_formation: {
                title: "Word Formation (A1)",
                description: "Change the word in brackets to complete the sentence correctly.",
                grammarTheory: "📖 <strong>Word Formation</strong> means changing one word into another by adding <em>prefixes</em> (before: <em>un-</em>) or <em>suffixes</em> (after: <em>-er, -ly, -ful, -ness</em>). For example: <em>help → helper, helpful, helpfully</em>. You need to decide if the sentence needs a noun, adjective, or adverb.",
                items: [
                    { q: "My sister is a very good _____ (SING).", correct: "singer", explanation: "Add '-er' to the verb 'sing' to make the noun for a person." },
                    { q: "It is a beautiful, _____ (SUN) day today.", correct: "sunny", explanation: "Change the noun 'sun' to the adjective 'sunny'." },
                    { q: "He is a famous football _____ (PLAY).", correct: "player", explanation: "Add '-er' to the verb 'play' to get the noun for a person." },
                    { q: "Please drive _____ (SLOW) in this street.", correct: "slowly", explanation: "Add '-ly' to 'slow' to make the adverb 'slowly'." },
                    { q: "I love the _____ (BEAUTY) flowers in the garden.", correct: "beautiful", explanation: "Change the noun 'beauty' to the adjective 'beautiful'." },
                    { q: "He works in a bakery. He is a _____ (BAKE).", correct: "baker", explanation: "Add '-er' to the verb 'bake' to get the noun for the profession." },
                    { q: "My teacher is always very _____ (HELP).", correct: "helpful", explanation: "Add '-ful' to the noun/verb 'help' to form the adjective 'helpful'." },
                    { q: "This painting is very _____ (COLOUR).", correct: "colourful", explanation: "Add '-ful' to the noun 'colour' to get the adjective 'colourful'." },
                    { q: "He speaks English _____ (GOOD).", correct: "well", explanation: "'Well' is the irregular adverb form of the adjective 'good'." },
                    { q: "The children played _____ (HAPPY) in the garden.", correct: "happily", explanation: "Change '-y' to '-ily' to make the adverb 'happily'." },
                    { q: "This chair is very _____ (COMFORT).", correct: "comfortable", explanation: "Add '-able' to form the adjective." },
                    { q: "He is a fast _____ (RUN).", correct: "runner", explanation: "Double the consonant and add '-er' for the person noun." },
                    { q: "She painted the picture _____ (BEAUTY).", correct: "beautifully", explanation: "Add '-fully' to form the adverb." },
                    { q: "The _____ (TEACH) gave us homework.", correct: "teacher", explanation: "Add '-er' to form the person noun." },
                    { q: "It was a _____ (WONDER) trip.", correct: "wonderful", explanation: "Add '-ful' to form the adjective." }
                ]
            },
            open_cloze: {
                title: "Open Cloze (A1)",
                description: "Fill the blank with exactly ONE suitable word (pronouns, prepositions, articles, etc.).",
                grammarTheory: "📖 <strong>Open Cloze</strong> tests your knowledge of grammar words — articles (<em>a, an, the</em>), prepositions (<em>in, on, at, by</em>), pronouns (<em>he, she, it, your</em>), and conjunctions (<em>and, but, or</em>). Always read the whole sentence and think about what type of word is missing.",
                items: [
                    { q: "I live _____ London with my parents.", correct: "in", explanation: "We use the preposition 'in' for cities and countries." },
                    { q: "She has _____ apple and a banana for breakfast.", correct: "an", explanation: "Use the indefinite article 'an' before words starting with a vowel sound." },
                    { q: "_____ is my brother. His name is Tom.", correct: "He", explanation: "Use the subject pronoun 'He' for a singular male person." },
                    { q: "There _____ two books on my desk.", correct: "are", explanation: "Use 'are' for plural nouns ('two books')." },
                    { q: "They go to school _____ bus every day.", correct: "by", explanation: "We say 'by bus', 'by car', or 'by train' to indicate transport." },
                    { q: "What is _____ name? My name is John.", correct: "your", explanation: "Use the possessive adjective 'your' to ask a person." },
                    { q: "We usually watch TV _____ the evening.", correct: "in", explanation: "The standard time expression is 'in the evening'." },
                    { q: "I do not like tea, _____ I love coffee.", correct: "but", explanation: "Use the conjunction 'but' to show contrast." },
                    { q: "_____ you speak English?", correct: "Do", explanation: "Use auxiliary verb 'Do' to form questions in simple present." },
                    { q: "Where _____ you from?", correct: "are", explanation: "Use the verb 'to be' ('are') with the subject pronoun 'you'." },
                    { q: "I go to bed _____ 10 PM every night.", correct: "at", explanation: "Use 'at' for specific times on the clock." },
                    { q: "My father works _____ a hospital.", correct: "in", explanation: "Use 'in' for enclosed workspaces like a hospital." },
                    { q: "_____ is your favorite color?", correct: "What", explanation: "Use 'What' to ask about things." },
                    { q: "She _____ not like playing tennis.", correct: "does", explanation: "Use 'does' for negative third-person singular present." },
                    { q: "We are going to _____ beach tomorrow.", correct: "the", explanation: "Use definite article 'the' for specific places like the beach." }
                ]
            },
            tenses_cloze: {
                title: "Tenses Cloze (A1)",
                description: "Select the correct present tense form of the verb. (Present Simple or Continuous)",
                grammarTheory: "📖 <strong>Present Simple</strong> describes habits, facts, and routines. Use with: <em>always, usually, every day, never</em>. Form: <em>I/You/We/They play · He/She/It plays</em>.<br>📖 <strong>Present Continuous</strong> describes actions happening right now or temporary situations. Use with: <em>now, at the moment, right now, Look!, Listen!</em>. Form: <em>am/is/are + verb-ing</em>.",
                items: [
                    { q: "My mom _____ dinner in the kitchen right now.", options: ["cook", "is cooking", "cooks"], correct: "is cooking", explanation: "Use Present Continuous for actions happening at the moment of speaking ('right now')." },
                    { q: "I usually _____ the subway to work every morning.", options: ["take", "am taking", "takes"], correct: "take", explanation: "Use Present Simple for routines and habits ('usually', 'every morning')." },
                    { q: "Listen! The baby _____ in the bedroom.", options: ["cries", "cry", "is crying"], correct: "is crying", explanation: "Use Present Continuous for actions happening right now ('Listen!')." },
                    { q: "He _____ eating cookies for breakfast.", options: ["does not like", "is not liking", "do not like"], correct: "does not like", explanation: "Use Present Simple negative ('does not like') for general facts and preferences." },
                    { q: "We _____ a movie at the theater this evening.", options: ["watch", "are watching", "watches"], correct: "are watching", explanation: "Use Present Continuous for fixed arrangements in the near future." },
                    { q: "Water _____ at 100 degrees Celsius.", options: ["boils", "is boiling", "boil"], correct: "boils", explanation: "Use Present Simple for scientific facts." },
                    { q: "_____ soccer on weekends?", options: ["Do you play", "Are you playing", "You play"], correct: "Do you play", explanation: "Present Simple question form for habits ('on weekends')." },
                    { q: "Look! The bus _____. Let's go!", options: ["comes", "is coming", "come"], correct: "is coming", explanation: "Use Present Continuous for actions happening exactly now ('Look!')." },
                    { q: "She never _____ her apartment on Sundays.", options: ["clean", "is cleaning", "cleans"], correct: "cleans", explanation: "Use Present Simple with adverbs of frequency ('never')." },
                    { q: "They _____ today because it's a national holiday.", options: ["do not work", "are not working", "not work"], correct: "are not working", explanation: "Use Present Continuous for temporary situations happening around today." },
                    { q: "I _____ English grammar at this moment.", options: ["study", "am studying", "studies"], correct: "am studying", explanation: "Use Present Continuous for actions happening right now." },
                    { q: "He usually _____ a book before bed.", options: ["reads", "is reading", "read"], correct: "reads", explanation: "Use Present Simple for daily habits." },
                    { q: "Why _____? Is there a joke?", options: ["do you laugh", "are you laughing", "you laugh"], correct: "are you laughing", explanation: "Use Present Continuous for actions happening exactly now." },
                    { q: "The sun _____ in the east.", options: ["rise", "is rising", "rises"], correct: "rises", explanation: "Use Present Simple for permanent facts." },
                    { q: "We _____ to the cinema every Saturday.", options: ["go", "are going", "goes"], correct: "go", explanation: "Use Present Simple for recurring routines ('every Saturday')." }
                ]
            },
            sentence_transformation: {
                title: "Sentence Transformation (A1)",
                description: "Complete the second sentence so it means the same as the first. Use 1 to 3 words.",
                grammarTheory: "📖 <strong>Sentence Transformation</strong> asks you to express the same idea using different grammar. Common patterns: possessive adjectives (<em>belongs to me → my</em>), <em>there is/are</em> for existence, opposite adjectives (<em>tall ↔ short</em>), and adjective vs. adverb (<em>fast runner → runs fast</em>). Never change the meaning!",
                items: [
                    { q: "This car belongs to me.\nThis is _____ car.", correct: "my", explanation: "'Belongs to me' is rephrased using the possessive adjective 'my'." },
                    { q: "We have two cats.\nThere _____ in our house.", correct: "are two cats", explanation: "Use 'There are' to express existence in the plural form." },
                    { q: "He is a fast runner.\nHe runs _____.", correct: "fast", explanation: "The adverb form of the adjective 'fast' is also 'fast'." },
                    { q: "My house is near the school.\nMy house is not _____ the school.", correct: "far from", explanation: "'Near' is the opposite of 'far from'." },
                    { q: "She is taller than her sister.\nHer sister is _____ than her.", correct: "shorter", explanation: "The opposite of 'taller' is 'shorter'." },
                    { q: "I am twelve years old.\nMy age _____ twelve.", correct: "is", explanation: "Use the verb 'is' with the singular subject 'My age'." },
                    { q: "Is this your pen?\nDoes this pen belong _____ you?", correct: "to", explanation: "The verb 'belong' is followed by the preposition 'to'." },
                    { q: "They don't have any money.\nThey have _____ money.", correct: "no", explanation: "'Don't have any' can be rewritten as 'have no' in positive sentences." },
                    { q: "My room is not dirty.\nMy room is _____.", correct: "clean", explanation: "The opposite of 'not dirty' is 'clean'." },
                    { q: "I prefer coffee to tea.\nI like coffee _____ than tea.", correct: "more", explanation: "To prefer something means to like it 'more than' another." },
                    { q: "This is my car.\nThis car belongs _____ me.", correct: "to", explanation: "Use 'belongs to' to indicate possession." },
                    { q: "I have never seen such a big dog.\nThat is the _____ dog I have ever seen.", correct: "biggest", explanation: "Use the superlative 'biggest'." },
                    { q: "There are no apples in the fridge.\nThere aren't _____ apples in the fridge.", correct: "any", explanation: "Use 'any' in negative sentences." },
                    { q: "My brother is taller than me.\nI am _____ than my brother.", correct: "shorter", explanation: "The opposite of taller is shorter." },
                    { q: "She is a very slow driver.\nShe drives very _____.", correct: "slowly", explanation: "Change the adjective to an adverb." }
                ]
            },
            error_correction: {
                title: "Error Correction (A1)",
                description: "Identify and correct the single error in the sentence.",
                grammarTheory: "📖 <strong>Error Correction</strong> — each sentence has exactly ONE mistake. Watch for these common A1 errors: ✦ third-person -s (<em>he live → lives</em>) ✦ verb to be for age (<em>I have 12 years → I am 12</em>) ✦ much/many (<em>much books → many books</em>) ✦ modal + bare infinitive (<em>can to speak → can speak</em>) ✦ irregular adverbs (<em>drives very good → well</em>).",
                items: [
                    { q: "He live in Madrid with his wife.", correct: "lives", explanation: "Third-person singular 'he' requires 'lives' in present simple." },
                    { q: "She don't like milk.", correct: "doesn't", explanation: "Use 'doesn't' (does not) for third-person singular negative." },
                    { q: "Where is the keys?", correct: "are", explanation: "'Keys' is plural, so we must use 'are' instead of 'is'." },
                    { q: "I have twenty years old.", correct: "am", explanation: "In English, we use the verb 'to be' for age: 'I am...'." },
                    { q: "We went to the cinema yesterday night.", correct: "last", explanation: "The correct collocation is 'last night', not 'yesterday night'." },
                    { q: "There are much books on the table.", correct: "many", explanation: "Use 'many' for plural countable nouns like 'books'." },
                    { q: "He drives very good.", correct: "well", explanation: "Use the adverb 'well' to modify the verb 'drives'." },
                    { q: "I like very much chocolate.", correct: "like chocolate very much", explanation: "The object 'chocolate' must follow the verb: 'I like chocolate very much'." },
                    { q: "She can to speak French.", correct: "speak", explanation: "Modal 'can' is followed by bare infinitive without 'to'." },
                    { q: "Is this book of John?", correct: "John's", explanation: "Use possessive ''s' to indicate possession: 'John's'." },
                    { q: "They doesn't like pizza.", correct: "don't", explanation: "Use 'don't' with plural subjects like 'they'." },
                    { q: "I go to work in bus.", correct: "by", explanation: "Use 'by' for means of transport: 'by bus'." },
                    { q: "We was at the park yesterday.", correct: "were", explanation: "Use 'were' for plural past tense of 'to be'." },
                    { q: "She play tennis every weekend.", correct: "plays", explanation: "Add 's' for third-person singular in present simple." },
                    { q: "Can you to help me?", correct: "help", explanation: "Modal verbs do not take 'to' before the main verb." }
                ]
            },
            vocab_matching: {
                title: "Vocabulary Matching (A1)",
                description: "Match the words on the left with their correct definitions on the right.",
                grammarTheory: "📖 <strong>Vocabulary Matching</strong> — flip the cards and match each word with its definition. Look for key concepts in the definition: the topic (people, places, objects) and what it does or means. Flip two cards at a time — if they match, they stay open!",
                pairs: [
                    { word: "Library", def: "A place where you can borrow books." },
                    { word: "Chef", def: "A professional cook in a restaurant." },
                    { word: "Kitchen", def: "The room where you cook food." },
                    { word: "Keys", def: "Metal objects used to open doors." },
                    { word: "Doctor", def: "A person who helps sick people." },
                    { word: "Jacket", def: "A short coat worn for warmth." },
                    { word: "Train", def: "A long vehicle that travels on tracks." },
                    { word: "Wallet", def: "A small folder for money and cards." },
                    { word: "Dentist", def: "A doctor who looks after your teeth." },
                    { word: "Umbrella", def: "Used to protect yourself from the rain." },
                    { word: "Bakery", def: "A shop where you buy bread and cakes." },
                    { word: "Pilot", def: "A person who flies an airplane." },
                    { word: "Dictionary", def: "A book that explains the meanings of words." }
                ]
            },
            idiom_challenge: {
                title: "Collocation & Expression Challenge (A1)",
                description: "Complete the everyday expression or collocation with the correct word.",
                grammarTheory: "📖 <strong>Collocations</strong> are words that naturally go together in English. You cannot always translate them directly — you simply have to learn them as chunks. Key A1 collocations: <em>make/do/take/have + noun</em>. Examples: <em>make my bed, do homework, take a photo, have lunch</em>. When in doubt, say the phrase aloud — the right word will sound more natural!",
                items: [
                    { q: "I always _____ my bed in the morning.", options: ["make", "do", "take"], correct: 0, explanation: "The correct collocation is 'make my bed'." },
                    { q: "We usually _____ lunch at 1:00 PM.", options: ["take", "have", "do"], correct: 1, explanation: "We say 'have lunch/breakfast/dinner'." },
                    { q: "Can I _____ a photo of you?", options: ["take", "make", "get"], correct: 0, explanation: "We say 'take a photo' or 'take a picture'." },
                    { q: "He works hard to _____ money.", options: ["win", "earn", "do"], correct: 1, explanation: "We 'earn money' by working." },
                    { q: "I need to _____ shopping for dinner.", options: ["go", "make", "do"], correct: 0, explanation: "We say 'go shopping'." },
                    { q: "Don't forget to _____ your homework.", options: ["do", "make", "write"], correct: 0, explanation: "The correct collocation is 'do homework'." },
                    { q: "She decided to _____ a shower.", options: ["take", "make", "do"], correct: 0, explanation: "We say 'take a shower' or 'have a shower'." },
                    { q: "He likes to _____ time with friends.", options: ["spend", "pass", "use"], correct: 0, explanation: "We say 'spend time' with someone." },
                    { q: "Could you _____ me a favour?", options: ["make", "do", "give"], correct: 1, explanation: "The correct expression is 'do a favour'." },
                    { q: "I always _____ my teeth twice a day.", options: ["wash", "brush", "clean"], correct: 1, explanation: "We 'brush our teeth'." },
                    { q: "Can I _____ a question?", options: ["ask", "do", "make"], correct: 0, explanation: "We say 'ask a question'." },
                    { q: "He needs to _____ a phone call.", options: ["do", "make", "take"], correct: 1, explanation: "We 'make a phone call'." },
                    { q: "It's time to _____ to bed.", options: ["go", "make", "do"], correct: 0, explanation: "The correct collocation is 'go to bed'." },
                    { q: "Did you _____ a good time at the party?", options: ["make", "do", "have"], correct: 2, explanation: "We say 'have a good time'." },
                    { q: "I usually _____ coffee for breakfast.", options: ["have", "eat", "take"], correct: 0, explanation: "We 'have' food and drinks for meals." }
                ]
            },
            phrasal_verbs: {
                title: "Phrasal Verbs (A1)",
                description: "Complete the sentence with the correct preposition or adverb to form a phrasal verb.",
                grammarTheory: "📖 <strong>Phrasal Verbs</strong> are verbs combined with a preposition or adverb to create a new meaning. They are very common in everyday spoken English. Key A1 examples: <em>wake up, sit down, turn on/off, put on, take off, look out</em>. The particle (up/down/on/off/in/out) completely changes the meaning of the base verb!",
                items: [
                    { q: "I usually wake _____ at 7:00 AM.", correct: "up", explanation: "The phrasal verb is 'wake up'." },
                    { q: "Please sit _____ and open your books.", correct: "down", explanation: "The phrasal verb is 'sit down'." },
                    { q: "Stand _____ when the teacher enters.", correct: "up", explanation: "The phrasal verb is 'stand up'." },
                    { q: "Come _____! The movie is starting.", correct: "in", explanation: "The phrasal verb is 'come in'." },
                    { q: "Turn _____ the lights when you leave.", correct: "off", explanation: "The phrasal verb is 'turn off'." },
                    { q: "Turn _____ the TV, I want to watch the news.", correct: "on", explanation: "The phrasal verb is 'turn on'." },
                    { q: "Put _____ your coat, it's cold outside.", correct: "on", explanation: "The phrasal verb is 'put on'." },
                    { q: "Take _____ your shoes before entering the house.", correct: "off", explanation: "The phrasal verb is 'take off'." },
                    { q: "Hurry _____! We are going to be late.", correct: "up", explanation: "The phrasal verb is 'hurry up'." },
                    { q: "Look _____! The bus is coming.", correct: "out", explanation: "The phrasal verb 'look out' means be careful." },
                    { q: "Can you turn _____ the music? I can't hear it.", correct: "up", explanation: "'Turn up' means to increase the volume." },
                    { q: "Please write _____ your name on this paper.", correct: "down", explanation: "'Write down' means to record something on paper." },
                    { q: "I want to try _____ these shoes before I buy them.", correct: "on", explanation: "'Try on' means to test clothes for fit." },
                    { q: "Throw _____ that old apple, it's bad.", correct: "away", explanation: "'Throw away' means to put something in the garbage." },
                    { q: "We need to set _____ early for the trip tomorrow.", correct: "off", explanation: "'Set off' means to start a journey." }
                ]
            }
        }
    },
    A2: {
        levelName: "A2 (Elementary)",
        badge: "🥈 A2",
        colorClass: "badge-a2",
        exercises: {
            word_formation: {
                title: "Word Formation (A2)",
                description: "Change the word in brackets to complete the sentence correctly.",
                grammarTheory: "📖 <strong>Word Formation (A2)</strong> — Build on A1 patterns and add: ✦ <em>-ous</em> (danger → dangerous) ✦ <em>-tion/-ation</em> (inform → information) ✦ <em>-ing/-ed</em> adjectives (bore → boring/bored). Remember: '-ing' describes things (<em>a boring film</em>), '-ed' describes feelings (<em>I felt bored</em>). Check what role the word plays in the sentence — noun, adjective, or adverb.",
                items: [
                    { q: "The city was very _____ (NOISE) last night.", correct: "noisy", explanation: "Change the noun 'noise' to the adjective 'noisy'." },
                    { q: "She answered all the questions _____ (EASY).", correct: "easily", explanation: "Change 'easy' to adverb 'easily'." },
                    { q: "The _____ (WRITE) of this book is famous.", correct: "writer", explanation: "Add '-er' to the verb 'write' to get the person noun." },
                    { q: "This is a very _____ (DANGER) road.", correct: "dangerous", explanation: "Add '-ous' to noun 'danger' to get the adjective." },
                    { q: "The film was so _____ (BORE). I fell asleep.", correct: "boring", explanation: "Use '-ing' adjective 'boring' to describe the film." },
                    { q: "She felt _____ (TIRED) after the long walk.", correct: "tired", explanation: "Use '-ed' adjective 'tired' to describe a feeling." },
                    { q: "The team played _____ (BAD) and lost the game.", correct: "badly", explanation: "Add '-ly' to 'bad' to make the adverb." },
                    { q: "We need more _____ (INFORM) about the hotel.", correct: "information", explanation: "The noun form of the verb 'inform' is 'information'." },
                    { q: "Be _____ (CARE)! The floor is wet.", correct: "careful", explanation: "Add '-ful' to 'care' to get the adjective." },
                    { q: "We had a very _____ (PEACE) weekend in the country.", correct: "peaceful", explanation: "Add '-ful' to 'peace' to form the adjective 'peaceful'." }
                ]
            },
            open_cloze: {
                title: "Open Cloze (A2)",
                description: "Fill the blank with exactly ONE suitable word (pronouns, prepositions, articles, etc.).",
                grammarTheory: "📖 <strong>Open Cloze (A2)</strong> — At this level the missing words include: ✦ Present Perfect words (<em>ever, yet, already, for, since</em>) ✦ comparatives (<em>than</em>) ✦ purpose (<em>to + infinitive</em>) ✦ relative pronouns (<em>where, who, which</em>) ✦ conditionals (<em>will</em> in first conditional). Always check the tense and structure around the gap.",
                items: [
                    { q: "Have you _____ been to Italy?", correct: "ever", explanation: "Use 'ever' in present perfect questions about experiences." },
                    { q: "I am going to the supermarket _____ buy some fruit.", correct: "to", explanation: "Use the infinitive particle 'to' to express purpose." },
                    { q: "This is the restaurant _____ we had dinner last week.", correct: "where", explanation: "Use the relative pronoun 'where' for places." },
                    { q: "She is much taller _____ her brother.", correct: "than", explanation: "Use 'than' for comparative comparisons." },
                    { q: "I haven't finished my homework _____.", correct: "yet", explanation: "Use 'yet' at the end of negative present perfect sentences." },
                    { q: "There are _____ many people in the room; it is crowded.", correct: "too", explanation: "Use 'too' to indicate an excessive quantity." },
                    { q: "He woke up early, _____ he still missed the train.", correct: "but", explanation: "Use 'but' to show contrast." },
                    { q: "If it rains tomorrow, we _____ stay at home.", correct: "will", explanation: "First conditional uses 'will' in the result clause." },
                    { q: "This watch belongs _____ my grandfather.", correct: "to", explanation: "The verb 'belong' takes the preposition 'to'." },
                    { q: "She arrived _____ the airport late yesterday.", correct: "at", explanation: "Use 'arrive at' for specific buildings/airports." }
                ]
            },
            tenses_cloze: {
                title: "Tenses Cloze (A2)",
                description: "Select the correct past tense form of the verb. (Past Simple or Continuous)",
                grammarTheory: "📖 <strong>Past Simple</strong> = a completed action at a specific time. Use with: <em>yesterday, ago, last night/week, in 2020</em>. Form: <em>played, went, didn't go</em>.<br>📖 <strong>Past Continuous</strong> = an action in progress when another (shorter) action interrupted it, or two actions happening simultaneously. Use with: <em>while, when</em>. Form: <em>was/were + verb-ing</em>. Key pattern: <em>I was walking (continuous) when it started (simple) to rain.</em>",
                items: [
                    { q: "I _____ to the store when it started to rain.", options: ["walked", "was walking", "walk"], correct: "was walking", explanation: "Use Past Continuous for a longer action interrupted by a shorter action." },
                    { q: "We _____ New York for our vacation last summer.", options: ["were visiting", "visited", "visit"], correct: "visited", explanation: "Use Past Simple for completed actions at a specific time in the past." },
                    { q: "While she _____ her book, the phone rang.", options: ["read", "was reading", "reads"], correct: "was reading", explanation: "Use Past Continuous after 'while' for an ongoing past action." },
                    { q: "He _____ to the mall yesterday because he was sick.", options: ["was not going", "did not go", "not went"], correct: "did not go", explanation: "Use Past Simple negative ('did not go') for finished past actions." },
                    { q: "What _____ at 8 PM last night?", options: ["did you do", "were you doing", "you did"], correct: "were you doing", explanation: "Use Past Continuous for an action in progress at a specific past time." },
                    { q: "They _____ a new apartment downtown two weeks ago.", options: ["were buying", "bought", "buy"], correct: "bought", explanation: "Use Past Simple for a completed event ('two weeks ago')." },
                    { q: "I was cooking dinner while my brother _____ TV.", options: ["watched", "was watching", "watching"], correct: "was watching", explanation: "Use Past Continuous for two ongoing actions happening at the same time." },
                    { q: "She _____ her keys in the parking lot this morning.", options: ["was losing", "lost", "loses"], correct: "lost", explanation: "Use Past Simple for a single event in the past." },
                    { q: "_____ soccer when he hurt his ankle?", options: ["Did he play", "Was he playing", "He played"], correct: "Was he playing", explanation: "Past Continuous question for an action interrupted by an accident." },
                    { q: "The kids _____ when the fire alarm went off.", options: ["slept", "were sleeping", "sleep"], correct: "were sleeping", explanation: "Past Continuous for a background action interrupted by a sudden event." }
                ]
            },
            sentence_transformation: {
                title: "Sentence Transformation (A2)",
                description: "Complete the second sentence so it means the same as the first. Use 1 to 3 words.",
                grammarTheory: "📖 <strong>Sentence Transformation (A2)</strong> — New patterns at this level: ✦ <em>too + adjective → not + adjective + enough</em> (too young = not old enough) ✦ <em>first time → never... before</em> ✦ <em>not as + adjective + as</em> (cheaper than = not as expensive as) ✦ modal advice (<em>should not</em>) ✦ Past Continuous after 'while'. Always count your words — use only 1 to 3!",
                items: [
                    { q: "I visited Rome two years ago.\nI was in Rome two _____.", correct: "years ago", explanation: "Rephrase 'visited Rome two years ago' into 'was in Rome two years ago'." },
                    { q: "There is a kitchen in the flat.\nThe flat _____ a kitchen.", correct: "has", explanation: "'There is X in Y' means 'Y has X'." },
                    { q: "He is a fast runner.\nHe runs _____.", correct: "fast", explanation: "'Fast' is both an adjective and an adverb." },
                    { q: "I don't think it is a good idea to go out.\nYou _____ go out.", correct: "should not", explanation: "'I don't think it is a good idea' can be rephrased as 'should not'." },
                    { q: "This is the first time I have eaten sushi.\nI have _____ eaten sushi before.", correct: "never", explanation: "'First time' implies 'never... before'." },
                    { q: "We don't have enough plates.\nWe have too _____ plates.", correct: "few", explanation: "'Not enough countable' means 'too few'." },
                    { q: "The ticket was cheaper than I expected.\nThe ticket was not as _____ I expected.", correct: "expensive as", explanation: "'Cheaper than' is 'not as expensive as'." },
                    { q: "It began to rain during our picnic.\nIt began to rain while we _____ having a picnic.", correct: "were", explanation: "Use past continuous 'were' after 'while'." },
                    { q: "Who does this watch belong to?\nWhose watch _____?", correct: "is this", explanation: "'Who does X belong to' is equivalent to 'Whose X is this'." },
                    { q: "He is too young to drive a car.\nHe is not old _____ to drive a car.", correct: "enough", explanation: "'Too young' is equivalent to 'not old enough'." }
                ]
            },
            error_correction: {
                title: "Error Correction (A2)",
                description: "Identify and correct the single error in the sentence.",
                grammarTheory: "📖 <strong>Error Correction (A2)</strong> — Watch for these A2 traps: ✦ Present Perfect vs Past Simple (<em>I have seen him yesterday ✗ → I saw him</em>) ✦ irregular comparatives (<em>more bad → worse</em>) ✦ gerund after prepositions (<em>look forward to meet → meeting</em>) ✦ 'every' + singular noun (<em>every students → student</em>) ✦ 'say' vs 'tell' (<em>he said me → told me</em>).",
                items: [
                    { q: "I have seen him yesterday.", correct: "saw", explanation: "Use past simple 'saw' for a specific finished time ('yesterday')." },
                    { q: "He is more bad than his classmate.", correct: "worse", explanation: "The comparative of the irregular adjective 'bad' is 'worse'." },
                    { q: "I am looking forward to meet you.", correct: "meeting", explanation: "The prepositional phrase 'look forward to' must be followed by gerund '-ing'." },
                    { q: "Every students in the class passed.", correct: "student", explanation: "'Every' must be followed by a singular countable noun ('student')." },
                    { q: "She can to speak French very well.", correct: "speak", explanation: "Modal verbs like 'can' are followed by the bare infinitive (no 'to')." },
                    { q: "I have a lot of works to do.", correct: "work", explanation: "'Work' is an uncountable noun when referring to tasks." },
                    { q: "He said me that he was tired.", correct: "told", explanation: "'Say' cannot take a direct personal object without 'to'; use 'told' instead." },
                    { q: "If I will see her, I will tell her.", correct: "see", explanation: "In the 'if' clause of a first conditional, use simple present, not 'will'." },
                    { q: "She has 25 years.", correct: "is 25", explanation: "In English, we say 'She is 25' or 'She is 25 years old'." },
                    { q: "The police is coming to help.", correct: "are", explanation: "'Police' is a plural collective noun and takes a plural verb ('are')." }
                ]
            },
            vocab_matching: {
                title: "Vocabulary Matching (A2)",
                description: "Match the words on the left with their correct definitions on the right.",
                grammarTheory: "📖 <strong>Vocabulary Matching (A2)</strong> — Look for clues in the definition: the category (people, time, documents, places) and the key action or property. A2 words often relate to travel, everyday life, and health. Use elimination — once you match a pair correctly, it stays open and narrows down your remaining choices!",
                pairs: [
                    { word: "Passenger", def: "A person traveling in a train, bus, or car." },
                    { word: "Century", def: "A period of one hundred years." },
                    { word: "Receipt", def: "A piece of paper proving you bought something." },
                    { word: "Customer", def: "A person who buys goods or services." },
                    { word: "Stadium", def: "A large sports arena with seats for spectators." },
                    { word: "Fever", def: "An abnormally high body temperature." },
                    { word: "Map", def: "A visual drawing showing areas of land or sea." },
                    { word: "Blanket", def: "A warm cover used on a bed." }
                ]
            },
            idiom_challenge: {
                title: "Collocation & Expression Challenge (A2)",
                description: "Complete the everyday expression or collocation with the correct word.",
                grammarTheory: "📖 <strong>Collocations (A2)</strong> — At A2, focus on verb + noun collocations related to decisions, communication, and social situations: <em>make a decision, keep in touch, give someone a hand, lose one's way, make an appointment, catch the bus</em>. A useful trick: if two verbs seem correct, think about the noun that follows — it usually points to only one.",
                items: [
                    { q: "Could you please _____ me a hand with this bag?", options: ["give", "make", "take"], correct: 0, explanation: "To 'give someone a hand' means to help them." },
                    { q: "I always _____ in touch with my childhood friends.", options: ["keep", "hold", "save"], correct: 0, explanation: "To 'keep in touch' is to maintain communication." },
                    { q: "We need to _____ a decision soon.", options: ["make", "do", "take"], correct: 0, explanation: "We 'make a decision'." },
                    { q: "They got lost and _____ their way.", options: ["missed", "lost", "forgot"], correct: 1, explanation: "The phrase is 'lose one's way'." },
                    { q: "She fell in _____ with classical music.", options: ["love", "like", "heart"], correct: 0, explanation: "To 'fall in love' with something." },
                    { q: "Let's _____ a party next weekend!", options: ["have", "make", "do"], correct: 0, explanation: "We say 'have a party' or 'throw a party'." },
                    { q: "He did not want to _____ an argument.", options: ["start", "make", "do"], correct: 0, explanation: "We 'start/get into an argument'." },
                    { q: "I need to _____ an appointment with the doctor.", options: ["make", "do", "have"], correct: 0, explanation: "We 'make an appointment'." },
                    { q: "Don't _____ fun of your classmates.", options: ["make", "do", "have"], correct: 0, explanation: "To 'make fun of' means to tease or mock." },
                    { q: "We should _____ the bus before it leaves.", options: ["catch", "take", "hold"], correct: 0, explanation: "We 'catch the bus' or 'take the bus'." }
                ]
            },
            phrasal_verbs: {
                title: "Phrasal Verbs (A2)",
                description: "Complete the sentence with the correct preposition or adverb to form a phrasal verb.",
                grammarTheory: "📖 <strong>Phrasal Verbs (A2)</strong> — At A2, phrasal verbs become more varied and sometimes have different meanings from the individual words. Key verbs: <em>find out</em> (discover), <em>look after</em> (care for), <em>run out of</em> (have none left), <em>give up</em> (quit), <em>pick up</em> (collect), <em>fill in</em> (complete a form), <em>grow up</em> (become adult). Many are <em>separable</em> — you can put the object between the verb and particle.",
                items: [
                    { q: "I need to find _____ what time the train leaves.", correct: "out", explanation: "'Find out' means to discover information." },
                    { q: "Look _____ the baby while I am away.", correct: "after", explanation: "'Look after' means to take care of someone." },
                    { q: "We run _____ of milk. I'll go buy some.", correct: "out", explanation: "'Run out of' means to have none left." },
                    { q: "Don't give _____! You can do it.", correct: "up", explanation: "'Give up' means to quit or stop trying." },
                    { q: "Can you pick me _____ from the station?", correct: "up", explanation: "'Pick up' someone means to collect them in a car." },
                    { q: "The plane takes _____ at 9 PM.", correct: "off", explanation: "'Take off' means to leave the ground." },
                    { q: "I am looking _____ my keys. I can't find them.", correct: "for", explanation: "'Look for' means to search for something." },
                    { q: "Please fill _____ this form with your details.", correct: "in", explanation: "'Fill in' a form means to complete it." },
                    { q: "Turn _____ the volume, it's too loud.", correct: "down", explanation: "'Turn down' means to reduce the volume." },
                    { q: "He grew _____ in a small town.", correct: "up", explanation: "'Grow up' means to become an adult." }
                ]
            }
        }
    }
};
