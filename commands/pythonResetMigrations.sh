# reset_migrations_in_python_project

# 1. remove __pycache__ directories

# 2. remove migrations files like 0001_initial.py (do not remove the __init__.py file).

# 3. remove db.sqlite3
$ rm db.sqlite3

# 4. make migrations
$ python3 manage.py make migrations

# 5. migrate
$ python3 manage.py migrate
