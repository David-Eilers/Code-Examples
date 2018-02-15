###
# This is a small example for a flask webserver
# Flask docs are located at: http://flask.pocoo.org/docs/0.12/
# Jinja Templater docs are located at: http://jinja.pocoo.org/docs/2.10/templates/
# Please remove comments from all code used or substitute with your own
###


# Import flask main library and flask render_template library
from flask import Flask, render_template

# Define app
app = Flask(__name__)

# This decorator specifies which url is bound to the def below
@app.route('/')
def home():
    ###
    # Your programming logic goes here
    ###

    # 'title' in this example specifies the webpage title and passes it through to the template
    title = 'Rainbusters'

    # 'render_template' renders the index.html template and passes through title to be used as a variable
    # many more things can be passed through, take a look at the documentation
    return render_template("index.html", title=title)

@app.route('/page1')
def page1():
    ###
    # Look at the documentation above
    ###

    title = 'dit is page 1'
    return render_template("page1.html", title=title)


if __name__ == "__main__":
    # This code runs the webserver, at the moment it run on localhost and debug is on but all that can be changed
    # Have a look at the documentation for the various options
    app.run(host='localhost', debug=True)