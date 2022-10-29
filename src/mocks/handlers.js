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
    rest.get('/user', (req, res, ctx) => {
        // Check if the user is authenticated in this session
        const isAuthenticated = sessionStorage.getItem('is-authenticated')
        if (!isAuthenticated) {
          // If not authenticated, respond with a 403 error (hata yanıtı)
          return res(
            ctx.status(403),
            ctx.json({
              errorMessage: 'Not authorized',
            }),
          );
        }
        // If authenticated, return a mocked user details (true ise)
        return res(
          ctx.status(200),
          ctx.json({
            username: 'admin',
          }),
        )
      }),
  ]