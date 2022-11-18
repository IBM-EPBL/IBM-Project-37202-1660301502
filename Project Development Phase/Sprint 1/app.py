from __future__ import print_function
from flask import Flask, render_template, url_for, request, redirect, session
import sqlite3 as sql
import re
import ibm_db

conn = ibm_db.connect(
    "DATABASE=bludb;HOSTNAME=815fa4db-dc03-4c70-869a-a9cc13f33084.bs2io90l08kqb1od8lcg.databases.appdomain.cloud:30367;PORT=30367;SECURITY=SSL;SSLServerCertificate=DigiCertGlobalRootCA.crt;UID=xqn34449;PWD=kNjQYJ60L73cDQ0V",
    '', '')

app = Flask(_name_)
app.secret_key = 'sackthi'


@app.route('/')
def signin():
    return render_template('signin.html')


@app.route('/user/<id>')
def user_info(id):
    with sql.connect('inventorymanagement.db') as con:
        con.row_factory = sql.Row
        cur = con.cursor()
        cur.execute(f'SELECT * FROM register WHERE email="{id}"')
        user = cur.fetchall()
    return render_template("user_info.html", user=user[0])


@app.route('/login', methods=['GET', 'POST'])
def login():
    global userid
    msg = ''

    if request.method == 'POST':
        un = request.form['username']
        pd = request.form['password_1']
        sql = "SELECT * FROM register WHERE username =? AND password_1=?"
        stmt = ibm_db.prepare(conn, sql)
        ibm_db.bind_param(stmt, 1, un)
        ibm_db.bind_param(stmt, 2, pd)
        ibm_db.execute(stmt)
        account = ibm_db.fetch_assoc(stmt)
        print(account)
        if account:
            session['loggedin'] = True
            session['id'] = account['USERNAME']
            userid = account['USERNAME']
            session['username'] = account['USERNAME']
            msg = 'Logged in successfully !'

            return render_template('index.html', msg=msg)
        else:
            msg = 'Incorrect username / password !'
    return render_template('signin.html', msg=msg)


@app.route('/accessbackend', methods=['POST', 'GET'])
def accessbackend():
    mg = ''
    if request.method == "POST":
        username = request.form['username']
        email = request.form['email']
        pw = request.form['password']
        sql = 'SELECT * FROM register WHERE email =?'
        stmt = ibm_db.prepare(conn, sql)
        ibm_db.bind_param(stmt, 1, email)
        ibm_db.execute(stmt)
        acnt = ibm_db.fetch_assoc(stmt)
        print(acnt)

        if acnt:
            mg = 'Account already exits!!'

        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            mg = 'Please enter the avalid email address'
        elif not re.match(r'[A-Za-z0-9]+', username):
            ms = 'name must contain only character and number'
        else:
            insert_sql = 'INSERT INTO register VALUES (?,?,?,?,?,?)'
            pstmt = ibm_db.prepare(conn, insert_sql)
            ibm_db.bind_param(pstmt, 1, username)
            ibm_db.bind_param(pstmt, 2, "firstname")
            ibm_db.bind_param(pstmt, 3, "lastname")
            ibm_db.bind_param(pstmt, 4, "123456789")
            ibm_db.bind_param(pstmt, 5, email)
            ibm_db.bind_param(pstmt, 6, pw)
            ibm_db.execute(pstmt)
            mg = 'You have successfully registered click signin!!'
            return render_template("signin.html")

    elif request.method == 'POST':
        msg = "fill out the form first!"
    return render_template("signup.html", meg=mg)


if _name_ == '_main_':
    app.run(debug=True)

app = Flask(_name_)
app.secret_key = 'shreesathyam'


@app.route('/')
def signin():
    return render_template('signin.html')


@app.route('/user/<id>')
def user_info(id):
    with sql.connect('inventorymanagement.db') as con:
        con.row_factory = sql.Row
        cur = con.cursor()
        cur.execute(f'SELECT * FROM register WHERE email="{id}"')
        user = cur.fetchall()
    return render_template("user_info.html", user=user[0])


