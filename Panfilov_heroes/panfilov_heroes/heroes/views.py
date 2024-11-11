from fuzzywuzzy import fuzz
from django.shortcuts import render
from .models import Hero

def hero_search(request):
    query = request.GET.get('q')
    heroes = []
    if query:
        all_heroes = Hero.objects.all()
        for hero in all_heroes:
            similarity = fuzz.partial_ratio(hero.last_name.lower(), query.lower())
            if similarity > 70:  # пороговое значение схожести
                heroes.append(hero)
        return render(request, 'heroes/results.html', {'heroes': heroes, 'query': query})
    return render(request, 'heroes/search.html', {'heroes': heroes, 'query': query})
