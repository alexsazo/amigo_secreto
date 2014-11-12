from django.shortcuts import render
from inscripcion.models import Registro

# Create your views here.
def index(request):
    return render(request, 'inscripcion/index.html')

def about(request):
    return render(request, 'inscripcion/about.html')

def register(request):
    if request.method=='POST':
        amigo = request.POST['amigo_secreto']
        r = Registro()
        r.person = amigo
        r.save()
        return render(request, 'inscripcion/succesful.html', {'amigo': r})