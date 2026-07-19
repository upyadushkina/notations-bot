/* <UI_MESSAGES> */
const MESSAGES = {"en": {"_note": "Fill empty strings (\"\"). Keep {placeholders} like {n}, {name}, {loc} unchanged. Keys starting with btn are button labels.", "welcome": "Welcome to Notations '26 ✨\nYour lab & festival companion 🌿", "startHint": "Tap the button below to start 🌿", "unknownCmd": "Hmm, I don’t know this command 👀\nTry /start", "stale": "This button feels a little ancient 🌚\nOpen /start again.", "dbError": "Oops, something went wrong 🌙\nTry again with /start.", "btnBack": "← back", "btnMenu": "☰ menu", "btnCancel": "cancel", "btnConfirm": "confirm ✨", "btnSkip": "skip", "btnDone": "done ✨", "btnYes": "yes", "btnNo": "no", "accessDenied": "This part of the bot is only open to the hosq team 🌙", "comingSoon": "coming soon 🌱", "regNamePrompt": "Type your name in English ✍️\nI’ll find everyone whose name contains what you typed.", "regMatchFound": "Nice to meet you, {name}! 👋", "regMatchConfirm": "Is this you? 👀", "regMatchWrong": "No worries 🌿\nLet’s find the right profile.", "regPickNameTitle": "Find your Notations profile ✨", "regPickNamePrompt": "Choose your name from the list below.", "regSuggestionsTitle": "Is one of these you? Tap your name:", "regSearchPrompt": "Type your real or artistic name, so we can find you in the Notations database 🙂", "regSearchNoResults": "I couldn’t find that name 💔\nTry another spelling — or tap the button below.", "regNoMatches": "I couldn’t find that name 💔\nTry another spelling — or write to Uliana:", "regNotFoundFinal": "I can’t find you in the Notations database 💔\nPlease write to Uliana: @junully", "regLinkedOk": "You’re in ✨\nWelcome to Notations!", "regAlreadyLinked": "This profile is already linked to another Telegram account 🥺\nPlease contact Uliana: @junully", "btnConfirmItsMe": "yes, that’s me", "btnNotMe": "that’s not me", "btnSearchMyName": "search for my name", "btnNoneOfThese": "меня здесь нет 🥺", "mainMenuTitle": "Menu 🌿", "btnFindCollaborator": "find a collaborator", "btnSchedule": "schedule", "btnMyProfile": "my profile", "btnInfo": "info", "btnTodaysCircle": "Random circle 🎥", "btnHelp": "help", "infoBody": "Notations brings together sound, performance, strange experiments, collective practices, and unexpected collaborations 🌿\n\nUse the menu to explore the program, find collaborators, and stay in sync ✨", "helpBody": "Contact bot admin Uliana: @junully", "btnToday": "today", "btnTomorrow": "tomorrow", "btnFullSchedule": "full schedule", "btnMine": "my schedule", "btnNow": "now 🔥", "btnNext": "next 🧚", "btnSeeTimeSlots": "time slots", "btnSeeAllEvents": "all events", "btnFilter": "filter", "btnOpenEvent": "open", "btnRegister": "I’ll be there 😎", "btnCancelReg": "✕", "pickDay": "Pick a day 🌿", "pickSlot": "Choose a time slot ⏰", "pickEvent": "What would you like to explore? 🧚", "dayBrowsePrompt": "How would you like to explore this day? 🧚", "categoryPick": "Pick a category 🌿", "filterPickTags": "Pick a category 👀", "noEvents": "nothing here yet 🌙", "myScheduleTitle": "Your schedule ✨", "myScheduleEmpty": "Your schedule is still empty 🌱", "registered": "See you there! ✨", "adminEventRegCount": "Registrations: {n}", "tag": "⊹ {cat}", "timeRange": "{start} – {end}", "location": "📍 {loc}", "performers": "People 🌿\n{txt}", "noDescription": "More details coming soon 🌙", "registerOk": "You’re in ✨", "alreadyReg": "You’re already registered ✨", "cancelOk": "Registration cancelled 🌱", "nowTitle": "Happening right now ✨", "nowEmpty": "Nothing is happening right now (or it's out of schedule 🙈)", "nextTitle": "Coming up next ✨", "nextEmpty": "No upcoming events yet 👀", "venuesBody": "Here are the spaces where Notations is happening 🌿\nOpen a venue to see its address and location.", "reminder1h": "Starting in about 1 hour ⏰", "reminder15": "Starting in 15 minutes 🔥", "reminderFooter": "See you at Notations 🧚🌿", "scheduleChangedNotify": "A small change in the schedule\nPlease check the updated event details.", "eventCancelledNotify": "This event has been cancelled 🌙\nPlease check your schedule for the latest updates.", "profileTitle": "Your Notations profile ✨", "profileEmpty": "Your profile is still a little empty 🌱", "btnMyTags": "My tags", "btnMyPhoto": "My photo", "btnEditProfile": "Edit profile", "btnMyScheduleFromProfile": "My schedule 📅", "profileTagsTitle": "Your creative constellation 🌿", "profileNoPhoto": "No profile photo yet 🌙", "profileEditPrompt": "Tell us what you’d like to update in your profile.", "profileEditSentToAdmin": "Thank you ✨\nYour update request has been sent to the Notations team.", "labelRealName": "Name", "labelArtisticName": "Artistic name", "labelCountry": "Country", "labelRole": "Role", "labelProject": "Project", "labelDiscipline": "Disciplines", "labelTools": "Tools", "labelSkillSet": "Skills", "labelSocial": "Social media", "collabTitle": "Find a collaborator 🤝", "collabPrompt": "Who or what are you looking for today? 🌿", "btnSearchByName": "Search by name", "btnFilterTags": "Explore by tags", "btnSurpriseMe": "Surprise me ✨", "btnSimilarToMe": "Similar to me", "btnClearFilters": "Clear filters", "btnConnect": "Connect ✨", "collabNamePrompt": "Type a real or artistic name 👀", "collabNoResults": "No matches yet 🌙\nTry changing your filters.", "collabResultsTitle": "Possible collaborators ✨", "collabFiltersActive": "Active filters 🌿", "collabPickFilterType": "What would you like to search by?", "collabPickTag": "Choose one or more tags 👀", "collabTagOn": "Added to your search ✨", "collabTagOff": "Removed from your search 🌿", "similarTitle": "People with shared creative threads ✨", "similarEmpty": "We need a few more details in your profile before we can find similar people 🌱", "surpriseTitle": "A possible unexpected encounter 👀", "connectOpened": "Opening their profile ✨", "needProfileForSimilar": "Add disciplines, tools, projects, or skills to your profile so we can find better matches 🌿", "circleRequestTitle": "Today’s Notations circle 🎥", "circleRequestBody": "A small moment from your day 👀\nRecord a short Telegram video circle showing where you are, what you’re doing, or what is happening around you.", "circleReceivedOk": "Got it ✨\nYour circle has arrived safely.", "circleWrongType": "Please send this one as a Telegram video circle 🎥", "circleAlreadySubmitted": "You’ve already shared today’s circle ✨", "circleNoActiveRequest": "There’s no active circle request right now 🌙", "circleReminder": "A gentle reminder 🌿\nYour Notations circle is still waiting for you.", "circleStatusNone": "No circle request today 🌙", "circleStatusPending": "Your circle is waiting 👀", "circleStatusDone": "Circle shared ✨", "btnSubmitCircle": "Share my circle 🎥", "circleAdminCaption": "🎥 Circle from {name}", "qotdTitle": "Question of the day 🎙️", "qotdBody": "A small question for reflection, play, or wandering 🌿", "qotdPromptVoice": "Reply with a Telegram voice message when you’re ready ✨", "qotdReceivedOk": "Thank you ✨\nYour voice response has arrived.", "qotdWrongType": "Please answer with a Telegram voice message 🎙️", "qotdAlreadyAnswered": "You’ve already answered today’s question ✨", "qotdNoActive": "There’s no active question right now 🌙", "qotdReminder": "A gentle reminder 🌿\nToday’s question is still waiting for your voice.", "qotdStatusNone": "No question today 🌙", "qotdStatusPending": "Waiting for your voice 👀", "qotdStatusDone": "Answered ✨", "adminMenuTitle": "Notations admin space 🌿", "btnAdminParticipants": "Participants", "btnAdminCircles": "Video circles", "btnAdminVoiceQs": "Voice questions", "btnAdminNotifications": "Notifications", "btnAdminSchedule": "Schedule", "btnAdminStats": "Statistics", "btnAdminSettings": "Settings", "btnAdminApprovals": "Approvals", "btnAdminConnects": "Connect requests", "btnAdminQuestionLib": "Question library", "btnAdminJobQueue": "Scheduled jobs", "adminParticipantsTitle": "Participants 👥", "adminParticipantCard": "Participant profile 🌿", "adminRegisteredList": "Registered participants ✨", "adminNotRegisteredList": "Not registered yet 🌙", "adminApprovalTitle": "Profile approvals", "adminApprovalPrompt": "Would you like to approve this profile link?", "btnApprove": "Approve ✨", "btnReject": "Reject", "adminApprovedOk": "Approved ✨", "adminRejectedOk": "Rejected 🌙", "adminCircleTitle": "Video circle campaigns 🎥", "btnCircleSendAll": "Send to everyone", "btnCircleSendSelected": "Choose participants", "btnCircleSendByTags": "Send by tags", "btnCircleSendRandom": "Random participants", "btnCircleSchedule": "Schedule", "btnCircleRandomWindow": "Random time window", "btnCircleViewInbox": "View circles", "btnCircleWhoReplied": "Who replied", "btnCircleWhoMissing": "Who is missing", "btnCircleRemind": "Send reminder", "adminCircleCompose": "Write the circle prompt 🌿", "adminCircleQueued": "Circle request scheduled ✨", "adminCircleSent": "Circle request sent ✨", "adminCircleInboxEmpty": "No circles here yet 🌙", "adminCirclePickWindow": "Choose the sending time window ⏰", "adminCircleRandomCountPrompt": "How many random participants should receive this request?", "adminQTitle": "Voice question campaigns 🎙️", "btnQSendAll": "Send to everyone", "btnQSendSelected": "Choose participants", "btnQSendByTags": "Send by tags", "btnQSendRandomDifferent": "Different random questions", "btnQSchedule": "Schedule", "btnQViewAnswers": "View answers", "btnQWhoMissing": "Who is missing", "btnQRemind": "Send reminder", "btnQAddQuestion": "Add a question", "btnQListQuestions": "Question library", "adminQCompose": "Choose or write a question 🌿", "adminQAddPrompt": "Send the new question as a text message.", "adminQAddedOk": "Question added ✨", "adminQQueued": "Question campaign scheduled ✨", "adminQSent": "Question sent ✨", "adminQAnswersEmpty": "No voice answers yet 🌙", "adminQLibraryEmpty": "The question library is still empty 🌱", "adminBroadcastTitle": "Send a notification 📢", "btnBroadcastAll": "Send to everyone", "btnBroadcastSelected": "Choose participants", "btnBroadcastByTags": "Send by tags", "btnBroadcastByProject": "Send by project", "btnBroadcastNonResponders": "Send to non-responders", "btnBroadcastNow": "Send now", "btnBroadcastSchedule": "Schedule", "btnBroadcastAddButtons": "Add buttons", "adminBroadcastComposePrompt": "Send the message or media you’d like to share 🌿", "adminBroadcastPreviewTitle": "Notification preview ✨", "adminBroadcastPreviewFilters": "Audience filters: {filters}", "adminBroadcastPreviewCount": "Recipients: {n}", "adminBroadcastPreviewNames": "First recipients:\n{names}", "btnBroadcastConfirmSend": "Confirm and send ✨", "btnBroadcastCancel": "Cancel", "adminBroadcastSentOk": "Notification sent ✨", "adminBroadcastAlreadySent": "This notification has already been sent 🌙", "adminBroadcastQueued": "Notification scheduled ✨", "adminBroadcastEmptyRecipients": "No participants match this audience 🌙", "adminScheduleTitle": "Schedule admin 📅", "btnSchedCreate": "Create event", "btnSchedEdit": "Edit event", "btnSchedCancelEvent": "Cancel event", "btnSchedChangeTimePlace": "Change time or place", "btnSchedRemind": "Send reminder", "btnSchedNotifyChange": "Notify participants", "adminSchedSaved": "Event saved ✨", "adminSchedCancelled": "Event cancelled 🌙", "adminSchedNotifySent": "Update sent to participants ✨", "adminStatsTitle": "Notations statistics 📊", "adminStatsBody": "A small overview of what is happening across the bot 🌿", "adminConnectsTitle": "Collaboration requests 🤝", "adminConnectsEmpty": "No collaboration requests yet 🌙", "adminConnectsLine": "{name} would like to connect with {target}", "adminSettingsTitle": "Bot settings ⚙️", "adminSettingsBody": "Manage the main Notations bot settings here 🌿", "adminWhoami": "You are signed in as {role} ✨", "adminJobQueueTitle": "Scheduled jobs ⏰", "adminJobQueueEmpty": "Nothing is scheduled right now 🌙", "btnAdminManageAdmins": "Admins", "adminAdminsTitle": "Bot admins ✨", "adminAdminsListEmpty": "No extra admins yet 🌙", "adminAdminsListLine": "{name} — @{username}", "btnAdminAddAdmin": "Add admin", "btnAdminRemoveAdmin": "Remove admin", "adminAddAdminNamePrompt": "Send the admin’s name 🌿", "adminAddAdminUsernamePrompt": "Send their Telegram username (with or without @)", "adminAddAdminOk": "Admin added ✨\n{name} — @{username}", "adminAddAdminExists": "This admin is already on the list 🌙", "adminAddAdminNeedStart": "Saved ✨\nThey need to open the bot once (/start) before admin access works.", "adminRemoveAdminOk": "Admin removed 🌙", "adminRemoveAdminForbidden": "You can’t remove the primary admin 🌙", "pickAudienceTitle": "Who should receive this? 👀", "pickTagTypeTitle": "Choose a filter category 🌿", "pickTagValueTitle": "Choose one or more tags", "pickPeopleTitle": "Choose participants 👥", "pickPeopleSelected": "Selected: {n}", "btnSelectAllVisible": "Select all shown", "btnClearSelection": "Clear selection", "audienceAll": "Everyone", "audienceSelected": "Selected participants", "audienceByTags": "By tags", "audienceByProject": "By project", "audienceRandom": "Random participants", "audienceNonResponders": "Non-responders", "labelBy": "by", "adminPasswordPrompt": "Enter the admin password 🔑", "adminPasswordWrong": "Wrong password 🌙", "adminPasswordOk": "Admin access unlocked ✨", "btnAdminLogout": "Lock admin access", "adminLogoutOk": "Admin access locked 🌙", "btnAdminWhoHasAccess": "Who has admin access", "adminWhoHasAccessTitle": "People with admin access 🔑", "adminWhoHasAccessEmpty": "No one has admin access right now 🌙", "adminWhoHasAccessLine": "@{username}", "adminWhoHasAccessNoUsername": "id:{id} (no username)", "btnContactUliana": "напишите Ульяне @junully"}};
/* </UI_MESSAGES> */


