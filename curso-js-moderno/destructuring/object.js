var data = {
  name: 'Willian',
  surname: 'Justen',
  age: 25,
  blog: 'https://willianjusten.com.br',
  social: {
      twitter: '@Willian_Justen',
      facebook: '/willianjusten'
  }
};

// const nome = data.name
// const surname = data.surname
// const twitter = data.social.twitter

// console.log(nome)
// console.log(surname)
// console.log(twitter)

/**
 *  destructuring operator
 * */ 

const { name, surname } = data
const { facebook, twitter } = data.social
console.log(name)
console.log(surname)
console.log(facebook)


// changing name
const { facebook: fb } = data.social
console.log(fb)

// creating new attr for object
const { city = 'Dublin' } = data
console.log(city)