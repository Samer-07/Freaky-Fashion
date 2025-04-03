const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");
const path = require("path");

const port = 8000;
const dbPath = path.join(__dirname, "db", "Products.db");
const db = new Database(dbPath, { verbose: console.log });

const dbAdminPath = path.join(__dirname, "db", "Admin.db");
const dbAdmin = new Database(dbAdminPath, { verbose: console.log });

const app = express();
app.use(cors());
app.use(express.json()); 

//  Hämta alla produkter
app.get("/api/products", (req, res) => {
    const select = db.prepare("SELECT * FROM products");
    const products = select.all();
    res.json(products);
});

//  Hämta en produkt enligt ID
app.get("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const select = db.prepare("SELECT id, title, price, full_description, introduction, featuredImage FROM products WHERE id = ?");
    const product = select.get(id);

    if (!product) {
        return res.status(404).json({ message: "Produkten finns inte" });
    }

    res.json(product);
});

//  Söka efter produkter
app.get("/api/search", (req, res) => {
    const searchQuery = req.query.q;
    if (!searchQuery) {
        return res.json([]); 
    }

    const sql = `SELECT * FROM products WHERE title LIKE ? OR introduction LIKE ?`;
    const params = [`%${searchQuery}%`, `%${searchQuery}%`];

    try {
        const searchResults = db.prepare(sql).all(...params);
        res.json(searchResults);
    } catch (err) {
        res.status(500).json({ message: "Fel vid sökning" });
    }
});

// Hämta liknande produkter
app.get("/api/products/:id/similar", (req, res) => {
    const { id } = req.params;
    const product = db.prepare("SELECT * FROM products WHERE id = ?").get(id);

    if (!product) {
        return res.status(404).json({ message: "Produkten finns inte" });
    }

    const select = db.prepare(
        "SELECT id, title, price, introduction, featuredImage FROM products WHERE price BETWEEN ? AND ? AND id != ? LIMIT 5"
    );
    const similarProducts = select.all(product.price - 50, product.price + 50, id);

    res.json(similarProducts);
});

// Hämta alla produkter från Admin-tabellen
app.get("/api/admin", (req, res) => {
    const select = dbAdmin.prepare("SELECT id, title, price, full_description, introduction, featuredImage, sku FROM Admin");
    const products = select.all();
    res.json(products);
});

//  Lägg till en ny produkt i Admin-tabellen
app.post("/api/admin", (req, res) => {
    const { title, price, full_description, introduction, featuredImage, sku } = req.body;

    if (!title || !price || !full_description || !introduction || !featuredImage || !sku) {
        return res.status(400).json({ message: "Alla fält måste fyllas i" });
    }

    try {
        const insert = dbAdmin.prepare(`
            INSERT INTO Admin (title, price, full_description, introduction, featuredImage, sku) 
            VALUES (?, ?, ?, ?, ?, ?)
        `);
        const result = insert.run(title, price, full_description, introduction, featuredImage, sku);

        res.status(201).json({ message: "Produkten har lagts till", id: result.lastInsertRowid });
    } catch (err) {
        res.status(500).json({ message: "Fel vid tillägg av produkt" });
    }
});

//  Ta bort en produkt från Admin-tabellen
app.delete("/api/admin/:id", (req, res) => {
    const { id } = req.params;

    try {
        const deleteStmt = dbAdmin.prepare("DELETE FROM Admin WHERE id = ?");
        const result = deleteStmt.run(id);

        if (result.changes === 0) {
            return res.status(404).json({ message: "Produkten finns inte" });
        }

        res.json({ message: "Produkten har tagits bort" });
    } catch (err) {
        res.status(500).json({ message: "Fel vid borttagning av produkt" });
    }
});

//  Ta bort en produkt från products-tabellen
app.delete("/api/products/:id", (req, res) => {
    const { id } = req.params;

    try {
        const deleteStmt = db.prepare("DELETE FROM products WHERE id = ?");
        const result = deleteStmt.run(id);

        if (result.changes === 0) {
            return res.status(404).json({ message: "Produkten finns inte" });
        }

        res.json({ message: "Produkten har tagits bort" });
    } catch (err) {
        res.status(500).json({ message: "Fel vid borttagning av produkt" });
    }
});

app.listen(port, () => {
    console.log(`✅ Servern startade på port ${port}`);
});