/* <PARTICIPANTS> */
const BUILD = "name-search-v5";
const PARTICIPANTS = [{"id": 1, "name": "Zoya Sargsyan", "artistic_name": "Bokusho", "photo_url": "https://drive.google.com/file/d/1w6WR8R5XsoJA5goB8LlY0a1M0_9nRlhB/view?usp=sharing", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": null, "telegram": "(+37477797311)", "telegram_norm": "(+37477797311)", "email": null, "project": "Neo-Tribes", "discipline": "Music Production, Classical Music, Jazz", "tools": null, "skill_set": "Improvisation, Instrumentalist"}, {"id": 2, "name": "Anna Terzikyan", "artistic_name": "Anna Vahrami", "photo_url": "https://drive.google.com/file/d/1Tv4sbO0XIQhlORQOF952fV_BcdD8a9Ww/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/anna_vahrami/", "telegram": "@yokogeri8", "telegram_norm": "yokogeri8", "email": null, "project": "Installation", "discipline": "Music Production, Installation, Writing, Performance", "tools": "Ableton Live, Vocal, Piano", "skill_set": "Composing, Improvisation, Singing, Research"}, {"id": 3, "name": "Arev Hayrapetyan", "artistic_name": "Arev", "photo_url": "https://drive.google.com/file/d/1uMrWbAkGZaMzIkvdc_mOsBtQ5_fMsO0f/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": null, "telegram": "@arevhayrapetyan", "telegram_norm": "arevhayrapetyan", "email": null, "project": "Assembling Ritual", "discipline": "Acting, Theatre, Directing, Writing", "tools": "Piano, Guitar", "skill_set": "Instrumentalist, Composing"}, {"id": 4, "name": "Anton Shanikhin", "artistic_name": "Tony “Everydaypony” Shanikhin", "photo_url": "https://drive.google.com/file/d/1W1hDv1ssUVccUXnjZVrS_0FQff788ItD/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Russia", "social_media": "https://www.instagram.com/yavalera?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "@goshavronitch", "telegram_norm": "goshavronitch", "email": null, "project": "Music Production", "discipline": "Music Production, Sound Design, Theatre, Animation, Visual Art, Classical Music", "tools": "Guitar, Synthesizers, Piano, Bass, Max/MSP, Resolume", "skill_set": "Composing, Sampling, Sound Synthesis, Instrumentalist, Coding and Patching"}, {"id": 5, "name": "Mariam Gevorgyan", "artistic_name": "Mariam Gevorgyan", "photo_url": null, "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/mariam.otion?igsh=MXVobW9pZ2JvaDZnMw%3D%3D&utm_source=qr", "telegram": "@mar1amgevorgyan", "telegram_norm": "mar1amgevorgyan", "email": null, "project": "Video Art", "discipline": "Animation, Set Design", "tools": "Dragon Frame", "skill_set": "Design"}, {"id": 6, "name": "Kristina Manucharyan", "artistic_name": "Kristina Arark Manucharyan", "photo_url": "https://drive.google.com/file/d/1g9FI3JAMgl4jROD0kaYYFrU6pIhexjsf/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenian", "social_media": null, "telegram": "@christin17", "telegram_norm": "christin17", "email": null, "project": "Documental Art", "discipline": "Visual Art, Animation, Writing, Performance", "tools": null, "skill_set": "Illustration and Painting, Sculpture"}, {"id": 7, "name": "Inna Ghazaryan", "artistic_name": "Inna Ghazaryan", "photo_url": "https://drive.google.com/file/d/14TjT_HXfBPqdY8ycm5sjKXot7nPeGXCT/view?usp=sharing", "role": "participant", "projects": "Notations '26", "country": "Armenian", "social_media": "https://www.instagram.com/innaghazarian/", "telegram": "@innaghazarian", "telegram_norm": "innaghazarian", "email": null, "project": "Somatic Practices", "discipline": "Performance, Choreography, Directing", "tools": null, "skill_set": "Teaching, Improvisation, Research"}, {"id": 8, "name": "Tatiana Iaksina", "artistic_name": "helical_worm", "photo_url": "https://drive.google.com/file/d/174_f_S4APDApp3T3C9urmlpfGZepRiZr/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Russia / Cyprus", "social_media": "https://www.instagram.com/helical_worm?igsh=N25weG0yMTlrM251", "telegram": "@Hlclwr", "telegram_norm": "hlclwr", "email": null, "project": "Contemporary Art", "discipline": "Media Art, Visual Art, Electronics, Installation, Photography, Sound Design", "tools": "Max/MSP, Electronics, Coding, DIY, Touch Designer", "skill_set": "Coding and Patching, Illustration and Painting, Instrument Design, Research"}, {"id": 9, "name": "SU JINGXIANG", "artistic_name": "JAXTON SU", "photo_url": "https://drive.google.com/file/d/1XgUI0K8N8vSlsbkWRYwbVy1H0U_pXRcO/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Singapore", "social_media": null, "telegram": "@jblueskyx", "telegram_norm": "jblueskyx", "email": null, "project": "Installation", "discipline": "Visual Art, Installation, Filming, Photography, Art Management", "tools": null, "skill_set": "Illustration and Painting"}, {"id": 10, "name": "Solomon Fatoma", "artistic_name": "solo's beat", "photo_url": null, "role": "participant", "projects": "Notations '26", "country": "Sierra Leone", "social_media": null, "telegram": "-", "telegram_norm": "-", "email": null, "project": "Music Production", "discipline": "Music Production", "tools": "Piano, Bass, Drums", "skill_set": "Composing, Instrumentalist"}, {"id": 11, "name": "Nikolai Zheltukhin", "artistic_name": "Nikolai Zheltukhin (yomoyo)", "photo_url": "https://drive.google.com/file/d/1d4yL-cjTYSaMHKe_VY6OJEdvjzGdwRfO/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Russia", "social_media": null, "telegram": "@nikozhelt", "telegram_norm": "nikozhelt", "email": null, "project": "Neo-Tribes", "discipline": "Music Production, Jazz", "tools": "Flute, Guitar, Bass, Piano, Saxophone", "skill_set": "Improvisation, Composing, Instrumentalist"}, {"id": 12, "name": "Tigran Gevorkian", "artistic_name": "Tigran Gevorkian", "photo_url": "https://drive.google.com/file/d/1oroJE3idyh9ohx40_2nAowZsNnWyz5UF/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Russia / Armenia", "social_media": "https://www.instagram.com/cringeofdionysus?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "@aah_arlekino", "telegram_norm": "aah_arlekino", "email": null, "project": "Art To Wear", "discipline": "Performance, Theatre, Acting", "tools": null, "skill_set": null}, {"id": 13, "name": "Wanbo Li", "artistic_name": "Ember Li", "photo_url": "https://drive.google.com/file/d/1fcQOYWMlx9oJgyMEqlBy1XDj7SEyIn70/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "China / United Kingdom", "social_media": "https://www.instagram.com/ember.leee?igsh=MWRzdXh2NDhmZWZzaw%3D%3D&utm_source=qr", "telegram": "@emberlee7", "telegram_norm": "emberlee7", "email": null, "project": "Contemporary Art", "discipline": "Installation, Performance, Media Art, Photography, Filming, Sound Design", "tools": null, "skill_set": "Research"}, {"id": 14, "name": "Ara Ter-Gabrielyants", "artistic_name": "Ara Ter-Gabrielyants", "photo_url": "https://drive.google.com/file/d/1zvmGpbu60ngooeWrhRfi1Yo23g1SGeAi/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": null, "telegram": "@araterg", "telegram_norm": "araterg", "email": null, "project": "Music Production", "discipline": "Acting, Production, Writing, Music Production, Performance", "tools": "Piano, Guitar, Vocal", "skill_set": "Singing, Instrumentalist, Composing"}, {"id": 15, "name": "Hooman Talakian", "artistic_name": "Hooman Talakian", "photo_url": "https://drive.google.com/file/d/1TV52_UZ_qClcn8j6JIhmL1_NenoTDU6R/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Iran", "social_media": "https://www.instagram.com/hooman.talakian/", "telegram": "@Hooman_talakian", "telegram_norm": "hooman_talakian", "email": null, "project": "Reverse Tower Ritual", "discipline": "Performance, Music Production, Sound Design, Media Art, Electronics", "tools": "Vocal, Piano, Coding", "skill_set": "Composing, Sampling, Mixing and Mastering, Sound Recording, Teaching, Coding and Patching, Singing, AI sound"}, {"id": 16, "name": "Zhiqiang Li", "artistic_name": "Lee", "photo_url": "https://drive.google.com/file/d/111cLAjwrs8PByWgPB_SunqfR39mvL8Ve/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "China / United Kingdom", "social_media": null, "telegram": "@Lee19931125", "telegram_norm": "lee19931125", "email": null, "project": "Reverse Tower Ritual", "discipline": "Performance, Installation, Sound Design, Media Art", "tools": "Electronics, DIY", "skill_set": "Sound Recording, Research, Instrument Design, Engineering"}, {"id": 17, "name": "Grisha Tsvetkov", "artistic_name": "Grisha Tsvetkov", "photo_url": "https://drive.google.com/file/d/1fUU8hrYDz0kHzqffWMEYHCA2gKTfb18v/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Russia / Israel", "social_media": "https://www.instagram.com/grisha.tsvet", "telegram": "@g_tsvet", "telegram_norm": "g_tsvet", "email": null, "project": "Video Art", "discipline": "Animation, Media Art, Installation, Photography, Performance, Visual Art", "tools": "Coding, Adobe, Touch Designer", "skill_set": "Coding and Patching, Teaching, 3D, Design"}, {"id": 18, "name": "Lia Potikyan", "artistic_name": "pistak", "photo_url": "https://drive.google.com/file/d/128fmir95UcmLl-A64FQKWdUik-j_iXQ0/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/pistak.svg/", "telegram": "@liasvg", "telegram_norm": "liasvg", "email": null, "project": "Reverse Tower Ritual", "discipline": "Electronics, Music Production, Sound Design, Visual Art", "tools": "Electronics, DIY, Guitar, Coding", "skill_set": "Composing, Instrument Design, Engineering, Illustration and Painting, Instrumentalist"}, {"id": 19, "name": "Jessica James", "artistic_name": "Winter", "photo_url": "https://drive.google.com/file/d/1LSw03i2CD05Vikd9drc2UPAEGrpF3beW/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Scotland, UK", "social_media": "https://www.instagram.com/glassforbrains?igsh=b3Zlb2M4dzJwejJv", "telegram": "@glassforbrains", "telegram_norm": "glassforbrains", "email": null, "project": "Communitas", "discipline": "Theatre, Performance, Sound Design, Music Production, Electronics", "tools": "Ableton Live, Vocal, Synthesizers", "skill_set": "Composing, Improvisation, Singing, Teaching, Sound Synthesis"}, {"id": 20, "name": "Diren Demir", "artistic_name": "DİREN", "photo_url": "https://drive.google.com/file/d/1WDewS-1znioq-t_t7L4Mx4LhVnIGrWaV/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Turkey / Germany", "social_media": "https://www.instagram.com/diren.art/?hl=en", "telegram": "@direnart", "telegram_norm": "direnart", "email": null, "project": "Ambisonic Installation", "discipline": "Media Art", "tools": null, "skill_set": null}, {"id": 21, "name": "Vedant Manwadkar", "artistic_name": "Vedant Manwadkar", "photo_url": "https://drive.google.com/file/d/1Hg6PbwG2dAY1rYmUJ1DLkaDwRbnLyVfp/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "India", "social_media": "https://www.instagram.com/vedmilo?igsh=MThudWhmajlsamNjeQ==", "telegram": "@vedantmanwadkar", "telegram_norm": "vedantmanwadkar", "email": null, "project": "Installation", "discipline": "Music Production, Animation, Installation, Filming, Media Art", "tools": "Guitar, Coding", "skill_set": "Composing, Coding and Patching, Design, Research, Instrumentalist"}, {"id": 22, "name": "Elena Chadaeva", "artistic_name": "Chadaeva", "photo_url": "https://drive.google.com/file/d/1y1BtHpvZsT6vuqLIrFC7nOUlXhALoAbc/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Russia / Georgia", "social_media": "https://www.instagram.com/eleolen?igsh=b3RpNTY0dGFnamkz&utm_source=qr", "telegram": "@eloelen", "telegram_norm": "eloelen", "email": null, "project": "Reverse Tower Ritual", "discipline": "Media Art, Installation, Electronics, Performance, Sound Design", "tools": "Electronics, Coding", "skill_set": "Coding and Patching, Instrument Design, Engineering"}, {"id": 23, "name": "Gohar Gizhlaryan", "artistic_name": "Gohar Gizhlaryan", "photo_url": "https://drive.google.com/file/d/1d06f7YhAlOadB-e-5y9nVvfQZaUH591V/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/edofreme?igsh=MTBqeHdwcDI3MXE3YQ==", "telegram": "@GoharGizhlaryan", "telegram_norm": "gohargizhlaryan", "email": null, "project": "Communitas", "discipline": "Visual Art, Photography, Writing, Classical Music, Performance", "tools": "Qanun", "skill_set": "Improvisation, Illustration and Painting, Instrumentalist"}, {"id": 24, "name": "Rhys Votano", "artistic_name": "weight of light", "photo_url": "https://drive.google.com/file/d/1dCbWLnqAuiIxeil6bv08Aa4eVi3P1gma/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Austria / UK", "social_media": null, "telegram": "@Votaaano", "telegram_norm": "votaaano", "email": null, "project": "Contemporary Art", "discipline": "Filming, Media Art, Writing, Theatre, Visual Art, Sound Design", "tools": "Synthesizers", "skill_set": "Illustration and Painting"}, {"id": 25, "name": "Kate Sadovnikova", "artistic_name": "Kate Sadovnikova", "photo_url": "https://drive.google.com/file/d/1MpKhIL46mTp_BXy8c6yz3MI_bupkZQ3X/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Russia", "social_media": "https://www.instagram.com/_sadovnichestvo_?igsh=cjdoM2JsdW53N2Vh&utm_source=qr", "telegram": "@sad0vnichestvo", "telegram_norm": "sad0vnichestvo", "email": null, "project": "Zine Art", "discipline": "Photography, Theatre, Writing", "tools": null, "skill_set": "Composing, Research"}, {"id": 26, "name": "Zygmund de Somogyi", "artistic_name": "Zygmund de Somogyi", "photo_url": "https://drive.google.com/file/d/1GzHxymjt2qNqKxXchZSSSUDJlBBPmOlv/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "United Kingdom, Philippines", "social_media": "https://www.instagram.com/zdscomposer/", "telegram": "@agitatedworlds", "telegram_norm": "agitatedworlds", "email": null, "project": "The Refrain", "discipline": "Theatre, Classical Music, Performance, Production", "tools": null, "skill_set": "Composing, Teaching"}, {"id": 27, "name": "Olivia Melkonian", "artistic_name": "khanum", "photo_url": "https://drive.google.com/file/d/1vVgBwMuE5w5FGqaGu1OvQl4B0j0ZasIh/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "United Kingdom", "social_media": null, "telegram": "@omelkonian", "telegram_norm": "omelkonian", "email": null, "project": "Communitas", "discipline": "Sound Design, Performance, Music Production, Filming, Installation", "tools": null, "skill_set": "Composing, Sound Recording, Research"}, {"id": 28, "name": "Evgeny Bylina", "artistic_name": "Evgeny Bylina", "photo_url": "https://drive.google.com/file/d/1mUGJY8UjlQC1PPfVxAl_xXYa3h_x9DEU/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Ukraine, Georgia", "social_media": null, "telegram": "@bylina", "telegram_norm": "bylina", "email": null, "project": "Neo-Tribes", "discipline": "Writing, Art Management, Jazz, Electronics, Music Production", "tools": "Piano, Max/MSP, Ableton Live, Synthesizers", "skill_set": "Research, Teaching, Improvisation, Instrumentalist, Sound Synthesis"}, {"id": 29, "name": "Yulia Nemova", "artistic_name": "Yulia Nemova", "photo_url": "https://drive.google.com/file/d/1n98QZMTc8GqFL-3sz6ItwpbSsyQ1rdGp/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Uzbekistan / Russia", "social_media": "https://www.instagram.com/yuliyanemova?igsh=MTI2cGVxem5jMWVheQ==", "telegram": "@yulianemova777", "telegram_norm": "yulianemova777", "email": null, "project": "Contemporary Art", "discipline": "Media Art, Installation, Filming, Visual Art", "tools": "Unreal Engine, Adobe", "skill_set": "Teaching, AI Visual, 3D, Illustration and Painting, Design"}, {"id": 30, "name": "Hugo Pinto", "artistic_name": "Kino Pinto", "photo_url": "https://drive.google.com/file/d/1XvThr-fhq1NP0UpJK0b2Ly7oa_yZZCwf/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Portugal / Germany", "social_media": "https://www.instagram.com/kino.pinto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "@Kinormpi", "telegram_norm": "kinormpi", "email": null, "project": "Sama Soundbath", "discipline": "Music Production, Sound Design, Performance", "tools": "Guitar, Ableton Live, Flute, Bass", "skill_set": "Composing, Instrumentalist, Sound Recording"}, {"id": 31, "name": "Hannah Koshgarian", "artistic_name": "Hannah Koshgarian", "photo_url": "https://drive.google.com/file/d/1-QaxXcukCxVAk7PFOS9r_pImtBKVjPHO/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "United States", "social_media": null, "telegram": "@hannahkoshgarian", "telegram_norm": "hannahkoshgarian", "email": null, "project": "The Refrain", "discipline": "Classical Music, Performance", "tools": "Cello", "skill_set": "Instrumentalist, Arranging, Research, Improvisation"}, {"id": 32, "name": "Louise Gorm", "artistic_name": "Louise Gorm", "photo_url": "https://drive.google.com/file/d/1xpixqSLUQ8YxXJINtJBAzcoVXnNWivp2/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Denmark", "social_media": "https://www.instagram.com/louise.gorm", "telegram": "louisegorm", "telegram_norm": "louisegorm", "email": null, "project": "Communitas", "discipline": "Classical Music, Performance, Production", "tools": "Violin", "skill_set": "Improvisation, Composing, Research, Instrumentalist"}, {"id": 33, "name": "Maksim Sergeev", "artistic_name": "Maksim Sergeev", "photo_url": "https://drive.google.com/file/d/1k2i0K-nQn0SH4azPQRw981BnI7Cf2gOJ/view?usp=sharing", "role": "participant", "projects": "Notations '26", "country": "Russia / Israel", "social_media": "https://www.instagram.com/bigudix", "telegram": "@late_brigade", "telegram_norm": "late_brigade", "email": null, "project": "Sama Soundbath", "discipline": "Music Production, Sound Design, Theatre", "tools": "Logic Pro, Ableton Live, Guitar, Vocal", "skill_set": "Composing, Singing, Instrumentalist"}, {"id": 34, "name": "Matteo Cenerini", "artistic_name": "Matteo Cenerini", "photo_url": "https://drive.google.com/file/d/12az41ox6HXaJ-Po5QasSn-0yZbDeSro9/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Italy", "social_media": null, "telegram": "@jimmog", "telegram_norm": "jimmog", "email": null, "project": "Communitas", "discipline": "Performance, Jazz, Music Production, Installation, Writing", "tools": "Guitar", "skill_set": "Composing, Arranging, Improvisation, Instrumentalist, Research"}, {"id": 35, "name": "Artak Kostandian", "artistic_name": "dreamy0psis", "photo_url": "https://drive.google.com/file/d/13nlWqr96muH6WL5qp-4l-I6WNtg3edgq/view?usp=sharing", "role": "participant", "projects": "Notations '26", "country": "Armenia / Georgia", "social_media": "https://www.instagram.com/dreamy0psis?igsh=MW9seHV1dHV6ZG5zOA%3D%3D&utm_source=qr", "telegram": "@aartakk", "telegram_norm": "aartakk", "email": null, "project": "Music Production", "discipline": "Installation, Visual Art, Music Production", "tools": "Ableton Live", "skill_set": "Sculpture, 3D, Composing"}, {"id": 36, "name": "Veronika Poghosyan", "artistic_name": "Who Is Veronika Poghosyan", "photo_url": "https://drive.google.com/file/d/170pdeM3nZBcKTOAsIIXeU_rwC3g2CHrJ/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/jojo___san?igsh=MTN1bml3MDcxOW1tbw%3D%3D&utm_source=qr", "telegram": "@mermaidbuttercookies", "telegram_norm": "mermaidbuttercookies", "email": null, "project": "Documental Art", "discipline": "Filming, Animation, Performance, Acting, Writing, Directing", "tools": "Adobe, Dragon Frame", "skill_set": "Sculpture, Design"}, {"id": 37, "name": "Evgeniia Starikova", "artistic_name": "Evgeniia Starikova", "photo_url": "https://drive.google.com/file/d/1kbKoekV-ui2iD5vV3ylrSAgNiM5tP5-3/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Russia", "social_media": null, "telegram": "@evgelioon", "telegram_norm": "evgelioon", "email": null, "project": "Contemporary Art", "discipline": "Installation, Performance, Media Art, Filming, Sound Design", "tools": null, "skill_set": null}, {"id": 38, "name": "Yuliia Potapova", "artistic_name": "Yuliia Potapova", "photo_url": "https://drive.google.com/file/d/1kzDWxaBe5JviaDmHxdNnRnu6FtDLPqIu/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Russia", "social_media": null, "telegram": "@yulia_uap", "telegram_norm": "yulia_uap", "email": null, "project": "Assembling Ritual", "discipline": "Art Management", "tools": null, "skill_set": null}, {"id": 39, "name": "Aleksandr Kuritsyn", "artistic_name": "blue pencil", "photo_url": "https://drive.google.com/file/d/1otZgnzSOz26qUpbdezhHUf-dPwtJVQov/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Russia", "social_media": "https://www.instagram.com/bluepenciltoo", "telegram": "@becitynow", "telegram_norm": "becitynow", "email": null, "project": "Zine Art", "discipline": "Visual Art, Writing", "tools": null, "skill_set": "Research, Illustration and Painting"}, {"id": 40, "name": "Melanya Torosyan", "artistic_name": "Marl Superstarl", "photo_url": "https://drive.google.com/file/d/17DAvVFkzYGa1sFxIUrVbhg45iFRPio1Y/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": null, "telegram": "@marlsuperstarl", "telegram_norm": "marlsuperstarl", "email": null, "project": "Zine Art", "discipline": null, "tools": null, "skill_set": null}, {"id": 41, "name": "Valentin Ryzhov", "artistic_name": "zvukofor", "photo_url": "https://drive.google.com/file/d/17mzaLkkeGaK5RHr4e8x1vyD3cWByCI7n/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "http://instagram.com/zvukofor", "telegram": "@zvukofor", "telegram_norm": "zvukofor", "email": null, "project": "Music Production", "discipline": "Music Production, Sound Design, Visual Art, Filming", "tools": "Synthesizers, Guitar, Electronics", "skill_set": "Sound Recording, Instrumentalist, Sound Synthesis, Engineering"}, {"id": 42, "name": "Van Sadagh", "artistic_name": "Van Sadagh", "photo_url": null, "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": null, "telegram": "@van_muse", "telegram_norm": "van_muse", "email": null, "project": "Communitas", "discipline": "Jazz, Acting, Theatre, Visual Art, Photography, Performance, Music Production", "tools": "Piano, Vocal", "skill_set": "Composing, Singing, Teaching, Illustration and Painting, Instrumentalist"}, {"id": 43, "name": "Lubomir Andrei", "artistic_name": "Lubomir Andrei", "photo_url": "https://drive.google.com/file/d/1G_6qpB8Fvo53ceNsMNKCqf-_ua6rocOJ/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Russia", "social_media": "https://www.instagram.com/lubomirandrei?igsh=NzRwZTJpemV2eW83&utm_source=qr", "telegram": "@andreitikhonovdance", "telegram_norm": "andreitikhonovdance", "email": null, "project": "Somatic Practices", "discipline": "Choreography, Performance, Theatre", "tools": null, "skill_set": null}, {"id": 44, "name": "Frederick Bernas", "artistic_name": "Freddie Fiasco", "photo_url": "https://drive.google.com/file/d/1Me3mBxvMyYMrg-kvPh_I8W6fLCu4ocLq/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "UK / USA", "social_media": null, "telegram": "@freddiefiasco", "telegram_norm": "freddiefiasco", "email": null, "project": "Video Art", "discipline": "Filming, Media Art, Music Production, Sound Design", "tools": "Saxophone", "skill_set": "Instrumentalist, Composing"}, {"id": 45, "name": "Minami KINTO", "artistic_name": "Minami KINTO", "photo_url": "https://drive.google.com/file/d/1d-OtrZTqC2XrLMH0hEk1BfcRwmtVyMXw/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Japan", "social_media": "https://www.instagram.com/kintominami/", "telegram": "@kintominami", "telegram_norm": "kintominami", "email": null, "project": "Art To Wear", "discipline": "Installation, Visual Art, Performance", "tools": "DIY", "skill_set": "Research, Illustration and Painting, Sculpture"}, {"id": 46, "name": "Fernando Damon", "artistic_name": "Fernando Damon", "photo_url": "https://drive.google.com/file/d/1EwR_3rbT0DOPpjGOcF1tPG7TLf3gTJ9z/view?usp=sharing", "role": "participant", "projects": "Notations '26", "country": "South Africa", "social_media": "https://www.instagram.com/fernandofinds/", "telegram": "(+27729047467)", "telegram_norm": "(+27729047467)", "email": null, "project": "Neo-Tribes", "discipline": "Jazz, Electronics, Music Production, Visual Art", "tools": "Drums, Synthesizers", "skill_set": "Sampling, Sound Synthesis, Instrumentalist, Illustration and Painting"}, {"id": 47, "name": "Anton Khlabov", "artistic_name": "Anton Khlabov", "photo_url": "https://drive.google.com/file/d/1mLLx_5oIp6ZLCxUrIJl9eT-OaMMgFnLD/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Russia", "social_media": "https://www.instagram.com/khlabov", "telegram": "@antkant", "telegram_norm": "antkant", "email": null, "project": "Video Art", "discipline": "Filming, Animation, Photography, Media Art, Visual Art", "tools": "Adobe", "skill_set": "Design"}, {"id": 48, "name": "Varder Baghdasaryan", "artistic_name": "Qi", "photo_url": "https://drive.google.com/file/d/1OhyddVlEKpB6HBZ07G6m27W0op2PfwM6/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/qi_spellsphere?igsh=dXByYmdzaGdiYTh1", "telegram": "@deibeati", "telegram_norm": "deibeati", "email": null, "project": "The Refrain", "discipline": "Sound Design, Performance, Art Management, Electronics", "tools": null, "skill_set": "Research"}, {"id": 49, "name": "Karine Avetisyan", "artistic_name": "Kariné", "photo_url": "https://drive.google.com/file/d/1_hBBCJsUda9CBs6e5dqtrBMUArQzZbSt/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/karravetisyan/", "telegram": "@karravetisyan", "telegram_norm": "karravetisyan", "email": null, "project": "Music Production", "discipline": "Electronics, Music Production", "tools": "Piano, Vocal, Electronics, Synthesizers", "skill_set": "Composing, Sound Synthesis, Singing, Instrumentalist"}, {"id": 50, "name": "Aleksandra Zakaryan", "artistic_name": "XANDRA", "photo_url": "https://drive.google.com/file/d/1ObMDuGCaUlyrz47dWHOlfO9VZpfknkIh/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/xanddara/", "telegram": "@xanddara", "telegram_norm": "xanddara", "email": null, "project": "Ambisonic Installation", "discipline": "Music Production, Media Art, Electronics", "tools": "Ableton Live, Touch Designer", "skill_set": "Sound Recording, Design"}, {"id": 51, "name": "Vardui Mirzoyan", "artistic_name": "Vardui Mirzoyan", "photo_url": "https://drive.google.com/file/d/1hc9Of9ZACtnlkiN2WbcOrYbYZz53v-Vf/view?usp=sharing", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/vard_mirzoyan_cellist/", "telegram": "Vardui", "telegram_norm": "vardui", "email": null, "project": "The Refrain", "discipline": "Classical Music", "tools": "Cello", "skill_set": "Instrumentalist"}, {"id": 52, "name": "Anna Ghazaryan Vladimirskaya", "artistic_name": "Anna Ghazaryan Vladimirskaya", "photo_url": "https://drive.google.com/file/d/1NE_o6K_CKQJbchKqujHpdABrkilhbJ32/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "USA / Armenia", "social_media": null, "telegram": "@vvvvvanna", "telegram_norm": "vvvvvanna", "email": null, "project": "Installation", "discipline": "Visual Art, Media Art, Installation", "tools": "Coding", "skill_set": "Design, Sculpture, Coding and Patching, Research, 3D, Engineering"}, {"id": 53, "name": "Elen Poghosyan", "artistic_name": "Elen Poghosyan", "photo_url": "https://drive.google.com/file/d/1y8AUbqrGNicWaeTWix8Z-R8E1ePW4DI7/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/_elenpogosyan_?igsh=MXUycjI0NndxbXVneg%3D%3D&utm_source=qr", "telegram": "@elenpoghosyan", "telegram_norm": "elenpoghosyan", "email": null, "project": "Communitas", "discipline": "Classical Music", "tools": "Piano, Cello", "skill_set": "Instrumentalist"}, {"id": 54, "name": "Ana Kipshidze", "artistic_name": "Anuka Kipshidze", "photo_url": "https://drive.google.com/file/d/16nGyUv4m6HPQgqlLclOnfvf8f5WMCyHd/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Georgia", "social_media": "https://www.instagram.com/kipshidzeanuka?igsh=c25zaHB0dHJ3cTkz&utm_source=qr", "telegram": "@akipshidze", "telegram_norm": "akipshidze", "email": null, "project": "Communitas", "discipline": "Sound Design, Music Production", "tools": "Bass, Guitar, Piano", "skill_set": "Instrumentalist, Composing, Sound Recording, Instrument Design, Engineering, Mixing and Mastering"}, {"id": 55, "name": "Anna Kalenchyan", "artistic_name": "Anna Kalenchyan", "photo_url": "https://drive.google.com/file/d/1RPQ2evAWFvmetmVS-fwUMGhOj-NqOqyU/view?usp=sharing", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/anna.psdd?igsh=cWptaDhvMnkxNTkx", "telegram": "@annapsdd", "telegram_norm": "annapsdd", "email": null, "project": "Video Art", "discipline": "Animation, Visual Art, Media Art", "tools": "Adobe", "skill_set": "Design, 3D, AI Visual"}, {"id": 56, "name": "Shahane Harutyunyan", "artistic_name": "22194 (Shahane)", "photo_url": "https://drive.google.com/file/d/1xdlTK-DPAW0MAy8VfdHbcNiJAKVeUyAK/view?usp=sharing", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": null, "telegram": "@N22195", "telegram_norm": "n22195", "email": null, "project": "Video Art", "discipline": "Media Art, Visual Art", "tools": "Coding", "skill_set": "Coding and Patching"}, {"id": 57, "name": "David Grigoryan", "artistic_name": "David Grigoryan", "photo_url": "https://drive.google.com/file/d/1ZtRfOWMhSYw48qSKPtsOESC9RUFW_ZX7/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/grigds/", "telegram": "@dav_grig", "telegram_norm": "dav_grig", "email": null, "project": "The Refrain", "discipline": "Classical Music, Set Design, Visual Art", "tools": "Saxophone", "skill_set": "Instrumentalist, Design"}, {"id": 58, "name": "Aleksandr Veselov", "artistic_name": "Aleksandr Veselov", "photo_url": "https://drive.google.com/file/d/1X2i9Hw1orFd3hCjrG5lSpGzdb1vrlVuB/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/mozgalex", "telegram": "@mozgalex", "telegram_norm": "mozgalex", "email": null, "project": "Assembling Ritual", "discipline": "Sound Design, Media Art, Writing", "tools": null, "skill_set": "Research"}, {"id": 59, "name": "Nelli Vardanyan", "artistic_name": "Echoes in dust", "photo_url": "https://drive.google.com/file/d/1mQiX9FWWKJBKa6pfz9QyWtVNj2RjQtmz/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/echoes_in_dust?igsh=cTA1NmN2cnF0MTdw", "telegram": "@nellyv8", "telegram_norm": "nellyv8", "email": null, "project": "Music Production", "discipline": "Music Production, Sound Design, Classical Music", "tools": "Ableton Live, Logic Pro, Qanun", "skill_set": "Instrumentalist, Composing, Sound Recording"}, {"id": 60, "name": "Kristina Iskandaryan", "artistic_name": "Kiara", "photo_url": "https://drive.google.com/file/d/1QJxCcfNLysInqk-3OhEEy0EsKYzoJSVS/view?usp=sharing", "role": "participant", "projects": "Notations '26", "country": null, "social_media": null, "telegram": "@Reneyrlene", "telegram_norm": "reneyrlene", "email": null, "project": "Video Art", "discipline": null, "tools": null, "skill_set": null}, {"id": 61, "name": "Anna Esaian", "artistic_name": "esai", "photo_url": "https://drive.google.com/file/d/1SUUfU0VrNt1Y29W0eV2vvAzMMwHEfPET/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia / Netherlands", "social_media": "https://www.instagram.com/essuricatikam?igsh=cGh2bmptcnRjZ3Zo", "telegram": "@essuricatikam", "telegram_norm": "essuricatikam", "email": null, "project": "Installation", "discipline": "Installation, Performance, Photography, Visual Art, Media Art", "tools": null, "skill_set": "Sculpture, Illustration and Painting"}, {"id": 62, "name": "Ani Yeghoyan", "artistic_name": "NODE", "photo_url": "https://drive.google.com/file/d/1EsLcg0Uu9RsqSDKVKiJ0nHOEqpvppVl2/view?usp=sharing", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/node.officiall/", "telegram": "@ani_yeghoyan", "telegram_norm": "ani_yeghoyan", "email": null, "project": "Ambisonic Installation", "discipline": "Music Production", "tools": "Guitar, Piano, Ableton Live", "skill_set": "Composing, Instrumentalist"}, {"id": 63, "name": "Syuzanna Ginosyan", "artistic_name": "Suzy Ginosyan", "photo_url": "https://drive.google.com/file/d/1Ij_G2oMS-AYiSDZTIsex98XiJfJdPE-u/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/ginosyansuzy?igsh=MWt3Z2ltNjdhYW9ncQ==", "telegram": "@GSyuzi", "telegram_norm": "gsyuzi", "email": null, "project": "Video Art", "discipline": "Art Management, Classical Music", "tools": "Piano", "skill_set": "Instrumentalist"}, {"id": 64, "name": "Kristine Danielyan", "artistic_name": "Christina Danielyan", "photo_url": "https://drive.google.com/file/d/1lp4wQh_wgczY3XZZTbVRgIWu9t9warHp/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/christinadanielian/", "telegram": "@christinadanielyan", "telegram_norm": "christinadanielyan", "email": null, "project": "Somatic Practices", "discipline": "Acting, Choreography, Performance, Directing, Theatre", "tools": null, "skill_set": "Teaching"}, {"id": 65, "name": "Arno Melkonyan", "artistic_name": "Arno Melkonyan", "photo_url": "https://drive.google.com/file/d/1bKvyVzL6fnDbmybnz2UmSuWtNXxtufn5/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/arnomelkonyan?igsh=MWk1d2t5eDNnMTNucQ==", "telegram": "@arnomelkonyan", "telegram_norm": "arnomelkonyan", "email": null, "project": "Neo-Tribes", "discipline": "Classical Music, Jazz, Music Production", "tools": "Piano, Guitar", "skill_set": "Composing, Instrumentalist"}, {"id": 66, "name": "Maria Tsharakyan", "artistic_name": "manu", "photo_url": "https://drive.google.com/file/d/1yHM0qm8MljMRNYjCwkscFm495iTftYZi/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia / Spain", "social_media": "https://www.instagram.com/manu.tsharak/", "telegram": "@bitchok", "telegram_norm": "bitchok", "email": null, "project": "Communitas", "discipline": "Music Production, Sound Design", "tools": "Piano, Guitar, Drums, Bass", "skill_set": "Instrumentalist, Teaching, Engineering, Composing"}, {"id": 67, "name": "Henrik Meliqyan", "artistic_name": "Henrik Meliqyan", "photo_url": "https://drive.google.com/file/d/17ZdOWfWRzQDSAGQNAAcpxXSaTQLa0_On/view?usp=sharing", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/henrik.meliqyan.music?igsh=MXZ6NW50cHd6OHRnNg==", "telegram": "heno_jz", "telegram_norm": "heno_jz", "email": null, "project": "Neo-Tribes", "discipline": "Classical Music, Jazz", "tools": "Clarinet, Saxophone", "skill_set": "Instrumentalist"}, {"id": 68, "name": "Svetlana Hakobyan", "artistic_name": "Svetlana Hakobyan", "photo_url": "https://drive.google.com/file/d/1H8jjVxUVdW2MHIk7wzme2CQUKe_MbHTE/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": null, "telegram": "@haklanna", "telegram_norm": "haklanna", "email": null, "project": "Neo-Tribes", "discipline": null, "tools": "Guitar, Bass", "skill_set": "Instrumentalist"}, {"id": 69, "name": "Ekaterina Ishkhanova", "artistic_name": "ishkhan", "photo_url": "https://drive.google.com/file/d/12OjHT-_EYbEKirrSCDnMVdqc3QQYrWb0/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Russia", "social_media": "https://www.instagram.com/katyaishkhanova?igsh=MXBjcDBzZW9reWZmdg%3D%3D&utm_source=qr", "telegram": "@katyaishkhanova", "telegram_norm": "katyaishkhanova", "email": null, "project": "Reverse Tower Ritual", "discipline": "Sound Design, Music Production", "tools": "Guitar, Piano, Ableton Live, Vocal", "skill_set": "Instrumentalist, Singing, Sound Synthesis"}, {"id": 70, "name": "Vardan Sargsyan", "artistic_name": "duke", "photo_url": "https://drive.google.com/file/d/1PAztxQ4UY2HGIGA7XAu8ubXl7OwbPdFg/view?usp=sharing", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/duke93duke?igsh=MXdoMzl2cjM2anQ5MQ==", "telegram": "(+37495306920)", "telegram_norm": "(+37495306920)", "email": null, "project": "Ambisonic Installation", "discipline": "Music Production", "tools": "Guitar, Bass, Ableton Live", "skill_set": "Composing, Arranging, Instrumentalist"}, {"id": 71, "name": "Elena Korkina", "artistic_name": "Elena Korkina", "photo_url": "https://drive.google.com/file/d/1d2dHLH5TLXiWti159S4_X-tZ6lk6lwv5/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": null, "telegram": "@zhamanakovor", "telegram_norm": "zhamanakovor", "email": null, "project": "Assembling Ritual", "discipline": "Art Management, Writing", "tools": null, "skill_set": "Research, Teaching"}, {"id": 72, "name": "Carolina Zakharova", "artistic_name": "Carolina Zakharova", "photo_url": "https://drive.google.com/file/d/1yO81alZxT9jgdQxlH3Yxa84vgGqf3E9M/view?usp=sharing", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/car.zakh?igsh=cDAwdHF5OGx5Y3ly&utm_source=qr", "telegram": "@carzakh", "telegram_norm": "carzakh", "email": null, "project": "Art To Wear", "discipline": "Choreography, Performance, Animation, Photography, Visual Art", "tools": "Adobe", "skill_set": "Design"}, {"id": 73, "name": "Toma Aydinyan", "artistic_name": "Toma Aydinyan", "photo_url": null, "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/tomaydinyan/", "telegram": "(+37491356797)", "telegram_norm": "(+37491356797)", "email": null, "project": "Art To Wear", "discipline": "Choreography, Performance, Filming, Photography", "tools": null, "skill_set": "Improvisation"}, {"id": 74, "name": "Syuzanna Misakyan", "artistic_name": "Syuzan Misakyan", "photo_url": "https://drive.google.com/file/d/1rr3k1eRadIvpNzpHXpsINX_eOPs7ld3M/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/syuzan.misakian?igsh=c3YxYnV1dHdoejBi&utm_source=qr", "telegram": "@syuzan_misakian", "telegram_norm": "syuzan_misakian", "email": null, "project": "Art To Wear", "discipline": "Choreography, Acting, Performance, Theatre", "tools": null, "skill_set": "Teaching"}, {"id": 75, "name": "Anika Krbetschek", "artistic_name": "Anika Krbetschek", "photo_url": "https://drive.google.com/file/d/1pAsdVK-4ZAFZlH8MZ4z69PirEqdivCx1/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Germany", "social_media": null, "telegram": "@anikakrb", "telegram_norm": "anikakrb", "email": null, "project": "Assembling Ritual", "discipline": "Writing, Art Management, Media Art, Photography, Installation, Sound Design", "tools": null, "skill_set": "Research"}, {"id": 76, "name": "Dmitrii Nenadyshin", "artistic_name": "Ptichka Soe", "photo_url": "https://drive.google.com/file/d/1mXtPvcrya3e7McYOfbeu9nC8bdiUS5Ss/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Russia", "social_media": null, "telegram": "@d1mosha", "telegram_norm": "d1mosha", "email": null, "project": "Reverse Tower Ritual", "discipline": "Music Production, Sound Design, Electronics, Performance, Media Art, Visual Art", "tools": "Ableton Live, Logic Pro, Vocal, Piano, Guitar, Bass, Touch Designer", "skill_set": "Composing, Singing, Instrumentalist, Design"}, {"id": 77, "name": "Juliette Martirosyan", "artistic_name": "Juliette Martirosyan", "photo_url": "https://drive.google.com/file/d/1CnbGHnJKfYfRv54WkFwBwqa2pLiUs_XG/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/juliette.martirosyan/", "telegram": "@jules_juliette", "telegram_norm": "jules_juliette", "email": null, "project": "Documental Art", "discipline": "Filming, Directing, Writing", "tools": "Adobe", "skill_set": null}, {"id": 78, "name": "Julia Krivosheenko", "artistic_name": "Julia Krivosheenko", "photo_url": "https://drive.google.com/file/d/1MHyXipRET0vGGgDGPrPmaqAgvrtcNPTM/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "UK", "social_media": "https://www.instagram.com/juliakrivo?igsh=MTd1OHZpbjYxdDNydw%3D%3D&utm_source=qr", "telegram": "@Juliakrivo", "telegram_norm": "juliakrivo", "email": null, "project": "Installation", "discipline": "Media Art, Installation, Light", "tools": "Coding, Touch Designer", "skill_set": "Coding and Patching, Design"}, {"id": 79, "name": "Emilya Nikoghosyan", "artistic_name": "Emilya Nikoghosyan", "photo_url": "https://drive.google.com/file/d/1gJZZV93Me1kGpykvGubproq0hZrDmiN9/view?usp=drive_link", "role": "participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/emilnetu/", "telegram": "@gnaceqcy", "telegram_norm": "gnaceqcy", "email": null, "project": "Video Art", "discipline": "Media Art, Installation, Light", "tools": "Coding", "skill_set": "Coding and Patching, Design, Engineering, 3D"}, {"id": 80, "name": "Davit Aydiyan", "artistic_name": "Davit Aydiyan", "photo_url": "https://drive.google.com/file/d/140p6KeahAMugYBxZ2pjLCVtzNGNmdlyo/view?usp=drive_link", "role": "volunteer / participant", "projects": "Notations '26", "country": "Armenia / Germany", "social_media": null, "telegram": "@unicornwalker", "telegram_norm": "unicornwalker", "email": null, "project": "The Refrain", "discipline": "Classical Music", "tools": "Violin", "skill_set": "Instrumentalist"}, {"id": 81, "name": "Vahe Abrahamyan", "artistic_name": "Nerøx", "photo_url": "https://drive.google.com/file/d/1bhtfITgzNCOA4uJq7fwmD0ujeJyw4_ug/view?usp=drive_link", "role": "volunteer / participant", "projects": "Notations '26", "country": "Armenia / Germany", "social_media": "https://www.instagram.com/vahe.abrahamyan___?igsh=MTFyanFsazB0OHJ4eg%3D%3D&utm_source=qr", "telegram": "@Vahe17", "telegram_norm": "vahe17", "email": null, "project": "Music Production", "discipline": "Electronics, Music Production, Classical Music", "tools": "Ableton Live", "skill_set": "Composing"}, {"id": 82, "name": "Grigor Budaghyan", "artistic_name": "Grigor Budaghyan", "photo_url": "https://drive.google.com/file/d/1SZcDtJ-zl-SfPC9lBJaRcJEFuaj_6BvT/view?usp=drive_link", "role": "volunteer / participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/grig_budaghyan/", "telegram": "@Grigor", "telegram_norm": "grigor", "email": null, "project": "The Refrain", "discipline": "Classical Music, Jazz", "tools": "Clarinet, Saxophone", "skill_set": "Instrumentalist"}, {"id": 83, "name": "Nikola Chen", "artistic_name": "Nikola Chen", "photo_url": "https://drive.google.com/file/d/1f7UXDvo41lw-67IjWrfLxD7wFE9kYWQ3/view?usp=drive_link", "role": "volunteer / participant", "projects": "Notations '26", "country": "Russia / Armenia", "social_media": "https://www.instagram.com/nikolachenmusic/", "telegram": "@nikolachenmusic", "telegram_norm": "nikolachenmusic", "email": null, "project": "Sama Soundbath", "discipline": "Electronics, Music Production, Sound Design, Classical Music, Media Art, Performance", "tools": "Piano, Clarinet, Synthesizers, Electronics", "skill_set": "Composing, Sound Synthesis, Improvisation, Instrumentalist, Research"}, {"id": 84, "name": "Levon Yerkanyan", "artistic_name": "Lerk", "photo_url": "https://drive.google.com/file/d/1UHBQ-78ZcaLr_5yfJyONpE5GeI97iJ4i/view?usp=drive_link", "role": "volunteer / participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/leeerk/", "telegram": "@leerrk", "telegram_norm": "leerrk", "email": null, "project": "Communitas", "discipline": "Classical Music, Music Production, Photography", "tools": "Vocal, Guitar, Ableton Live, Logic Pro", "skill_set": "Singing, Instrumentalist"}, {"id": 85, "name": "Mileta Ghazanchyan", "artistic_name": "MILETA", "photo_url": "https://drive.google.com/file/d/1y9dLosRQs6KChQ6R0GI1eBDo2b1UcGo7/view?usp=drive_link", "role": "volunteer / participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/mileta_gn?igsh=MTJrd2sxcnViYmZuZA%3D%3D&utm_source=qr", "telegram": "@miletagazanchyan", "telegram_norm": "miletagazanchyan", "email": null, "project": "The Refrain", "discipline": "Jazz, Music Production", "tools": "Piano", "skill_set": "Composing, Instrumentalist"}, {"id": 86, "name": "Evgeniia Kovalchuk", "artistic_name": "arnet", "photo_url": "https://drive.google.com/file/d/1uOPFVK7Jt1xSkG9NJhaUR3_DomPijltv/view?usp=drive_link", "role": "volunteer / participant", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/skinny.wrist?igsh=MWlpcGpiMDZmYzF2cg%3D%3D&utm_source=qr", "telegram": "@pospalpoel", "telegram_norm": "pospalpoel", "email": null, "project": "Ambisonic Installation", "discipline": "Electronics, Music Production, Visual Art", "tools": "Ableton Live, Synthesizers", "skill_set": "Design, Sound Synthesis"}, {"id": 87, "name": "Elizabeth Telnaya", "artistic_name": "Black Babette", "photo_url": "https://drive.google.com/file/d/1alDHy5ENkAHP5w5ZfZAFea357sW1mIfq/view?usp=drive_link", "role": "volunteer / participant", "projects": "Notations '26", "country": "Russia", "social_media": "https://www.instagram.com/babette.deziree/", "telegram": "@Loverdosed25", "telegram_norm": "loverdosed25", "email": null, "project": "Reverse Tower Ritual", "discipline": "Music Production, Sound Design, Performance", "tools": "Ableton Live, Synthesizers, Electronics, Body", "skill_set": "Composing, Sound Recording, Sound Synthesis, Sampling, Singing, Improvisation"}, {"id": 88, "name": "Nasrin Shojaei", "artistic_name": "Nasrin", "photo_url": "https://drive.google.com/file/d/1M3n7v72cUK0iXEkq8xXp1c-0S7WmLdkb/view?usp=drive_link", "role": "volunteer / participant", "projects": "Notations '26", "country": "Iran", "social_media": "https://www.instagram.com/nasr.sho.injaei/", "telegram": "@Nasr_sho_in_ja_ei", "telegram_norm": "nasr_sho_in_ja_ei", "email": null, "project": "Somatic Practices", "discipline": "Performance", "tools": "Body", "skill_set": "Improvisation"}, {"id": 89, "name": "Dubljević Dragan", "artistic_name": "Dubljević Dragan", "photo_url": "https://drive.google.com/file/d/1UF2c2bwx4BmjZgkHCopi07ngVRXcpysf/view?usp=drive_link", "role": "volunteer / participant", "projects": "Notations '26", "country": "Montenegro", "social_media": "https://www.instagram.com/dubljevic_dragan/", "telegram": "@DraganDub", "telegram_norm": "dragandub", "email": null, "project": "Music Production", "discipline": "Music Production, Production, Sound Design", "tools": "Ableton Live, Electronics", "skill_set": "Composing, Arranging"}, {"id": 90, "name": "Varvara Misyurina", "artistic_name": "Varvara Misyurina", "photo_url": "https://drive.google.com/file/d/1GDCiX7OLjhubK35WBZxRp38bDlAvsUw9/view?usp=drive_link", "role": "volunteer / participant", "projects": "Notations '26", "country": "Russia", "social_media": null, "telegram": "@imyapolzovatelyavarya", "telegram_norm": "imyapolzovatelyavarya", "email": null, "project": "Reverse Tower Ritual", "discipline": "Music Production", "tools": "Ableton Live", "skill_set": "Composing"}, {"id": 91, "name": "Venera Kazarova", "artistic_name": "Venera Kazarova", "photo_url": "https://drive.google.com/file/d/1EQFSKW2cOED36H5aEJPuAB4kQnoaFIZb/view?usp=drive_link", "role": "curator", "projects": "Notations '26", "country": "Germany", "social_media": "https://www.instagram.com/venera_kazarova/", "telegram": "@venera_kazarova", "telegram_norm": "venera_kazarova", "email": null, "project": "Art To Wear", "discipline": "Theatre, Animation, Set Design, Installation, Visual Art, Art to Wear", "tools": "Body, DIY", "skill_set": "Sculpture, Illustration and Painting, Design"}, {"id": 92, "name": "Artem Semenov", "artistic_name": "Artem Semenov", "photo_url": "https://drive.google.com/file/d/1UZlx0zGNvkmPOcMFFwIkRlM8nL54pYnd/view?usp=drive_link", "role": "curator", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/somewherestation/", "telegram": "@somewherestation", "telegram_norm": "somewherestation", "email": null, "project": "Documental Art", "discipline": "Filming, Photography, Light, Directing", "tools": "Da Vinci Resolve", "skill_set": null}, {"id": 93, "name": "Evgeniy Sharakshane", "artistic_name": "Evgeniy Sharakshane", "photo_url": "https://drive.google.com/file/d/1MnEb8Vll8xPM7YlxpXFZtCL-ofRh8YbA/view?usp=drive_link", "role": "curator", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/evbe_shar/", "telegram": "@glyadite", "telegram_norm": "glyadite", "email": null, "project": "Documental Art", "discipline": "Filming, Photography, Light, Directing", "tools": "Da Vinci Resolve", "skill_set": null}, {"id": 94, "name": "Arman Peshtmaljyan", "artistic_name": "Arman Peshtmaljyan", "photo_url": "https://drive.google.com/file/d/1JrQBhlXcuoNNWfw6R5jR6wnChqImxbIN/view?usp=sharing", "role": "curator", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/arman_peshtmaljyan/", "telegram": "@Jeff3627", "telegram_norm": "jeff3627", "email": null, "project": "Music Production", "discipline": "Performance, Sound Design, Music Production, Jazz", "tools": "Piano, Ableton Live", "skill_set": "Composing, Instrumentalist, Arranging, Instrument Design"}, {"id": 95, "name": "Shahen Khandkaryan (Shhau)", "artistic_name": "Shhau", "photo_url": "https://drive.google.com/file/d/1tnA3-ddYabpgdmrQEvGTpxzWlo2DVBji/view?usp=sharing", "role": "curator", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/shhau.then/", "telegram": "@shhhau", "telegram_norm": "shhhau", "email": null, "project": "Music Production", "discipline": "Sound Design, Music Production", "tools": "Piano, Drums, Ableton Live", "skill_set": "Composing, Sound Recording, Instrumentalist, Arranging, Sound Synthesis, Sampling, Mixing and Mastering, Instrument Design"}, {"id": 96, "name": "Kai Khachatryan", "artistic_name": "Kai Khachatryan", "photo_url": "https://drive.google.com/file/d/1OAOmD8Ve5LwUO8BojnCg7EI66cZSqBPs/view?usp=drive_link", "role": "curator", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/kaikhachatryan/", "telegram": "@nystagmuskay", "telegram_norm": "nystagmuskay", "email": null, "project": "Ambisonic Installation", "discipline": "Sound Design, Music Production, Performance", "tools": "Ableton Live, DIY", "skill_set": "Composing, Sound Recording, Sound Synthesis, Sampling, Mixing and Mastering"}, {"id": 97, "name": "Nadya Xyxu", "artistic_name": "Nadya Xyxu", "photo_url": "https://drive.google.com/file/d/1JRHDqVNoz9gVvYF2AxcIuHFvxRvsOoHK/view?usp=drive_link", "role": "curator", "projects": "Notations '26", "country": "Russia", "social_media": "https://www.instagram.com/nadya_xyxu/", "telegram": "@NadyaXyxu", "telegram_norm": "nadyaxyxu", "email": null, "project": "Installation", "discipline": "Sound Design, Music Production, Performance, Light, Visual Art, Installation, Electronics", "tools": "Touch Designer, Vocal, Synthesizers, Electronics", "skill_set": "Sound Synthesis, Coding and Patching, Instrument Design, Illustration and Painting, Singing, Sound Recording"}, {"id": 98, "name": "Misak Samokatian", "artistic_name": "Misak Samokatian", "photo_url": "https://drive.google.com/file/d/1rdafOGEbGXNXOqF-PpQxYfU7FCpF7znl/view?usp=drive_link", "role": "curator", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/__misak/", "telegram": "@mmisak", "telegram_norm": "mmisak", "email": null, "project": "Installation", "discipline": "Sound Design, Music Production, Light", "tools": "Touch Designer, Unreal Engine, DIY", "skill_set": null}, {"id": 99, "name": "Gevorg Grigoryan", "artistic_name": "Gevorg Grigoryan", "photo_url": "https://drive.google.com/file/d/1gD2FPz0Z2z4MqAXOFSD8HZF44rBddgBm/view?usp=drive_link", "role": "curator", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/di.iiiiiiiiiiiiiiiiiiiii/", "telegram": "@dob_0", "telegram_norm": "dob_0", "email": null, "project": "Video Art", "discipline": "Visual Art, Light", "tools": "Touch Designer", "skill_set": "Coding and Patching,  AI visual"}, {"id": 100, "name": "Tanya Chizhikova", "artistic_name": "Tanya Chizhikova", "photo_url": "https://drive.google.com/file/d/1mOJgcOrAbz_aKqtyTh_kbV8XCFaGO2Le/view?usp=drive_link", "role": "curator", "projects": "Notations '26", "country": "Russia / Germany", "social_media": "https://www.instagram.com/tanya__chizhikova/", "telegram": "@tatiana_chizhikova", "telegram_norm": "tatiana_chizhikova", "email": null, "project": "Somatic Practices", "discipline": "Acting, Choreography, Theatre", "tools": "Body", "skill_set": "Improvisation"}, {"id": 101, "name": "Aram Hovhannisyan", "artistic_name": "Aram Hovhannisyan", "photo_url": "https://drive.google.com/file/d/1QSpnL5c2KWuSoPFVvEXRXun2KNkCnvN4/view?usp=drive_link", "role": "curator", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/aram84hovhannisyan/", "telegram": "@aram84_h", "telegram_norm": "aram84_h", "email": null, "project": "The Refrain", "discipline": "Sound Design", "tools": "Flute", "skill_set": "Composing, Instrumentalist"}, {"id": 102, "name": "Sergey Umroyan", "artistic_name": "Sergey Umroyan", "photo_url": "https://drive.google.com/file/d/1BEiWObemDWDCKhP0Y4m3rBcNj-eIwIT8/view?usp=drive_link", "role": "curator", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/umroyan/", "telegram": "@s_umroyan", "telegram_norm": "s_umroyan", "email": null, "project": "The Refrain", "discipline": "Sound Design, Music Production", "tools": "Ableton Live, Electronics", "skill_set": "Composing, Instrumentalist"}, {"id": 103, "name": "Tigran Suchyan", "artistic_name": "Tigran Suchyan", "photo_url": "https://drive.google.com/file/d/1oroJE3idyh9ohx40_2nAowZsNnWyz5UF/view?usp=drive_link", "role": "curator", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/tigrantoti/", "telegram": "(+37499392285)", "telegram_norm": "(+37499392285)", "email": null, "project": "Neo-Tribes", "discipline": "Sound Design, Music Production, Performance, Jazz", "tools": "Piano, Guitar, Drums", "skill_set": "Composing, Sound Recording, Instrumentalist, Arranging, Sound Synthesis, Sampling"}, {"id": 104, "name": "Mesrop Sarkisyan", "artistic_name": "Mesrop Sarkisyan", "photo_url": "https://drive.google.com/file/d/1vuzPAIAL9nmz3RitfCsbELEfAJxhEAFe/view?usp=drive_link", "role": "curator", "projects": "Notations '26", "country": "USA / Armenia", "social_media": "https://www.instagram.com/mesrop___/", "telegram": "@mesropsarkisyan", "telegram_norm": "mesropsarkisyan", "email": null, "project": "Neo-Tribes", "discipline": "Sound Design, Music Production, Performance, Jazz", "tools": "Piano, Guitar, Drums", "skill_set": "Composing, Sound Recording, Instrumentalist, Arranging, Sound Synthesis, Sampling"}, {"id": 105, "name": "Ben Wheeler", "artistic_name": "Ben Wheeler", "photo_url": "https://drive.google.com/file/d/15BK0jUdQlZvAO-qHdOF1iuLQV619qE0a/view?usp=drive_link", "role": "curator", "projects": "Notations '26", "country": "USA / Georgia", "social_media": "https://www.instagram.com/benwheelermusic/", "telegram": null, "telegram_norm": null, "email": null, "project": "Communitas", "discipline": "Music Production, Sound Design", "tools": "Ableton Live, Guitar, Synthesizers, Electronics", "skill_set": "Composing, Sound Recording, Instrumentalist, Arranging, Sound Synthesis, Sampling"}, {"id": 106, "name": "Zhanna Davtyan", "artistic_name": "Zhanna Davtyan", "photo_url": "https://drive.google.com/file/d/1ep3Cp7GZvCLyfGmeT9Rgu5Bp2gfLTL-9/view?usp=drive_link", "role": "curator", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/zhannadavtyan/", "telegram": null, "telegram_norm": null, "email": null, "project": "Communitas", "discipline": "Performance, Classical Music, Jazz", "tools": "Vocal", "skill_set": "Composing, Singing, Improvisation"}, {"id": 107, "name": "Jeanne Kormina", "artistic_name": "Jeanne Kormina", "photo_url": "https://drive.google.com/file/d/1GfUSge7C3Mzmz7xNOfsYtr5iSIWYUJ0j/view?usp=drive_link", "role": "curator", "projects": "Notations '26", "country": "Russia / Armenia", "social_media": "https://www.instagram.com/yerevan_center_ycie/", "telegram": "@fainaLo", "telegram_norm": "fainalo", "email": null, "project": "Assembling Ritual", "discipline": "Writing", "tools": null, "skill_set": "Research"}, {"id": 108, "name": "Dima Ustinov", "artistic_name": "Dima Ustinov", "photo_url": "https://drive.google.com/file/d/11cTa59fFIoH1UI9DZPGieapseE--UYwT/view?usp=drive_link", "role": "curator", "projects": "Notations '26", "country": "Russia / Germany", "social_media": "https://www.instagram.com/domustinova/", "telegram": "@dimaustinov", "telegram_norm": "dimaustinov", "email": null, "project": "Sama Soundbath", "discipline": "Sound Design, Music Production, Electronics", "tools": "Ableton Live, Piano", "skill_set": "Composing, Sound Recording, Instrumentalist, Arranging, Sound Synthesis, Sampling, Mixing and Mastering"}, {"id": 109, "name": "Andronik Khachiian", "artistic_name": "Andronik Khachiian", "photo_url": "https://drive.google.com/file/d/1aPmiZaJkzgM3R-cARvvZmI4asqAM_7-x/view?usp=drive_link", "role": "curator, hosq team", "projects": "Notations '26", "country": "Armenia / Mexico", "social_media": "https://www.instagram.com/andronik_/", "telegram": "@andronikh", "telegram_norm": "andronikh", "email": null, "project": "Contemporary Art", "discipline": "Light, Visual Art, Animation, Performance, Choreography, Directing, Production, Filming", "tools": "Resolume, Adobe", "skill_set": "AI visual, Design, Illustration and Painting, Improvisation"}, {"id": 110, "name": "Andriesh Gandrabur", "artistic_name": "Andriesh Gandrabur", "photo_url": "https://drive.google.com/file/d/1BXK0SeLZX7rKYdtQiVG8ozAUHQqRWceP/view?usp=drive_link", "role": "curator, hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/gandriesh/", "telegram": "@gandriesh", "telegram_norm": "gandriesh", "email": null, "project": "Reverse Tower Ritual", "discipline": "Sound Design, Music Production, Art Management, Production, Electronics", "tools": "Guitar, Ableton Live, Synthesizers", "skill_set": "Composing, Sound Recording, Instrumentalist, Arranging, Sound Synthesis, Sampling, Mixing and Mastering, Research, Improvisation, Teaching"}, {"id": 111, "name": "Arthur Atayan", "artistic_name": "Arthur Atayan", "photo_url": "https://drive.google.com/file/d/1hw9Zx4haOw2mXmPBGoKIYuXI7yijFDwo/view?usp=drive_link", "role": "curator, hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/arthurrosencrantz/", "telegram": "@Rosencrantzzz", "telegram_norm": "rosencrantzzz", "email": null, "project": "Zine Art", "discipline": "Performance, Sound Design, Music Production, Production", "tools": "Guitar, Vocal", "skill_set": null}, {"id": 112, "name": "Daria Sadovnikova", "artistic_name": "Daria Sadovnikova", "photo_url": "https://drive.google.com/file/d/1oWpb0IHxyzC6y_nFuLw5TdY-MP9M9SmY/view?usp=drive_link", "role": "verticurator", "projects": "Notations '26", "country": "Russia", "social_media": null, "telegram": "@doedear", "telegram_norm": "doedear", "email": null, "project": "Set Design", "discipline": "Sound Design, Music Production", "tools": "Ableton Live", "skill_set": "Composing, Sound Recording, Sound Synthesis"}, {"id": 113, "name": "Karina Malik", "artistic_name": "Karina Malik", "photo_url": "https://drive.google.com/file/d/1mEncCFoBkikcP_9tAGJdY8lHq0iKiP-B/view?usp=drive_link", "role": "verticurator", "projects": "Notations '26", "country": "Russia / Pakistan", "social_media": null, "telegram": "@fybhfr", "telegram_norm": "fybhfr", "email": null, "project": "Set Design", "discipline": "Set Design", "tools": null, "skill_set": null}, {"id": 114, "name": "Aleksei Leontev", "artistic_name": "Aleksei Leontev", "photo_url": null, "role": "verticurator", "projects": "Notations '26", "country": "Russia / France", "social_media": null, "telegram": "@cult4", "telegram_norm": "cult4", "email": null, "project": "Set Design", "discipline": "Set Design", "tools": null, "skill_set": null}, {"id": 115, "name": "Yurii Avdeev", "artistic_name": "Yurii Avdeev", "photo_url": "https://drive.google.com/file/d/1KNTQSjU4Xc5Od41MW7TrCNCQLwMcFxHd/view?usp=drive_link", "role": "verticurator", "projects": "Notations '26", "country": "Russia", "social_media": null, "telegram": "@karlofather", "telegram_norm": "karlofather", "email": null, "project": "Set Design", "discipline": "Set Design", "tools": null, "skill_set": null}, {"id": 116, "name": "Georgy Safarov", "artistic_name": "Georgy Safarov", "photo_url": "https://drive.google.com/file/d/1xTgOEuuBQaZ3OkgL66qxIYxI9cIyAE83/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/gsafarov?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "@Goshass", "telegram_norm": "goshass", "email": null, "project": null, "discipline": "Production, Music Production, Electronics", "tools": "Ableton Live", "skill_set": "Sampling"}, {"id": 117, "name": "Lusine MLKE-Galstyan", "artistic_name": "Lusine MLKE-Galstyan", "photo_url": "https://drive.google.com/file/d/1PqsP8qp_K-0sIH175rLiaicKj-JAWBvj/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/lusination_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "@callhermoonchild", "telegram_norm": "callhermoonchild", "email": null, "project": null, "discipline": "Sound Design, Music Production, Performance", "tools": "Piano, Flute, Ableton Live, Vocal", "skill_set": "Composing, Instrumentalist, Arranging"}, {"id": 118, "name": "Shoghakat MLKE-Galstyan", "artistic_name": "Shoghakat MLKE-Galstyan", "photo_url": "https://drive.google.com/file/d/1WDQiHjnERVkiOmQxI9PBD_XNhBoSNzk7/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/shoghakat.mlke?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "@shoghakatmlke", "telegram_norm": "shoghakatmlke", "email": null, "project": null, "discipline": "Choreography, Directing, Theatre, Performance, Art Management", "tools": null, "skill_set": null}, {"id": 119, "name": "Uliana Pyadushkina", "artistic_name": "Uliana Pyadushkina", "photo_url": "https://drive.google.com/file/d/1BoN4Q04FX_aITd3_35Bxt4SptdcZu-CL/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/junully?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "@junully", "telegram_norm": "junully", "email": null, "project": null, "discipline": "Animation, Media Art, Sound Design, Music Production, Visual Art", "tools": "Ableton Live, Procreate, Da Vinci Resolve, Blender, Coding, AI, DIY, Max/MSP", "skill_set": "Sound Recording, Sound Synthesis, Sampling, Coding and Patching, AI visual, 3D, Design, Illustration and Painting"}, {"id": 120, "name": "Sonya Ovchinnikova", "artistic_name": "Sonya Ovchinnikova", "photo_url": "https://drive.google.com/file/d/1Tkm2kqJeSUhgGjeV-MOWC1ZBcldOa1Ek/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/kudruavaya", "telegram": "@kudruavaya", "telegram_norm": "kudruavaya", "email": null, "project": null, "discipline": "Sound Design, Music Production", "tools": "Piano, Ableton Live, Vocal", "skill_set": "Sound Recording, Arranging, Singing"}, {"id": 121, "name": "Syuzi Juharyan", "artistic_name": "Syuzi Juharyan", "photo_url": "https://drive.google.com/file/d/19TZgq0onhYj2AU3FIpH_fCrSVSStUndu/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/juharyansyuzi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "@Juharyan", "telegram_norm": "juharyan", "email": null, "project": null, "discipline": "Performance", "tools": "Vocal", "skill_set": "Singing"}, {"id": 122, "name": "Evgeniy Lyalin", "artistic_name": "Evgeniy Lyalin", "photo_url": "https://drive.google.com/file/d/1Grb4yPfHx7OsngCOa56Vf1fnIIV3iHkH/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/evgenylln?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "@evgenylln", "telegram_norm": "evgenylln", "email": null, "project": null, "discipline": "Art Management, Classical Music", "tools": "Vocal", "skill_set": "Singing"}, {"id": 123, "name": "Nikita Maksimenko", "artistic_name": "Nikita Maksimenko", "photo_url": "https://drive.google.com/file/d/1PYwiXOvT-X6-9f6zLmV9cwCjFwubWCzr/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/acephallus?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "@acephallus", "telegram_norm": "acephallus", "email": null, "project": null, "discipline": "Performance, Set Design, Light, Media Art, Installation, Sound Design, Music Production, Electronics, Production", "tools": "Ableton Live, Max/MSP, Unreal Engine, Touch Designer, Electronics, DIY, Synthesizers", "skill_set": "Engineering, Sound Synthesis, Sound Recording, Composing, Sampling, Coding and Patching"}, {"id": 124, "name": "Vladimir Gurskii", "artistic_name": "Vladimir Gurskii", "photo_url": "https://drive.google.com/file/d/134AHMwGTIrLGeIOG7nkJwKptrvw6Xjtz/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/vgursky/", "telegram": "@Vgurskii", "telegram_norm": "vgurskii", "email": null, "project": null, "discipline": "Production", "tools": null, "skill_set": null}, {"id": 125, "name": "Maria Makora", "artistic_name": "Maria Makora", "photo_url": "https://drive.google.com/file/d/1plKYuvu-IWOC0lpMCoM_tnckSG-CwH7a/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "http://instagram.com/mmakora", "telegram": "@maria_makora", "telegram_norm": "maria_makora", "email": null, "project": null, "discipline": "Production", "tools": null, "skill_set": null}, {"id": 126, "name": "Mitya Lyalin", "artistic_name": "Mitya Lyalin", "photo_url": "https://drive.google.com/file/d/1HIWouzRlZEe3npKKX-mfuiOemnCjfM_x/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/mitya_lyalin", "telegram": "@mitya_lyalin", "telegram_norm": "mitya_lyalin", "email": null, "project": null, "discipline": "Photography, Filming", "tools": null, "skill_set": null}, {"id": 127, "name": "Flora Gevorgyan", "artistic_name": "Flora Gevorgyan", "photo_url": "https://drive.google.com/file/d/1Ru0pQLCIAzgY3jhGamoBlx7Ax8wgdr1h/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/floragevorgyan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "@floragevorgyan", "telegram_norm": "floragevorgyan", "email": null, "project": null, "discipline": "Production, Art Management", "tools": null, "skill_set": null}, {"id": 128, "name": "Lin Paravyan", "artistic_name": "Lin Paravyan", "photo_url": "https://drive.google.com/file/d/1U_-SWayIebZztUR6pzIaiUpKLOr0sia7/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/smthinme/?utm_source=ig_web_button_share_sheet", "telegram": "@smth_in_me", "telegram_norm": "smth_in_me", "email": null, "project": null, "discipline": "Art Management", "tools": null, "skill_set": null}, {"id": 129, "name": "Natalia Kupriyanova", "artistic_name": "Natalia Kupriyanova", "photo_url": "https://drive.google.com/file/d/1um67HROS74W8-VZ8vLqxI8WK36VS21Pp/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/nataliakupriyanova?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "@kkkkk_natasha", "telegram_norm": "kkkkk_natasha", "email": null, "project": null, "discipline": "Photography, Production, Art Management", "tools": null, "skill_set": null}, {"id": 130, "name": "Daniil Yakushov", "artistic_name": "Daniil Yakushov", "photo_url": "https://drive.google.com/file/d/1KEA1Ru6VglL3_I2xZrxNL3QHHA8Zm6Rt/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/_yakyakyak_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "@skadegog64", "telegram_norm": "skadegog64", "email": null, "project": null, "discipline": "Directing", "tools": null, "skill_set": null}, {"id": 131, "name": "Aksanna Poghosyan", "artistic_name": "Aksanna Poghosyan", "photo_url": "https://drive.google.com/file/d/1OlDK4SUoSRaXDEn-kQLRfX570T98NyJD/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/aksanna_poghosyan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "@aaa20_n", "telegram_norm": "aaa20_n", "email": null, "project": null, "discipline": "Production, Art Management", "tools": null, "skill_set": null}, {"id": 132, "name": "Agatha Karapetyan", "artistic_name": "Agatha Karapetyan", "photo_url": "https://drive.google.com/file/d/1YCQo83VqwvikPRYqkmJp4cXLHXI3X7lT/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/agatha_red?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "@agatha_red", "telegram_norm": "agatha_red", "email": null, "project": null, "discipline": "Art Management, Production", "tools": null, "skill_set": null}, {"id": 133, "name": "Liz Victorova", "artistic_name": "Liz Victorova", "photo_url": "https://drive.google.com/file/d/1eANnGI8qPi6_VTmvJ5_r3wCUkTFScfIU/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/wjerstean?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "@liscfg", "telegram_norm": "liscfg", "email": null, "project": null, "discipline": "Visual Art", "tools": "Adobe", "skill_set": "Design"}, {"id": 134, "name": "Christian Ginosyan", "artistic_name": "Christian Ginosyan", "photo_url": "https://drive.google.com/file/d/1LgMvvAUyTfwjMjEcKhjuYeGJDPCrJR-a/view?usp=sharing", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/antarapan/?hl=en", "telegram": "@antarapan", "telegram_norm": "antarapan", "email": null, "project": null, "discipline": "Writing, Multimedia  Journalism, Production", "tools": null, "skill_set": "Research"}, {"id": 135, "name": "Petros Goroyan", "artistic_name": "Petros Goroyan", "photo_url": "https://drive.google.com/file/d/1mUrnw7Bf9H3QR5tc4Hlj5_XK6jAjGqpb/view?usp=drive_link", "role": "hosq team", "projects": "Notations '26", "country": "Armenia", "social_media": "https://www.instagram.com/wjerstean?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "telegram": "(+37496344396)", "telegram_norm": "(+37496344396)", "email": null, "project": null, "discipline": "Sound Design, Set Design", "tools": "Electronics, Cubase", "skill_set": "Sound Recording, Mixing and Mastering, Engineering"}];
/* </PARTICIPANTS> */

const TG = "https://api.telegram.org";
const TZ = "Asia/Yerevan";
const OFFSET = "+04:00";
const DEFAULT_ADMIN_PASSWORD = "bigbrother";

function adminPassword(env) {
  const fromEnv = String(env.ADMIN_PASSWORD || "").trim();
  return fromEnv || DEFAULT_ADMIN_PASSWORD;
}

// ——— Telegram helpers ———
async function tgCall(token, method, body) {
  const res = await fetch(`${TG}/bot${token}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!json.ok) {
    const err = new Error(json.description || "Telegram API error");
    err.tg = json;
    throw err;
  }
  return json.result;
}

function sendMessage(token, chatId, text, keyboard) {
  return tgCall(token, "sendMessage", {
    chat_id: chatId,
    text,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: keyboard ? { inline_keyboard: keyboard } : undefined,
  });
}

function editMessageText(token, chatId, messageId, text, keyboard) {
  let reply_markup;
  if (keyboard === false) reply_markup = { inline_keyboard: [] };
  else if (keyboard) reply_markup = { inline_keyboard: keyboard };
  return tgCall(token, "editMessageText", {
    chat_id: chatId,
    message_id: messageId,
    text,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup,
  });
}

function answerCallbackQuery(token, id, text) {
  return tgCall(token, "answerCallbackQuery", {
    callback_query_id: id,
    text: text || "",
    show_alert: Boolean(text && text.length > 180),
  });
}

function sendPhoto(token, chatId, photo, caption, keyboard) {
  return tgCall(token, "sendPhoto", {
    chat_id: chatId,
    photo,
    caption: caption || "",
    parse_mode: "HTML",
    reply_markup: keyboard ? { inline_keyboard: keyboard } : undefined,
  });
}

function sendVideoNote(token, chatId, fileId) {
  return tgCall(token, "sendVideoNote", { chat_id: chatId, video_note: fileId });
}

function copyMessage(token, fromChatId, messageId, toChatId) {
  return tgCall(token, "copyMessage", {
    chat_id: toChatId,
    from_chat_id: fromChatId,
    message_id: messageId,
  });
}

// ——— Utils ———
function t(key, vars) {
  const bag = MESSAGES.en || {};
  let s = bag[key] || key;
  if (vars && typeof vars === "object") {
    for (const k of Object.keys(vars)) s = s.replaceAll(`{${k}}`, String(vars[k]));
  }
  return s;
}

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function normTg(u) {
  let s = String(u || "").trim();
  if (s.startsWith("@")) s = s.slice(1);
  return s.toLowerCase();
}

function splitTags(s) {
  return String(s || "")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

function safeJson(raw, fallback) {
  try {
    const v = JSON.parse(raw || "null");
    return v == null ? fallback : v;
  } catch {
    return fallback;
  }
}

function normalizeTime(timeStr) {
  if (!timeStr) return "00:00:00";
  const s = String(timeStr).trim();
  const m = s.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/);
  if (!m) return "00:00:00";
  return `${m[1].padStart(2, "0")}:${m[2]}:${(m[3] || "00").padStart(2, "0")}`;
}

function eventInstantMs(dateStr, timeStr) {
  const t0 = normalizeTime(timeStr);
  const d = String(dateStr || "").trim();
  if (!d || !t0) return NaN;
  return new Date(`${d}T${t0}${OFFSET}`).getTime();
}

function effectiveEndMs(dateStr, startTimeStr, endStr) {
  const startMs = eventInstantMs(dateStr, startTimeStr);
  if (Number.isNaN(startMs)) return NaN;
  if (!endStr || !String(endStr).trim()) return startMs + 45 * 60 * 1000;
  const endMs = eventInstantMs(dateStr, endStr);
  if (Number.isNaN(endMs) || endMs <= startMs) return startMs + 45 * 60 * 1000;
  return endMs;
}

function ymdInTz(ms = Date.now()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(ms));
}

function addDaysYmd(ymd, days) {
  const [y, m, d] = ymd.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + days));
  return dt.toISOString().slice(0, 10);
}

function formatClock(ms) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: TZ,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date(ms));
  } catch {
    return new Date(ms).toISOString().slice(11, 16);
  }
}

function formatDateShort(ymd) {
  const ms = eventInstantMs(ymd, "12:00");
  try {
    return new Intl.DateTimeFormat("en-GB", {
      timeZone: TZ,
      weekday: "short",
      day: "numeric",
      month: "short",
    }).format(new Date(ms));
  } catch {
    return ymd;
  }
}

function clockFromSql(t0) {
  return normalizeTime(t0).slice(0, 5);
}

function rowNav() {
  return [[{ text: t("btnBack"), callback_data: "b" }, { text: t("btnMenu"), callback_data: "m" }]];
}

function isStartCommand(text) {
  const first = String(text || "").trim().split(/\s+/)[0]?.split("@")[0]?.toLowerCase();
  return first === "/start";
}

function isAdminCommand(text) {
  const first = String(text || "").trim().split(/\s+/)[0]?.split("@")[0]?.toLowerCase();
  return first === "/admin";
}

function displayName(p) {
  if (!p) return "?";
  const a = (p.artistic_name || "").trim();
  const n = (p.name || "").trim();
  if (a && n && a.toLowerCase() !== n.toLowerCase()) return `${a} (${n})`;
  return a || n || "?";
}

// ——— Name search (Cmd+F contains) ———
function normalizeName(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[“”"‘’']/g, "")
    .replace(/[^a-z0-9\s\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function personSearchBlob(p) {
  return normalizeName([p.name, p.artistic_name].filter(Boolean).join(" "));
}

function containsMatch(query, p) {
  const q = normalizeName(query);
  if (!q || q.length < 2) return false;
  return personSearchBlob(p).includes(q);
}

function containsScore(query, p) {
  const q = normalizeName(query);
  const name = normalizeName(p.name);
  const art = normalizeName(p.artistic_name);
  if (name === q || art === q) return 0;
  if (name.startsWith(q) || art.startsWith(q)) return 1;
  if ((" " + name + " ").includes(" " + q + " ") || (" " + art + " ").includes(" " + q + " ")) return 2;
  if (name.includes(q) || art.includes(q)) return 3;
  return 4;
}

/** Only people whose name CONTAINS the typed text (like Cmd+F). */
function rankParticipants(people, query, limit = 15) {
  const q = normalizeName(query);
  if (!q) return [];
  const hits = (people || []).filter((p) => containsMatch(query, p));
  hits.sort((a, b) => {
    const sa = containsScore(query, a);
    const sb = containsScore(query, b);
    if (sa !== sb) return sa - sb;
    return displayName(a).localeCompare(displayName(b));
  });
  return hits.slice(0, limit);
}

// ——— DB helpers ———
async function getOrCreateUser(db, from) {
  const tid = Number(from.id);
  let row = await db.prepare("SELECT * FROM users WHERE telegram_id = ?").bind(tid).first();
  if (row) {
    await db
      .prepare(
        `UPDATE users SET username = ?, first_name = ?, updated_at = datetime('now') WHERE id = ?`
      )
      .bind(from.username || null, from.first_name || null, row.id)
      .run();
    row = await db.prepare("SELECT * FROM users WHERE telegram_id = ?").bind(tid).first();
    return row;
  }
  await db
    .prepare(`INSERT INTO users (telegram_id, username, first_name, reg_status) VALUES (?, ?, ?, 'new')`)
    .bind(tid, from.username || null, from.first_name || null)
    .run();
  row = await db.prepare("SELECT * FROM users WHERE telegram_id = ?").bind(tid).first();
  await db
    .prepare(
      `INSERT INTO user_navigation (user_id, stack, updated_at) VALUES (?, '["M"]', datetime('now'))`
    )
    .bind(row.id)
    .run();
  return row;
}

async function setUserState(db, userId, state, data) {
  await db
    .prepare(
      `UPDATE users SET state = ?, state_data = ?, updated_at = datetime('now') WHERE id = ?`
    )
    .bind(state || null, data != null ? JSON.stringify(data) : null, userId)
    .run();
}

async function clearUserState(db, userId) {
  await setUserState(db, userId, null, null);
}

async function navGet(db, userId) {
  const row = await db.prepare("SELECT stack FROM user_navigation WHERE user_id = ?").bind(userId).first();
  const stack = safeJson(row?.stack, ["M"]);
  return Array.isArray(stack) && stack.length ? stack : ["M"];
}

async function navSet(db, userId, stack) {
  await db
    .prepare(
      `INSERT INTO user_navigation (user_id, stack, updated_at) VALUES (?, ?, datetime('now'))
       ON CONFLICT(user_id) DO UPDATE SET stack = excluded.stack, updated_at = datetime('now')`
    )
    .bind(userId, JSON.stringify(stack))
    .run();
}

async function navPush(db, userId, key) {
  const stack = await navGet(db, userId);
  if (stack[stack.length - 1] !== key) stack.push(key);
  await navSet(db, userId, stack);
}

async function navPop(db, userId) {
  const stack = await navGet(db, userId);
  if (stack.length <= 1) {
    await navSet(db, userId, ["M"]);
    return "M";
  }
  stack.pop();
  await navSet(db, userId, stack);
  return stack[stack.length - 1] || "M";
}

async function navResetMenu(db, userId) {
  await navSet(db, userId, ["M"]);
}

async function isAdmin(db, from, env) {
  const tid = Number(from.id);
  const row = await db.prepare("SELECT is_admin FROM users WHERE telegram_id = ?").bind(tid).first();
  return Number(row?.is_admin || 0) === 1;
}

async function setAdminFlag(db, userId, value) {
  await db
    .prepare(`UPDATE users SET is_admin = ?, updated_at = datetime('now') WHERE id = ?`)
    .bind(value ? 1 : 0, userId)
    .run();
}

async function listAdminTelegramIds(db, env) {
  const { results } = await db
    .prepare(`SELECT telegram_id FROM users WHERE is_admin = 1`)
    .all();
  return [...new Set((results || []).map((r) => Number(r.telegram_id)).filter(Boolean))];
}

async function getParticipant(db, id) {
  return db.prepare("SELECT * FROM participants WHERE id = ?").bind(id).first();
}

async function getUserParticipant(db, user) {
  if (!user.participant_id) return null;
  return getParticipant(db, user.participant_id);
}

async function allParticipants(db) {
  try {
    const { results } = await db.prepare("SELECT * FROM participants ORDER BY name COLLATE NOCASE").all();
    if (results && results.length) return results;
  } catch (e) {
    console.error("allParticipants D1", e);
  }
  return PARTICIPANTS;
}

async function ensureParticipantInDb(db, p) {
  if (!p) return null;
  await db
    .prepare(
      `INSERT INTO participants (
         id, name, artistic_name, photo_url, role, projects, country, social_media,
         telegram, telegram_norm, email, project, discipline, tools, skill_set
       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET
         name = excluded.name,
         artistic_name = excluded.artistic_name,
         photo_url = excluded.photo_url,
         role = excluded.role,
         projects = excluded.projects,
         country = excluded.country,
         social_media = excluded.social_media,
         telegram = excluded.telegram,
         telegram_norm = excluded.telegram_norm,
         email = excluded.email,
         project = excluded.project,
         discipline = excluded.discipline,
         tools = excluded.tools,
         skill_set = excluded.skill_set`
    )
    .bind(
      p.id,
      p.name || "",
      p.artistic_name || null,
      p.photo_url || null,
      p.role || null,
      p.projects || null,
      p.country || null,
      p.social_media || null,
      p.telegram || null,
      p.telegram_norm || null,
      p.email || null,
      p.project || null,
      p.discipline || null,
      p.tools || null,
      p.skill_set || null
    )
    .run();
  return db.prepare("SELECT * FROM participants WHERE id = ?").bind(p.id).first();
}

async function tryLinkParticipant(db, user, participant) {
  if (participant.linked_telegram_id && Number(participant.linked_telegram_id) !== Number(user.telegram_id)) {
    return { ok: false, reason: "already_linked" };
  }
  await db
    .prepare(`UPDATE participants SET linked_telegram_id = ? WHERE id = ?`)
    .bind(Number(user.telegram_id), participant.id)
    .run();
  await db
    .prepare(
      `UPDATE users SET participant_id = ?, reg_status = 'registered', state = NULL, state_data = NULL, updated_at = datetime('now') WHERE id = ?`
    )
    .bind(participant.id, user.id)
    .run();
  return { ok: true };
}

async function findByTelegramUsername(db, username) {
  const n = normTg(username);
  if (!n) return null;
  return db.prepare("SELECT * FROM participants WHERE telegram_norm = ?").bind(n).first();
}

// ——— UI renderers ———
function mainMenuKeyboard(admin) {
  const rows = [
    [{ text: t("btnSchedule"), callback_data: "s" }],
    [{ text: t("btnFindCollaborator"), callback_data: "c" }],
    [{ text: t("btnTodaysCircle"), callback_data: "circ" }],
    [{ text: t("btnInfo"), callback_data: "i" }, { text: t("btnHelp"), callback_data: "h" }],
  ];
  if (admin) rows.push([{ text: "⚙️ Admin", callback_data: "a" }]);
  return rows;
}

async function renderMainMenu(admin) {
  return {
    text: `<b>${escapeHtml(t("mainMenuTitle"))}</b>`,
    keyboard: mainMenuKeyboard(admin),
  };
}

async function renderScheduleMenu() {
  return {
    text: `<b>${escapeHtml(t("btnSchedule"))}</b>`,
    keyboard: [
      [{ text: t("btnToday"), callback_data: "s:td" }, { text: t("btnTomorrow"), callback_data: "s:tm" }],
      [{ text: t("btnFullSchedule"), callback_data: "s:full" }],
      [{ text: t("btnNow"), callback_data: "s:now" }, { text: t("btnNext"), callback_data: "s:next" }],
      [{ text: t("btnMine"), callback_data: "s:mine" }],
      ...rowNav(),
    ],
  };
}

function eventButtonLabel(ev) {
  const time = clockFromSql(ev.start_time);
  const title = String(ev.title || "").slice(0, 40);
  return `${time} · ${title}`.slice(0, 64);
}

async function listEventsByDate(db, ymd) {
  const { results } = await db
    .prepare(
      `SELECT * FROM events WHERE status = 'active' AND date = ? ORDER BY start_time, id`
    )
    .bind(ymd)
    .all();
  return results || [];
}

async function listAllActiveEvents(db) {
  const { results } = await db
    .prepare(`SELECT * FROM events WHERE status = 'active' ORDER BY date, start_time, id`)
    .all();
  return results || [];
}

async function regCount(db, eventId) {
  const row = await db
    .prepare(`SELECT COUNT(*) AS n FROM registrations WHERE event_id = ? AND status = 'registered'`)
    .bind(eventId)
    .first();
  return Number(row?.n || 0);
}

async function userRegStatus(db, userId, eventId) {
  const row = await db
    .prepare(`SELECT status FROM registrations WHERE user_id = ? AND event_id = ?`)
    .bind(userId, eventId)
    .first();
  return row?.status || null;
}

async function renderEventList(db, title, events) {
  if (!events.length) {
    return { text: `<b>${escapeHtml(title)}</b>\n\n${escapeHtml(t("noEvents"))}`, keyboard: rowNav() };
  }
  const kb = [];
  let lastDate = null;
  for (const ev of events.slice(0, 40)) {
    if (ev.date !== lastDate && events.length > 15) {
      // group label as disabled-looking button (callback noop)
      kb.push([{ text: `— ${formatDateShort(ev.date)} —`, callback_data: "noop" }]);
      lastDate = ev.date;
    }
    kb.push([{ text: eventButtonLabel(ev), callback_data: `e:${ev.id}` }]);
  }
  kb.push(...rowNav());
  return { text: `<b>${escapeHtml(title)}</b>`, keyboard: kb };
}

async function renderEventCard(db, user, ev, isAdminUser) {
  if (!ev || ev.status === "cancelled") {
    return { text: escapeHtml(t("noEvents")), keyboard: rowNav() };
  }
  const start = clockFromSql(ev.start_time);
  const end = clockFromSql(ev.end_time);
  const lines = [
    `<b>${escapeHtml(ev.title)}</b>`,
    escapeHtml(formatDateShort(ev.date)),
    escapeHtml(t("timeRange", { start, end })),
  ];
  if (ev.location) lines.push(escapeHtml(t("location", { loc: ev.location })));
  if (ev.category) lines.push(escapeHtml(t("tag", { cat: ev.category })));
  if (ev.speakers) lines.push(escapeHtml(t("performers", { txt: ev.speakers })));
  lines.push("");
  lines.push(escapeHtml(ev.description || t("noDescription")));

  if (isAdminUser) {
    const n = await regCount(db, ev.id);
    lines.push("");
    lines.push(`<i>${escapeHtml(t("adminEventRegCount", { n }))}</i>`);
  }

  const status = await userRegStatus(db, user.id, ev.id);
  const kb = [];
  if (status === "registered") {
    lines.push("");
    lines.push(escapeHtml(t("registered")));
    kb.push([{ text: t("btnCancelReg"), callback_data: `x:${ev.id}` }]);
  } else {
    kb.push([{ text: t("btnRegister"), callback_data: `r:${ev.id}` }]);
  }
  kb.push(...rowNav());
  return { text: lines.join("\n"), keyboard: kb };
}

async function renderMySchedule(db, user) {
  const { results } = await db
    .prepare(
      `SELECT e.* FROM registrations r
       JOIN events e ON e.id = r.event_id
       WHERE r.user_id = ? AND r.status = 'registered' AND e.status = 'active'
       ORDER BY e.date, e.start_time`
    )
    .bind(user.id)
    .all();
  const events = results || [];
  if (!events.length) {
    return { text: `<b>${escapeHtml(t("myScheduleTitle"))}</b>\n\n${escapeHtml(t("myScheduleEmpty"))}`, keyboard: rowNav() };
  }
  return renderEventList(db, t("myScheduleTitle"), events);
}

async function renderNowNext(db, mode) {
  const now = Date.now();
  const events = await listAllActiveEvents(db);
  if (mode === "now") {
    const live = events.filter((ev) => {
      const a = eventInstantMs(ev.date, ev.start_time);
      const b = effectiveEndMs(ev.date, ev.start_time, ev.end_time);
      return a <= now && now < b;
    });
    if (!live.length) {
      return { text: `<b>${escapeHtml(t("nowTitle"))}</b>\n\n${escapeHtml(t("nowEmpty"))}`, keyboard: rowNav() };
    }
    return renderEventList(db, t("nowTitle"), live);
  }
  const upcoming = events
    .filter((ev) => eventInstantMs(ev.date, ev.start_time) > now)
    .slice(0, 3);
  if (!upcoming.length) {
    return { text: `<b>${escapeHtml(t("nextTitle"))}</b>\n\n${escapeHtml(t("nextEmpty"))}`, keyboard: rowNav() };
  }
  return renderEventList(db, t("nextTitle"), upcoming);
}

async function renderFullScheduleDays(db) {
  const events = await listAllActiveEvents(db);
  const days = [...new Set(events.map((e) => e.date))];
  if (!days.length) {
    return { text: escapeHtml(t("noEvents")), keyboard: rowNav() };
  }
  const kb = days.map((d) => [{ text: formatDateShort(d), callback_data: `s:d:${d}` }]);
  kb.push(...rowNav());
  return { text: `<b>${escapeHtml(t("btnFullSchedule"))}</b>\n\n${escapeHtml(t("pickDay"))}`, keyboard: kb };
}

// ——— Collaborator ———
function parseFilters(user) {
  return safeJson(user.state_data, { filters: {} }).filters || safeJson(user.state_data, {}).filters || {};
}

async function getCollabState(db, user) {
  const data = safeJson(user.state_data, {});
  return {
    filters: data.filters || {},
    results: data.results || [],
  };
}

async function saveCollabState(db, userId, data) {
  await setUserState(db, userId, "collab", data);
}

function participantMatchesFilters(p, filters) {
  const entries = Object.entries(filters || {});
  if (!entries.length) return true;
  for (const [kind, values] of entries) {
    if (!values || !values.length) continue;
    let field = "";
    if (kind === "project") field = p.project;
    else if (kind === "discipline") field = p.discipline;
    else if (kind === "tools") field = p.tools;
    else if (kind === "skill") field = p.skill_set;
    else if (kind === "role") field = p.role;
    else if (kind === "country") field = p.country;
    else continue;
    const tags = splitTags(field).map((x) => x.toLowerCase());
    // country/role may be single value without commas
    if (!tags.length && field) tags.push(String(field).toLowerCase());
    const ok = values.some((v) => tags.includes(String(v).toLowerCase()));
    if (!ok) return false;
  }
  return true;
}

function collectTagValues(people, kind) {
  const set = new Set();
  for (const p of people) {
    let field = "";
    if (kind === "project") field = p.project;
    else if (kind === "discipline") field = p.discipline;
    else if (kind === "tools") field = p.tools;
    else if (kind === "skill") field = p.skill_set;
    else if (kind === "role") field = p.role;
    else if (kind === "country") field = p.country;
    for (const v of splitTags(field)) set.add(v);
    if (kind === "country" || kind === "role") {
      if (field && !String(field).includes(",")) set.add(String(field).trim());
    }
  }
  return [...set].filter(Boolean).sort((a, b) => a.localeCompare(b));
}

function filtersSummary(filters) {
  const parts = [];
  for (const [k, vals] of Object.entries(filters || {})) {
    if (vals?.length) parts.push(`${k}: ${vals.join(", ")}`);
  }
  return parts.join("\n") || "—";
}

function renderCollabHome(filters) {
  const summary = filtersSummary(filters);
  return {
    text: `<b>${escapeHtml(t("collabTitle"))}</b>\n\n${escapeHtml(t("collabPrompt"))}\n\n<b>${escapeHtml(t("collabFiltersActive"))}</b>\n${escapeHtml(summary)}`,
    keyboard: [
      [{ text: t("btnSearchByName"), callback_data: "c:n" }],
      [{ text: t("btnFilterTags"), callback_data: "c:f" }],
      [{ text: t("btnClearFilters"), callback_data: "c:cl" }],
      [{ text: "Show results", callback_data: "c:go" }],
      ...rowNav(),
    ],
  };
}

function renderPersonCardText(p) {
  const lines = [`<b>${escapeHtml(displayName(p))}</b>`];
  if (p.artistic_name && p.name && p.artistic_name.toLowerCase() !== p.name.toLowerCase()) {
    lines.push(`${escapeHtml(t("labelRealName"))}: ${escapeHtml(p.name)}`);
  }
  if (p.country) lines.push(`${escapeHtml(t("labelCountry"))}: ${escapeHtml(p.country)}`);
  if (p.project) lines.push(`${escapeHtml(t("labelProject"))}: ${escapeHtml(p.project)}`);
  if (p.discipline) lines.push(`${escapeHtml(t("labelDiscipline"))}: ${escapeHtml(p.discipline)}`);
  if (p.tools) lines.push(`${escapeHtml(t("labelTools"))}: ${escapeHtml(p.tools)}`);
  if (p.skill_set) lines.push(`${escapeHtml(t("labelSkillSet"))}: ${escapeHtml(p.skill_set)}`);
  if (p.role) lines.push(`${escapeHtml(t("labelRole"))}: ${escapeHtml(p.role)}`);
  if (p.social_media) lines.push(`${escapeHtml(t("labelSocial"))}: ${escapeHtml(p.social_media)}`);
  return lines.join("\n");
}

function connectUrl(p) {
  const u = normTg(p.telegram);
  if (u) return `https://t.me/${u}`;
  return null;
}

// ——— Admin menus ———
function renderAdminMenu() {
  return {
    text: `<b>${escapeHtml(t("adminMenuTitle"))}</b>`,
    keyboard: [
      [{ text: t("btnAdminParticipants"), callback_data: "a:p" }],
      [{ text: t("btnAdminCircles"), callback_data: "a:c" }],
      [{ text: t("btnAdminNotifications"), callback_data: "a:n" }],
      [{ text: t("btnAdminSchedule"), callback_data: "a:s" }],
      [{ text: t("btnAdminConnects"), callback_data: "a:k" }],
      [{ text: t("btnAdminWhoHasAccess"), callback_data: "a:who" }],
      [{ text: t("btnAdminLogout"), callback_data: "a:logout" }],
      ...rowNav(),
    ],
  };
}

async function replyOrEdit(token, chatId, messageId, payload) {
  const text = payload.text;
  const keyboard = payload.keyboard;
  if (messageId) {
    try {
      await editMessageText(token, chatId, messageId, text, keyboard || false);
      return;
    } catch {
      // fall through to send
    }
  }
  await sendMessage(token, chatId, text, keyboard);
}

async function showScreen(token, db, user, chatId, messageId, screenKey, payload) {
  if (screenKey) await navPush(db, user.id, screenKey);
  await replyOrEdit(token, chatId, messageId, payload);
}

// ——— Registration flow ———
async function startRegistration(token, db, user, chatId) {
  await setUserState(db, user.id, "awaiting_name", {});
  await db
    .prepare(`UPDATE users SET reg_status = 'awaiting_name', updated_at = datetime('now') WHERE id = ?`)
    .bind(user.id)
    .run();
  await sendMessage(token, chatId, escapeHtml(t("welcome")) + "\n\n" + escapeHtml(t("regNamePrompt")));
}

async function offerParticipantChoices(token, chatId, people, headerKey) {
  const list = people || [];
  if (!list.length) {
    await sendMessage(token, chatId, escapeHtml(t("regNoMatches")), [
      [{ text: t("btnContactUliana"), url: "https://t.me/junully" }],
    ]);
    return;
  }
  const kb = list.map((p) => [
    { text: displayName(p).slice(0, 64), callback_data: `reg:pick:${p.id}` },
  ]);
  kb.push([{ text: t("btnNoneOfThese"), callback_data: "reg:none" }]);
  await sendMessage(token, chatId, `<b>${escapeHtml(t(headerKey))}</b>`, kb);
}

async function finishLink(token, db, env, user, chatId, participant) {
  const res = await tryLinkParticipant(db, user, participant);
  if (!res.ok) {
    await sendMessage(token, chatId, escapeHtml(t("regAlreadyLinked")));
    return;
  }
  await clearUserState(db, user.id);
  await navResetMenu(db, user.id);
  const admin = await isAdmin(db, { id: user.telegram_id, username: user.username }, env);
  // notify admins
  const adminIds = await listAdminTelegramIds(db, env);
  const name = displayName(participant);
  for (const aid of adminIds) {
    if (Number(aid) === Number(user.telegram_id)) continue;
    try {
      await sendMessage(
        token,
        aid,
        `✅ Registered: <b>${escapeHtml(name)}</b>\n@${escapeHtml(user.username || "—")} · <code>${user.telegram_id}</code>`
      );
    } catch {}
  }
  const menu = await renderMainMenu(admin);
  await sendMessage(token, chatId, escapeHtml(t("regLinkedOk")), menu.keyboard);
}

async function notFoundInDatabase(token, db, user, chatId) {
  await clearUserState(db, user.id);
  await sendMessage(token, chatId, escapeHtml(t("regNoMatches")), [
    [{ text: t("btnContactUliana"), url: "https://t.me/junully" }],
  ]);
}

// ——— Circles ———
async function activeCircleTarget(db, userId) {
  return db
    .prepare(
      `SELECT ct.*, cc.prompt, cc.id AS campaign_id
       FROM circle_targets ct
       JOIN circle_campaigns cc ON cc.id = ct.campaign_id
       WHERE ct.user_id = ? AND ct.status = 'pending'
       ORDER BY cc.created_at DESC LIMIT 1`
    )
    .bind(userId)
    .first();
}

async function sendCircleRequests(token, db, env, campaignId, userIds, prompt) {
  let sent = 0;
  for (const uid of userIds) {
    const u = await db.prepare("SELECT * FROM users WHERE id = ?").bind(uid).first();
    if (!u) continue;
    try {
      await sendMessage(
        token,
        u.telegram_id,
        `<b>${escapeHtml(t("circleRequestTitle"))}</b>\n\n${escapeHtml(prompt || t("circleRequestBody"))}`
      );
      sent++;
    } catch {}
  }
  return sent;
}

async function resolveAudienceUserIds(db, audienceType, audienceJson) {
  const data = typeof audienceJson === "string" ? safeJson(audienceJson, {}) : audienceJson || {};
  const { results: registered } = await db
    .prepare(`SELECT * FROM users WHERE reg_status = 'registered' AND participant_id IS NOT NULL`)
    .all();
  let users = registered || [];

  if (audienceType === "all") return users.map((u) => u.id);

  if (audienceType === "random") {
    const n = Math.max(1, Number(data.n || 1));
    const shuffled = [...users].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n).map((u) => u.id);
  }

  if (audienceType === "tags") {
    const filters = data.filters || {};
    const people = await allParticipants(db);
    const matchedIds = new Set(
      people.filter((p) => participantMatchesFilters(p, filters)).map((p) => p.id)
    );
    return users.filter((u) => matchedIds.has(u.participant_id)).map((u) => u.id);
  }

  if (audienceType === "selected") {
    const ids = new Set((data.userIds || []).map(Number));
    return users.filter((u) => ids.has(u.id)).map((u) => u.id);
  }

  return users.map((u) => u.id);
}

// ——— Broadcast ———
async function registeredRecipients(db) {
  const { results } = await db
    .prepare(
      `SELECT u.*, p.name, p.artistic_name FROM users u
       LEFT JOIN participants p ON p.id = u.participant_id
       WHERE u.reg_status = 'registered'`
    )
    .all();
  return results || [];
}

async function runBroadcast(token, db, broadcastId) {
  const b = await db.prepare("SELECT * FROM broadcasts WHERE id = ?").bind(broadcastId).first();
  if (!b) return;
  if (b.status === "sent") return { already: true };
  await db.prepare(`UPDATE broadcasts SET status = 'sending' WHERE id = ?`).bind(broadcastId).run();
  const recipients = await registeredRecipients(db);
  let ok = 0;
  for (const u of recipients) {
    try {
      await sendMessage(token, u.telegram_id, escapeHtml(b.body_text));
      ok++;
    } catch {}
    // light pacing
    if (ok % 25 === 0) await new Promise((r) => setTimeout(r, 300));
  }
  await db
    .prepare(
      `UPDATE broadcasts SET status = 'sent', recipient_count = ?, sent_at = datetime('now') WHERE id = ?`
    )
    .bind(ok, broadcastId)
    .run();
  return { ok, total: recipients.length };
}

// ——— Screen router for back stack ———
async function renderByKey(db, user, key, env, from) {
  const admin = await isAdmin(db, from, env);
  if (key === "M") return renderMainMenu(admin);
  if (key === "S") return renderScheduleMenu();
  if (key === "A") return renderAdminMenu();
  if (key === "C") {
    const data = safeJson(user.state_data, {});
    return renderCollabHome(data.filters || {});
  }
  if (key === "I") {
    return { text: escapeHtml(t("infoBody")), keyboard: rowNav() };
  }
  if (key === "H") {
    return { text: escapeHtml(t("helpBody")), keyboard: rowNav() };
  }
  return renderMainMenu(admin);
}

// ——— Callback handler ———
async function handleCallback(token, db, env, cq) {
  const data = String(cq.data || "");
  const from = cq.from;
  const chatId = cq.message?.chat?.id;
  const messageId = cq.message?.message_id;
  let user = await getOrCreateUser(db, from);
  const admin = await isAdmin(db, from, env);

  if (data === "noop") {
    await answerCallbackQuery(token, cq.id);
    return;
  }

  // Registration picks allowed before registered
  if (data.startsWith("reg:")) {
    await answerCallbackQuery(token, cq.id);
    if (data === "reg:none") {
      await notFoundInDatabase(token, db, user, chatId);
      return;
    }
    if (data === "reg:again") {
      await startRegistration(token, db, user, chatId);
      return;
    }
    const m = /^reg:pick:(\d+)$/.exec(data);
    if (m) {
      const pid = Number(m[1]);
      let p = await getParticipant(db, pid);
      if (!p) {
        const embedded = PARTICIPANTS.find((x) => Number(x.id) === pid);
        p = embedded ? await ensureParticipantInDb(db, embedded) : null;
      }
      if (!p) {
        await sendMessage(token, chatId, escapeHtml(t("regNotFoundFinal")));
        return;
      }
      // confirm screen
      const kb = [
        [{ text: t("btnConfirmItsMe"), callback_data: `reg:yes:${p.id}` }],
        [{ text: t("btnNotMe"), callback_data: "reg:again" }],
      ];
      await editMessageText(
        token,
        chatId,
        messageId,
        `${escapeHtml(t("regMatchFound", { name: displayName(p) }))}\n\n${escapeHtml(t("regMatchConfirm"))}\n\n${renderPersonCardText(p)}`,
        kb
      );
      return;
    }
    const y = /^reg:yes:(\d+)$/.exec(data);
    if (y) {
      const pid = Number(y[1]);
      let p = await getParticipant(db, pid);
      if (!p) {
        const embedded = PARTICIPANTS.find((x) => Number(x.id) === pid);
        p = embedded ? await ensureParticipantInDb(db, embedded) : null;
      }
      if (!p) return;
      await finishLink(token, db, env, user, chatId, p);
      return;
    }
    return;
  }

  if (user.reg_status !== "registered" && !admin) {
    await answerCallbackQuery(token, cq.id, "Please finish registration first");
    await startRegistration(token, db, user, chatId);
    return;
  }

  // refresh user after possible link
  user = await db.prepare("SELECT * FROM users WHERE id = ?").bind(user.id).first();

  if (data === "m") {
    await answerCallbackQuery(token, cq.id);
    await navResetMenu(db, user.id);
    await clearUserState(db, user.id);
    const payload = await renderMainMenu(admin);
    await replyOrEdit(token, chatId, messageId, payload);
    return;
  }

  if (data === "b") {
    await answerCallbackQuery(token, cq.id);
    const prev = await navPop(db, user.id);
    user = await db.prepare("SELECT * FROM users WHERE id = ?").bind(user.id).first();
    const payload = await renderByKey(db, user, prev, env, from);
    await replyOrEdit(token, chatId, messageId, payload);
    return;
  }

  // Schedule
  if (data === "s") {
    await answerCallbackQuery(token, cq.id);
    await navPush(db, user.id, "S");
    await replyOrEdit(token, chatId, messageId, await renderScheduleMenu());
    return;
  }
  if (data === "s:td" || data === "s:tm") {
    await answerCallbackQuery(token, cq.id);
    const ymd = data === "s:td" ? ymdInTz() : addDaysYmd(ymdInTz(), 1);
    const events = await listEventsByDate(db, ymd);
    const title = data === "s:td" ? t("btnToday") : t("btnTomorrow");
    await replyOrEdit(token, chatId, messageId, await renderEventList(db, `${title} · ${formatDateShort(ymd)}`, events));
    return;
  }
  if (data === "s:full") {
    await answerCallbackQuery(token, cq.id);
    await replyOrEdit(token, chatId, messageId, await renderFullScheduleDays(db));
    return;
  }
  if (data.startsWith("s:d:")) {
    await answerCallbackQuery(token, cq.id);
    const ymd = data.slice(4);
    const events = await listEventsByDate(db, ymd);
    await replyOrEdit(token, chatId, messageId, await renderEventList(db, formatDateShort(ymd), events));
    return;
  }
  if (data === "s:now" || data === "s:next") {
    await answerCallbackQuery(token, cq.id);
    await replyOrEdit(token, chatId, messageId, await renderNowNext(db, data === "s:now" ? "now" : "next"));
    return;
  }
  if (data === "s:mine") {
    await answerCallbackQuery(token, cq.id);
    await replyOrEdit(token, chatId, messageId, await renderMySchedule(db, user));
    return;
  }

  if (data.startsWith("e:")) {
    await answerCallbackQuery(token, cq.id);
    const id = Number(data.slice(2));
    const ev = await db.prepare("SELECT * FROM events WHERE id = ?").bind(id).first();
    await replyOrEdit(token, chatId, messageId, await renderEventCard(db, user, ev, admin));
    return;
  }

  if (data.startsWith("r:")) {
    const id = Number(data.slice(2));
    await db
      .prepare(
        `INSERT INTO registrations (user_id, event_id, status) VALUES (?, ?, 'registered')
         ON CONFLICT(user_id, event_id) DO UPDATE SET status = 'registered', updated_at = datetime('now')`
      )
      .bind(user.id, id)
      .run();
    await answerCallbackQuery(token, cq.id, t("registerOk"));
    const ev = await db.prepare("SELECT * FROM events WHERE id = ?").bind(id).first();
    await replyOrEdit(token, chatId, messageId, await renderEventCard(db, user, ev, admin));
    return;
  }

  if (data.startsWith("x:")) {
    const id = Number(data.slice(2));
    await db
      .prepare(
        `UPDATE registrations SET status = 'cancelled', updated_at = datetime('now') WHERE user_id = ? AND event_id = ?`
      )
      .bind(user.id, id)
      .run();
    await answerCallbackQuery(token, cq.id, t("cancelOk"));
    const ev = await db.prepare("SELECT * FROM events WHERE id = ?").bind(id).first();
    await replyOrEdit(token, chatId, messageId, await renderEventCard(db, user, ev, admin));
    return;
  }

  if (data === "i") {
    await answerCallbackQuery(token, cq.id);
    await navPush(db, user.id, "I");
    await replyOrEdit(token, chatId, messageId, { text: escapeHtml(t("infoBody")), keyboard: rowNav() });
    return;
  }
  if (data === "h") {
    await answerCallbackQuery(token, cq.id);
    await navPush(db, user.id, "H");
    await replyOrEdit(token, chatId, messageId, { text: escapeHtml(t("helpBody")), keyboard: rowNav() });
    return;
  }

  // Circle status for user
  if (data === "circ") {
    await answerCallbackQuery(token, cq.id);
    const target = await activeCircleTarget(db, user.id);
    let text;
    if (!target) text = t("circleStatusNone");
    else text = `${t("circleStatusPending")}\n\n${target.prompt || t("circleRequestBody")}`;
    await replyOrEdit(token, chatId, messageId, { text: escapeHtml(text), keyboard: rowNav() });
    return;
  }

  // Collaborator
  if (data === "c") {
    await answerCallbackQuery(token, cq.id);
    await navPush(db, user.id, "C");
    const st = safeJson(user.state_data, {});
    if (!st.filters) st.filters = {};
    await saveCollabState(db, user.id, st);
    user = await db.prepare("SELECT * FROM users WHERE id = ?").bind(user.id).first();
    await replyOrEdit(token, chatId, messageId, renderCollabHome(st.filters));
    return;
  }
  if (data === "c:cl") {
    await answerCallbackQuery(token, cq.id);
    await saveCollabState(db, user.id, { filters: {} });
    await replyOrEdit(token, chatId, messageId, renderCollabHome({}));
    return;
  }
  if (data === "c:n") {
    await answerCallbackQuery(token, cq.id);
    const st = safeJson(user.state_data, { filters: {} });
    await setUserState(db, user.id, "awaiting_collab_name", st);
    await replyOrEdit(token, chatId, messageId, {
      text: escapeHtml(t("collabNamePrompt")),
      keyboard: rowNav(),
    });
    return;
  }
  if (data === "c:f") {
    await answerCallbackQuery(token, cq.id);
    const kb = [
      [{ text: "Project", callback_data: "c:ft:project" }],
      [{ text: "Discipline", callback_data: "c:ft:discipline" }],
      [{ text: "Tools", callback_data: "c:ft:tools" }],
      [{ text: "Skill set", callback_data: "c:ft:skill" }],
      [{ text: "Role", callback_data: "c:ft:role" }],
      [{ text: "Country", callback_data: "c:ft:country" }],
      ...rowNav(),
    ];
    await replyOrEdit(token, chatId, messageId, {
      text: escapeHtml(t("collabPickFilterType")),
      keyboard: kb,
    });
    return;
  }
  if (data.startsWith("c:ft:")) {
    await answerCallbackQuery(token, cq.id);
    const kind = data.slice(5);
    const people = await allParticipants(db);
    const values = collectTagValues(people, kind).slice(0, 40);
    const st = safeJson(user.state_data, { filters: {} });
    const selected = new Set((st.filters?.[kind] || []).map((x) => x.toLowerCase()));
    const kb = values.map((v, idx) => {
      const on = selected.has(v.toLowerCase());
      return [{ text: `${on ? "✓ " : ""}${v}`.slice(0, 64), callback_data: `c:tg:${kind}:${idx}` }];
    });
    // store value list in state for idx mapping
    st._tagKind = kind;
    st._tagValues = values;
    await saveCollabState(db, user.id, st);
    kb.push([{ text: t("btnDone"), callback_data: "c" }]);
    kb.push(...rowNav());
    await replyOrEdit(token, chatId, messageId, {
      text: escapeHtml(t("collabPickTag")),
      keyboard: kb,
    });
    return;
  }
  if (data.startsWith("c:tg:")) {
    const parts = data.split(":");
    const kind = parts[2];
    const idx = Number(parts[3]);
    const st = safeJson(user.state_data, { filters: {} });
    const values = st._tagValues || [];
    const val = values[idx];
    if (!val) {
      await answerCallbackQuery(token, cq.id);
      return;
    }
    if (!st.filters) st.filters = {};
    if (!st.filters[kind]) st.filters[kind] = [];
    const i = st.filters[kind].findIndex((x) => x.toLowerCase() === val.toLowerCase());
    if (i >= 0) {
      st.filters[kind].splice(i, 1);
      if (!st.filters[kind].length) delete st.filters[kind];
      await answerCallbackQuery(token, cq.id, t("collabTagOff"));
    } else {
      st.filters[kind].push(val);
      await answerCallbackQuery(token, cq.id, t("collabTagOn"));
    }
    await saveCollabState(db, user.id, st);
    // re-render tag list
    const selected = new Set((st.filters?.[kind] || []).map((x) => x.toLowerCase()));
    const kb = values.map((v, j) => {
      const on = selected.has(v.toLowerCase());
      return [{ text: `${on ? "✓ " : ""}${v}`.slice(0, 64), callback_data: `c:tg:${kind}:${j}` }];
    });
    kb.push([{ text: t("btnDone"), callback_data: "c" }]);
    kb.push(...rowNav());
    await replyOrEdit(token, chatId, messageId, {
      text: escapeHtml(t("collabPickTag")),
      keyboard: kb,
    });
    return;
  }
  if (data === "c:go") {
    await answerCallbackQuery(token, cq.id);
    const st = safeJson(user.state_data, { filters: {} });
    const people = (await allParticipants(db)).filter((p) => participantMatchesFilters(p, st.filters || {}));
    // exclude self
    const filtered = people.filter((p) => p.id !== user.participant_id).slice(0, 30);
    if (!filtered.length) {
      await replyOrEdit(token, chatId, messageId, {
        text: escapeHtml(t("collabNoResults")),
        keyboard: [[{ text: t("btnBack"), callback_data: "c" }], ...rowNav()],
      });
      return;
    }
    const kb = filtered.map((p) => [
      { text: displayName(p).slice(0, 64), callback_data: `c:p:${p.id}` },
    ]);
    kb.push([{ text: t("btnBack"), callback_data: "c" }]);
    kb.push(...rowNav());
    await replyOrEdit(token, chatId, messageId, {
      text: `<b>${escapeHtml(t("collabResultsTitle"))}</b> (${filtered.length})`,
      keyboard: kb,
    });
    return;
  }
  if (data.startsWith("c:p:")) {
    await answerCallbackQuery(token, cq.id);
    const pid = Number(data.slice(4));
    const p = await getParticipant(db, pid);
    if (!p) return;
    const kb = [];
    kb.push([{ text: t("btnConnect"), callback_data: `c:o:${p.id}` }]);
    kb.push([{ text: t("btnBack"), callback_data: "c:go" }]);
    kb.push(...rowNav());
    const caption = renderPersonCardText(p);
    // try photo
    if (p.photo_url && /^https:\/\//i.test(p.photo_url) && !/drive\.google\.com/i.test(p.photo_url)) {
      try {
        await sendPhoto(token, chatId, p.photo_url, caption, kb);
        return;
      } catch {}
    }
    await replyOrEdit(token, chatId, messageId, { text: caption, keyboard: kb });
    return;
  }
  if (data.startsWith("c:o:")) {
    const pid = Number(data.slice(4));
    const p = await getParticipant(db, pid);
    const st = safeJson(user.state_data, {});
    await db
      .prepare(
        `INSERT INTO connects (from_user_id, to_participant_id, filters_json) VALUES (?, ?, ?)`
      )
      .bind(user.id, pid, JSON.stringify(st.filters || {}))
      .run();
    await answerCallbackQuery(token, cq.id, t("connectOpened"));
    const url = connectUrl(p);
    const adminIds = await listAdminTelegramIds(db, env);
    const me = await getUserParticipant(db, user);
    for (const aid of adminIds) {
      try {
        await sendMessage(
          token,
          aid,
          escapeHtml(
            t("adminConnectsLine", {
              name: displayName(me) || user.username || user.telegram_id,
              target: displayName(p),
            })
          ) + `\nFilters: ${escapeHtml(filtersSummary(st.filters || {}))}`
        );
      } catch {}
    }
    if (url) {
      await sendMessage(token, chatId, escapeHtml(t("connectOpened")), [
        [{ text: t("btnConnect"), url }],
      ]);
    } else {
      await sendMessage(token, chatId, escapeHtml(t("connectOpened")) + "\n(no Telegram username in database)");
    }
    return;
  }

  // Admin
  if (data === "a") {
    if (!admin) {
      await answerCallbackQuery(token, cq.id, t("accessDenied"));
      return;
    }
    await answerCallbackQuery(token, cq.id);
    await navPush(db, user.id, "A");
    await replyOrEdit(token, chatId, messageId, renderAdminMenu());
    return;
  }

  if (data.startsWith("a:") && !admin) {
    await answerCallbackQuery(token, cq.id, t("accessDenied"));
    return;
  }

  if (data === "a:p") {
    await answerCallbackQuery(token, cq.id);
    const reg = await db
      .prepare(
        `SELECT COUNT(*) AS n FROM users WHERE reg_status = 'registered'`
      )
      .first();
    const total = await db.prepare(`SELECT COUNT(*) AS n FROM participants`).first();
    const { results } = await db
      .prepare(
        `SELECT u.telegram_id, u.username, p.name, p.artistic_name
         FROM users u JOIN participants p ON p.id = u.participant_id
         WHERE u.reg_status = 'registered'
         ORDER BY p.name COLLATE NOCASE LIMIT 40`
      )
      .all();
    const lines = (results || []).map(
      (r) => `• ${displayName(r)} — @${r.username || "—"}`
    );
    const text = `<b>${escapeHtml(t("adminParticipantsTitle"))}</b>\n\n${escapeHtml(t("adminRegisteredList"))}: ${reg?.n || 0} / ${total?.n || 0}\n\n${escapeHtml(lines.join("\n") || "—")}`;
    const kb = [
      [{ text: t("adminNotRegisteredList"), callback_data: "a:p:nr" }],
      ...rowNav(),
    ];
    await replyOrEdit(token, chatId, messageId, { text, keyboard: kb });
    return;
  }
  if (data === "a:p:nr") {
    await answerCallbackQuery(token, cq.id);
    const { results } = await db
      .prepare(
        `SELECT name, artistic_name, telegram FROM participants
         WHERE linked_telegram_id IS NULL
         ORDER BY name COLLATE NOCASE LIMIT 50`
      )
      .all();
    const lines = (results || []).map((r) => `• ${displayName(r)} (${r.telegram || "no tg"})`);
    await replyOrEdit(token, chatId, messageId, {
      text: `<b>${escapeHtml(t("adminNotRegisteredList"))}</b>\n\n${escapeHtml(lines.join("\n") || "—")}`,
      keyboard: [[{ text: t("btnBack"), callback_data: "a:p" }], ...rowNav()],
    });
    return;
  }

  if (data === "a:k") {
    await answerCallbackQuery(token, cq.id);
    const { results } = await db
      .prepare(
        `SELECT c.*, p.name AS to_name, p.artistic_name AS to_art,
                fp.name AS from_name, fp.artistic_name AS from_art, u.username
         FROM connects c
         JOIN participants p ON p.id = c.to_participant_id
         JOIN users u ON u.id = c.from_user_id
         LEFT JOIN participants fp ON fp.id = u.participant_id
         ORDER BY c.id DESC LIMIT 40`
      )
      .all();
    if (!results?.length) {
      await replyOrEdit(token, chatId, messageId, {
        text: escapeHtml(t("adminConnectsEmpty")),
        keyboard: rowNav(),
      });
      return;
    }
    const lines = results.map((r) => {
      const from = displayName({ name: r.from_name, artistic_name: r.from_art }) || r.username;
      const to = displayName({ name: r.to_name, artistic_name: r.to_art });
      return `• ${from} → ${to}`;
    });
    await replyOrEdit(token, chatId, messageId, {
      text: `<b>${escapeHtml(t("adminConnectsTitle"))}</b>\n\n${escapeHtml(lines.join("\n"))}`,
      keyboard: rowNav(),
    });
    return;
  }

  if (data === "a:n") {
    await answerCallbackQuery(token, cq.id);
    await setUserState(db, user.id, "admin_broadcast_compose", {});
    await replyOrEdit(token, chatId, messageId, {
      text: escapeHtml(t("adminBroadcastComposePrompt")),
      keyboard: [[{ text: t("btnCancel"), callback_data: "a" }], ...rowNav()],
    });
    return;
  }
  if (data.startsWith("a:n:send:")) {
    const id = Number(data.split(":")[3]);
    await answerCallbackQuery(token, cq.id, "Sending…");
    const result = await runBroadcast(token, db, id);
    if (result?.already) {
      await sendMessage(token, chatId, escapeHtml(t("adminBroadcastAlreadySent")));
    } else {
      await sendMessage(
        token,
        chatId,
        escapeHtml(t("adminBroadcastSentOk")) + `\n${result?.ok || 0}/${result?.total || 0}`
      );
    }
    await clearUserState(db, user.id);
    await replyOrEdit(token, chatId, messageId, renderAdminMenu());
    return;
  }
  if (data === "a:n:cancel") {
    await answerCallbackQuery(token, cq.id);
    await clearUserState(db, user.id);
    await replyOrEdit(token, chatId, messageId, renderAdminMenu());
    return;
  }

  // Circles admin
  if (data === "a:c") {
    await answerCallbackQuery(token, cq.id);
    await replyOrEdit(token, chatId, messageId, {
      text: `<b>${escapeHtml(t("adminCircleTitle"))}</b>`,
      keyboard: [
        [{ text: t("btnCircleSendAll"), callback_data: "a:c:all" }],
        [{ text: t("btnCircleSendByTags"), callback_data: "a:c:tags" }],
        [{ text: t("btnCircleSendRandom"), callback_data: "a:c:rand" }],
        [{ text: t("btnCircleViewInbox"), callback_data: "a:c:inbox" }],
        [{ text: t("btnCircleWhoMissing"), callback_data: "a:c:miss" }],
        [{ text: t("btnCircleRemind"), callback_data: "a:c:remind" }],
        ...rowNav(),
      ],
    });
    return;
  }
  if (data === "a:c:all" || data === "a:c:tags" || data === "a:c:rand") {
    await answerCallbackQuery(token, cq.id);
    const mode = data.split(":")[2];
    await setUserState(db, user.id, "admin_circle_prompt", { mode });
    await replyOrEdit(token, chatId, messageId, {
      text: escapeHtml(t("adminCircleCompose")),
      keyboard: [[{ text: t("btnCancel"), callback_data: "a:c" }], ...rowNav()],
    });
    return;
  }
  if (data === "a:c:inbox") {
    await answerCallbackQuery(token, cq.id);
    const { results } = await db
      .prepare(
        `SELECT cr.*, p.name, p.artistic_name, u.telegram_id
         FROM circle_responses cr
         JOIN users u ON u.id = cr.user_id
         LEFT JOIN participants p ON p.id = u.participant_id
         ORDER BY cr.id DESC LIMIT 20`
      )
      .all();
    if (!results?.length) {
      await replyOrEdit(token, chatId, messageId, {
        text: escapeHtml(t("adminCircleInboxEmpty")),
        keyboard: [[{ text: t("btnBack"), callback_data: "a:c" }], ...rowNav()],
      });
      return;
    }
    await sendMessage(token, chatId, `<b>${escapeHtml(t("btnCircleViewInbox"))}</b>`);
    for (const r of results) {
      try {
        await sendMessage(token, chatId, escapeHtml(t("circleAdminCaption", { name: displayName(r) })));
        await sendVideoNote(token, chatId, r.file_id);
      } catch {}
    }
    return;
  }
  if (data === "a:c:miss" || data === "a:c:remind") {
    await answerCallbackQuery(token, cq.id);
    const camp = await db
      .prepare(`SELECT * FROM circle_campaigns ORDER BY id DESC LIMIT 1`)
      .first();
    if (!camp) {
      await replyOrEdit(token, chatId, messageId, {
        text: escapeHtml(t("adminCircleInboxEmpty")),
        keyboard: [[{ text: t("btnBack"), callback_data: "a:c" }], ...rowNav()],
      });
      return;
    }
    const { results } = await db
      .prepare(
        `SELECT u.*, p.name, p.artistic_name FROM circle_targets ct
         JOIN users u ON u.id = ct.user_id
         LEFT JOIN participants p ON p.id = u.participant_id
         WHERE ct.campaign_id = ? AND ct.status = 'pending'`
      )
      .bind(camp.id)
      .all();
    const missing = results || [];
    if (data === "a:c:miss") {
      const lines = missing.map((u) => `• ${displayName(u) || u.username || u.telegram_id}`);
      await replyOrEdit(token, chatId, messageId, {
        text: `<b>${escapeHtml(t("btnCircleWhoMissing"))}</b>\n\n${escapeHtml(lines.join("\n") || "—")}`,
        keyboard: [[{ text: t("btnBack"), callback_data: "a:c" }], ...rowNav()],
      });
      return;
    }
    let n = 0;
    for (const u of missing) {
      try {
        await sendMessage(token, u.telegram_id, escapeHtml(t("circleReminder")));
        await db
          .prepare(`UPDATE circle_targets SET reminded_at = datetime('now') WHERE campaign_id = ? AND user_id = ?`)
          .bind(camp.id, u.id)
          .run();
        n++;
      } catch {}
    }
    await sendMessage(token, chatId, `Reminders sent: ${n}`);
    return;
  }

  // Admin schedule
  if (data === "a:s") {
    await answerCallbackQuery(token, cq.id);
    await replyOrEdit(token, chatId, messageId, {
      text: `<b>${escapeHtml(t("adminScheduleTitle"))}</b>`,
      keyboard: [
        [{ text: t("btnSchedCreate"), callback_data: "a:s:new" }],
        [{ text: t("btnSchedEdit"), callback_data: "a:s:edit" }],
        [{ text: t("btnSchedCancelEvent"), callback_data: "a:s:cancel" }],
        ...rowNav(),
      ],
    });
    return;
  }
  if (data === "a:s:new") {
    await answerCallbackQuery(token, cq.id);
    await setUserState(db, user.id, "admin_sched_new", { step: "title", draft: {} });
    await replyOrEdit(token, chatId, messageId, {
      text: "Send event <b>title</b>",
      keyboard: [[{ text: t("btnCancel"), callback_data: "a:s" }], ...rowNav()],
    });
    return;
  }
  if (data === "a:s:edit" || data === "a:s:cancel") {
    await answerCallbackQuery(token, cq.id);
    const mode = data.endsWith("edit") ? "edit" : "cancel";
    const events = (await listAllActiveEvents(db)).slice(0, 30);
    const kb = events.map((ev) => [
      {
        text: `${ev.date} ${clockFromSql(ev.start_time)} ${ev.title}`.slice(0, 64),
        callback_data: mode === "edit" ? `a:s:e:${ev.id}` : `a:s:x:${ev.id}`,
      },
    ]);
    kb.push(...rowNav());
    await replyOrEdit(token, chatId, messageId, {
      text: mode === "edit" ? "Pick an event to edit" : "Pick an event to cancel",
      keyboard: kb,
    });
    return;
  }
  if (data.startsWith("a:s:x:")) {
    const id = Number(data.split(":")[3]);
    await db
      .prepare(`UPDATE events SET status = 'cancelled', updated_at = datetime('now') WHERE id = ?`)
      .bind(id)
      .run();
    await answerCallbackQuery(token, cq.id, t("adminSchedCancelled"));
    // notify registered users
    const { results } = await db
      .prepare(
        `SELECT u.telegram_id, e.title FROM registrations r
         JOIN users u ON u.id = r.user_id
         JOIN events e ON e.id = r.event_id
         WHERE r.event_id = ? AND r.status = 'registered'`
      )
      .bind(id)
      .all();
    for (const r of results || []) {
      try {
        await sendMessage(
          token,
          r.telegram_id,
          `${escapeHtml(t("eventCancelledNotify"))}\n\n<b>${escapeHtml(r.title)}</b>`
        );
      } catch {}
    }
    await replyOrEdit(token, chatId, messageId, renderAdminMenu());
    return;
  }
  if (data.startsWith("a:s:e:")) {
    const id = Number(data.split(":")[3]);
    await answerCallbackQuery(token, cq.id);
    await setUserState(db, user.id, "admin_sched_edit", { eventId: id, step: "field" });
    await replyOrEdit(token, chatId, messageId, {
      text: "Send a line:\n<code>title|New title</code>\n<code>time|14:00|15:30</code>\n<code>place|Concert Hall</code>\n<code>date|25.07.2026</code>\n<code>desc|Description text</code>",
      keyboard: [[{ text: t("btnCancel"), callback_data: "a:s" }], ...rowNav()],
    });
    return;
  }

  if (data === "a:who") {
    await answerCallbackQuery(token, cq.id);
    const { results } = await db
      .prepare(
        `SELECT telegram_id, username, first_name FROM users WHERE is_admin = 1 ORDER BY username COLLATE NOCASE, telegram_id`
      )
      .all();
    const admins = results || [];
    if (!admins.length) {
      await replyOrEdit(token, chatId, messageId, {
        text: `<b>${escapeHtml(t("adminWhoHasAccessTitle"))}</b>\n\n${escapeHtml(t("adminWhoHasAccessEmpty"))}`,
        keyboard: [[{ text: t("btnBack"), callback_data: "a" }], ...rowNav()],
      });
      return;
    }
    const lines = admins.map((a) => {
      const un = normTg(a.username);
      if (un) return `• @${un}`;
      const name = (a.first_name || "").trim();
      return name
        ? `• ${name} (id:${a.telegram_id})`
        : `• ${t("adminWhoHasAccessNoUsername", { id: a.telegram_id })}`;
    });
    await replyOrEdit(token, chatId, messageId, {
      text: `<b>${escapeHtml(t("adminWhoHasAccessTitle"))}</b>\n\n${escapeHtml(lines.join("\n"))}`,
      keyboard: [[{ text: t("btnBack"), callback_data: "a" }], ...rowNav()],
    });
    return;
  }

  if (data === "a:logout") {
    await setAdminFlag(db, user.id, false);
    await answerCallbackQuery(token, cq.id, t("adminLogoutOk"));
    await clearUserState(db, user.id);
    await navResetMenu(db, user.id);
    await replyOrEdit(token, chatId, messageId, await renderMainMenu(false));
    return;
  }

  await answerCallbackQuery(token, cq.id);
  await replyOrEdit(token, chatId, messageId, await renderMainMenu(admin));
}


// ——— Message handler ———
async function handleMessage(token, db, env, msg) {
  const from = msg.from;
  if (!from) return;
  const chatId = msg.chat.id;
  let user = await getOrCreateUser(db, from);
  const admin = await isAdmin(db, from, env);

  // video note for circles
  if (msg.video_note) {
    if (user.reg_status !== "registered") {
      await sendMessage(token, chatId, escapeHtml(t("regNamePrompt")));
      return;
    }
    const target = await activeCircleTarget(db, user.id);
    if (!target) {
      await sendMessage(token, chatId, escapeHtml(t("circleNoActiveRequest")));
      return;
    }
    const fileId = msg.video_note.file_id;
    await db
      .prepare(
        `INSERT INTO circle_responses (campaign_id, user_id, file_id) VALUES (?, ?, ?)
         ON CONFLICT(campaign_id, user_id) DO UPDATE SET file_id = excluded.file_id, created_at = datetime('now')`
      )
      .bind(target.campaign_id, user.id, fileId)
      .run();
    await db
      .prepare(`UPDATE circle_targets SET status = 'done' WHERE campaign_id = ? AND user_id = ?`)
      .bind(target.campaign_id, user.id)
      .run();
    await sendMessage(token, chatId, escapeHtml(t("circleReceivedOk")));
    const p = await getUserParticipant(db, user);
    const caption = t("circleAdminCaption", { name: displayName(p) || from.username || from.id });
    const adminIds = await listAdminTelegramIds(db, env);
    for (const aid of adminIds) {
      try {
        await sendMessage(token, aid, escapeHtml(caption));
        await sendVideoNote(token, aid, fileId);
      } catch {}
    }
    return;
  }

  const text = msg.text || msg.caption || "";

  if (isStartCommand(text)) {
    await clearUserState(db, user.id);
    await navResetMenu(db, user.id);
    if (user.reg_status === "registered") {
      const menu = await renderMainMenu(admin);
      await sendMessage(token, chatId, escapeHtml(t("welcome")), menu.keyboard);
      return;
    }
    // Always register by typed name (not Telegram username)
    await startRegistration(token, db, user, chatId);
    return;
  }

  if (isAdminCommand(text)) {
    user = await db.prepare("SELECT * FROM users WHERE id = ?").bind(user.id).first();
    if (Number(user.is_admin || 0) === 1) {
      await clearUserState(db, user.id);
      await navPush(db, user.id, "A");
      const payload = renderAdminMenu();
      await sendMessage(token, chatId, payload.text, payload.keyboard);
      return;
    }
    await setUserState(db, user.id, "awaiting_admin_password", {});
    await sendMessage(token, chatId, escapeHtml(t("adminPasswordPrompt")));
    return;
  }

  if (user.state === "awaiting_admin_password") {
    const ok = String(text || "").trim() === adminPassword(env);
    if (!ok) {
      await sendMessage(token, chatId, escapeHtml(t("adminPasswordWrong")));
      return;
    }
    await setAdminFlag(db, user.id, true);
    await clearUserState(db, user.id);
    await navPush(db, user.id, "A");
    await sendMessage(token, chatId, escapeHtml(t("adminPasswordOk")));
    const payload = renderAdminMenu();
    await sendMessage(token, chatId, payload.text, payload.keyboard);
    return;
  }

  // State: awaiting name — search by typed name only
  if (user.state === "awaiting_name" || (user.reg_status !== "registered" && text && !text.startsWith("/"))) {
    if (user.reg_status === "registered") {
      // fall through
    } else {
      const matches = rankParticipants(PARTICIPANTS, text, 15);
      await setUserState(db, user.id, "awaiting_name", {});
      await offerParticipantChoices(token, chatId, matches, "regSuggestionsTitle");
      return;
    }
  }

  // Handle reg:notme via callback only — also support text states below

  if (user.reg_status !== "registered" && !admin) {
    await startRegistration(token, db, user, chatId);
    return;
  }

  // Refresh
  user = await db.prepare("SELECT * FROM users WHERE id = ?").bind(user.id).first();

  if (user.state === "awaiting_collab_name" && text) {
    const people = await allParticipants(db);
    const matches = rankParticipants(people, text, 10).filter((p) => p.id !== user.participant_id);
    const st = safeJson(user.state_data, { filters: {} });
    await saveCollabState(db, user.id, { filters: st.filters || {} });
    if (!matches.length) {
      await sendMessage(token, chatId, escapeHtml(t("collabNoResults")), [
        [{ text: t("btnBack"), callback_data: "c" }],
        ...rowNav(),
      ]);
      return;
    }
    const kb = matches.map((p) => [{ text: displayName(p).slice(0, 64), callback_data: `c:p:${p.id}` }]);
    kb.push([{ text: t("btnBack"), callback_data: "c" }]);
    await sendMessage(token, chatId, `<b>${escapeHtml(t("collabResultsTitle"))}</b>`, kb);
    return;
  }

  if (user.state === "admin_broadcast_compose" && admin && text) {
    const recipients = await registeredRecipients(db);
    if (!recipients.length) {
      await sendMessage(token, chatId, escapeHtml(t("adminBroadcastEmptyRecipients")));
      await clearUserState(db, user.id);
      return;
    }
    const key = `bcast:${user.id}:${Date.now()}`;
    const ins = await db
      .prepare(
        `INSERT INTO broadcasts (created_by, body_text, status, idempotency_key) VALUES (?, ?, 'draft', ?)`
      )
      .bind(user.id, text, key)
      .run();
    const broadcastId = ins.meta?.last_row_id;
    const names = recipients
      .slice(0, 10)
      .map((u) => displayName(u) || u.username || u.telegram_id)
      .join("\n");
    const preview = [
      `<b>${escapeHtml(t("adminBroadcastPreviewTitle"))}</b>`,
      "",
      escapeHtml(text),
      "",
      escapeHtml(t("adminBroadcastPreviewFilters", { filters: t("audienceAll") })),
      escapeHtml(t("adminBroadcastPreviewCount", { n: recipients.length })),
      escapeHtml(t("adminBroadcastPreviewNames", { names })),
    ].join("\n");
    await sendMessage(token, chatId, preview, [
      [{ text: t("btnBroadcastConfirmSend"), callback_data: `a:n:send:${broadcastId}` }],
      [{ text: t("btnBroadcastCancel"), callback_data: "a:n:cancel" }],
    ]);
    await setUserState(db, user.id, null, { pendingBroadcastId: broadcastId });
    return;
  }

  if (user.state === "admin_circle_prompt" && admin && text) {
    const st = safeJson(user.state_data, {});
    const mode = st.mode || "all";
    if (mode === "rand") {
      await setUserState(db, user.id, "admin_circle_random_n", { prompt: text });
      await sendMessage(token, chatId, escapeHtml(t("adminCircleRandomCountPrompt")));
      return;
    }
    if (mode === "tags") {
      await setUserState(db, user.id, "admin_circle_tags", { prompt: text, filters: {} });
      await sendMessage(token, chatId, escapeHtml(t("pickTagTypeTitle")), [
        [{ text: "Project", callback_data: "a:c:tf:project" }],
        [{ text: "Discipline", callback_data: "a:c:tf:discipline" }],
        [{ text: "Role", callback_data: "a:c:tf:role" }],
        [{ text: "Tools", callback_data: "a:c:tf:tools" }],
        [{ text: "Skill set", callback_data: "a:c:tf:skill" }],
        [{ text: t("btnDone") + " · Send", callback_data: "a:c:tags:send" }],
      ]);
      return;
    }
    // all
    await launchCircleCampaign(token, db, env, user, chatId, text, "all", {});
    return;
  }

  if (user.state === "admin_circle_random_n" && admin && text) {
    const st = safeJson(user.state_data, {});
    const n = Math.max(1, parseInt(text, 10) || 1);
    await launchCircleCampaign(token, db, env, user, chatId, st.prompt, "random", { n });
    return;
  }

  if (user.state === "admin_sched_new" && admin && text) {
    const st = safeJson(user.state_data, { step: "title", draft: {} });
    const draft = st.draft || {};
    if (st.step === "title") {
      draft.title = text.trim();
      await setUserState(db, user.id, "admin_sched_new", { step: "date", draft });
      await sendMessage(token, chatId, "Send <b>date</b> as DD.MM.YYYY");
      return;
    }
    if (st.step === "date") {
      draft.date = parseDateInput(text);
      await setUserState(db, user.id, "admin_sched_new", { step: "time", draft });
      await sendMessage(token, chatId, "Send <b>start-end</b> as 14:00-15:30");
      return;
    }
    if (st.step === "time") {
      const m = String(text).match(/(\d{1,2}:\d{2})\s*[-–]\s*(\d{1,2}:\d{2})/);
      if (!m) {
        await sendMessage(token, chatId, "Format: 14:00-15:30");
        return;
      }
      draft.start_time = normalizeTime(m[1]);
      draft.end_time = normalizeTime(m[2]);
      await setUserState(db, user.id, "admin_sched_new", { step: "place", draft });
      await sendMessage(token, chatId, "Send <b>location</b>");
      return;
    }
    if (st.step === "place") {
      draft.location = text.trim();
      await setUserState(db, user.id, "admin_sched_new", { step: "desc", draft });
      await sendMessage(token, chatId, "Send <b>description</b> (or — for empty)");
      return;
    }
    if (st.step === "desc") {
      draft.description = text.trim() === "—" ? "" : text.trim();
      await db
        .prepare(
          `INSERT INTO events (title, description, date, start_time, end_time, category, location, speakers, status)
           VALUES (?, ?, ?, ?, ?, ?, ?, NULL, 'active')`
        )
        .bind(
          draft.title,
          draft.description || null,
          draft.date,
          draft.start_time,
          draft.end_time,
          "Custom",
          draft.location,
        )
        .run();
      await clearUserState(db, user.id);
      await sendMessage(token, chatId, escapeHtml(t("adminSchedSaved")));
      return;
    }
  }

  if (user.state === "admin_sched_edit" && admin && text) {
    const st = safeJson(user.state_data, {});
    const id = st.eventId;
    const parts = text.split("|").map((x) => x.trim());
    const field = (parts[0] || "").toLowerCase();
    const ev = await db.prepare("SELECT * FROM events WHERE id = ?").bind(id).first();
    if (!ev) {
      await clearUserState(db, user.id);
      return;
    }
    if (field === "title" && parts[1]) {
      await db.prepare(`UPDATE events SET title = ?, updated_at = datetime('now') WHERE id = ?`).bind(parts[1], id).run();
    } else if (field === "place" && parts[1]) {
      await db.prepare(`UPDATE events SET location = ?, updated_at = datetime('now') WHERE id = ?`).bind(parts[1], id).run();
    } else if (field === "date" && parts[1]) {
      await db.prepare(`UPDATE events SET date = ?, updated_at = datetime('now') WHERE id = ?`).bind(parseDateInput(parts[1]), id).run();
    } else if (field === "time" && parts[1] && parts[2]) {
      await db
        .prepare(`UPDATE events SET start_time = ?, end_time = ?, updated_at = datetime('now') WHERE id = ?`)
        .bind(normalizeTime(parts[1]), normalizeTime(parts[2]), id)
        .run();
    } else if (field === "desc") {
      await db
        .prepare(`UPDATE events SET description = ?, updated_at = datetime('now') WHERE id = ?`)
        .bind(parts.slice(1).join("|"), id)
        .run();
    } else {
      await sendMessage(token, chatId, "Unknown format. Try title|... or time|14:00|15:00");
      return;
    }
    await clearUserState(db, user.id);
    await sendMessage(token, chatId, escapeHtml(t("adminSchedSaved")));
    // notify registered
    const { results } = await db
      .prepare(
        `SELECT u.telegram_id FROM registrations r JOIN users u ON u.id = r.user_id
         WHERE r.event_id = ? AND r.status = 'registered'`
      )
      .bind(id)
      .all();
    const updated = await db.prepare("SELECT * FROM events WHERE id = ?").bind(id).first();
    for (const r of results || []) {
      try {
        await sendMessage(
          token,
          r.telegram_id,
          `${escapeHtml(t("scheduleChangedNotify"))}\n\n<b>${escapeHtml(updated.title)}</b>\n${escapeHtml(updated.date)} ${clockFromSql(updated.start_time)} · ${escapeHtml(updated.location || "")}`
        );
      } catch {}
    }
    return;
  }

  // default
  if (text) {
    await sendMessage(token, chatId, escapeHtml(t("unknownCmd")));
  }
}

function parseDateInput(s) {
  const m = String(s).trim().match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (m) return `${m[3]}-${m[2].padStart(2, "0")}-${m[1].padStart(2, "0")}`;
  return String(s).trim();
}

async function launchCircleCampaign(token, db, env, user, chatId, prompt, audienceType, audienceData) {
  const ins = await db
    .prepare(
      `INSERT INTO circle_campaigns (prompt, audience_type, audience_json, created_by) VALUES (?, ?, ?, ?)`
    )
    .bind(prompt, audienceType, JSON.stringify(audienceData || {}), user.id)
    .run();
  const campaignId = ins.meta?.last_row_id;
  const userIds = await resolveAudienceUserIds(db, audienceType, audienceData);
  for (const uid of userIds) {
    await db
      .prepare(
        `INSERT OR IGNORE INTO circle_targets (campaign_id, user_id, status) VALUES (?, ?, 'pending')`
      )
      .bind(campaignId, uid)
      .run();
  }
  const sent = await sendCircleRequests(token, db, env, campaignId, userIds, prompt);
  await clearUserState(db, user.id);
  await sendMessage(token, chatId, `${escapeHtml(t("adminCircleSent"))}\n${sent}/${userIds.length}`);
}

// Extra callback bits for circle tags — patch into handleCallback via dual dispatch
async function handleCallbackExtra(token, db, env, cq) {
  const data = String(cq.data || "");
  const from = cq.from;
  const chatId = cq.message?.chat?.id;
  const messageId = cq.message?.message_id;
  const user = await getOrCreateUser(db, from);
  const admin = await isAdmin(db, from, env);

  if (data === "reg:notme") {
    await answerCallbackQuery(token, cq.id);
    await startRegistration(token, db, user, chatId);
    return true;
  }

  if (data.startsWith("a:c:tf:") && admin) {
    await answerCallbackQuery(token, cq.id);
    const kind = data.slice(7);
    const people = await allParticipants(db);
    const values = collectTagValues(people, kind).slice(0, 30);
    const st = safeJson(user.state_data, { filters: {}, prompt: "" });
    st._tagKind = kind;
    st._tagValues = values;
    await setUserState(db, user.id, "admin_circle_tags", st);
    const selected = new Set((st.filters?.[kind] || []).map((x) => x.toLowerCase()));
    const kb = values.map((v, idx) => [
      { text: `${selected.has(v.toLowerCase()) ? "✓ " : ""}${v}`.slice(0, 64), callback_data: `a:c:tv:${idx}` },
    ]);
    kb.push([{ text: t("btnDone") + " · Send", callback_data: "a:c:tags:send" }]);
    kb.push([{ text: t("btnBack"), callback_data: "a:c" }]);
    await replyOrEdit(token, chatId, messageId, { text: escapeHtml(t("collabPickTag")), keyboard: kb });
    return true;
  }

  if (data.startsWith("a:c:tv:") && admin) {
    const idx = Number(data.split(":")[3]);
    const st = safeJson(user.state_data, { filters: {} });
    const kind = st._tagKind;
    const val = (st._tagValues || [])[idx];
    if (!kind || !val) {
      await answerCallbackQuery(token, cq.id);
      return true;
    }
    if (!st.filters[kind]) st.filters[kind] = [];
    const i = st.filters[kind].findIndex((x) => x.toLowerCase() === val.toLowerCase());
    if (i >= 0) st.filters[kind].splice(i, 1);
    else st.filters[kind].push(val);
    if (!st.filters[kind].length) delete st.filters[kind];
    await setUserState(db, user.id, "admin_circle_tags", st);
    await answerCallbackQuery(token, cq.id, "ok");
    // re-render
    cq.data = `a:c:tf:${kind}`;
    return handleCallbackExtra(token, db, env, cq);
  }

  if (data === "a:c:tags:send" && admin) {
    await answerCallbackQuery(token, cq.id);
    const st = safeJson(user.state_data, {});
    await launchCircleCampaign(token, db, env, user, chatId, st.prompt || t("circleRequestBody"), "tags", {
      filters: st.filters || {},
    });
    return true;
  }

  return false;
}

// ——— Worker entry ———
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "GET" && (url.pathname === "/" || url.pathname === "/health")) {
      return new Response(`Notations bot ok · ${BUILD} · participants=${PARTICIPANTS.length}`);
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const secret = env.TELEGRAM_WEBHOOK_SECRET;
    if (secret) {
      const hdr = request.headers.get("X-Telegram-Bot-Api-Secret-Token");
      if (hdr !== secret) return new Response("Unauthorized", { status: 401 });
    }

    const token = env.TELEGRAM_BOT_TOKEN;
    if (!token) return new Response("Missing token", { status: 500 });
    if (!env.DB) return new Response("Missing D1 binding DB", { status: 500 });

    let update;
    try {
      update = await request.json();
    } catch {
      return new Response("Bad JSON", { status: 400 });
    }

    try {
      if (update.callback_query) {
        const handled = await handleCallbackExtra(token, env.DB, env, update.callback_query);
        if (!handled) await handleCallback(token, env.DB, env, update.callback_query);
      } else if (update.message) {
        await handleMessage(token, env.DB, env, update.message);
      }
    } catch (e) {
      console.error(e);
      try {
        const chatId = update.message?.chat?.id || update.callback_query?.message?.chat?.id;
        if (chatId) await sendMessage(token, chatId, escapeHtml(t("dbError")));
      } catch {}
    }

    return new Response("OK");
  },
};
