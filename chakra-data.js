// =========================================================================
// THE SEVEN SACRED GATES — Static Chakra x Dosha Data & Seeds (chakra-data.js)
// Extracted from chakra-destiny.html + _cjCatch(e, ctx) diagnostic helper
// =========================================================================
window._cjDiagLog = window._cjDiagLog || [];
function _cjCatch(e, ctx) {
  if (!e) return;
  const msg = String(e.message || e);
  if (msg.includes('InvalidStateError') || msg.includes('stop')) return;
  window._cjDiagLog.push({ t: Date.now(), ctx: ctx || 'catch', err: msg });
  if (window._cjDiagLog.length > 50) window._cjDiagLog.shift();
}

// =============================================
// DATA
// =============================================
const ARC = {
  KING:    {n:'THE ELEPHANT', d:'Balanced Kapha', e:'🐘',c:'#4488ff',h:true,  dosha:'Kapha',
    short:'Ancient wisdom carrier — steady, generous, unshakeable, memory like a... you know',
    desc:'The Elephant holds the memory of the whole herd. When you\'re in this energy you are the calm that others anchor to — not because you demand it, but because your presence genuinely changes the room. You carry years like they made you richer, not heavier. People feel safe near you. That is not nothing. That is everything.'},
  SLEEPER: {n:'THE BEAR',     d:'Heavy Kapha',    e:'🐻',c:'#7799aa',h:false, dosha:'Kapha',
    short:'Comfort-cave champion — hibernating, very cozy, needs a gentle nudge from spring',
    desc:'The Bear has found the most comfortable cave imaginable and sees absolutely no reason to leave. Honey is nearby. The blanket is perfect. Outside it is cold and full of effort and frankly suspicious. But spring comes for everyone — even Bears — and your cave will not protect you from your own becoming. The forest is waiting. You kind of know that already.'},
  WARRIOR: {n:'THE LION',     d:'Balanced Pitta', e:'🦁',c:'#ff8822',h:true,  dosha:'Pitta',
    short:'Purposeful predator — focused, brave, knows when to roar and when to purr',
    desc:'The Lion hunts with precision, not rage. You burn with a directed fire that has somewhere real to go. You can walk into the hard conversation, take the leap, hold the boundary — and still come home and actually be present. Your intensity is a gift when it serves something real. People feel your yes and your no with equal clarity. That is power.'},
  EGO:     {n:'THE DRAGON',   d:'Fiery Pitta',    e:'🐉',c:'#ff3333',h:false, dosha:'Pitta',
    short:'Spectacular and mildly dangerous — breathes fire on everything, including its own plans',
    desc:'The Dragon has excellent opinions and is genuinely delighted to share them, at full volume. The fire is real and impressive. The village is also slightly singed. The thing about Dragon energy: the flame is beautiful — it just needs a direction that isn\'t "everyone\'s face." There is a Lion inside every Dragon. Humility unlocks the cage.'},
  MAGICIAN:{n:'THE BUTTERFLY',d:'Dancing Vata',   e:'🦋',c:'#aa44ff',h:true,  dosha:'Vata',
    short:'Transforming visionary — light, creative, sees between worlds, occasionally lands',
    desc:'The Butterfly lives between forms. Transformation is not a phase — it is your nature. When balanced, you see possibilities others cannot imagine and pull insight from the invisible. The trick is not to mistake movement for arrival. Sometimes the most radical act is to stay in one place long enough to actually bloom.'},
  AFRAID:  {n:'THE MOUSE',    d:'Anxious Vata',   e:'🐭',c:'#aaaacc',h:false, dosha:'Vata',
    short:'Very alert, slightly overwhelmed — radar on full, occasionally frozen by the cheese options',
    desc:'The Mouse has an extraordinary nervous system. It has detected seventeen potential threats since you started reading this. This is genuinely useful in a field full of hawks — but you are not in that field right now. Most of those threats are imaginary. The medicine: warmth, rhythm, one small decision at a time, and maybe 30% less caffeine.'}
};

