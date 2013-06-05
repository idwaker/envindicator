import os
import csv
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
            },
            {
                "id" : "mygrat",
                "special" : "graticule",
                "latitudes" : 1,
                "longitudes" : 1
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
