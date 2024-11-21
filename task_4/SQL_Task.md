# SQL Task for Frontend Developer Interview

This task is designed to test your basic SQL skills, focusing on `CASE WHEN`, `GROUP BY`, and ordering. You’ll work with a simplified `sales` dataset in PostgreSQL and write queries to generate useful insights.

### Table Schema

You are given a table called `sales` with the following structure:

- `id` (integer): Unique identifier for each transaction
- `product_category` (text): Category of the product sold (e.g., 'Furniture', 'Office Supplies', 'Technology')
- `quantity` (integer): Quantity of items sold

### Task

Write a query to find the total quantity sold for each `product_category`.
Categorize each category as:

- **'Low Sales'** if the total quantity is less than 50
- **'Medium Sales'** if the total quantity is between 50 and 100
- **'High Sales'** if the total quantity is more than 100

Sort the results alphabetically by `product_category`.

Output columns: `product_category`, `quantity_sum`, `sales_level`

### Example Schema

You can refer to this schema as an example:

`````sql
CREATE TABLE sales (
    id SERIAL PRIMARY KEY,
    product_category TEXT,
    quantity INTEGER,
);


````sql
SELECT product_category, SUM(quantity) as quantity_sum,
CASE
  WHEN SUM(quantity)< 50 THEN "Low Sales"
  WHEN SUM(quantity) BETWEEN 50 AND 100 THEN "Medium Sales"
  WHEN SUM(quantity) > 100 THEN "High Sales"
END AS sales_level
FROM sales
GROUP BY product_category
ORDER BY product_category;
`````
