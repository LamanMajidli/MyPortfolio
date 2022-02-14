from admin.routes import *
from flask import Flask,redirect,render_template
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////test.db'
db = SQLAlchemy(app)

@app.route("/")
def admin():
    return render_template("index.html")


if __name__=="__main__":
    # db.create_all()
    app.run(debug=True)