const CHAKRAS = [
  {
    id:'root',num:1,color:'#cc2222',glow:'#ff4444',freq:396,emoji:'🔴',
    name:'Root Chakra',sanskrit:'Muladhara',
    theme:'Safety · Body · Home · Survival · Money',
    gateTitle:'THE FOUNDATION GATE',
    deepQ:'✦ Gate One — The Foundation ✦',
    intro:'The red gate opens. Your foundation. Everything you have built stands on what happened first — your family, your body, your earliest sense of safety. The earth either holds you, or it asks you to come back and reclaim it.',
    question:'Tell me about how your parents raised you. What was it like to be a child in your family?',
    answers:{
      KING:    {e:'👑',t:'They gave me structure and real love. Even where they fell short, I found my footing. I feel genuinely rooted in who I am.'},
      SLEEPER: {e:'😴',t:'Fine, I suppose. Comfortable enough. I don\'t really think about it — I\'m not sure I\'ve ever actually left that comfort zone.'},
      WARRIOR: {e:'⚔️',t:'High standards. Discipline. Push through. It shaped my work ethic, even when that becomes its own problem.'},
      EGO:     {e:'🔥',t:'Complicated. There was always tension or drama. Someone always failing someone else. I think I\'ve been trying to prove something ever since.'},
      MAGICIAN:{e:'🪄',t:'Loosely and creatively — imagination, freedom, very little structure. I absorbed their way of seeing the world sideways.'},
      AFRAID:  {e:'😰',t:'There wasn\'t much stability. I never quite felt safe. That sense of unease in the body — I think it started back there.'}
    },
    oracle:{
      KING:{e:'🌳',m:'"Your roots run deep. The tree that bends in the storm doesn\'t fear it — it already knows it will not fall."'},
      SLEEPER:{e:'🛋️',m:'"Your root chakra sent a message. It\'s under the couch cushions. It\'s been there for three months. It wants you to MOVE."'},
      WARRIOR:{e:'📋',m:'"Your action plan is magnificent and mildly terrifying. Your root burns more fire than earth — but the fire is pointing somewhere real."'},
      EGO:{e:'📬',m:'"The universe has filed your complaint under \'still has lessons to learn\' — with genuine love and zero sympathy."'},
      MAGICIAN:{e:'🧦',m:'"You reorganised your sock drawer at 2am and called it progress. Your root chakra would like you back in your actual body."'},
      AFRAID:{e:'🌱',m:'"The spiral has a beginning. Your root chakra is the exit door. We are going to find it — slowly, with warm soup."'}
    },
    lifestyle:{
      label:'🌿 THE ORACLE ASKS FURTHER...',
      q:'What would I find in your refrigerator right now? What does the way you nourish yourself say about how you feel?',
      opts:[
        {e:'🥗',t:'Whole food, things I actually cook. My body is something I tend to and it shows in how I feel.', score:'open'},
        {e:'🍕',t:'A mix — some whole food, some convenience, things I meant to use two weeks ago. Good intentions, inconsistent follow-through.', score:'neutral'},
        {e:'🍺',t:'Mostly takeout containers, condiments, and vague intentions. Nourishment isn\'t a real priority right now.', score:'partial'},
        {e:'🌫️',t:'Almost nothing. I eat whatever\'s easiest whenever I remember. My body runs on whatever\'s available.', score:'blocked'}
      ]
    },
    advancedQs:[
      'Where do your parents, brothers, and sisters live now? What do they do for a living? Are you close?',
      'Tell me about all the places you\'ve lived. Where would you most like to live, and what does that choice say about you?',
      'How much protection, guidance, and discipline should children be given? How does that compare to what you received?',
      'How important is money to you, and how much do you genuinely need? What does financial security mean in your body?',
      'Are you in good physical shape? Tell me about your body and health honestly — what are you proud of, and what are you avoiding?',
      'Do you believe illness is psychosomatic, a matter of luck, or something else entirely?',
      'Tell me about some major or memorable events from birth through high school. Which ones still live in your body?'
    ],
    habitQs:[
      'Walk me through your morning. What time do you wake, and what is the very first thing you do? Does your morning anchor you in your body — or drift you further from it?',
      'Describe what you actually eat in a typical week. Not what you plan to eat — what you truly eat, and how your body feels afterward. Grounded and nourished, or scattered and reactive?',
      'Does your body tend toward heaviness and stillness, or restlessness and anxiety? Do you hold weight easily, run cold, or feel a persistent unease that has no clear cause?'
    ],
    medicine:{
      KING:{type:'open',affirm:'Your foundation is solid. The world is safer because you walk in it. Share this steadiness with someone who needs it.'},
      SLEEPER:{title:'Wake the Root',items:['Walk barefoot on grass or soil for 5 minutes every single morning — no phone','Cold shower: just 30 seconds. Set the alarm. Do it before you think.','Declutter ONE drawer or shelf today. Movement is medicine.','Dance alone to a song you loved at 16. Your body remembers joy.','Commit to one physical challenge that makes you slightly uncomfortable — this week.']},
      WARRIOR:{type:'open',affirm:'Your root is fierce and functional. Use that energy to build something that outlasts the urgency.'},
      EGO:{title:'Earth the Fire',items:['Volunteer anonymously — no posting, no credit, just service','Spend 20 minutes in nature with absolutely no agenda','Practice saying "I was wrong about that" to someone you trust today','Lie on the ground (literally) and let the earth hold you for once','Plant something and tend it daily. Watch what humility grows.']},
      MAGICIAN:{type:'open',affirm:'Your root is creative and flexible — keep it tethered by returning to your body daily through movement or breath.'},
      AFRAID:{title:'Ground the Storm',items:['Eat warm, heavy root vegetables daily: sweet potato, beetroot, lentils, bone broth','Create one simple morning routine and protect it like a sacred law','5 minutes barefoot on earth, morning or evening — non-negotiable','Bodywork: massage, acupuncture, long baths, or weighted blanket — weekly','Repeat slowly: "I am safe in this body, in this moment, right now."']}
    },
    shadowWork:{
      SLEEPER:['I keep choosing comfort over growth. Help me explore what I\'m protecting when I resist change. Ask me hard questions and don\'t let me off the hook.','Let\'s examine my relationship with procrastination. What\'s the difference between genuine rest and avoidance disguised as self-care? Help me get honest.','I\'ve been saying "when x happens I\'ll start y" for a long time. Help me understand the fear underneath the postponement. What would I have to face if I started today?'],
      EGO:['I notice I often externalise blame when things go wrong. Help me explore what I\'d have to take responsibility for if I stopped doing that.','Help me explore my relationship with control in my daily life and finances. What am I afraid would happen if things were out of my control?','I often feel specially targeted by life\'s difficulties. Help me understand this story and what I\'d lose if I let it go.'],
      AFRAID:['Help me map the origins of my anxiety around safety and survival. Be specific — ask me about early experiences that created these patterns.','I carry fear in my body. Help me explore what specific fears live in my physical experience and where they originated. Go slowly.','Let\'s work with my relationship with money and security. When I imagine feeling completely safe, what comes up? What makes that image feel impossible?']
    },
    playlist:{url:'https://www.youtube.com/watch?v=_RQ9S1u7ag4&list=PL5KNhrwZCuCqiJFY24RwzLOZRT3HUg7fr',title:'Root Chakra Healing Playlist'}
  },
  {
    id:'sacral',num:2,color:'#ff6600',glow:'#ff9944',freq:417,emoji:'🟠',
    name:'Sacral Chakra',sanskrit:'Svadhisthana',
    theme:'Pleasure · Creativity · Flow · Desire · Emotion',
    gateTitle:'THE PLEASURE PALACE GATE',
    deepQ:'✦ Gate Two — The Sacred Waters ✦',
    intro:'Orange waters rise. This is the seat of desire, creativity, and feeling. The part of you that knows how to want things lives here. The part that knows how to be fully alive to sensation. How open is that river in you?',
    question:'Are you often moody or highly emotional? How do feelings move through you — or where do they get stuck?',
    pathQ:{
      KING:    'Your root is grounded and strong. Does that security give you full permission to enjoy life — or has responsibility quietly replaced pleasure and delight?',
      SLEEPER: 'Your root has been resting. Is your emotional world also asleep — or is feeling deeply actually the one place where you come most alive?',
      WARRIOR: 'Your root burns with drive. Has all that focused fire left genuine room for pleasure and the sweetness that is not earned? Or does enjoyment still feel like something you must deserve first?',
      EGO:     'Your root carries fire and friction. Do you use pleasure as a form of power — or does real vulnerability in joy and desire quietly frighten you?',
      MAGICIAN:'Your root floats with imagination. Does your creative energy descend into your emotional body and senses — or does it stay safely in the mind where it cannot be touched or changed?',
      AFRAID:  'Your root carries anxiety. Does pleasure feel safe? Or does allowing yourself to feel genuinely good bring up guilt, unworthiness, or the fear that it will not last?'
    },
    answers:{
      KING:    {e:'👑',t:'I have a rich inner life but I\'m not swept away by it. I feel deeply and I move through it — I don\'t live inside it.'},
      SLEEPER: {e:'😴',t:'Not really. I tend to go flat rather than up and down. I\'ve noticed lately that what I call "calm" might actually be numbness.'},
      WARRIOR: {e:'⚔️',t:'I feel intensely, but I channel it into action. My emotions are information, not weather. I work with them, not inside them.'},
      EGO:     {e:'🔥',t:'More than I\'d like to admit. My moods move fast and sometimes the words come out before I understand what the feeling actually was.'},
      MAGICIAN:{e:'🪄',t:'Wildly emotional. I feel everything at full volume — it\'s exhausting, and also somehow exactly how I know I\'m alive.'},
      AFRAID:  {e:'😰',t:'Yes. Anxiety pulls my emotions in all directions. I can\'t always tell what I\'m actually feeling versus what fear is narrating.'}
    },
    oracle:{
      KING:{e:'🍷',m:'"You know pleasure is a verb, not a reward. Your sacral flows like a river that knows it belongs to the sea."'},
      SLEEPER:{e:'📺',m:'"The same show. Again. Your sacral chakra is asking: what do YOU actually want? Not what\'s safe. What do you genuinely WANT?"'},
      WARRIOR:{e:'📊',m:'"You gamified your Saturday. Impressive and slightly concerning. Life is not a productivity hack. Make something USELESS this week."'},
      EGO:{e:'👀',m:'"You turned a free afternoon into a ranking exercise. The medal is hollow. Your sacral knows this too."'},
      MAGICIAN:{e:'🎨',m:'"Three projects and a vision board by sunset. Your sacral is gloriously alive. Maybe finish one thing occasionally."'},
      AFRAID:{e:'⏰',m:'"Anxious about pleasure. Your sacral is sending joy and your nervous system keeps returning it to sender. Let\'s change that."'}
    },
    lifestyle:{
      label:'🌊 THE ORACLE ASKS FURTHER...',
      q:'What is your favorite sensory experience — sound, touch, taste, smell, sight? How often do you actually let yourself have it?',
      opts:[
        {e:'🎨',t:'I\'m very sensory. I immerse myself in pleasure — music, food, touch, nature. My body is alive to sensation.', score:'open'},
        {e:'🍷',t:'I have clear preferences but I don\'t indulge them often enough. I deprioritize pleasure without meaning to.', score:'neutral'},
        {e:'🌊',t:'I\'ve gone a bit numb, honestly. I used to feel more alive to sensation. I\'m not sure when that changed.', score:'partial'},
        {e:'💊',t:'I can\'t access pleasure without substances or screens. Raw, unmediated enjoyment — I honestly can\'t remember the last time.', score:'blocked'}
      ]
    },
    advancedQs:[
      'What is the funniest thing that ever happened to you as a teenager? Tell me the story.',
      'If you had to substitute one food for sex, what would it be, and what does that reveal?',
      'Do you think sex is really important? Are you a highly sexual person, and are you honest about that with yourself?',
      'Is physical affection important to you? Do you get enough of it?',
      'What is the most sensually alive you have ever felt? What were you doing, and who were you with?',
      'Do you have fantasies — about people, places, experiences — that you rarely talk about? What do they tell you about your desires?',
      'When was the last time you created something purely for the joy of it, with no goal attached?'
    ],
    habitQs:[
      'What physical pleasure practices do you actually maintain — movement, dance, water, touch, creative work — versus the ones you intend to start? What does your body receive versus what it is denied?',
      'When you are emotionally overwhelmed or numb, what do you reach for? Sugar, alcohol, scrolling, food, isolation? What does that substance or behavior give you that you cannot yet give yourself?',
      'Does your body run fluid and warm, or dry and anxious? Do you have a naturally creative drive — or do conditions need to be perfect before you allow yourself to begin?'
    ],
    medicine:{
      KING:{type:'open',affirm:'Your sacral flows with generous pleasure. Keep sharing your creations — your joy genuinely feeds others around you.'},
      SLEEPER:{title:'Awaken the Flow',items:['Do something creative with zero goal: paint badly, cook without a recipe, dance alone in your kitchen','Jump in natural water if possible — your sacral literally responds to water on a physiological level','Say YES to one completely new sensory experience this week. Not optional.','Cook a recipe using three ingredients you\'ve never tried. Eat it with your full undivided attention.','Write a list of 10 things that bring you pure pleasure. Then actually do one today.']},
      WARRIOR:{type:'open',affirm:'Your sacral is channelled and purposeful. Let it play without producing sometimes — pure creativity is sacred too.'},
      EGO:{title:'Receive Without Earning',items:['Let yourself be genuinely bad at something creative and stay in the room without fixing it','Take a long bath with no purpose except the bath. No phone. No podcast.','Receive pleasure without having earned it — it is your birthright, not your reward','Cry at a film. Let your emotions move without commentary or analysis.','Ask someone what THEY desire today. Listen. Really listen. For once, don\'t redirect to yourself.']},
      MAGICIAN:{type:'open',affirm:'Your sacral dances between worlds. Channel it — commit to finishing one thing this week as an offering to your own creativity.'},
      AFRAID:{title:'Melt the Freeze',items:['Warm baths with Epsom salts — minimum 20 minutes, phone in another room','Hip-opening yoga daily: pigeon pose, butterfly, figure-four — 10 minutes minimum','Journal your desires without censoring: "I want..." — let it be uncensored','Warm herbal tea (orange peel, cinnamon, cardamom) while sitting in actual sunlight','Ask yourself: what would I do today if I wasn\'t afraid to want things?']}
    },
    shadowWork:{
      SLEEPER:['I\'ve lost touch with what genuinely brings me pleasure. Help me explore what numbing behaviours I\'ve adopted and what they\'re keeping me from feeling.','Help me understand why I repeatedly choose familiar comfort over new experiences. What am I afraid aliveness or creativity might demand of me?','When was the last time I felt truly alive and present? Help me explore what changed since then and what I\'ve given up.'],
      EGO:['I compare myself to others in social situations compulsively. Help me trace this competitive energy back to its source. What am I trying to prove?','I notice I use pleasure and social situations to establish status rather than connection. Help me explore what genuine connection would feel like.','Ask me hard questions about what I\'m really seeking when I seek attention, recognition, or the approval of people I find attractive.'],
      AFRAID:['I feel guilty when I rest or enjoy myself without earning it first. Help me trace where I learned that pleasure had to be deserved.','Anxiety often lives in my body. Help me explore what emotional content might be stored in my hips, lower belly, or lower back.','Help me articulate what I genuinely desire — not what I think I should want, but what my actual authentic self longs for. No censoring.']
    },
    playlist:{url:'https://www.youtube.com/watch?v=orklnRP7R84&list=PL5KNhrwZCuCrhwRDOVYDECRAu8O1eutNl',title:'Sacral Chakra Healing Playlist'}
  },
  {
    id:'solar',num:3,color:'#ddaa00',glow:'#ffdd00',freq:528,emoji:'🟡',
    name:'Solar Plexus',sanskrit:'Manipura',
    theme:'Power · Will · Identity · Boundaries · Confidence',
    gateTitle:'THE POWER STATION GATE',
    deepQ:'✦ Gate Three — The Inner Fire ✦',
    intro:'Yellow fire at your core. The seat of your self. Your "no." Your "yes." Your capacity to act on what you believe without apology. Is this fire focused and clear — or scattered, suppressed, or consuming everything in its path?',
    question:'What motivates you? What genuinely gets you out of bed and moving toward something?',
    pathQ:{
      KING:    'Your sacral flows with warmth. Now I want to know your power — when you act from genuine confidence rather than from need, what does that feel like?',
      SLEEPER: 'Your sacral is quiet and contained. Do you also dim your ambition and drive to match? What would stepping into your full capacity actually cost you?',
      WARRIOR: 'Your sacral is channeled and purposeful. That intensity — is it in service of something you chose, or something you have always felt you need to prove?',
      EGO:     'Your sacral carries intensity that sometimes overflows. Does that show in your ambition? Do you drive from genuine conviction — or from the need to dominate?',
      MAGICIAN:'Your sacral dances with creative fire. Does that energy translate into directed power — or does it scatter before it builds into anything lasting?',
      AFRAID:  'Your sacral carries anxiety. Does that same fear show up in your work and your sense of power? What would you attempt if you were not afraid of failing in front of people?'
    },
    answers:{
      KING:    {e:'👑',t:'Purpose and mastery. I need to feel that what I\'m building actually matters beyond myself. Empty achievement doesn\'t move me.'},
      SLEEPER: {e:'😴',t:'Honestly? I struggle to find it most of the time. Comfort feels safer than striving, and I\'ve been here a while.'},
      WARRIOR: {e:'⚔️',t:'Achievement and momentum. I need clear goals and forward movement — without them I feel unmoored and increasingly restless.'},
      EGO:     {e:'🔥',t:'Recognition and respect. I need to know the people around me see what I bring. Without that, the engine stalls.'},
      MAGICIAN:{e:'🪄',t:'Ideas and possibilities. The moment something becomes routine, I lose interest completely. I\'m always chasing what\'s not yet real.'},
      AFRAID:  {e:'😰',t:'Fear, mostly. The threat of things falling apart is louder than any positive pull. I move away from danger more than toward anything.'}
    },
    oracle:{
      KING:{e:'🌟',m:'"You spoke truth and the world didn\'t end. It rarely does. Your solar plexus is a lantern — steady, warm, reliable."'},
      SLEEPER:{e:'😮‍💨',m:'"You said yes. Again. Your solar plexus is in the back of the cupboard with your gym membership. It hasn\'t given up on you yet."'},
      WARRIOR:{e:'🔑',m:'"You held the line. That took actual courage. This is what healthy fire looks like when it\'s in service of something real."'},
      EGO:{e:'🏆',m:'"You won the battle and complicated everything that matters. The ego needs to win. The self only needs to be true. Different games."'},
      MAGICIAN:{e:'💡',m:'"The third option! Classic Magician. Your power dances sideways where others go straight. Just make sure you\'re not avoiding the direct path."'},
      AFRAID:{e:'🪞',m:'"You replayed it 47 times. Your solar plexus is there — it needs oxygen. We\'re going to fan that flame, slowly but consistently."'}
    },
    lifestyle:{
      label:'🔥 THE ORACLE ASKS FURTHER...',
      q:'Are you a go-getter or do you prefer a casual approach to life? Be honest — which feels more true right now?',
      opts:[
        {e:'💪',t:'Go-getter. I need forward motion and meaningful progress. Stillness without purpose makes me genuinely restless.', score:'open'},
        {e:'☕',t:'Somewhere in between. I push when I have to, coast when I can. Depends on whether I care about the outcome.', score:'neutral'},
        {e:'⚡',t:'Inconsistent — bursts of drive followed by long stretches of avoidance. I don\'t fully trust my own momentum.', score:'partial'},
        {e:'💀',t:'Mostly casual. Ambition feels dangerous or pointless to me right now. I resist pressure and tend to do the minimum.', score:'blocked'}
      ]
    },
    advancedQs:[
      'Describe your ideal job. What former jobs did you like most and least, and what does that reveal about your values?',
      'Do you need a job or a role in order to feel useful or fulfilled? What does that dependency say?',
      'Tell me about something at work or in your life that gave you a genuine sense of accomplishment. What did it feel like?',
      'In general, how do you feel about yourself? Do you actually like yourself?',
      'What are your strengths as a friend? What are your real limitations?',
      'Do you often try to influence your friends\' behavior or decisions? What drives that impulse?',
      'Are you highly self-critical? What does your inner critic say most often — and whose voice does it sound like?'
    ],
    habitQs:[
      'Describe your relationship with stimulants — coffee, sugar, alcohol, competition, urgency. What does intensity feel like in your body, and how do you manage it when it tips over?',
      'What time of day does your energy peak? Do you eat to fuel your work, or do you forget to eat entirely when you are in motion? What does your body need that your schedule refuses to give it?',
      'Do you run hot — prone to frustration, inflammation, or the need to be right — or do you run sluggish and cold, needing external pressure to ignite? What is your relationship with your own anger?'
    ],
    medicine:{
      KING:{type:'open',affirm:'Your fire burns clean. You hold power without grasping for it. This is genuinely rare. Keep using it in service of others.'},
      SLEEPER:{title:'Light the Fire',items:['Practise saying "No" out loud right now to nobody. Feel that? That\'s you.','Commit to one thing this week that requires you to be seen — publicly, vulnerably','Vigorous exercise: anything that makes you breathless, 4 days a week. Not optional.','Take on a physical challenge (cold plunge, difficult hike, new sport) this week','Write down 3 things you need to stop tolerating. Then stop tolerating them. Today.']},
      WARRIOR:{type:'open',affirm:'Your will is sharp and fair. Your fire serves your truth. The world needs more people who act on what they believe.'},
      EGO:{title:'Cool the Burn',items:['Sheetali pranayama daily: breathe in through a curled tongue, out through nose — 10 rounds','Moon gazing: sit outside at night with no agenda, just receive the cool light','Eat cooling foods this week: cucumber, coconut, mint, coriander, sweet fruits','Before speaking in any conflict: three full breaths. Then speak. Non-negotiable.','For one week: let someone else be right without correcting them. Even if they\'re wrong.']},
      MAGICIAN:{type:'open',affirm:'Your power is creative and lateral. Trust the direct path sometimes too — not every situation needs a magic trick.'},
      AFRAID:{title:'Build the Flame',items:['Ginger tea every morning — it literally fires up Agni (your digestive and vital fire)','Sunrise or sunset watching daily: let the sun remind you of your own light','Write "I am proud of myself for..." — 5 things, every evening for 2 weeks','Build ONE small daily win into your routine and celebrate it genuinely','One cold shower this week: 30 seconds. If you survive that, you can survive the hard conversation.']}
    },
    shadowWork:{
      SLEEPER:['I often say yes when I mean no. Help me explore the specific fear that drives me to betray myself repeatedly in order to keep the peace.','My personal power feels like something I can\'t reach. Help me explore when I gave it away and why I haven\'t reclaimed it.','I want to understand the relationship between my physical energy levels and my sense of agency. Why do I feel \'too tired\' to claim my own life?'],
      EGO:['I need to win arguments. Help me explore what losing feels like in my body and where that threat response originated.','Help me understand the difference between healthy confidence and the need to dominate others. When did my fire become about control?','Ask me hard questions about who I\'ve burned with my intensity. What relationships have been damaged by my need to always be right?'],
      AFRAID:['I make myself small to avoid conflict. Help me trace the specific experiences that taught me it wasn\'t safe to take up space.','I rehearse what I want to say and then say nothing. Help me understand the gap between my inner fire and my actual external action.','What am I angry about that I\'ve never been able to say out loud? Help me articulate it completely. Let\'s go there.']
    },
    playlist:{url:'https://www.youtube.com/watch?v=DGfrJu-Ck8o&list=PL5KNhrwZCuCpcoSTdLoDQ00fjqt_wbHNn',title:'Solar Plexus Healing Playlist'}
  },
  {
    id:'heart',num:4,color:'#00bb44',glow:'#00ff66',freq:639,emoji:'💚',
    name:'Heart Chakra',sanskrit:'Anahata',
    theme:'Love · Compassion · Grief · Forgiveness · Connection',
    gateTitle:'THE SACRED GARDEN GATE',
    deepQ:'✦ Gate Four — The Sacred Heart ✦',
    intro:'The green gate opens at the center of everything. Four chakras below, three above. This is the bridge between earth and sky, body and spirit. Love lives here — and so does every wound love ever left behind.',
    question:'How much love do you need? And are you honest about that — with yourself and the people you love?',
    pathQ:{
      KING:    'Your solar plexus is clear and purposeful. Can that strength hold open a truly vulnerable heart — or is there a place where power and love still have not learned to coexist?',
      SLEEPER: 'Your drive has been quiet. Does your heart follow suit — contained, unexpressed, held at a safe distance? Or is love the one place where you actually show up completely?',
      WARRIOR: 'Your fire is disciplined. Does the heart get the same fierce protection — or is love where you become most exposed, most uncertain, most unlike yourself?',
      EGO:     'Your fire burns hot. Does it sometimes scorch the people closest to you? What does love look like in you when you stop needing to win within it?',
      MAGICIAN:'Your power is creative and diffuse. Do you love the idea of someone — or the actual, imperfect, physical person standing in front of you?',
      AFRAID:  'Your fire has been dampened by fear. Does that same fear live in the heart — a protection against being fully seen, fully known, fully left?'
    },
    answers:{
      KING:    {e:'👑',t:'A steady, deep love — not constant reassurance, but real intimacy, trust, and genuine presence. Quality over quantity, always.'},
      SLEEPER: {e:'😴',t:'I say I don\'t need much. But I think I\'ve quietly settled for less than I actually want and called it independence.'},
      WARRIOR: {e:'⚔️',t:'I love fiercely but I need space to breathe too. Love that asks me to shrink feels like a cage, not a gift.'},
      EGO:     {e:'🔥',t:'A lot. I need to feel chosen, prioritized, special. If I\'m not someone\'s first thought, something in me starts to compete.'},
      MAGICIAN:{e:'🪄',t:'Intense, creative, soul-deep love. I need to be truly seen — not just loved for what I do, but for what I am underneath it all.'},
      AFRAID:  {e:'😰',t:'More than I can ask for. I want closeness but something always makes me pull away the moment it gets real. Old wound, still open.'}
    },
    oracle:{
      KING:{e:'🌹',m:'"You opened the door without losing yourself. That is the art of the heart that has healed — love without dissolution."'},
      SLEEPER:{e:'📱',m:'"Their message is still unread in your heart. Your heart chakra hasn\'t given up on them — or on you. It\'s patient. You have time. But not unlimited."'},
      WARRIOR:{e:'🤝',m:'"Clear terms, open heart. You refused to choose between love and self-respect. That is the Warrior heart at its finest."'},
      EGO:{e:'⚖️',m:'"You\'re running debt collection for old pain. The interest compounds against YOU. Forgiveness isn\'t absolution — it\'s your freedom."'},
      MAGICIAN:{e:'✨',m:'"You forgave so fast you nearly levitated. Beautiful. Just make sure your heart is healing at the speed of your imagination."'},
      AFRAID:{e:'🫂',m:'"The fear is an old scar pretending to be wisdom. Your heart knows the difference between discernment and hiding. It\'s asking you to try again."'}
    },
    lifestyle:{
      label:'💚 THE ORACLE ASKS FURTHER...',
      q:'How important is it to be able to forgive and forget? Where in your body do you still carry things you haven\'t forgiven?',
      opts:[
        {e:'🌱',t:'Essential. Holding grievances costs more than they recover. I forgive for my own freedom, not to let anyone off the hook.', score:'open'},
        {e:'🌧️',t:'I can forgive, but forgetting is harder. I carry things longer than I should and I know it.', score:'neutral'},
        {e:'🍺',t:'I know I should forgive, but some wounds are still running. I feel it in my body when I\'m around certain people.', score:'partial'},
        {e:'🏰',t:'I haven\'t forgiven some people and I\'m not sure I can. The protection that provides feels more real than the freedom it might give me.', score:'blocked'}
      ]
    },
    advancedQs:[
      'What qualities would you look for in a life partner? What have past relationships taught you about what you actually need?',
      'Do your friends\' faults often bother you, or do you tend to overlook them? What does your answer tell you about your heart?',
      'Think of two unhappy couples you have known. What was really at the root of their unhappiness?',
      'Tell me about the death or loss of someone you were genuinely close to. How did it change you?',
      'What do you think is the real basis for love and attraction between two people?',
      'Do you believe in a deep, transcendent love between two people — something that goes beyond chemistry or habit?',
      'What would make you feel more deeply loved right now? Have you told that to anyone?'
    ],
    habitQs:[
      'How do you treat your own body when it is tired, sick, or in pain? Do you respond with gentleness and rest — or with pressure, criticism, and the demand to push through?',
      'What foods, substances, or behaviors do you reach for when your heart feels empty, lonely, or unmet? What does your heart actually hunger for that you have not been able to give it?',
      'Are you more prone to grief and open feeling, or to numbness and emotional distance? Does love come easily into your body — or do you armor against it without fully knowing why?'
    ],
    medicine:{
      KING:{type:'open',affirm:'Your heart is a home. People feel safe inside it. Keep loving with this fierce, grounded openness — it genuinely changes people.'},
      SLEEPER:{title:'Open the Heart',items:['Write a letter of appreciation to someone who won\'t expect it — no occasion, just love','Go volunteer: serve food, read to children, listen to the elderly, pick up litter','Pet an animal for 10 minutes. Let something need you without complication.','Hug someone for 21 full seconds. Count. Most hugs end at 4.','Ask one person today: "How are you really doing?" Then stay for the actual answer.']},
      WARRIOR:{type:'open',affirm:'Your heart is boundaried and brave. Your love is honest. Keep teaching others that love doesn\'t require self-erasure.'},
      EGO:{title:'Soften the Armour',items:['Forgiveness meditation: not for them, for you. Imagine releasing the weight you carry.','Rose quartz by your bed — laugh if you want, but genuinely try it for a week','Practice receiving a compliment with only: "Thank you." No deflection, no self-deprecation.','Write down who you\'re still punishing with your closed heart. Ask: who is actually suffering?','Loving-kindness meditation (Metta) daily for 10 minutes — start with yourself. Yes, yourself.']},
      MAGICIAN:{type:'open',affirm:'Your heart forgives like water flows — naturally, generously. Ground that grace with discernment so it sustains you long-term.'},
      AFRAID:{title:'Safety to Love',items:['Self-compassion practice daily: "May I be safe. May I be healthy. May I be loved. May I be at peace."','Write yourself a genuine love letter — no irony, no disclaimers, no conditions','21-second hugs when possible — this is where oxytocin actually kicks in','Identify the original wound: when did love first feel dangerous? Journal it very gently.','You are worthy of love as you are, right now, without changing first. Repeat until it lands.']}
    },
    shadowWork:{
      SLEEPER:['My heart feels closed right now. Help me explore what happened the last time I truly opened up and what I concluded from that experience.','I know I should reach out to people, show more love, reconnect — and I don\'t. Help me explore the energy underneath my emotional withdrawal.','What would happen if I showed people how much I actually care? Help me explore the vulnerability that\'s stopping me.'],
      EGO:['I withhold forgiveness as a form of power. Help me explore what I\'m holding onto and who is actually being punished by my withholding.','I make people work to earn my love. Help me trace where I learned that love was conditional and something to be rationed.','Is my heart truly open, or have I built a very convincing performance of openness while remaining fundamentally protected? Ask me hard questions.'],
      AFRAID:['I want to love and be loved but I\'m terrified of being hurt. Help me map the specific experiences that closed my heart and what I concluded about love from them.','I freeze when love is available to me. Help me explore the specific fear that makes intimacy feel more threatening than loneliness.','Help me understand the difference between healthy discernment and self-protection that has become a prison I can\'t leave.']
    },
    playlist:{url:'https://www.youtube.com/watch?v=6JgHR84lOZc&list=PL5KNhrwZCuCope97J540v3j1V4arYVlC9',title:'Heart Chakra Healing Playlist'}
  },
  {
    id:'throat',num:5,color:'#0099cc',glow:'#00ccff',freq:741,emoji:'🔵',
    name:'Throat Chakra',sanskrit:'Vishuddha',
    theme:'Truth · Expression · Communication · Authenticity · Voice',
    gateTitle:'THE ORACLE\'S CHAMBER GATE',
    deepQ:'✦ Gate Five — The Oracle\'s Voice ✦',
    intro:'The blue chamber hums with everything ever said — and everything ever swallowed. Your truth lives here. Not the polished version. The raw one. The one that comes out when you stop curating yourself for other people\'s comfort.',
    question:'If something is bothering you, do you bring it up right away — or hold it inside? What does that cost you?',
    pathQ:{
      KING:    'Your heart is open and generous. Does your voice match it? Do you speak with the same warmth you carry inside — or does what you say still fall short of what you genuinely feel?',
      SLEEPER: 'Your heart has been contained. Has your voice learned to stay quiet for safety? What would happen — really — if you finally said the thing you have been holding?',
      WARRIOR: 'Your heart is fierce and boundaried. Does your voice carry that strength — direct, clear, and kind? Or do you sometimes weaponize words when the heart feels most threatened?',
      EGO:     'Your heart carries intensity. When does that overflow in how you communicate — interrupting, dominating, speaking over? What are you afraid would happen if you listened more than you spoke?',
      MAGICIAN:'Your heart feels in layers. When you speak, do people receive what you truly mean — or is the depth of what you feel still largely untranslated into words?',
      AFRAID:  'Your heart holds fear. Does your voice carry that same contraction — unsaid truths, words swallowed at the last moment, silence where honesty should live?'
    },
    answers:{
      KING:    {e:'👑',t:'I bring it up when I\'m ready — calmly, clearly, with the real intention to resolve it, not just release pressure.'},
      SLEEPER: {e:'😴',t:'I hold it. Usually forever. It quietly shapes my behavior, leaks out sideways, and never actually gets said.'},
      WARRIOR: {e:'⚔️',t:'Right away. Silence feels dishonest to me. Say it, hear the response, move forward. Unspoken things fester.'},
      EGO:     {e:'🔥',t:'Depends entirely on the audience. Some people get the full force immediately. Others get a wall of strategic silence.'},
      MAGICIAN:{e:'🪄',t:'I need to process it through layers first. I have to understand what I feel before I can say it. Sometimes I never get there.'},
      AFRAID:  {e:'😰',t:'I almost always hold it. The fear of how the other person will react is louder than whatever I actually needed to say.'}
    },
    oracle:{
      KING:{e:'🎤',m:'"You spoke truth with love still in your hands. This is the gift of the healed throat — it knows the difference between honesty and cruelty."'},
      SLEEPER:{e:'🤐',m:'"Your throat chakra has been on permanent vacation. It packed its bags the third time you swallowed a truth that deserved air."'},
      WARRIOR:{e:'📣',m:'"You spoke clearly and held the line without needing to win. That\'s not argumentation — that\'s integrity with a voice."'},
      EGO:{e:'🎙️',m:'"You won the argument. You may have also won a reputation as the person who cannot let things go. Your throat wants truth, not scorekeeping."'},
      MAGICIAN:{e:'🌀',m:'"You turned dinner into a philosophy seminar and everyone left slightly changed. Your throat is a portal. Just make sure it goes both ways."'},
      AFRAID:{e:'💬',m:'"The 2am comeback was perfect. A shame the table was empty. Your voice has been punished before. It survived. It\'s ready when you are."'}
    },
    lifestyle:{
      label:'🔵 THE ORACLE ASKS FURTHER...',
      q:'Would you lie to preserve someone\'s feelings or ego? Where is the line between kindness and avoidance for you?',
      opts:[
        {e:'🎯',t:'No. Gentle truth is kinder than comfortable lies in the long run. Both can be delivered with love.', score:'open'},
        {e:'🍷',t:'Sometimes. I calibrate based on relationship and context. Small softening, not full deception.', score:'neutral'},
        {e:'🤐',t:'Often. I avoid discomfort by softening, omitting, redirecting. I tell myself it\'s kindness.', score:'partial'},
        {e:'🎭',t:'Constantly. The full truth rarely comes out. I manage what people know about me. It is exhausting.', score:'blocked'}
      ]
    },
    advancedQs:[
      'Has sensitivity or vulnerability ever prevented something truly important from being said — by you or to you?',
      'What\'s the funniest joke you can remember? Tell me. (The Oracle appreciates levity.)',
      'How open have you been so far in this reading? What are you still holding back?',
      'Are there certain subjects you don\'t usually feel comfortable discussing? What are they, and why?',
      'What is the best way to reach you when you\'ve lost your temper or shut down? What do you need in those moments?',
      'What is the most important thing you need to say to someone in your life right now that you haven\'t said?',
      'If your voice had been fully free your whole life — no fear of reaction — what would you have said differently?'
    ],
    habitQs:[
      'What does your voice feel like in your body — tight and withheld, or open and expressive? Do you experience tension in your throat, jaw, or neck? What does your body carry that your mouth has not said?',
      'Do you have habits that silence you — overeating, smoking, drinking, constant noise or input — things that keep you from having to hear your own inner voice or speak your own truth?',
      'When you have something important to say, what happens in your body in the moment before you speak — or the moment you decide not to? Where does that unexpressed word live in you?'
    ],
    medicine:{
      KING:{type:'open',affirm:'Your voice carries truth without violence. Keep speaking — the world needs more tongues that can tell the truth with compassion intact.'},
      SLEEPER:{title:'Find Your Voice',items:['Sing daily. Shower, car, alone — anywhere. Humming counts as a start.','Write one true thing you\'ve been swallowing and say it aloud, alone first','Next time you disagree with anyone: "I see it differently." Just those four words.','Record yourself speaking about something you care about. Listen back with genuine kindness.','Chanting or toning: sit quietly and let your voice resonate through your chest. Feel it.']},
      WARRIOR:{type:'open',affirm:'Your voice is sharp and fair. You speak truth without needing the room to agree. This is genuinely rare. Keep going.'},
      EGO:{title:'Learn to Listen',items:['For one full day: ask only questions in conversations. No statements. No opinions. Zero.','Before speaking: three full breaths. Does it still need to be said? Then say it.','Notice how often you\'re formulating your response while someone else is still speaking. Stop.','Write down the last three important things someone told you. Can you actually remember what they said?','The wisest thing your throat can do sometimes is produce complete silence.']},
      MAGICIAN:{type:'open',affirm:'Your voice opens portals. Keep speaking — and keep leaving space for others to speak into the portals you create.'},
      AFRAID:{title:'Reclaim Your Voice',items:['Hum to yourself for 5 minutes daily — it is physiologically calming and gently opens the throat','Write the unsent letter. The full, uncensored version. Decide later whether to send it.','Read poetry aloud when you\'re alone — let someone else\'s words warm your voice up','Ask yourself: whose voice taught you that speaking was dangerous? Write them an unsent letter.','Your voice was silenced for understandable reasons. It survived. It is patient. It is ready.']}
    },
    shadowWork:{
      SLEEPER:['I swallow truths constantly. Help me explore the specific consequences I\'m afraid of if I speak up, and whether those fears are still relevant today.','I stay silent when I should speak. Help me map the history of when my voice was met with punishment and how that shaped me.','What is the most important thing I need to say to someone in my life right now? Help me prepare to actually say it.'],
      EGO:['I talk over people and need to win conversations. Help me explore what genuine listening would feel like, and what would happen if I let someone else be right.','My communication hurts people sometimes. Help me explore the actual difference between honesty and aggression in how I speak.','When I\'m with someone, am I truly present or waiting for my turn? Be direct with me. Don\'t let me off the hook.'],
      AFRAID:['I rehearse what I want to say and then say nothing. Help me explore the specific fear that keeps my real voice locked inside.','I often feel like what I have to say doesn\'t matter or will be received badly. Help me trace where I learned that my voice was dangerous or unimportant.','What do I most want someone in my life to hear from me? Help me articulate it completely, as if I knew I couldn\'t be punished for it.']
    },
    playlist:{url:'https://www.youtube.com/watch?v=WV8EKJP0DgQ&list=PL5KNhrwZCuCqy0wlG3axQ2UblsCRecGOz',title:'Throat Chakra Healing Playlist'}
  },
  {
    id:'thirdeye',num:6,color:'#6622cc',glow:'#9955ff',freq:852,emoji:'🔮',
    name:'Third Eye',sanskrit:'Ajna',
    theme:'Intuition · Clarity · Wisdom · Vision · Pattern Recognition',
    gateTitle:'THE VISION TEMPLE GATE',
    deepQ:'✦ Gate Six — The Vision Temple ✦',
    intro:'You arrive at the indigo temple between your brows. This is where you SEE — not with your eyes, but with the part that has always known. The question is not whether your inner knowing is real. The question is whether you trust it.',
    question:'Do you usually get what you want by means of intellect, intuition, or willpower — or something else entirely?',
    pathQ:{
      KING:    'Your voice is open and purposeful. When you speak truth, does it come from clear inner seeing — or do you sometimes say what sounds right before you are certain you believe it?',
      SLEEPER: 'Your voice is quiet and withheld. Is part of that silence a fear of what you would have to see in yourself if you looked more directly? What have you been avoiding seeing?',
      WARRIOR: 'Your voice is direct and clear. Is your inner vision equally sharp — or do you sometimes charge ahead before fully understanding what you are running toward and why?',
      EGO:     'Your voice can be forceful. Does your inner eye see with equal intensity — or does it selectively confirm what you already believe and quietly filter out the rest?',
      MAGICIAN:'Your voice carries more than words. Does your inner world match that richness — are you genuinely visionary, or is imagination sometimes a way to avoid the discomfort of direct seeing?',
      AFRAID:  'Your voice carries hesitation. Does your inner vision suffer similarly — second-guessing what you clearly see because fear keeps editing the picture before you trust it?'
    },
    answers:{
      KING:    {e:'👑',t:'Clarity. I can see what needs to happen and I act from that understanding. It feels less like strategy than recognition.'},
      SLEEPER: {e:'😴',t:'I\'m not sure I usually get what I want. I tend to hope more than steer. Wishful thinking dressed up as patience.'},
      WARRIOR: {e:'⚔️',t:'Willpower and strategy. I outplan and out-persist until results come. Force is my first language.'},
      EGO:     {e:'🔥',t:'Willpower and force. If I want something badly enough, I push until something gives. I don\'t stop easily.'},
      MAGICIAN:{e:'🪄',t:'Intuition and intellect working together. I follow a feeling until I understand why it was right. It usually is.'},
      AFRAID:  {e:'😰',t:'I overthink until I doubt every answer. By the time I\'ve decided, the moment has usually already passed.'}
    },
    oracle:{
      KING:{e:'🌕',m:'"Your inner knowing has been forged over years. This is not arrogance — this is earned. Trust the quiet that knows."'},
      SLEEPER:{e:'🛤️',m:'"The path of least resistance has taken you somewhere comfortable. Your third eye is asking: is comfortable what you came here for?"'},
      WARRIOR:{e:'🔍',m:'"The research is done, the analysis is complete. Now: what does the still quiet voice underneath all that data say? That one matters too."'},
      EGO:{e:'👁️',m:'"Your third eye only shows you evidence that confirms what you already believe. That\'s not vision — that\'s a hall of mirrors."'},
      MAGICIAN:{e:'🌙',m:'"The synchronicities are real. Your third eye is genuinely calibrated. Just make sure you\'re reading the signs, not projecting the wish."'},
      AFRAID:{e:'🔮',m:'"You don\'t trust your own mind. That is a wound, not a fact. Your intuition has been right far more often than anxiety allows. Start keeping score."'}
    },
    lifestyle:{
      label:'🔮 THE ORACLE ASKS FURTHER...',
      q:'Do you usually remember your dreams? What does your inner life look like when you get quiet enough to hear it?',
      opts:[
        {e:'💡',t:'Vividly and often. They feel genuinely meaningful — I track them and they inform my waking life.', score:'open'},
        {e:'📱',t:'Occasionally — fragments, feelings, not full narratives. Enough to know something is active underneath.', score:'neutral'},
        {e:'🌿',t:'Rarely. I wake with a vague sense of something, nothing clear. My inner life seems quiet most of the time.', score:'partial'},
        {e:'🌑',t:'Almost never. Sleep is mostly blank. I\'m not sure I\'m processing much internally — it all feels sealed off.', score:'blocked'}
      ]
    },
    advancedQs:[
      'If you were the wisest person on earth right now, what advice would you give yourself — honestly?',
      'Do you believe in psychic experiences, intuition, or something beyond ordinary perception? Have you had one?',
      'If a film were made of your childhood, what genre would it be — and who would play you?',
      'What is the goal of life for you: knowing the divine, fulfilling your desires, something else entirely?',
      'If you could teach your children — or the people you love — one thing, what would it be?',
      'Do you believe in the idea of soulmates? Have you met one?',
      'What is your intuition telling you right now about your life that you\'ve been ignoring?'
    ],
    habitQs:[
      'Describe your sleep. Do you have a consistent rhythm — or do you spiral into late nights, fragmented rest, vivid anxiety? What plays through your mind in the dark when the day is over?',
      'What is your relationship with screens, information, and stimulation? Do you feed your mind with substance — or numb it with noise? What does your daily diet of input actually look like?',
      'Do you trust your body\'s signals — hunger, fatigue, intuition, unease — or do you regularly override them with logic, obligation, or the demands of your schedule? When did you stop listening?'
    ],
    medicine:{
      KING:{type:'open',affirm:'Your inner vision is clear and earned. Trust it. Act from it. And remain humble enough to know it can always deepen.'},
      SLEEPER:{title:'Awaken the Vision',items:['Meditation: 10 minutes minimum, daily. Same time. Non-negotiable. Set the alarm now.','Dream journal by the bed — write immediately on waking, before the dream dissolves','Reduce numbing (screens, substances, noise) for 48 hours and see what surfaces in the quiet','Ask yourself before sleep: "What am I not seeing?" Write whatever comes without editing.','Spend time in total silence once this week. Your inner vision needs quiet to work.']},
      WARRIOR:{type:'open',affirm:'Your vision is clear and rigorous. Listen for the quiet knowing underneath the analysis too — that\'s the third eye with data your spreadsheet doesn\'t have.'},
      EGO:{title:'Expand the Vision',items:['"I might be wrong about this." Say it out loud. Feel how that lands.','Actively seek one perspective this week from someone completely unlike you. Stay with the discomfort.','Write three beliefs you hold with certainty. Ask: what would have to be true for the opposite to be real?','Read a book by someone whose worldview challenges yours. Don\'t skim. Stay.','Your third eye opens fully only when the ego loosens its grip. Curiosity is the actual key.']},
      MAGICIAN:{type:'open',affirm:'Your vision is a genuine gift. Keep discerning between true intuition and the desire to believe something beautiful. They\'re not always the same.'},
      AFRAID:{title:'Learn to Trust Yourself',items:['Gratitude practice before bed: 3 specific things, in writing, nightly. Watch your nervous system change.','Begin keeping a record of when your instincts were right. Evidence matters for rebuilding trust.','Nature walks with no destination and no phone — let your intuition navigate for 30 minutes','When anxious about a decision: "What would I advise a dear friend?" Then do exactly that.','Your intuition has been whispering the right answer all along. The anxiety was just louder. For now.']}
    },
    shadowWork:{
      SLEEPER:['I choose the path of least resistance rather than trusting my intuition. Help me explore what I\'m afraid my deeper knowing might be asking of me.','My inner guidance feels quiet or absent. Help me explore whether I\'ve numbed it with distraction and what might surface if I got genuinely quiet.','What am I not willing to see about my life right now? Ask me probing questions. Don\'t let me deflect.'],
      EGO:['I believe I\'m usually right and genuinely struggle to consider other perspectives. Help me explore what it would mean — deep down — to be fundamentally wrong about something important.','Help me understand how my ego filters my perception. What might I be systematically missing because it doesn\'t fit my existing narrative?','Play devil\'s advocate about something I\'m certain about. Ask hard questions. Help me develop genuine curiosity about the opposing view.'],
      AFRAID:['I don\'t trust my own mind. Help me explore specific moments when I knew something and overrode it with anxiety. What happened each time?','My thinking becomes circular and catastrophic. Help me understand the difference between genuine intuition and anxious storytelling.','What does my deepest, quietest inner knowing actually say about my life right now — not the anxious chatter, but the still small voice? Help me access it.']
    },
    playlist:{url:'https://www.youtube.com/watch?v=cknepREzUzI&list=PL5KNhrwZCuCqEY1Yz9sViwgNbSeVTbl77',title:'Third Eye Healing Playlist'}
  },
  {
    id:'crown',num:7,color:'#bb00ff',glow:'#dd66ff',freq:963,emoji:'👁️',
    name:'Crown Chakra',sanskrit:'Sahasrara',
    theme:'Purpose · Spirituality · Meaning · Cosmic Connection',
    gateTitle:'THE COSMIC PORTAL GATE',
    deepQ:'✦ Gate Seven — The Cosmic Portal ✦',
    intro:'The final gate. The violet door at the crown of everything. The part of you that knows it belongs to something larger than this one life. What do you do with that knowing — do you live from it, or do you hold it at a careful distance?',
    question:'What do you think enlightenment is? And do you believe it\'s actually available to you?',
    pathQ:{
      KING:    'Your inner vision is clear and steady. Does that clarity connect you to something larger than your personal story — or does it remain in service of the self?',
      SLEEPER: 'Your inner eye has been dim. Has your connection to something higher also gone quiet — or is there still a part of you that reaches toward what it cannot explain?',
      WARRIOR: 'Your mind is sharp and directed. Does spiritual practice feel like another discipline to master — or have you touched genuine moments of surrender and dissolution?',
      EGO:     'Your inner vision tends to confirm itself. What would it feel like to let go of being the center of your own cosmology — even briefly? What might live on the other side of that?',
      MAGICIAN:'Your inner world is vast and multidimensional. Are you living there — or have you found a way to stay grounded in the physical world while touching the infinite?',
      AFRAID:  'Your inner eye carries doubt and fear. Does that make it hard to trust in something beyond what you can control or explain? What would even the smallest grain of faith change?'
    },
    answers:{
      KING:    {e:'👑',t:'A deep, unshakeable peace with what is — not transcendence from life, but full presence within it, even in the hard parts.'},
      SLEEPER: {e:'😴',t:'Honestly, I don\'t think about it much. It sounds very far away from where I am. I\'ve made peace with not really knowing.'},
      WARRIOR: {e:'⚔️',t:'A state you earn through sustained discipline and honest practice. It is not given — it is achieved through consistent effort.'},
      EGO:     {e:'🔥',t:'I\'m skeptical of anyone who claims to have it. Most "enlightened" people I\'ve encountered are performing something they haven\'t reached.'},
      MAGICIAN:{e:'🪄',t:'The moment the boundary between you and everything else temporarily dissolves. I\'ve touched it. I know it\'s real.'},
      AFRAID:  {e:'😰',t:'Something I want badly but feel too broken or too distracted to actually reach. I wonder if it\'s even available to someone like me.'}
    },
    oracle:{
      KING:{e:'👑',m:'"You arrived. You are here. You are doing it. Purpose is not a destination you reach — it\'s the quality of presence you bring to what\'s already in front of you."'},
      SLEEPER:{e:'💤',m:'"Something enormous wants to move through you. It\'s been waiting very patiently. It can wait a little longer. But you cannot."'},
      WARRIOR:{e:'⚡',m:'"Your crown is open and your mission is real. Charge toward it. Just remember: the mission ultimately serves something beyond your personal glory. Stay connected to that."'},
      EGO:{e:'🌞',m:'"The greatness is real. So is the feeling that others are in the way. Your crown opens fully only when you realise purpose is IN SERVICE, not achievement. That\'s the portal."'},
      MAGICIAN:{e:'🌌',m:'"A portal. Yes. You feel it. It\'s real. Your crown is blown wide open. Stay grounded — portals need anchors or they become beautiful, useless chaos."'},
      AFRAID:{e:'🌅',m:'"You haven\'t missed it. You couldn\'t. Your purpose is woven into your existence — not something you do, but something you ARE. The anxiety is the last veil. Lift it gently."'}
    },
    lifestyle:{
      label:'🌟 THE ORACLE ASKS FURTHER...',
      q:'What does prayer or meditation mean to you? Do you have a practice — and if not, what stands in the way?',
      opts:[
        {e:'✨',t:'A daily practice. The most important part of my day. It\'s how I stay connected to something larger than my own noise.', score:'open'},
        {e:'🍄',t:'I believe in it more than I practice it. There\'s a gap between what I value and what I actually do consistently.', score:'neutral'},
        {e:'🌀',t:'I\'ve tried and it\'s difficult. My mind doesn\'t quiet easily. I feel like I\'m doing it wrong somehow.', score:'partial'},
        {e:'💀',t:'It feels inaccessible or meaningless to me. The idea of connecting to something larger feels distant and mostly theoretical.', score:'blocked'}
      ]
    },
    advancedQs:[
      'Do you feel it is possible to live in complete harmony with the universe while living in a modern city? What would that actually look like?',
      'Do you believe in reincarnation? If you were a famous historical figure, who would you be — and what would that say about your soul\'s work?',
      'What do you think heaven is like? What is your personal idea of hell?',
      'If you discovered you had six months to live, what would you accomplish — and what does your answer reveal about what you\'re postponing?',
      'Have you ever had an experience of a higher state of consciousness — genuine expansion, unity, or transcendence?',
      'If you were given one chance to deliver a message to the entire world, what would it be?',
      'What is the still, quiet voice underneath all your daily noise trying to tell you about your purpose right now?'
    ],
    habitQs:[
      'What does your relationship with silence and stillness actually look like in daily life — not in theory? Can you sit for ten minutes without reaching for input, stimulation, or purpose?',
      'What do you consume — food, media, substances, conversations, environments — that actively lowers your frequency? What would you genuinely have to release to live at the vibration you seek?',
      'Is there a gap between the spiritual understanding you carry and the way you actually structure your days? What habit, pattern, or avoidance most reliably pulls you out of the state you are trying to inhabit?'
    ],
    medicine:{
      KING:{type:'open',affirm:'Your crown is open and grounded. You serve what is real. You bring presence to the ordinary and make it sacred. This is the highest calling.'},
      SLEEPER:{title:'Open the Channel',items:['Meditation or prayer: 15 minutes daily, same time, same place. Routine is the scaffolding for the divine.','Ask yourself weekly: "What would I do if I knew I was fully supported?" Then do one thing from the answer.','Reduce stimulation before bed — what might be heard if things got truly quiet for once?','Read something that stretches your idea of what life can be for','What gift have you been withholding from the world? Start giving it. Start very small. Start today.']},
      WARRIOR:{type:'open',affirm:'Your crown channels purpose into action. Keep charging — and remember to receive as fiercely as you give. The crown needs both directions.'},
      EGO:{title:'Serve Something Larger',items:['Seva practice: regular anonymous service — help without recognition for 30 consecutive days','Bhakti yoga: sing to something larger than yourself. Whether that\'s God, the cosmos, or just a great song.','Write: "My purpose is to serve ___" and genuinely let the answer surprise you','Whenever you catch yourself needing to be seen: would I do this if no one would ever know? Then do it that way.','The crown opens not when you become great, but when your greatness becomes an offering.']},
      MAGICIAN:{type:'open',affirm:'Your crown is a genuine portal. Keep yourself anchored — root work, daily rhythm, embodiment — so the vast can move through you sustainably.'},
      AFRAID:{title:'Return to Belonging',items:['Morning ritual: before any device, sit for 3 minutes and breathe. You belong to this day.','Nature at dawn or dusk: watch the sky change and remember you are part of all of this','Gentle spiritual practice: candle gazing, gratitude prayer, walking meditation — nothing forceful','Write: "I am already enough because..." and let the truths come without editing','Your purpose is not a task to complete. It is a quality of aliveness. You already have it.']}
    },
    shadowWork:{
      SLEEPER:['I sense there\'s a deeper purpose for my life but I\'m not living it. Help me explore what specific obstacles — internal and external — keep me from it.','I\'ve been spiritually dormant. Help me explore what I\'ve been numbing myself against and what might emerge if I got genuinely still for long enough.','If I imagine the version of me that\'s fully awake to my purpose — what are they doing differently? What is actually stopping me from being that person?'],
      EGO:['I believe I\'m destined for greatness but feel blocked by other people. Help me explore the possibility that my purpose is about service rather than achievement.','Help me understand the difference between spiritual ambition and genuine calling. Do I want to help the world, or be seen helping it? Be direct.','What would I do with my gifts if no one would ever know? Help me explore what that question reveals about my actual motivations.'],
      AFRAID:['I\'m terrified I\'ve missed my purpose or will miss it. Help me explore the specific beliefs driving this anxiety — what does "missing it" actually mean?','Help me connect to something larger than my daily life. I feel disconnected from meaning and spirituality and I don\'t fully know why.','What is the still, quiet voice underneath my anxiety trying to tell me about my purpose? Help me access it — slowly, gently, precisely.']
    },
    playlist:{url:'https://www.youtube.com/watch?v=_RQ9S1u7ag4&list=PL5KNhrwZCuCqiJFY24RwzLOZRT3HUg7fr',title:'Crown Chakra Healing Playlist'}
  }
];

