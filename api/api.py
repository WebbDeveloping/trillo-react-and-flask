import time
from flask import Flask

app = Flask(__name__)
tours = [
    {
        'location': 'Moracco',
        'description': 'This will be one of the coolest trips you go on. The Grand Canyon is quite Grand to say the least',
        'img': 'url(https://unsplash.it/800/600?image=49)'
    },
    {
        'location': 'Your Moms House',
        'description': 'On this trip we will be going over to your moms! She needs help with cleaning up the attic. Pulling her extra long carrots from the garden and using the hoe to freshen up her panzey aand tulip collection!',
        'img': 'url(https://unsplash.it/800/600?image=39)'
    },
    {
        'location': 'Saudi Arabia',
        'description': 'Saudi Arabia is a wonderful place! Lots of dirt and sand and according to CNN news they love AK-47s! pew-pew bam bam. FOR THE MOTHER LAND!',
        'img': 'url(https://unsplash.it/800/600?image=79)'
    },
    {
        'location': 'Park City, UT',
        'description': 'Park city utah is the coolest place in the world. Fresh ski powder. sundance film festival! plenty of old retired orange donald trump lookin dudes. whats not to love? book your trip to Park City now!',
        'img': 'url(https://unsplash.it/800/600?image=29)'
    },
    {
        'location': 'GrassLands',
        'description': 'Know who FLick is? You know, from A Bugs Life. We will use super magical technology to shrink you down.(The same technolody from Honey I shrunk the kids). On this tour we will get into an epic battle to help save the any colony from those evil grasshoppers and destory their notrious leader HOPPER once and for all.',
        'img': 'url(https://unsplash.it/800/600?image=89)'
    },
    {
        'location': 'Church',
        'description': "Ya'll need Jesus. What better place to find him than at church. They have beautiful Gardens, beautifl wooden doors and somtimes they even give you bread and wine.",
        'img': 'url(https://unsplash.it/800/600?image=78)'
    },
]
@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/Tour')
def get_tours():
    t =[]
    for tour in tours:
        t.append(tour)
    return {'tours': [t][0]}

@app.route('/name')
def get_current_name():
    return {'name': "JoeDirt"}

if __name__ == '__main__':
    app.debug = True
    app.run()