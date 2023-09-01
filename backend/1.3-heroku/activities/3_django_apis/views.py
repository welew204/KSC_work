from datetime import datetime
from dateutil.parser import parse


import requests
from django.shortcuts import render
from pprint import pprint


def homepage(request):
    print("Getting giggly....")
    context = {
    }
    return render(request, 'homepage.html', context)


def search_results(request):

    search_type = request.GET['stype']
    search_query = request.GET['searchterm']

    context = {
        'result_count': 0,
        'search_message': None,
        'search_term': search_query,
        'search_type': search_type,
        'search_results': None
    }

    if search_type == 'booksearch':
        url = f"http://openlibrary.org/search.json?q={search_query}"
        response = requests.get(url)
        booksearch_data = response.json()
        all_books_data = booksearch_data['docs']
        final_books = []
        for book in all_books_data:
            # pprint(book)
            if "isbn" not in book or "first_publish_year" not in book or "author_name" not in book:
                # just skipping these for now
                continue
            isbn, title, author, published = book["isbn"][0], book[
                "title"], book["author_name"][0], book["first_publish_year"]
            final_books.append(
                {"isbn": isbn, "title": title, "author": author, "published": published})
        # books = {"books": final_books}
        books = final_books
        pprint(books)
        # pprint(booksearch_data)
        context['search_message'] = 'Books'
        context['results_count'] = len(books)
        context['search_results'] = books
        pprint(context)

    elif search_type == 'newssearch':
        url = f'http://content.guardianapis.com/search?api-key=a938fccc-00e9-41ca-905c-741615da8be1&q={search_query}&page-size=50'
        response = requests.get(url)
        search_news_data = response.json()  # Interpret response as JSON

        # The Guardian API responds with a JSON dictionary, that has a key called
        # 'response', which in turn is another dictionary with a key called
        # 'results'. This final key has the list that we want
        results_list = search_news_data['response']['results']
        print(f"Number of search:news results: {len(results_list)}")
        context['search_message'] = 'Headlines'
        context['results_count'] = len(results_list)
        context['search_results'] = results_list
        # TODO Unfinished...

    elif search_type == 'musicsearch':
        context['search_message'] = 'Music'

        url = f'http://musicbrainz.org/ws/2/release/?fmt=json&query={search_query}'
        response = requests.get(url)
        search_music_data = response.json()
        # pprint(search_music_data)
        # API example: http://musicbrainz.org/ws/2/release/?fmt=json&query=cardi+b
        music_results = search_music_data['releases']
        filtered_final_results = [d for d in music_results if all(
            key in d for key in ["id", "artist-credit", "title", "release-events", "score"])]

        # pprint(filtered_final_results)
        # print("...now moving ON!...")
        final_music_results = []
        for release in filtered_final_results:
            # pprint(release.keys())
            artist = release["artist-credit"][0]["name"]
            title = release["title"]
            score = release["score"]

            id = release["id"]
            date = parse(release["release-events"][0]["date"])
            final_music_results.append(
                {"artist": artist, "title": title, "score": score, "id": id, "date": date.year})

        final_music_results.sort(key=lambda x: x["score"], reverse=True)
        context['search_results'] = final_music_results
        print("----------FINAL_RESULTS----------")
        pprint(final_music_results)
        context['results_count'] = len(final_music_results)
        # TODO Unfinished...

    else:
        context['search_message'] = 'Unknown search, bug?'

    return render(request, 'search_results.html', context)
    #  render will hand the passed-in dictionary to a Context obj
    # (can find more about this in the GH django source-code)


def giggle_news(request):

    # Do a GET request using the API key to get the latest Guardian headlines
    # The parameters are detailed here:
    # https://open-platform.theguardian.com/documentation/search
    url = 'http://content.guardianapis.com/search?api-key=a938fccc-00e9-41ca-905c-741615da8be1&page-size=50'
    response = requests.get(url)
    news_data = response.json()  # Interpret response as JSON

    # The Guardian API responds with a JSON dictionary, that has a key called
    # 'response', which in turn is another dictionary with a key called
    # 'results'. This final key has the list that we want
    results_list = news_data['response']['results']
    print(f"Number of giggly-poo News results: {len(results_list)}")

    context = {
        'news_results': results_list,
    }
    return render(request, 'news.html', context)