// =============================================
// CURATED HEALING VIDEOS (per chakra, open vs blocked)
// Admin can override video IDs via localStorage['chakra_videos']
// Format: { root: { open: {id, title, note}, blocked: {id, title, note} }, ... }
// =============================================
const CURATED_VIDEOS = {
  root: {
    open:    { id: '_RQ9S1u7ag4', title: 'Root Chakra 396Hz — Grounding & Stability',  note: 'Strengthen what\'s already flowing in your foundation' },
    blocked: { id: '_RQ9S1u7ag4', title: 'Root Chakra Healing — Release Fear & Find Safety', note: 'Return to the ground beneath you' }
  },
  sacral: {
    open:    { id: 'orklnRP7R84', title: 'Sacral Chakra 417Hz — Creative Flow Activation', note: 'Amplify your creative and sensual aliveness' },
    blocked: { id: 'orklnRP7R84', title: 'Sacral Chakra Healing — Restore Joy & Desire',  note: 'Thaw what\'s been frozen and invite feeling back' }
  },
  solar: {
    open:    { id: 'DGfrJu-Ck8o', title: 'Solar Plexus 528Hz — Power & Confidence', note: 'Feed the clean fire of your will' },
    blocked: { id: 'DGfrJu-Ck8o', title: 'Solar Plexus Healing — Reclaim Your Power',    note: 'Transform scattered fire into directed strength' }
  },
  heart: {
    open:    { id: '6JgHR84lOZc', title: 'Heart Chakra 639Hz — Love & Connection',  note: 'Deepen the love that already flows through you' },
    blocked: { id: '6JgHR84lOZc', title: 'Heart Chakra Healing — Open to Love Again', note: 'Gently unseal what heartbreak has protected' }
  },
  throat: {
    open:    { id: 'WV8EKJP0DgQ', title: 'Throat Chakra 741Hz — Authentic Expression', note: 'Speak more of what you already know to be true' },
    blocked: { id: 'WV8EKJP0DgQ', title: 'Throat Chakra Healing — Find Your True Voice', note: 'Let what has been swallowed finally rise and be heard' }
  },
  thirdeye: {
    open:    { id: 'cknepREzUzI', title: 'Third Eye 852Hz — Intuition & Clarity',   note: 'Trust and sharpen the inner knowing you carry' },
    blocked: { id: 'cknepREzUzI', title: 'Third Eye Healing — See Clearly Again',    note: 'Clear the fog and return to your own sight' }
  },
  crown: {
    open:    { id: '_RQ9S1u7ag4', title: 'Crown Chakra 963Hz — Connection & Purpose', note: 'Deepen your relationship with what is vast and true' },
    blocked: { id: '_RQ9S1u7ag4', title: 'Crown Chakra Healing — Reconnect to Meaning', note: 'Come back to the belonging you never actually lost' }
  }
};

