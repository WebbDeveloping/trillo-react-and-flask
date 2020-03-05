import time
from flask import Flask

app = Flask(__name__)
tours = [
    {
        'id': 1,
        'location': 'Moracco',
        'description': 'This will be one of the coolest trips you go on. The Grand Canyon is quite Grand to say the least',
        'img': 'url(https://unsplash.it/800/600?image=49)'
    },
    {
        'id': 2,
        'location': 'Your Moms House',
        'description': 'On this trip we will be going over to your moms! She needs help with cleaning up the attic. Pulling her extra long carrots from the garden and using the hoe to freshen up her panzey aand tulip collection!',
        'img': 'url(https://unsplash.it/800/600?image=39)'
    },
    {
        'id': 3,
        'location': 'Saudi Arabia',
        'description': 'Saudi Arabia is a wonderful place! Lots of dirt and sand and according to CNN news they love AK-47s! pew-pew bam bam. FOR THE MOTHER LAND!',
        'img': 'url(https://unsplash.it/800/600?image=79)'
    },
    {

        'id': 4,
        'location': 'Park City, UT',
        'description': 'Park city utah is the coolest place in the world. Fresh ski powder. sundance film festival! plenty of old retired orange donald trump lookin dudes. whats not to love? book your trip to Park City now!',
        'img': 'url(https://unsplash.it/800/600?image=29)'
    },
    {
        'id': 5,
        'location': 'GrassLands',
        'description': 'Know who FLick is? You know, from A Bugs Life. We will use super magical technology to shrink you down.(The same technolody from Honey I shrunk the kids). On this tour we will get into an epic battle to help save the ant colony from those evil grasshoppers and destory their notorious leader HOPPER once and for all.',
        'img': 'url(https://unsplash.it/800/600?image=89)'
    },
    {
        'id': 6,
        'location': 'Church',
        'description': "Ya'll need Jesus. What better place to find him than at church. They have beautiful Gardens, beautifl wooden doors and somtimes they even give you bread and wine.",
        'img': 'url(https://unsplash.it/800/600?image=78)'
    },
]
hotelDetails = [
    'Close to the beach',
    'Free airport shuttle',
    'Air condition and heating',
    'We speak all languages',
    'Breakfest included',
    'Free wifi in all rooms',
    'Pets allowed',
    'Perfect for families'
]
rentalDetails = [
    "Coupe",
    "Sedan",
    "Convertible",
    "Hatchback",
    "Crossover",
    "Truck",
    "Hybrid",
    "Luxary"
]
flightDetails = [
    'American Airlines',
    'Alaska Airlines',
    'United Airlines',
    'Ravn Alaska',
    'Delta Air Lines',
    'Island Air Service',
    'Allegiant Air LLC',
    'JetBlue Airways',
]


@app.route('/Tour')
def get_tours():
    t = []
    for tour in tours:
        t.append(tour)
    return {'tours': [t][0]}


@app.route('/hotel-details')
def get_hotel_details():
    return {'details': hotelDetails}


@app.route('/rental-details')
def get_rental_details():
    return {'details': rentalDetails}

@app.route('/flight-details')
def get_flight_details():
    return {'details': flightDetails}


if __name__ == '__main__':
    app.debug = True
    app.run()
