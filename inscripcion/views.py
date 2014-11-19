from django.shortcuts import render
from inscripcion.models import Registro, Messages, Joven
from datetime import datetime

# Create your views here.
def index(request):
    return render(request, 'inscripcion/index.html')

def about(request):
    return render(request, 'inscripcion/about.html')

def register(request):
   if request.method=='POST':
        amigo = request.POST['amigo_secreto']
        exists = False
        if Registro.objects.filter(person__iexact=amigo).count() > 0:
            exists = True
        else:
            r = Registro()
            r.person = amigo
            r.save()
        return render(request, 'inscripcion/succesful.html', {'amigo': amigo, 'exists':exists})

def friends(request):
    friends_list = Registro.objects.order_by('person')
    return render(request, 'inscripcion/secrets_friends.html', {'friends_list': friends_list})

def muro(request):
    messages_list = Messages.objects.all()
    return render(request, 'inscripcion/muro.html', {'messages_list': messages_list})

def post_message(request):
    if request.method == 'POST':
        if Messages.objects.filter(text__iexact=request.POST['message']).count() > 0:
            messages_list = Messages.objects.all()
            return render(request, 'inscripcion/muro.html', {'messages_list': messages_list})
        else:
            m = Messages()
            m.person = request.POST['person']
            m.text = request.POST['message']
            m.pub_date = datetime.now()
            m.save()
            messages_list = Messages.objects.all()
            return render(request, 'inscripcion/muro.html', {'messages_list': messages_list})

def retiro(request):
    if request.method == 'POST':
        if Joven.objects.filter(rut__iexact=request.POST['rut']).count() > 0:
            return render(request, 'inscripcion/retiro_detalle.html')
        else:
            j = Joven()
            j.rut = request.POST['rut']
            j.nombres = request.POST['nombres']
            j.apellidos = request.POST['apellidos']
            j.celular = request.POST['celular']
            j.save()
    return render(request, 'inscripcion/retiro_detalle.html')

