from csv import DictReader
from pathlib import Path
from io import StringIO
from re import split
import sqlite3
import shutil

#INSERT INTO food (name, kg, category) VALUES ("A", 2, (SELECT category_id FROM categories WHERE category_name 
parts = split(r"\n,+\s*\n", Path("final_inv.csv").read_text())

shutil.move("prins.db", "backups/prins.db")  # create backup before deleting
con = sqlite3.connect("prins.db")
con.execute("PRAGMA foreign_keys = 1")
db = con.cursor()
print(db.execute("PRAGMA foreign_keys").fetchone()[0]) #????
food_table = DictReader(StringIO(parts[0]))
category_table = DictReader(StringIO(parts[1]))
db.execute("""CREATE TABLE "categories" (
	"category_id"	INTEGER,
	"category_name"	TEXT UNIQUE,
	"category_animal" TEXT,
	"category_description"	TEXT,
    "category_info"	TEXT,
	"category_imgsrc"	TEXT,
	PRIMARY KEY("category_id" AUTOINCREMENT)
    )""")
db.execute("""CREATE TABLE "food" (
	"id"	INTEGER,
	"name"	TEXT,
    "category_id"	INTEGER NOT NULL,
	"description"	TEXT,
	"kg"	INTEGER,
	"itemNum"	TEXT,
	"ean"	TEXT,
	"animal"	TEXT,
    "imgsrc"	varchar,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("category_id") REFERENCES "categories"("category_id")
    )""")
db.execute("""CREATE TABLE "bullets" (
	"category_id"	INTEGER,
	"bullet_text"	TEXT,
	FOREIGN KEY("category_id") REFERENCES "categories"("category_id")
    )""")
category_ids = {}  # grab id of the categories during init
for line in category_table:  # init categories and bullets
    # init categories table
    columns = {"category_name" : line["category"], "category_description" : line["description1"], "category_info" : line["description2"], "category_imgsrc" : line["imgsrc"], "category_animal" : line["animal"]}
    category_ids[line["category"]] = db.execute("""INSERT INTO categories (category_name, category_animal, category_description, category_info, category_imgsrc) VALUES (:category_name, :category_animal, :category_description, :category_info, :category_imgsrc) returning category_id""", columns).fetchone()[0]
    # init bullets table. `line` already has bullets under keys bullet1-i
    for i in range(6):
        db.execute("""INSERT INTO bullets (category_id, bullet_text) VALUES (?, ?)""", (category_ids[line["category"]], line[f"bullet{i+1}"]))
con.commit()
for line in food_table:
    columns = {"name" : line["food_name"], "category_id" : category_ids[line["category"]], "description" : line["description"], "kg" : line["kg"], "itemNum" : line["itemNum"], "ean" : line["EAN"], "animal" : line["animal"], "imgsrc" : line["imgsrc"]}
    db.execute("""INSERT INTO food (name, category_id, description, kg, itemNum, ean, animal, imgsrc) VALUES (:name, :category_id, :description, :kg, :itemNum, :ean, :animal, :imgsrc)""", columns)
con.commit()