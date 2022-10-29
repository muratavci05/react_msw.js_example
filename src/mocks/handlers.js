import { rest } from 'msw'

export const handlers = [
    // Handles a POST /login request
    rest.post('/login', (req, res, ctx)=> {
        
        // Persist user's authentication in the session
        // herhangibir request geldiğinde sessions'a is-authenticated değeri true olarak set ediliyor 
        sessionStorage.setItem('is-authenticated', 'true')

        return response(
            // Respond with a 200 status code,(yanıt)
            ctx.status(200),
          )
    }),

    // Handles a GET /user request
    rest.get('/user', null),
  ]