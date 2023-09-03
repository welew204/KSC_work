

def _add_shibas():
    shiba_count = Shiba.objects.count()
    if shiba_count < 1:
        # There are NO Shibas right now! Let's add some default Shibas
        Shiba.objects.create(
            image_src='https://i.imgur.com/VEslUBl.png',
            name='Tacopup',
            age=2,
        )
        Shiba.objects.create(
            image_src='https://i.imgur.com/iCCNZZF.jpg',
            name='Pupperwave',
            age=3,
        )
        Shiba.objects.create(
            image_src='https://i.imgur.com/XiznnoN.jpg',
            name='Wow-Banana',
            age=5,
        )
        Shiba.objects.create(
            image_src='https://i.imgur.com/ORizDRq.png',
            name='Galaxy-Doggo',
            age=2,
        )
        Shiba.objects.create(
            image_src='https://i.imgur.com/APMdtxs.png',
            name='Sweetdoggo',
            age=4,
        )

_add_shibas()

