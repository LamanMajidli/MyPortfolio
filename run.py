from admin.routes import *
from flask import Flask,redirect,render_template
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////test.db'
db = SQLAlchemy(app)

# App.routes
from app.routes import *

# Admin.routes
from admin.routes import *

if __name__=="__main__":
    # db.create_all()
    app.run(debug=True)