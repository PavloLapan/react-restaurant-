import {Component} from 'react'

export default class FaturesData extends Component {

    data = [
        {
            id: "1",
            name: "SERVING WITH LOVE",
            src: 'https://demo.web3canvas.com/themeforest/tomato/img/thumb7.png',
            desc: "Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long."
        },
        {
            id: "2",
            name: "LOVE OUR CLIENTS",
            src: 'https://demo.web3canvas.com/themeforest/tomato/img/thumb6.png',
            desc: "This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city."
        },
        {
            id: "3",
            name: "CLIENTS LOVES OUR atmosphere",
            src: 'https://demo.web3canvas.com/themeforest/tomato/img/thumb5.png',
            desc: "5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner."

        },
        {
            id: "4",
            name: "SERVING WITH LOVE",
            src: 'https://demo.web3canvas.com/themeforest/tomato/img/thumb7.png',
            desc: "Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long."
        },
        {
            id: "5",
            name: "SERVING WITH LOVE",
            src: 'https://demo.web3canvas.com/themeforest/tomato/img/thumb7.png',
            desc: "Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long."
        }
        ,
        {
            id: "6",
            name: "SERVING WITH LOVE",
            src: 'https://demo.web3canvas.com/themeforest/tomato/img/thumb7.png',
            desc: "Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long."
        }
        ,
        {
            id: "7",
            name: "SERVING WITH LOVE",
            src: 'https://demo.web3canvas.com/themeforest/tomato/img/thumb7.png',
            desc: "Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long."
        }
        ,
        {
            id: "8",
            name: "SERVING WITH LOVE",
            src: 'https://demo.web3canvas.com/themeforest/tomato/img/thumb7.png',
            desc: "Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long."
        }
    ];

    getData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.25) {
                    resolve(this.data)
                }
                else {
                    reject(new Error(''))
                }
            }, 1000)
        })
    }
};