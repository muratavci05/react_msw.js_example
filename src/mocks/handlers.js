import { rest } from 'msw'

export const handlers = [
    // Handles a POST /login request
    rest.post('/login', (req, res, ctx)=> {
        
        // Persist user's authentication in the session
        // herhangibir request geldiğinde sessions'a is-authenticated değeri true olarak set ediliyor 
        sessionStorage.setItem('is-authenticated', 'true')

        return res(
            // Respond with a 200 status code,(yanıt)
            ctx.status(200),
           
           // username"admin" olarak belirttim >>>
            ctx.json ({
                user: {
                    username: "admin"
                }
            })
            // <<<
          )
    }),
    // listelenecek ürünleri alabileceğim bir endpoint tanımı
    rest.get ("/products", (req, res, ctx ) => {
        return res(
            ctx.status (200),
            ctx.json({
                data: [
                    {
                        id: 1,
                        title: "Product - 1",
                        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                        price: 100,
                    },
                    {
                        id: 2,
                        title: "Product - 2",
                        imageUrl: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
                        price: 100,
                    },
                    {
                        id: 3,
                        title: "Product - 3",
                        imageUrl: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80",
                        price: 100,
                    },
                ]
            })
        )

    })

    // Handles a GET /user request
    rest.get('/user', (req, res, ctx) => {
        // Check if the user is authenticated in this session
        const isAuthenticated = sessionStorage.getItem('is-authenticated')
        if (!isAuthenticated) {
          // If not authenticated, respond with a 403 error (hata yanıtı)
          return res(
            ctx.status(403),
            ctx.json({
              errorMessage: 'Yetkili Olmayan Bir İşlem',
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