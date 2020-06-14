# TypeScript - Masterclass 07 

## Packages

### Developer dependencies

```
$ yarn add typescript -D

$ yarn add @types/express -D

$ yarn add ts-node-dev -D
```

### Dependencies

```
$ yarn add express
```

## Important codes

### Compile to js

```
$ yarn tsc src/index.ts
```

### Initialize tsconfig.json

```
$ yarn tsc --init
```

> _Since we initiate our tsconfig.json, we can just run the following command to compile:_


```
$ yarn tsc
```

## tsconfig.json stuff

### "outDir": '"./dist"

> _outDir will create .js compiled files in a certain path (folder). By default, these files will be created in the same path as .ts original file._ 

#### In this example, we are compiling our code to /dist. Common folders name are: 
  - /dist 
  - /build

![](./assets/outdir.png)

## Automatization of yarn tsc

  We will create a script with ts-node-dev in package.json to do that

  ```json
   "scripts": {
    "dev:server": "ts-node-dev --respawn --transpileOnly src/index.ts"
  },
  ```

  > Note: ___--transpileOnly___ will not verify if our code is correct written. Visual Studio Code will do that for us.

  It's possible to use sucrase in option to ts-node-dev.

## TypeScript, by itself

### Type inference

  TS will often infer types automatically

  ```js
  // getUsername return is a string, and we don't need to typecheck because it's already made

  function getUsername() {
    return 'viniaxt'
  }
  ```

### Declaring types

  ```ts
  interface IMailTo {
    name: string
    email: string
  }

  interface IMailMessage {
    subject: string
    body: string
    attachment?: string[]
  }

  interface IMessageDTO {
    to: IMailTo
    message: IMailMessage
  }

  interface IEmailService {
    sendMail(request: IMessageDTO): void
  }

  class EmailService implements IEmailService {
    sendMail({ to, message }: IMessageDTO) {
      console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }
  }
  ```

## Typescript and React

  ### Initializing

  ```
  $ yarn create react-app frontend --template=typescript
  ```

  > Note: Since we will integrate our frontend with backend, we need to add a lib called cors.

  ### Typing axios and useState functions

  ```ts
    interface IUser {
      name: string
      email: string
    }

    // Notice that types are written 

    const [users, setUsers] = useState<IUser[]>([])

    api.get<IUser[]>('/users').then(response => {
      setUsers(response.data)
    })

  ```

  

