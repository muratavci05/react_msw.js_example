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
        const limit = req.url.searchParams.get('limit')

        let products = [
            
                {
                    id: 1,
                    title: " Spor Ayakkabı - Man's -",
                    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                    price: "150,00 $",
                    description: " Deneme - Air Force 1 PLT.AF.ORM ile giymesi kolay, klasik AF1 stiline bürün. Zarif şekli ve yükseltilmiş orta tabanıyla basketbol serisine yeni ve göz alıcı bir tasarım kazandırır. Deri üst kısım ayağına kolayca uyum sağlar ve zaman içinde mükemmel bir yumuşaklığa kavuşur. Şekillendirilmiş bilek kısmı ve yumuşak topuk ise rahat etmeni sağlar. Seni izleyenleri etkile.",

                },
                {
                    id: 2,
                    title: " Spor Ayakkabı - Unisex ",
                    imageUrl: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
                    price: "130,00 $",
                    description: " Deneme - Air Force 1 PLT.AF.ORM ile giymesi kolay, klasik AF1 stiline bürün. Zarif şekli ve yükseltilmiş orta tabanıyla basketbol serisine yeni ve göz alıcı bir tasarım kazandırır. Deri üst kısım ayağına kolayca uyum sağlar ve zaman içinde mükemmel bir yumuşaklığa kavuşur. Şekillendirilmiş bilek kısmı ve yumuşak topuk ise rahat etmeni sağlar. Seni izleyenleri etkile.",

                },
                {
                    id: 3,
                    title: " Spor Ayakkabı - Unisex",
                    imageUrl: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80",
                    price: "139,00 $",
                    description: " Deneme - Air Force 1 PLT.AF.ORM ile giymesi kolay, klasik AF1 stiline bürün. Zarif şekli ve yükseltilmiş orta tabanıyla basketbol serisine yeni ve göz alıcı bir tasarım kazandırır. Deri üst kısım ayağına kolayca uyum sağlar ve zaman içinde mükemmel bir yumuşaklığa kavuşur. Şekillendirilmiş bilek kısmı ve yumuşak topuk ise rahat etmeni sağlar. Seni izleyenleri etkile.",

                },
                {
                    id: 4,
                    title: " Kozmetik Ürün - Womans",
                    imageUrl: "https://images.unsplash.com/photo-1620104399414-98e6b7559d90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=976&q=80",    
                    price: "59,00 $",
                    description: " Deneme - Air Force 1 PLT.AF.ORM ile giymesi kolay, klasik AF1 stiline bürün. Zarif şekli ve yükseltilmiş orta tabanıyla basketbol serisine yeni ve göz alıcı bir tasarım kazandırır. Deri üst kısım ayağına kolayca uyum sağlar ve zaman içinde mükemmel bir yumuşaklığa kavuşur. Şekillendirilmiş bilek kısmı ve yumuşak topuk ise rahat etmeni sağlar. Seni izleyenleri etkile.",

                },
                {
                    id: 5,
                    title: " Kozmetik Ürün - Womans",
                    imageUrl: "https://images.unsplash.com/photo-1624939294323-bf08af865b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80",  
                    price: "49,00 $",
                    description: " Deneme - Air Force 1 PLT.AF.ORM ile giymesi kolay, klasik AF1 stiline bürün. Zarif şekli ve yükseltilmiş orta tabanıyla basketbol serisine yeni ve göz alıcı bir tasarım kazandırır. Deri üst kısım ayağına kolayca uyum sağlar ve zaman içinde mükemmel bir yumuşaklığa kavuşur. Şekillendirilmiş bilek kısmı ve yumuşak topuk ise rahat etmeni sağlar. Seni izleyenleri etkile.",

                },
                {
                    id: 6,
                    title: " Kozmetik Ürün - Womans",
                    imageUrl: "https://images.unsplash.com/photo-1619406266880-7e130b6c65c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",        
                    price: "49,00 $",
                    description: " Deneme - Air Force 1 PLT.AF.ORM ile giymesi kolay, klasik AF1 stiline bürün. Zarif şekli ve yükseltilmiş orta tabanıyla basketbol serisine yeni ve göz alıcı bir tasarım kazandırır. Deri üst kısım ayağına kolayca uyum sağlar ve zaman içinde mükemmel bir yumuşaklığa kavuşur. Şekillendirilmiş bilek kısmı ve yumuşak topuk ise rahat etmeni sağlar. Seni izleyenleri etkile.",

                },
            ];

            if (limit) {
                products = products.slice(0, limit)
            }


        return res(
            ctx.status (200),
            ctx.json({
                data: products,
            })
        );

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