function getCuratedVideo(chakraId, isOpen) {
  // Admin override via localStorage
  const overrides = JSON.parse(localStorage.getItem('chakra_videos') || '{}');
  if (overrides[chakraId]) {
    const ov = overrides[chakraId];
    return { id: ov, title: CURATED_VIDEOS[chakraId][(isOpen?'open':'blocked')].title, note: '' };
  }
  const vids = CURATED_VIDEOS[chakraId];
  if (!vids) return null;
  return isOpen ? vids.open : vids.blocked;
}

// =============================================
// DEEP DIVE — 3 scored questions per chakra (asked in the main 7-gate flow,
// after the archetype + lifestyle question). Each option carries a status score
// (open/neutral/partial/blocked) AND a dosha tag (Vata/Pitta/Kapha) used for the
// constitutional analysis. Scores average with the lifestyle answer for a far
// more accurate, multi-signal chakra reading.
// =============================================
const _SCORE_VAL = { open: 3, neutral: 2, partial: 1, blocked: 0 };
function _valToBucket(v) {
  return v >= 2.5 ? 'open' : v >= 1.7 ? 'neutral' : v >= 0.9 ? 'partial' : 'blocked';
}

const DEEP_DIVE = {
  root: [
    { q: 'When your body is at rest with nothing to do, what is your baseline state?', opts: [
      { e: '🌳', t: 'Settled and at ease — I can simply be in my body without urgency.', score: 'open', dosha: 'Kapha' },
      { e: '🍃', t: 'Mostly calm, with occasional restlessness I can settle.', score: 'neutral', dosha: 'Vata' },
      { e: '📱', t: 'A low hum of unease — I reach for my phone or a task to escape it.', score: 'partial', dosha: 'Vata' },
      { e: '🌪️', t: 'Genuine dread or emptiness — stillness itself feels unsafe.', score: 'blocked', dosha: 'Vata' } ] },
    { q: 'Your relationship with money and material security, honestly, is...', opts: [
      { e: '🪙', t: 'Steady. I have enough and trust I can meet what comes.', score: 'open', dosha: 'Kapha' },
      { e: '📊', t: 'Generally okay, with spikes of worry around the unknown.', score: 'neutral', dosha: 'Vata' },
      { e: '⏳', t: 'A constant background pressure that shapes most of my choices.', score: 'partial', dosha: 'Pitta' },
      { e: '🕳️', t: 'Scarcity runs me — there is never a felt sense of "enough".', score: 'blocked', dosha: 'Vata' } ] },
    { q: 'The place you live feels like...', opts: [
      { e: '🏡', t: 'A true home — it holds and restores me.', score: 'open', dosha: 'Kapha' },
      { e: '🚪', t: 'Fine and functional, not deeply mine yet.', score: 'neutral', dosha: 'Vata' },
      { e: '📦', t: 'Temporary, cluttered, or somewhere I never fully land.', score: 'partial', dosha: 'Kapha' },
      { e: '🌫️', t: 'Unstable or unsafe — I have never felt rooted anywhere.', score: 'blocked', dosha: 'Vata' } ] },
  ],
  sacral: [
    { q: 'Letting yourself feel pleasure, without guilt, is...', opts: [
      { e: '🌊', t: 'Natural — I receive joy as my birthright.', score: 'open', dosha: 'Kapha' },
      { e: '🍷', t: 'Possible, though I often defer it for productivity.', score: 'neutral', dosha: 'Pitta' },
      { e: '⚖️', t: 'Hard — I feel I must earn enjoyment first.', score: 'partial', dosha: 'Pitta' },
      { e: '🚫', t: 'Almost impossible — pleasure brings guilt or fear.', score: 'blocked', dosha: 'Vata' } ] },
    { q: 'Emotions move through your body...', opts: [
      { e: '💧', t: 'Freely — they rise, I feel them, they pass.', score: 'open', dosha: 'Kapha' },
      { e: '🌀', t: 'Mostly, though some get stuck for a while.', score: 'neutral', dosha: 'Kapha' },
      { e: '🌡️', t: 'They flood or freeze — I swing between too much and numb.', score: 'partial', dosha: 'Vata' },
      { e: '🧊', t: 'I rarely feel them at all — a flat numbness.', score: 'blocked', dosha: 'Kapha' } ] },
    { q: 'Your creative and sensual aliveness right now is...', opts: [
      { e: '🎨', t: 'Vibrant — I make and savor things regularly.', score: 'open', dosha: 'Pitta' },
      { e: '🕰️', t: 'Present but neglected — I mean to and rarely do.', score: 'neutral', dosha: 'Kapha' },
      { e: '✂️', t: 'Blocked — I judge it before it can begin.', score: 'partial', dosha: 'Pitta' },
      { e: '🌑', t: 'Gone numb — I cannot remember the last time I felt alive to it.', score: 'blocked', dosha: 'Kapha' } ] },
  ],
  solar: [
    { q: 'Saying a clear "no" when you mean it is...', opts: [
      { e: '🔥', t: 'Clean and kind — I hold my line without guilt.', score: 'open', dosha: 'Pitta' },
      { e: '💬', t: 'Doable, though I over-explain or feel bad after.', score: 'neutral', dosha: 'Vata' },
      { e: '🫥', t: 'Hard — I usually cave to keep the peace.', score: 'partial', dosha: 'Kapha' },
      { e: '⛓️', t: 'Nearly impossible — I betray myself to avoid conflict.', score: 'blocked', dosha: 'Vata' } ] },
    { q: 'Your sense of worth mostly comes from...', opts: [
      { e: '🗿', t: 'An inner bedrock that praise or criticism does not move.', score: 'open', dosha: 'Kapha' },
      { e: '🏅', t: 'Mostly inner, though external wins still sway me.', score: 'neutral', dosha: 'Pitta' },
      { e: '📈', t: 'What I achieve and produce — rest feels like failing.', score: 'partial', dosha: 'Pitta' },
      { e: '👥', t: 'Others\' approval — without it I feel worthless.', score: 'blocked', dosha: 'Vata' } ] },
    { q: 'Your relationship with your own anger is...', opts: [
      { e: '⚡', t: 'I feel it, name it, and use it as clear information.', score: 'open', dosha: 'Pitta' },
      { e: '🌬️', t: 'I manage it, though it leaks out sideways sometimes.', score: 'neutral', dosha: 'Vata' },
      { e: '🌋', t: 'It runs hot — frustration, control, needing to be right.', score: 'partial', dosha: 'Pitta' },
      { e: '🪨', t: 'I have buried it — it shows up as exhaustion or flatness.', score: 'blocked', dosha: 'Kapha' } ] },
  ],
  heart: [
    { q: 'When genuine love or care comes toward you, you...', opts: [
      { e: '🤍', t: 'Let it land and stay — I can receive fully.', score: 'open', dosha: 'Kapha' },
      { e: '🙂', t: 'Take it in, then deflect or minimize a little.', score: 'neutral', dosha: 'Vata' },
      { e: '⏳', t: 'Wonder what it will cost, or when it will leave.', score: 'partial', dosha: 'Vata' },
      { e: '🧱', t: 'Cannot trust it — I pull away or feel unworthy.', score: 'blocked', dosha: 'Vata' } ] },
    { q: 'Old resentments or grief live in you as...', opts: [
      { e: '🕊️', t: 'Mostly released — I grieve and forgive for my own freedom.', score: 'open', dosha: 'Pitta' },
      { e: '🌧️', t: 'A few I still carry but am working through.', score: 'neutral', dosha: 'Kapha' },
      { e: '🪧', t: 'A weight in my chest around certain people.', score: 'partial', dosha: 'Kapha' },
      { e: '🏰', t: 'A wall I keep up — forgiving feels like losing.', score: 'blocked', dosha: 'Pitta' } ] },
    { q: 'How you treat yourself when you fail or hurt is...', opts: [
      { e: '🫂', t: 'With the kindness I would give a dear friend.', score: 'open', dosha: 'Kapha' },
      { e: '🪞', t: 'Mixed — some kindness, some harsh self-talk.', score: 'neutral', dosha: 'Pitta' },
      { e: '🗯️', t: 'Mostly critical — I am my own harshest judge.', score: 'partial', dosha: 'Pitta' },
      { e: '🔪', t: 'Cruel — I punish myself and call it accountability.', score: 'blocked', dosha: 'Pitta' } ] },
  ],
  throat: [
    { q: 'When something bothers you, you...', opts: [
      { e: '🎤', t: 'Name it clearly and kindly, soon after it arises.', score: 'open', dosha: 'Pitta' },
      { e: '📝', t: 'Bring it up eventually, after rehearsing it a lot.', score: 'neutral', dosha: 'Vata' },
      { e: '💢', t: 'Hold it in and let it leak out sideways.', score: 'partial', dosha: 'Kapha' },
      { e: '🤐', t: 'Swallow it completely — it never gets said.', score: 'blocked', dosha: 'Kapha' } ] },
    { q: 'How fully do people get the real you in conversation?', opts: [
      { e: '🪟', t: 'Fully — what I feel and what I say match.', score: 'open', dosha: 'Pitta' },
      { e: '✏️', t: 'Mostly, with some editing for comfort.', score: 'neutral', dosha: 'Vata' },
      { e: '🎭', t: 'A managed version — I curate what they see.', score: 'partial', dosha: 'Vata' },
      { e: '👤', t: 'A performance — I have lost touch with my own voice.', score: 'blocked', dosha: 'Kapha' } ] },
    { q: 'Tension in your throat, jaw, or neck is...', opts: [
      { e: '🕊️', t: 'Rare — my voice feels open and free.', score: 'open', dosha: 'Pitta' },
      { e: '😬', t: 'Occasional, around stress or hard conversations.', score: 'neutral', dosha: 'Vata' },
      { e: '🫨', t: 'Frequent — I clench or go quiet under pressure.', score: 'partial', dosha: 'Vata' },
      { e: '🪢', t: 'Chronic — words physically catch before I can speak.', score: 'blocked', dosha: 'Vata' } ] },
  ],
  thirdeye: [
    { q: 'When your gut conflicts with logic, you...', opts: [
      { e: '🌕', t: 'Trust it — my intuition has earned its place.', score: 'open', dosha: 'Kapha' },
      { e: '⚖️', t: 'Weigh both, leaning logical but still listening.', score: 'neutral', dosha: 'Pitta' },
      { e: '🔁', t: 'Override the gut, then watch it prove right.', score: 'partial', dosha: 'Vata' },
      { e: '📡', t: 'Cannot even find the signal under the noise.', score: 'blocked', dosha: 'Vata' } ] },
    { q: 'Your mind\'s baseline state is...', opts: [
      { e: '🌌', t: 'Clear and spacious — I can think and also rest.', score: 'open', dosha: 'Kapha' },
      { e: '🗂️', t: 'Busy but workable.', score: 'neutral', dosha: 'Pitta' },
      { e: '🌀', t: 'Cluttered or looping — hard to prioritize.', score: 'partial', dosha: 'Vata' },
      { e: '🌫️', t: 'Foggy or frantic — clarity feels out of reach.', score: 'blocked', dosha: 'Vata' } ] },
    { q: 'A truth about your life you already half-know but avoid...', opts: [
      { e: '👁️', t: 'I face what I see, even when it is hard.', score: 'open', dosha: 'Pitta' },
      { e: '🌗', t: 'I see it and circle it slowly.', score: 'neutral', dosha: 'Kapha' },
      { e: '🚧', t: 'I know it but keep finding reasons not to act.', score: 'partial', dosha: 'Pitta' },
      { e: '🙈', t: 'I keep myself too busy or numb to look.', score: 'blocked', dosha: 'Kapha' } ] },
  ],
  crown: [
    { q: 'Your felt sense of something larger than yourself is...', opts: [
      { e: '✨', t: 'Alive and intimate — I feel held by it daily.', score: 'open', dosha: 'Kapha' },
      { e: '🌟', t: 'Present in moments — fragile but real.', score: 'neutral', dosha: 'Vata' },
      { e: '🧠', t: 'Mostly intellectual — I believe more than I feel.', score: 'partial', dosha: 'Pitta' },
      { e: '📴', t: 'Offline — meaning feels distant or theoretical.', score: 'blocked', dosha: 'Vata' } ] },
    { q: 'When you strip away roles and achievements, what remains?', opts: [
      { e: '🪷', t: 'A quiet, sufficient self — I am, and that is enough.', score: 'open', dosha: 'Kapha' },
      { e: '🌱', t: 'Some ground, some uncertainty.', score: 'neutral', dosha: 'Vata' },
      { e: '🏃', t: 'Mostly striving — even here I reach to prove.', score: 'partial', dosha: 'Pitta' },
      { e: '🕳️', t: 'Emptiness — I am not sure who is there.', score: 'blocked', dosha: 'Vata' } ] },
    { q: 'Sitting in silence with no goal feels...', opts: [
      { e: '🧘', t: 'Nourishing — I return to it as home.', score: 'open', dosha: 'Kapha' },
      { e: '🌾', t: 'Good once I settle, though I resist starting.', score: 'neutral', dosha: 'Kapha' },
      { e: '🌬️', t: 'Restless — my mind will not quiet.', score: 'partial', dosha: 'Vata' },
      { e: '🏃‍♂️', t: 'Unbearable — I avoid it entirely.', score: 'blocked', dosha: 'Vata' } ] },
  ],
};

