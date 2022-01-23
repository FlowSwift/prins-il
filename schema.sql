CREATE TABLE IF NOT EXISTS "categories" (
        "category_id"   INTEGER,
        "category_name" TEXT UNIQUE,
        "category_animal" TEXT,
        "category_description"  TEXT,
    "category_info"     TEXT,
        "category_imgsrc"       TEXT,
        "category_url_slug" TEXT,
        PRIMARY KEY("category_id" AUTOINCREMENT)
    );
CREATE TABLE sqlite_sequence(name,seq);
CREATE TABLE IF NOT EXISTS "food" (
        "id"    INTEGER,
        "name"  TEXT,
    "category_id"       INTEGER NOT NULL,
        "subtitle"      TEXT,
    "desc_header"       TEXT,
        "description"   TEXT,
        "kg"    INTEGER,
        "itemNum"       TEXT,
        "ean"   TEXT,
        "animal"        TEXT,
    "imgsrc"    varchar,
    "url_slug" TEXT,
        PRIMARY KEY("id" AUTOINCREMENT),
        FOREIGN KEY("category_id") REFERENCES "categories"("category_id")
    );
CREATE TABLE IF NOT EXISTS "bullets" (
        "category_id"   INTEGER,
        "bullet_text"   TEXT,
        FOREIGN KEY("category_id") REFERENCES "categories"("category_id")
    );