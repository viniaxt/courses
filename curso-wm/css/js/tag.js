const colors = {
  p: 'green',
  div: 'blue',
  span: 'red',
  section: 'yellow',
  ul: 'grey',
  ol: 'black',
  header: 'white',
  nav: 'orange',
  main: 'gold',
  footer: 'aquamarine',
  form: 'navy',
  padrao: '#616161',
  get(tag) {
    return this[tag] ? this[tag] : this.padrao
  }
}

document.querySelectorAll('.tag').forEach(elemento => {
  const tagName = elemento.tagName.toLowerCase()

  elemento.style.borderColor = colors.get(tagName)

  if (!elemento.classList.contains('nolabel')) {
    const label = document.createElement('label')
    label.style.backgroundColor = colors.get(tagName)
    label.innerHTML = tagName
    elemento.insertBefore(label, elemento.childNodes[0])
  }
})