export function newBoard() {
  let phrases = [
    'Really?',
    'Really? (x2)',
    'Ugh',
    '*heavy sigh*',
    'Are you kidding me?',
    'HA... HA... HA...',
    'Ha ha ha ha ha',
    'Well... well... well...',
    'Fuck me in the ass',
    '*singing* or *humming*',
    '*one key being mashed especially loud*',
    // 'Christ',
    '*personal phonecall*',
    "Oh, that's funny",
    'uhhhhhhhhhhhh hhhhhhhhhhhh hhhhhhhhhhhh hhhhhhhhhhhh',
    // 'This is messed up',
    'What',
    'Oh my god',
    'wonh wonh woonnnh',
    'Seriously?',
    '*loudly eating*',
    'Ohhhhhh shit',
    'What the hell',
    'Wow',
    '*repeated computer notifications*',
    'aaaaahhh'
  ]
  let scrambled = []
  while (phrases.length > 0) {
    let i = Math.floor(Math.random() * phrases.length)
    scrambled.push(phrases[i])
    phrases = [...phrases.slice(0, i), ...phrases.slice(i + 1)]
  }
  scrambled = scrambled.map(str => ({phrase: str, clicked: false}))
  return [...scrambled.slice(0, 12), {phrase: 'Free Space', clicked: true}, ...scrambled.slice(12)]
}