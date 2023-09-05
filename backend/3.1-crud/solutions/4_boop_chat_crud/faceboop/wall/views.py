from django.shortcuts import render, redirect

from .models import WallPost

# NOTE: This solution does not use Django Forms. It tries to be as logically
# simple as possible for all 4 CRUD operations, and thus does not do
# validation.

def homepage(request):

    # read (CRUD)
    posts = WallPost.objects.all()

    if 'message' in request.POST:
        # create (CRUD)
        message = request.POST['message']
        username = request.POST['username']
        WallPost.objects.create(
            username=username,
            text=message,
        )
        return redirect('/')

    # Include posts as "messages" in context
    context = {
        'messages': posts,
    }
    return render(request, 'pages/home.html', context)

def like(request, message_id):
    post = WallPost.objects.get(id=message_id)
    post.like_count = post.like_count + 1
    post.save() # update (CRUD)
    return redirect('/')

def delete(request, message_id):
    post = WallPost.objects.get(id=message_id)
    post.delete() # delete (CRUD)
    return redirect('/')

def update(request, message_id):
    # read (CRUD)
    post = WallPost.objects.get(id=message_id)

    if 'message' in request.POST:
        # update (CRUD)
        post.text = request.POST['message']
        post.username = request.POST['username']
        post.save()
        return redirect('/')

    context = {
        'message': post,
    }
    return render(request, 'pages/update_message.html', context)

