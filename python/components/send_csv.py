import suanpan
from suanpan import g
from suanpan.app import app
from suanpan.app.arguments import Csv
from suanpan.utils import csv

g.count = 0
app.sio.disable()


@app.trigger.interval(5)
@app.trigger.output(Csv(key="outputData1"))
def test2(_):
    if g.count < 1:
        g.count += 1
        return csv.load("tests/data/iris.csv")
    else:
        g.count += 1
        return None


if __name__ == "__main__":
    suanpan.run(app)