// Short constitutional profiles for the results dosha analysis.
const DOSHA_PROFILES = {
  Vata: { el: 'Air + Ether', emoji: '🦋', color: '#aa44ff',
    balanced: 'creative, quick, light, adaptable, alive to possibility',
    imbalanced: 'anxiety, scattered focus, insomnia, dryness, fear, overwhelm',
    medicine: 'Warmth, routine, grounding, oil massage, slowness. Vata heals through rhythm and rest.' },
  Pitta: { el: 'Fire + Water', emoji: '🦁', color: '#ff6600',
    balanced: 'focused, driven, sharp, courageous, clear',
    imbalanced: 'anger, control, perfectionism, burnout, harsh self-criticism, inflammation',
    medicine: 'Cooling, surrender, play, moonlight, letting go of being right. Pitta heals through release.' },
  Kapha: { el: 'Earth + Water', emoji: '🐘', color: '#4488ff',
    balanced: 'steady, loving, grounded, enduring, calm',
    imbalanced: 'inertia, heaviness, attachment, avoidance, low mood, stagnation',
    medicine: 'Stimulation, movement, novelty, heat, letting go of comfort. Kapha heals through motion.' },
};

// Concrete daily anchors per dosha — the backbone of "Your Daily Medicine".
const DOSHA_DAILY = {
  Vata: [
    'Eat warm, cooked, lightly-oiled meals at regular times — skip raw, cold, and dry food',
    'Massage warm sesame oil into your skin before your shower (abhyanga)',
    'Keep the same wake and sleep time every day — Vata heals on rhythm',
    'One grounding pause: bare feet on the earth, five slow breaths',
  ],
  Pitta: [
    'Favor cooling, sweet, and bitter foods — go easy on spicy, fried, salty, and alcohol',
    'Take a real midday pause, out of the sun and the to-do list',
    'Move without competing — swim, walk in nature, or yin yoga',
    'Before reacting in any conflict: three full breaths, then speak',
  ],
  Kapha: [
    'Eat light, warm, well-spiced food — skip heavy dairy, sugar, and large portions',
    'Vigorous movement before 10am — break the stillness while the day is young',
    'Dry-brush your skin, then a warm (not long-hot) shower to stimulate',
    'Do one new or slightly uncomfortable thing today — Kapha heals through motion',
  ],
};

