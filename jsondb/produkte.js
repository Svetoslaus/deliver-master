const jsondb = {
    produkte: [
        {
            name: 'cans',
            beschreibung: 'american soft drinks',
            kategorie: 'Soft Drinks',
            preis: 3.99,
            url: 'cans',
            bild: '/bilder/produkte/drinks.jpg',
            extras: [
                {
                    text: 'gekühlt',
                    preis: 0.3,
                }
            ]   
        },
        {
            name: 'ice-cream',
            beschreibung: 'ice-cream',
            kategorie: 'Dessert',
            preis: 4.99,
            url: 'ice',
            bild: '/bilder/produkte/ice.jpg',
            extras: [
                {
                    text: 'choko Sirup',
                    preis: 0.8,
                }
            ]
        },
        {
            name: 'muffin',
            beschreibung: 'muffin',
            kategorie: 'Dessert',
            preis: 1.99,
            url: 'muffin',
            bild: '/bilder/produkte/muffin.jpg',
            extras: [
                {
                    text: 'extra Sahne',
                    preis: 1,
                }
            ]
        },
        {
            name: 'pommes',
            beschreibung: 'pommes',
            kategorie: 'Meal',
            preis: 1.99,
            url: 'pommes',
            bild: '/bilder/produkte/pommes.jpg',
            extras: [
                {
                    text: 'doppelt',
                    preis: 4,
                },
                {
                    text: 'extra scharf',
                    preis: 0.6
                }
            ]
        },
        {
            name: 'pizza',
            beschreibung: 'Italian Pizza',
            kategorie: 'Meal',
            preis: 4.99,
            url: 'pizza',
            bild: '/bilder/produkte/pizza.jpg',
            extras: [
                {
                    text: 'doppelt',
                    preis: 4,
                },
                {
                    text: 'extra scharf',
                    preis: 0.6
                }
            ]
        },
        {
            name: 'spaghetti',
            beschreibung: 'Spaghetti',
            kategorie: 'Meal',
            preis: 3.99,
            url: 'spaghetti',
            bild: '/bilder/produkte/spaghetti.jpg',
            extras: [
                {
                    text: 'doppelt',
                    preis: 4,
                },
                {
                    text: 'extra scharf',
                    preis: 0.6,
                }
            ]
        },
        {
            name: 'fish',
            beschreibung: 'Ocean Fish',
            kategorie: 'Meal',
            preis: 5.99,
            url: 'fish',
            bild: '/bilder/produkte/fish.jpg',
            extras: [
                {
                    text: 'extra Pommes',
                    preis: 2,
                }
            ]
        },
        
    ]
}

export default jsondb;