from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import TemplateHTMLRenderer, JSONRenderer
from rest_framework.response import Response
from polls.models import Question


# Create your views here.
def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)


def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)

@api_view(('POST',))
def index(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    output =[q.question_text for q in latest_question_list]
    return JsonResponse({'data':{"result":output}})
