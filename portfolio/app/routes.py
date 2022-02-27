from run import app
from run import render_template

@app.route("/")
def admin():
    return render_template("app/index.html")

@app.route("/about")
def about():
    return render_template("app/about.html")

@app.route("/portfolio")
def portfolio():
    return render_template("app/portfolio.html")

@app.route("/blog")
def blog():
    return render_template("app/blog.html")

@app.route("/contact")
def contact():
    return render_template("app/contact.html")
