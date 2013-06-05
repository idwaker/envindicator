import os
import csv
import json
from django.conf import settings
from django.shortcuts import HttpResponse, render_to_response
from kartograph import Kartograph



def home(request):
    # csv_file = csv.reader(open(os.path.join(settings.MEDIA_ROOT, 'test-env.csv')))
    print(os.path.join(settings.CSV_ROOT, 'test-env.csv'))
    return HttpResponse('OK Here comes')


def generate(request):
    cfg = {
        "layers" : [
            {
                "id" : "nepal",
                "src" : os.path.join(settings.BASEPATH, 'data',
                                     'nepal_administrative.shp')
            }
        ],
        "proj" : {
            "id" : "satellite",
            "lon0" : 85.4,
            "lat0" : 27.7,
            "dist" : 1.3,
            "up" : 3
        },
        "bounds" : {
            "mode" : "bbox",
            "data" : [79, 25, 90, 31]
        }
    }
    k = Kartograph()
    k.generate(cfg, outfile=os.path.join(settings.BASEPATH, 'static', 'nepal.svg'))


def index(request):
    return render_to_response('visualize/index.html')


def getyear(request, year):
    data = {
        '2004' : {
            'agriculture': 4259,
            'forest': 3688.8,
            'total': 14335
        },
        '2005' : {
            'agriculture': 4259,
            'forest': 3636,
            'total': 14335
        },
        '2006' : {
            'agriculture': 4259,
            'forest': 3636,
            'total': 14335
        }
    }
    item = data[year]
    data = {
        'forest': (100 * item['forest']) / item['total'],
        'agro': (100 * item['agriculture']) / item['total'],
    }
    #return 
    return HttpResponse(json.dumps(data), mimetype="application/json")
