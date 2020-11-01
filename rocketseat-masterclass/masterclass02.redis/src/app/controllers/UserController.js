export default {
  async store (req, res) {
    const { name, email, password } = req.body

    const user = {
      name,
      email,
      password
    }

    // enviar um e-mail para o usuário

    return res.json(user)
  }
}