// IDEA #5 — Symptom-first triage. Each "what's heavy today" maps to the chakra
// it lives in + its likely dosha flavor, so we can hand back immediate medicine.
const SYMPTOM_MAP = [
  { key: 'anxiety',        e: '😰', label: 'Anxious — I can\'t calm down',          chakra: 'root',     dosha: 'Vata' },
  { key: 'unsafe',         e: '🌪️', label: 'Ungrounded / money fear / unsafe',       chakra: 'root',     dosha: 'Vata' },
  { key: 'numb',           e: '🧊', label: 'Numb — no pleasure, everything flat',     chakra: 'sacral',   dosha: 'Kapha' },
  { key: 'creative-block', e: '🎨', label: 'Creatively blocked / stuck',             chakra: 'sacral',   dosha: 'Pitta' },
  { key: 'no-confidence',  e: '🫥', label: 'No confidence / I keep people-pleasing',  chakra: 'solar',    dosha: 'Vata' },
  { key: 'anger',          e: '🌋', label: 'Angry / burnt out / need to control',     chakra: 'solar',    dosha: 'Pitta' },
  { key: 'heartbreak',     e: '💔', label: 'Heartbroken / grieving / lonely',         chakra: 'heart',    dosha: 'Vata' },
  { key: 'resentment',     e: '🏰', label: 'Can\'t forgive / walled off',             chakra: 'heart',    dosha: 'Pitta' },
  { key: 'unheard',        e: '🤐', label: 'Can\'t speak up / feel unheard',          chakra: 'throat',   dosha: 'Kapha' },
  { key: 'overthinking',   e: '🌀', label: 'Overthinking / foggy / can\'t focus',     chakra: 'thirdeye', dosha: 'Vata' },
  { key: 'insomnia',       e: '🌙', label: 'Racing mind / can\'t sleep',              chakra: 'thirdeye', dosha: 'Vata' },
  { key: 'lost',           e: '🕳️', label: 'Lost / no meaning / disconnected',        chakra: 'crown',    dosha: 'Vata' },
];