@app.route('/login', methods=['GET', 'POST'])
def login():
    global userid
    msg = ''

    if request.method == 'POST':
        un = request.form['username']
        pd = request.form['password_1']
        sql = "SELECT * FROM register WHERE username =? AND password_1=?"
        stmt = ibm_db.prepare(conn, sql)
        ibm_db.bind_param(stmt, 1, un)
        ibm_db.bind_param(stmt, 2, pd)
        ibm_db.execute(stmt)
        account = ibm_db.fetch_assoc(stmt)
        print(account)
        if account:
            session['loggedin'] = True
            session['id'] = account['USERNAME']
            userid = account['USERNAME']
            session['username'] = account['USERNAME']
            msg = 'Logged in successfully !'

            return render_template('index.html', msg=msg)
        else:
            msg = 'Incorrect username / password !'
    return render_template('signin.html', msg=msg)


@app.route('/accessbackend', methods=['POST', 'GET'])
def accessbackend():
    mg = ''
    if request.method == "POST":
        username = request.form['username']
        email = request.form['email']
        pw = request.form['password']
        sql = 'SELECT * FROM register WHERE email =?'
        stmt = ibm_db.prepare(conn, sql)
        ibm_db.bind_param(stmt, 1, email)
        ibm_db.execute(stmt)
        acnt = ibm_db.fetch_assoc(stmt)
        print(acnt)

        if acnt:
            mg = 'Account already exits!!'

        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            mg = 'Please enter the avalid email address'
        elif not re.match(r'[A-Za-z0-9]+', username):
            ms = 'name must contain only character and number'
        else:
            insert_sql = 'INSERT INTO register VALUES (?,?,?,?,?,?)'
            pstmt = ibm_db.prepare(conn, insert_sql)
            ibm_db.bind_param(pstmt, 1, username)
            ibm_db.bind_param(pstmt, 2, "firstname")
            ibm_db.bind_param(pstmt, 3, "lastname")
            ibm_db.bind_param(pstmt, 4, "123456789")
            ibm_db.bind_param(pstmt, 5, email)
            ibm_db.bind_param(pstmt, 6, pw)
            ibm_db.execute(pstmt)
            mg = 'You have successfully registered click signin!!'
            return render_template("signin.html")

    elif request.method == 'POST':
        msg = "fill out the form first!"
    return render_template("signup.html", meg=mg)


