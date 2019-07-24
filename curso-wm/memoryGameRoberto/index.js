var executing = false
var playerOfRound = 1

const start = () => {
  const randomize = cards => {
    cards = cards.concat(cards)

    cards.map((card, i) => {
      const j = Math.floor(Math.random() * (i + 1))

        ;[cards[i], cards[j]] = [cards[j], cards[i]]
    })

    return cards
  }

  const eventListener = () => {
    ;[...document.getElementsByClassName('card')].map(e => {
      e.addEventListener('click', card => {
        if (!executing) {
          executing = true
          card.target.classList.add('actived')

          verifyCards()
        }
      })
    })
  }

  const createHTML = cards => {
    const lines = cards.length / 5

    for (let i = 0; i < lines; i++) {
      const ini = i * lines + i
      const cardsLines = cards.slice(ini, ini + lines + 1)

      const cardsHTML = cardsLines.map(card => {
        return `<div class="card ${card}"></div>`
      })

      document.getElementsByTagName('body')[0].innerHTML += `<div class="cards">
        ${cardsHTML.join('')}
      </div>`
    }

    eventListener()
  }

  const cards = [
    'red',
    'green',
    'orange',
    'blue',
    'pink',
    'yellow',
    'violet',
    'cyan',
    'grey',
    'black'
  ]

  createHTML(randomize(cards))
}

const verifyCards = async () => {
  const activedCards = [...document.querySelectorAll('.card.actived')]

  const verify = resolve => {
    const isMatch = activedCards.reduce((prev, card) => {
      return prev.getAttribute('class') == card.getAttribute('class')
    })

    setTimeout(() => {
      countActivedCards = 0

      activedCards.map(card => {
        card.classList.remove('actived')

        if (isMatch) {
          card.classList.add('fixed')
        }
      })

      if (isMatch) {
        const playerPosition = playerOfRound == 1 ? 0 : 1
        const player = [...document.querySelectorAll('.player .score')][
          playerPosition
        ]

        player.textContent = ++player.textContent
        playerOfRound = playerOfRound == 1 ? 2 : 1
      }

      playerOfRound = playerOfRound == 1 ? 2 : 1

      document.getElementById('round').textContent =
        playerOfRound == 1 ? 'Player 1' : 'Player 2'
      resolve()
    }, 1000)
  }

  if (activedCards.length >= 2) {
    await new Promise(resolve => verify(resolve))
  }

  executing = false
}

start()