// IDEA #8 — Daily practice loop. Each check-in awards sadhana (weighted by practice)
// and builds a streak. Sadhana feeds the Prism's evolution (idea #3).
const PRACTICES = [
  { key: 'meditation', e: '🧘', label: 'Meditation / sitting',      pts: 3 },
  { key: 'breath',     e: '🌬️', label: 'Breathwork / pranayama',    pts: 2 },
  { key: 'movement',   e: '🤸', label: 'Movement / yoga / a walk',   pts: 2 },
  { key: 'journal',    e: '📓', label: 'Journaling',                 pts: 1 },
  { key: 'nature',     e: '🌿', label: 'Time in nature',             pts: 1 },
  { key: 'cold',       e: '🧊', label: 'Cold immersion',             pts: 3 },
  { key: 'gratitude',  e: '🙏', label: 'Gratitude',                  pts: 1 },
  { key: 'service',    e: '🤝', label: 'Service / kindness',         pts: 2 },
];

// Daily Oracle deck — one is drawn per day (same card all day, by date).
const DAILY_ORACLE = [
  'Today, do less but mean it more. The nervous system heals in the spaces between.',
  'What you resist today is the exact doorway. Walk toward the discomfort, gently.',
  'You owe no one your urgency. Move at the speed of your own breath.',
  'A small honest act today outweighs a grand performance. Choose the true thing.',
  'The body keeps the score — and today it is asking for warmth, water, and rest.',
  'Say the thing you have been swallowing. Even to yourself. Even quietly.',
  'Your worth was never on trial. Set down the case you have been arguing.',
  'Let one thing be enough today. Then let yourself be enough too.',
  'The fire in you is not the problem. Its direction is the practice.',
  'Forgive one small thing today — not for them, for the weight you would set down.',
  'You are allowed to begin again at any hour. This one will do.',
  'Ground first, vision second. The eagle still needs the earth to launch from.',
  'What would you do today if you trusted yourself? Do a smaller version of that.',
  'Tend the root and the flower takes care of itself. Eat, sleep, breathe, belong.',
  'The quiet you keep avoiding is where the answer already lives. Sit for five minutes.',
  'Open the hand. What is meant for you cannot be gripped into staying.',
];

// ═════════════════════════════════════════════════════════════
// MASTER QUESTION DB — seed list, one question per chakra × dosha.
// Admin adds more via admin.html (localStorage 'chakra_question_db_custom');
// both are merged into each gate's deep-dive by _deepListFor().
// ═════════════════════════════════════════════════════════════
const QUESTION_DB_SEED = [
  // ── ROOT ──
  { chakra:'root', dosha:'Vata', text:'When plans change suddenly at the last minute, what happens in your body?', opts:[
    { t:'I flex easily — change is just weather.', score:'open' },
    { t:'A wobble, then I adapt.', score:'neutral' },
    { t:'A spike of panic I have to actively manage.', score:'partial' },
    { t:'It can unravel my whole day.', score:'blocked' } ] },
  { chakra:'root', dosha:'Pitta', text:'When your security is threatened, your first move is…', opts:[
    { t:'Calm assessment, then decisive action.', score:'open' },
    { t:'Make a plan — maybe over-plan.', score:'neutral' },
    { t:'Take control of everything and everyone.', score:'partial' },
    { t:'Anger and blame — someone did this to me.', score:'blocked' } ] },
  { chakra:'root', dosha:'Kapha', text:'How easily do you release possessions, homes, or routines that no longer serve you?', opts:[
    { t:'Gracefully — I trust what comes next.', score:'open' },
    { t:'Slowly, but I do let go.', score:'neutral' },
    { t:'I hold on long past the expiry date.', score:'partial' },
    { t:'I cannot let go — the holding IS my safety.', score:'blocked' } ] },
  // ── SACRAL ──
  { chakra:'sacral', dosha:'Vata', text:'How often do emotions arrive faster and bigger than you can process?', opts:[
    { t:'Rarely — feelings move through at a livable pace.', score:'open' },
    { t:'Sometimes, in stressful seasons.', score:'neutral' },
    { t:'Often — I flood, then need days to recover.', score:'partial' },
    { t:'Constantly — I feel hostage to my own weather.', score:'blocked' } ] },
  { chakra:'sacral', dosha:'Pitta', text:'Has pleasure quietly become another performance — something to optimize or win?', opts:[
    { t:'No — I can savor without measuring.', score:'open' },
    { t:'A little; I catch myself rating experiences.', score:'neutral' },
    { t:'Yes — even vacations have goals.', score:'partial' },
    { t:'Completely — I cannot enjoy without achieving.', score:'blocked' } ] },
  { chakra:'sacral', dosha:'Kapha', text:'Is your comfort actually nourishment — or has it become a soft numbing?', opts:[
    { t:'True nourishment — I rest and re-emerge alive.', score:'open' },
    { t:'Mostly real, with some cozy avoidance.', score:'neutral' },
    { t:'Half-numbing — the couch is a hiding place.', score:'partial' },
    { t:'Numbing — comfort is how I avoid feeling at all.', score:'blocked' } ] },
  // ── SOLAR ──
  { chakra:'solar', dosha:'Vata', text:'After you make a decision, what happens next?', opts:[
    { t:'I stand in it and move forward.', score:'open' },
    { t:'A brief review, then commitment.', score:'neutral' },
    { t:'Second-guessing loops that drain me.', score:'partial' },
    { t:'I often reverse it — or let others decide for me.', score:'blocked' } ] },
  { chakra:'solar', dosha:'Pitta', text:'What does being publicly wrong feel like?', opts:[
    { t:'Information. I update and move on.', score:'open' },
    { t:'A sting I metabolize fairly quickly.', score:'neutral' },
    { t:'A threat — I defend even when I doubt myself.', score:'partial' },
    { t:'Unbearable — I will win the argument at any cost.', score:'blocked' } ] },
  { chakra:'solar', dosha:'Kapha', text:'When something in your life clearly needs to change, how long before you act?', opts:[
    { t:'Soon — I move once I see clearly.', score:'open' },
    { t:'A while — I need to warm up to action.', score:'neutral' },
    { t:'Months or years — I wait to be forced.', score:'partial' },
    { t:'I mostly don\'t — inertia decides for me.', score:'blocked' } ] },
  // ── HEART ──
  { chakra:'heart', dosha:'Vata', text:'In close relationships, how loud is the fear of being left?', opts:[
    { t:'Quiet — I feel secure even in distance.', score:'open' },
    { t:'Present sometimes, but I can soothe it.', score:'neutral' },
    { t:'Loud — I scan for signs of leaving.', score:'partial' },
    { t:'Deafening — I leave first, or cling hard.', score:'blocked' } ] },
  { chakra:'heart', dosha:'Pitta', text:'Do you keep score in love — of efforts, wrongs, who apologized last?', opts:[
    { t:'No — love isn\'t a ledger for me.', score:'open' },
    { t:'Occasionally, when I feel unseen.', score:'neutral' },
    { t:'Yes — the tally runs in the background.', score:'partial' },
    { t:'Always — and the debt is never repaid.', score:'blocked' } ] },
  { chakra:'heart', dosha:'Kapha', text:'When a relationship or attachment has truly ended, can you release it?', opts:[
    { t:'Yes — with grief, gratitude, and time.', score:'open' },
    { t:'Eventually, though I carry it a while.', score:'neutral' },
    { t:'Barely — old loves still occupy the house.', score:'partial' },
    { t:'No — I hold on for years, even in pain.', score:'blocked' } ] },
  // ── THROAT ──
  { chakra:'throat', dosha:'Vata', text:'When you\'re nervous, what happens to your speech?', opts:[
    { t:'It stays steady — nerves don\'t take my voice.', score:'open' },
    { t:'A little fast, still coherent.', score:'neutral' },
    { t:'I over-talk, scatter, fill every silence.', score:'partial' },
    { t:'I either flood with words or lose them completely.', score:'blocked' } ] },
  { chakra:'throat', dosha:'Pitta', text:'In conflict, what do your words become?', opts:[
    { t:'Clear and clean — firm without wounding.', score:'open' },
    { t:'Sharper than intended, then repaired.', score:'neutral' },
    { t:'Blades — I know exactly where to cut.', score:'partial' },
    { t:'Weapons I regret — or icy silence as punishment.', score:'blocked' } ] },
  { chakra:'throat', dosha:'Kapha', text:'How often do you swallow your truth to keep the peace?', opts:[
    { t:'Rarely — peace built on my silence isn\'t peace.', score:'open' },
    { t:'Sometimes, for small things.', score:'neutral' },
    { t:'Often — my real opinions stay underground.', score:'partial' },
    { t:'Almost always — no one knows what I actually think.', score:'blocked' } ] },
  // ── THIRD EYE ──
  { chakra:'thirdeye', dosha:'Vata', text:'What is the speed of your thoughts, honestly?', opts:[
    { t:'Spacious — thoughts arise, serve, and settle.', score:'open' },
    { t:'Quick but steerable.', score:'neutral' },
    { t:'Racing — tabs open everywhere, hard to land.', score:'partial' },
    { t:'A storm I can\'t slow, especially at night.', score:'blocked' } ] },
  { chakra:'thirdeye', dosha:'Pitta', text:'How do you hold your own opinions?', opts:[
    { t:'Lightly — strong views, loosely held.', score:'open' },
    { t:'Firmly, but genuinely revisable.', score:'neutral' },
    { t:'Rigidly — being right feels like survival.', score:'partial' },
    { t:'As identity — changing my mind feels like dying.', score:'blocked' } ] },
  { chakra:'thirdeye', dosha:'Kapha', text:'Is there a truth about your life you keep choosing not to look at?', opts:[
    { t:'No — I look, even when it costs me.', score:'open' },
    { t:'One or two I circle slowly.', score:'neutral' },
    { t:'Yes — the fog around it is half-chosen.', score:'partial' },
    { t:'Yes — and I keep myself busy so I never have to.', score:'blocked' } ] },
  // ── CROWN ──
  { chakra:'crown', dosha:'Vata', text:'What does your spiritual seeking look like?', opts:[
    { t:'A steady, rooted practice that deepens.', score:'open' },
    { t:'A main path with curious detours.', score:'neutral' },
    { t:'Chasing every new practice, mastering none.', score:'partial' },
    { t:'Frantic seeking that never lets me arrive.', score:'blocked' } ] },
  { chakra:'crown', dosha:'Pitta', text:'Be honest: is your spirituality partly an achievement?', opts:[
    { t:'No — it\'s a surrender, not a resume.', score:'open' },
    { t:'A little pride sneaks in sometimes.', score:'neutral' },
    { t:'Yes — I track my progress toward "awakened."', score:'partial' },
    { t:'Entirely — I need to be the most conscious person in the room.', score:'blocked' } ] },
  { chakra:'crown', dosha:'Kapha', text:'When did you last feel genuine awe — the sacred, unmistakably present?', opts:[
    { t:'Recently — awe visits me often.', score:'open' },
    { t:'Within the year; I can still be pierced.', score:'neutral' },
    { t:'A long time ago — the channel feels dusty.', score:'partial' },
    { t:'I can\'t remember — nothing feels sacred anymore.', score:'blocked' } ] },
];