if _name_ == '_main_':
    app.run(debug=True)

    {
        "connection": {
            "cli": {
                "arguments": [[
                    "-u", "xqn34449", "-p", "kNjQYJ60L73cDQ0V", "--ssl",
                    "--sslCAFile", "1dd14d0c-1b52-4f63-a606-53ecba28771d",
                    "--authenticationDatabase", "admin", "--host",
                    "815fa4db-dc03-4c70-869a-a9cc13f33084.bs2io90l08kqb1od8lcg.databases.appdomain.cloud:30367"
                ]],
                "bin":
                "db2",
                "certificate": {
                    "certificate_base64":
                    "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURIVENDQWdXZ0F3SUJBZ0lVT3dvMC9va09CUEN5RjFWeFJxVGhKRW9ubDBVd0RRWUpLb1pJaHZjTkFRRUwKQlFBd0hqRWNNQm9HQTFVRUF3d1RTVUpOSUVOc2IzVmtJRVJoZEdGaVlYTmxjekFlRncweU1EQTRNRFF3TWpVMwpNalphRncwek1EQTRNREl3TWpVM01qWmFNQjR4SERBYUJnTlZCQU1NRTBsQ1RTQkRiRzkxWkNCRVlYUmhZbUZ6ClpYTXdnZ0VpTUEwR0NTcUdTSWIzRFFFQkFRVUFBNElCRHdBd2dnRUtBb0lCQVFEb0ZFNGQ0SGdOeXZMUVIwR3gKQTB0amRXQnM4NVBjTDNyRStjN1R3K2diRUdQSUxJU0VZV3o4Y1g1TG1XQk0rY1FnOG9VeSsrQXJ3OEoxaXdRZQpySmlIU2I1clF4WTM0c3BQeGRFVEZkWEhScnJhMGU2VmM4MW42TllJL0ZHSnl1Q3hrTG5GMUtFQW9hbHYwaDM2CnhDT0FvcXRwTlFrTzNpMTRGeU0yRDRiajkxckI4RGk4Vy9XMVpVdVhMNGwzZXVLZUVCeTRuZmhJV3kySVc3aUMKbGpMZ3RlN3hZTDVHbVpKOUdsYWtrSnJ1cnpNREFQLzVUYnRlUUIydElodTBRSVRFZHlESVFYUEZGRDBHYzloZAo3M29JdnpVZUJ3VC9uRHN3OTJNNC82SkdtZWpKN0lpdFBTN3Y2a2dlUVhINDlBaUVJNXpQdUVpVzNOYi9GR0pYCmY2a2JBZ01CQUFHalV6QlJNQjBHQTFVZERnUVdCQlR2RzZ2RU5MRjFVbWZnQ003MmxOcmMzSDI2bURBZkJnTlYKSFNNRUdEQVdnQlR2RzZ2RU5MRjFVbWZnQ003MmxOcmMzSDI2bURBUEJnTlZIUk1CQWY4RUJUQURBUUgvTUEwRwpDU3FHU0liM0RRRUJDd1VBQTRJQkFRQTgvdFVnUTZlaTZYWHZndDJ0dUdrbkpva1Y5UWNkaTNZbFVFWkNDUytjClVQZ3NnMnVBMldxcHlWTm1mRkhjcHZ1Vmp0VHRYTmk2NUM2WlZsRnYxc3p1cU9zdFB5bkJ4blN4cUs0dkc0dTkKVjBWRUgxcE1tZnZBSmxkV3c4UEJTZGJtTk1HdGM4SzlwT0o5OVdBQ1ZFRXVXVGdDeHJKTXFBZnpYUXlidUV0dwp0cW1pV2swTmVXNGk5ZEY4S2dTWUVaQWFodXVBSlRldXB2R2RPV1U0eEV4bm03aEVRbmZPV2ZITThDd08xNWFZClRGQ2s0Q0pDUmR4Mlg5U284V3o1Z3MzcncyRkFDQlJyZ0NYeFFDZnZrZTZUdVNHNkxFRHJHbmpWaXVSQkpZdW4KT1RxWXROaVBHaHpuTHJrL0Fzam1LMzBxQmFLTmFyNUdQajhqalpNb2RiZ04KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=",
                    "name": "1dd14d0c-1b52-4f63-a606-53ecba28771d"
                },
                "composed": [
                    "db2 -u xqn34449 -p kNjQYJ60L73cDQ0V --ssl --sslCAFile 1dd14d0c-1b52-4f63-a606-53ecba28771d --authenticationDatabase admin --host 815fa4db-dc03-4c70-869a-a9cc13f33084.bs2io90l08kqb1od8lcg.databases.appdomain.cloud:30367"
                ],
                "environment": {},
                "type":
                "cli"
            },
            "db2": {
                "authentication": {
                    "method": "direct",
                    "password": "kNjQYJ60L73cDQ0V",
                    "username": "xqn34449"
                },
                "certificate": {
                    "certificate_base64":
                    "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURIVENDQWdXZ0F3SUJBZ0lVT3dvMC9va09CUEN5RjFWeFJxVGhKRW9ubDBVd0RRWUpLb1pJaHZjTkFRRUwKQlFBd0hqRWNNQm9HQTFVRUF3d1RTVUpOSUVOc2IzVmtJRVJoZEdGaVlYTmxjekFlRncweU1EQTRNRFF3TWpVMwpNalphRncwek1EQTRNREl3TWpVM01qWmFNQjR4SERBYUJnTlZCQU1NRTBsQ1RTQkRiRzkxWkNCRVlYUmhZbUZ6ClpYTXdnZ0VpTUEwR0NTcUdTSWIzRFFFQkFRVUFBNElCRHdBd2dnRUtBb0lCQVFEb0ZFNGQ0SGdOeXZMUVIwR3gKQTB0amRXQnM4NVBjTDNyRStjN1R3K2diRUdQSUxJU0VZV3o4Y1g1TG1XQk0rY1FnOG9VeSsrQXJ3OEoxaXdRZQpySmlIU2I1clF4WTM0c3BQeGRFVEZkWEhScnJhMGU2VmM4MW42TllJL0ZHSnl1Q3hrTG5GMUtFQW9hbHYwaDM2CnhDT0FvcXRwTlFrTzNpMTRGeU0yRDRiajkxckI4RGk4Vy9XMVpVdVhMNGwzZXVLZUVCeTRuZmhJV3kySVc3aUMKbGpMZ3RlN3hZTDVHbVpKOUdsYWtrSnJ1cnpNREFQLzVUYnRlUUIydElodTBRSVRFZHlESVFYUEZGRDBHYzloZAo3M29JdnpVZUJ3VC9uRHN3OTJNNC82SkdtZWpKN0lpdFBTN3Y2a2dlUVhINDlBaUVJNXpQdUVpVzNOYi9GR0pYCmY2a2JBZ01CQUFHalV6QlJNQjBHQTFVZERnUVdCQlR2RzZ2RU5MRjFVbWZnQ003MmxOcmMzSDI2bURBZkJnTlYKSFNNRUdEQVdnQlR2RzZ2RU5MRjFVbWZnQ003MmxOcmMzSDI2bURBUEJnTlZIUk1CQWY4RUJUQURBUUgvTUEwRwpDU3FHU0liM0RRRUJDd1VBQTRJQkFRQTgvdFVnUTZlaTZYWHZndDJ0dUdrbkpva1Y5UWNkaTNZbFVFWkNDUytjClVQZ3NnMnVBMldxcHlWTm1mRkhjcHZ1Vmp0VHRYTmk2NUM2WlZsRnYxc3p1cU9zdFB5bkJ4blN4cUs0dkc0dTkKVjBWRUgxcE1tZnZBSmxkV3c4UEJTZGJtTk1HdGM4SzlwT0o5OVdBQ1ZFRXVXVGdDeHJKTXFBZnpYUXlidUV0dwp0cW1pV2swTmVXNGk5ZEY4S2dTWUVaQWFodXVBSlRldXB2R2RPV1U0eEV4bm03aEVRbmZPV2ZITThDd08xNWFZClRGQ2s0Q0pDUmR4Mlg5U284V3o1Z3MzcncyRkFDQlJyZ0NYeFFDZnZrZTZUdVNHNkxFRHJHbmpWaXVSQkpZdW4KT1RxWXROaVBHaHpuTHJrL0Fzam1LMzBxQmFLTmFyNUdQajhqalpNb2RiZ04KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=",
                    "name": "1dd14d0c-1b52-4f63-a606-53ecba28771d"
                },
                "composed": [
                    "db2://xqn34449:kNjQYJ60L73cDQ0V@815fa4db-dc03-4c70-869a-a9cc13f33084.bs2io90l08kqb1od8lcg.databases.appdomain.cloud:30367/bludb?authSource=admin&replicaSet=replset"
                ],
                "database":
                "bludb",
                "host_ros": [
                    "815fa4db-dc03-4c70-869a-a9cc13f33084.bs2io90l08kqb1od8lcg.databases.appdomain.cloud:31618"
                ],
                "hosts": [{
                    "hostname":
                    "815fa4db-dc03-4c70-869a-a9cc13f33084.bs2io90l08kqb1od8lcg.databases.appdomain.cloud",
                    "port": 30367
                }],
                "jdbc_url": [
                    "jdbc:db2://815fa4db-dc03-4c70-869a-a9cc13f33084.bs2io90l08kqb1od8lcg.databases.appdomain.cloud:30367/bludb:user=<userid>;password=<your_password>;sslConnection=true;"
                ],
                "path":
                "/bludb",
                "query_options": {
                    "authSource": "admin",
                    "replicaSet": "replset"
                },
                "replica_set":
                "replset",
                "scheme":
                "db2",
                "type":
                "uri"
            }
        },
        "instance_administration_api": {
            "deployment_id":
            "crn:v1:bluemix:public:dashdb-for-transactions:eu-gb:a/bee400397ce7407189292ca97ec3036a:9f4d1f49-6788-4ca5-af9b-76248a09bdab::",
            "instance_id":
            "crn:v1:bluemix:public:dashdb-for-transactions:eu-gb:a/bee400397ce7407189292ca97ec3036a:9f4d1f49-6788-4ca5-af9b-76248a09bdab::",
            "root": "https://apieugb.db2.cloud.ibm.com/v5/ibm"
        }
    }
