const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

export default async function handler(req, res) {
    const storeItems = new Map([
        [1, { priceInCents: 10500, name: "Combo Mixto 1" }],
      ])
    if(req.method === 'POST') {
            const session = await stripe.checkout.sessions.create({
              payment_method_types: ["card"],
              mode: "payment",
              line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id);
                console.log(item, storeItem);
                return {
                  price_data: {
                    currency: "usd",
                    product_data: {
                      name: storeItem.name,
                    },
                    unit_amount: storeItem.priceInCents,
                  },
                  quantity: item.quantity,
                }
              }),
              success_url: `${process.env.CLIENT_URL}/success`,
              cancel_url: `${process.env.CLIENT_URL}/cancel`,
            })
            res.json({ url: session.url })
          }
  }
  