// ═════════════════════════════════════════════════════════════
// MARKETPLACE — help matched to chakra × dosha imbalance.
// Seed + admin customs ('chakra_marketplace_custom').
// ═════════════════════════════════════════════════════════════
const MKT_TYPE_META = {
  practitioner: { e:'🧑‍⚕️', c:'#2ec4b6', label:'Practitioner' },
  course:       { e:'🎓', c:'#4a9eff', label:'Course' },
  kit:          { e:'🌿', c:'#7cb87a', label:'Healing Kit' },
  sound:        { e:'🎵', c:'#c9a84c', label:'Sound' },
  retreat:      { e:'⛺', c:'#ff6b35', label:'Retreat' },
  book:         { e:'📖', c:'#aa88cc', label:'Book' },
  therapy:      { e:'🫂', c:'#e0699e', label:'Therapy' },
  astrologer:   { e:'✨', c:'#b78aff', label:'Astrologer' },
};
const MARKETPLACE_SEED = [
  { chakra:'root',   dosha:'Any',   type:'practitioner', title:'Somatic Experiencing Practitioner Directory', desc:'Body-based trauma resolution for deep safety wounds.', url:'https://directory.traumahealing.org', price:'' },
  { chakra:'root',   dosha:'Vata',  type:'kit',          title:'Grounding Ritual Kit', desc:'Sesame oil, weighted wrap, root-veg protocol card — Vata anchoring.', url:'', price:'$44' },
  { chakra:'root',   dosha:'Any',   type:'book',         title:'"The Body Keeps the Score" — van der Kolk', desc:'The map of how early wounds live in the body.', url:'', price:'' },
  { chakra:'sacral', dosha:'Any',   type:'course',       title:'The Artist\'s Way — 12-week creative recovery', desc:'Unblocks the creative-pleasure channel, week by week.', url:'', price:'' },
  { chakra:'sacral', dosha:'Kapha', type:'sound',        title:'Sacral Awakening Sound Bath · 417Hz', desc:'Movement-inviting frequency for thawing numbness.', url:'', price:'' },
  { chakra:'solar',  dosha:'Any',   type:'therapy',      title:'Boundaries Coaching — 1:1 session', desc:'Practice saying no with a professional in your corner.', url:'', price:'from $80' },
  { chakra:'solar',  dosha:'Pitta', type:'course',       title:'Cooling the Fire — anger as information', desc:'Pitta-specific work: from domination to clean power.', url:'', price:'' },
  { chakra:'heart',  dosha:'Any',   type:'practitioner', title:'IFS Therapist Directory', desc:'Parts work for the protectors around your heart.', url:'https://ifs-institute.com/practitioners', price:'' },
  { chakra:'heart',  dosha:'Any',   type:'retreat',      title:'Grief & Heart-Opening Retreat', desc:'Held space to finally let the dammed river move.', url:'', price:'' },
  { chakra:'heart',  dosha:'Vata',  type:'kit',          title:'Rose & Rose-Quartz Heart Kit', desc:'Rose tea, oil, and stone — warmth for the anxious heart.', url:'', price:'$38' },
  { chakra:'throat', dosha:'Any',   type:'course',       title:'Nonviolent Communication Foundations', desc:'Say the hard thing without armor or apology.', url:'https://www.cnvc.org', price:'' },
  { chakra:'thirdeye', dosha:'Any', type:'course',       title:'MBSR — 8-week mindfulness (free)', desc:'The gold-standard course for a clear, spacious mind.', url:'https://palousemindfulness.com', price:'free' },
  { chakra:'crown',  dosha:'Any',   type:'retreat',      title:'Vipassana 10-day Silent Retreat', desc:'Donation-based deep silence — the crown\'s medicine.', url:'https://www.dhamma.org', price:'donation' },
  { chakra:'any',    dosha:'Any',   type:'therapy',      title:'The ManKind Project (MKP) — men\'s work', desc:'Brotherhood + shadow work for childhood wounds men carry alone.', url:'https://mankindproject.org', price:'' },
  { chakra:'any',    dosha:'Any',   type:'practitioner', title:'Find a Therapist — Psychology Today', desc:'Licensed therapists by specialty, insurance, and location.', url:'https://www.psychologytoday.com', price:'' },
  // ── THE HEALER'S BAZAAR — hands, not more insight ──
  { chakra:'root',   dosha:'Any',   type:'practitioner', title:'Ayurvedic Practitioner Consult (NAMA directory)', desc:'A full constitutional intake with a certified Ayurvedic practitioner — your dosha reading, professionally deepened.', url:'https://www.ayurvedanama.org', price:'from $95' },
  { chakra:'heart',  dosha:'Vata',  type:'practitioner', title:'Breathwork Facilitator — 1:1 session', desc:'Conscious connected breath for the anxious heart. Bring your reading; work the gate directly.', url:'', price:'from $60' },
  { chakra:'sacral', dosha:'Any',   type:'practitioner', title:'Somatic Movement Therapist', desc:'The sacral gate opens through the body in motion, not through understanding.', url:'', price:'' },
  { chakra:'solar',  dosha:'Kapha', type:'practitioner', title:'Kundalini / Core-Fire Yoga Teacher', desc:'Heat and will for a banked solar fire — Kapha\'s exact medicine.', url:'', price:'' },
  { chakra:'crown',  dosha:'Any',   type:'practitioner', title:'Meditation Teacher — private instruction', desc:'A living teacher for the gate no book can open.', url:'', price:'' },
  // ── THE STAR COUNCIL — jyotish, the sister science of your dosha reading ──
  { chakra:'any',    dosha:'Any',   type:'astrologer',   title:'Vedic Birth Chart Reading (jyotish)', desc:'Your full janma kundali — graha positions, dashas, and the karmic weather of this life. Bring your Chart Brief.', url:'', price:'from $120' },
  { chakra:'thirdeye',dosha:'Any',  type:'astrologer',   title:'Nakshatra Deep Reading', desc:'The moon mansion you were born under — your mind\'s native terrain, and why your dreams lean the way they do.', url:'', price:'from $75' },
  { chakra:'any',    dosha:'Any',   type:'astrologer',   title:'Muhurta — auspicious timing consult', desc:'The Spirit Clock, raised to the level of your whole life: when to launch, marry, move, begin.', url:'', price:'' },
  { chakra:'heart',  dosha:'Any',   type:'astrologer',   title:'Synastry / Relationship Chart Reading', desc:'Two charts, one bond — for entangled souls who want to see the weather between them.', url:'', price:'' },
];

// ═════════════════════════════════════════════════════════════
// MASTER HEALING DASHBOARD — heal wounded chakras until the NFT
// shows fully balanced. Deep childhood-wound work via inner-child,
// IFS, NLP, MKP men's work, somatic therapy and the chakra's medicine.
// ═════════════════════════════════════════════════════════════
const HEAL_MODALITIES = {
  root: { wound: 'The root wound is usually childhood safety: instability, scarcity, or a caregiver who could not hold. The body learned "the floor gives way."', mods: [
    { n:'Inner-child safety work', d:'Revisit the young one who felt unsafe; give them, in imagination and body, the protection that was missing.', u:'' },
    { n:'Somatic Experiencing', d:'Discharge the stored survival energy — trembling, grounding, completion of the old alarm.', u:'https://directory.traumahealing.org' },
    { n:'MKP — The ManKind Project', d:'Men\'s circles where the unheld boy is finally witnessed by grounded elders.', u:'https://mankindproject.org' },
    { n:'Daily grounding practice', d:'Bare feet on earth, warm root foods, fixed rhythms — the body re-learns "held".', u:'' } ] },
  sacral: { wound: 'The sacral wound is shamed desire: pleasure punished, emotion mocked, creativity dismissed. The child concluded "wanting is dangerous."', mods: [
    { n:'Inner-child permission work', d:'Return to the moment joy was shamed; hand the child explicit permission to want and feel.', u:'' },
    { n:'IFS parts work', d:'Meet the protector that numbs, thank it, and let the exiled feeling-self come home.', u:'https://ifs-institute.com' },
    { n:'Creative recovery (Artist\'s Way)', d:'Twelve weeks of morning pages and artist dates — re-opening the pleasure channel.', u:'' },
    { n:'Water & movement practice', d:'Warm baths, hip openers, dance with no witness — the body remembers flow.', u:'' } ] },
  solar: { wound: 'The solar wound is broken will: a controlling or critical caregiver, punished boundaries. The child learned "my power costs me love."', mods: [
    { n:'NLP reframing', d:'Rewire the "I am small" imprint — anchor states of capability, re-pattern the inner critic\'s voice.', u:'' },
    { n:'Boundary practice', d:'Graduated real-world "no"s — start tiny, feel the world not end, expand.', u:'' },
    { n:'MKP / group accountability', d:'A circle that reflects your power back until you can hold it yourself.', u:'https://mankindproject.org' },
    { n:'Fire practice', d:'Kapalabhati breath, sunrise movement, one completed promise to yourself daily.', u:'' } ] },
  heart: { wound: 'The heart wound is conditional love: affection tied to performance, or grief never allowed to finish. The child concluded "as I am is not enough."', mods: [
    { n:'Inner-child re-parenting', d:'Daily practice: the adult-you tells the child-you what they needed to hear — with a hand on the heart.', u:'' },
    { n:'IFS therapy', d:'Unburden the exile who carries "not enough"; soften the protectors that armor the chest.', u:'https://ifs-institute.com/practitioners' },
    { n:'Grief work', d:'Held space (therapy, grief circle, ritual) for the losses that were never fully cried.', u:'' },
    { n:'Metta + rose medicine', d:'Loving-kindness toward self first, rose in every form, 21-second hugs.', u:'' } ] },
  throat: { wound: 'The throat wound is silencing: truth punished, ignored, or called "too much." The child learned to swallow the real voice to stay safe.', mods: [
    { n:'NVC training', d:'A learnable structure for saying the unsayable — needs and feelings without attack.', u:'https://www.cnvc.org' },
    { n:'Inner-child voice work', d:'Say aloud — alone at first — the sentences the child was never allowed to finish.', u:'' },
    { n:'NLP timeline work', d:'Revisit silencing moments and re-pattern them with the voice intact.', u:'' },
    { n:'Sound practice', d:'Daily humming, chanting, singing — the throat re-learns vibration is safe.', u:'' } ] },
  thirdeye: { wound: 'The third-eye wound is denied perception: gaslighting, "that didn\'t happen," intuition overruled. The child stopped trusting what they saw.', mods: [
    { n:'Perception validation work', d:'With a therapist or journal: list the times you KNEW and were right. Rebuild the evidence base.', u:'' },
    { n:'IFS / parts clarity', d:'Separate the anxious forecaster from the quiet knower — learn each one\'s voice.', u:'https://ifs-institute.com' },
    { n:'Meditation (MBSR)', d:'Eight weeks of watching the mind until signal and static separate on their own.', u:'https://palousemindfulness.com' },
    { n:'Dream + intuition journal', d:'Track hunches and outcomes; trust grows on record, not hope.', u:'' } ] },
  crown: { wound: 'The crown wound is meaning cut off: a childhood where awe was absent, faith weaponized, or the sacred ridiculed. The child concluded "I am on my own in a dead universe."', mods: [
    { n:'Awe practice', d:'Deliberate exposure to vastness — dawn skies, great music, silence — the channel reopens by use.', u:'' },
    { n:'Spiritual direction / therapy', d:'Untangle the sacred from whoever misused it; grief for the faith that was broken.', u:'' },
    { n:'Vipassana / silent retreat', d:'Long silence lets what is larger finally get a word in.', u:'https://www.dhamma.org' },
    { n:'Service', d:'Anonymous giving — meaning arrives through the hands faster than the head.', u:'' } ] },
};
