import os
import csv
from django.conf import settings
from django.shortcuts import HttpResponse



def home(request):
    # csv_file = csv.reader(open(os.path.join(settings.MEDIA_ROOT, 'test-env.csv')))
    print(os.path.join(settings.CSV_ROOT, 'test-env.csv'))
    return HttpResponse('OK Here comes')
