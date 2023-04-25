# FullStackTest
Assumptions
- Goal was to create a form for a user to create a new warehouse
- Form will hit a Post endpoint with valid JSON
- All warehouses will have 12 zones with 0 to 10 shelves available
- Each shelf is a unique name and location due to the warehouse name, zone, and specific location within the array

Schema:
In a no sql document based database such as mongoDB, each warehouse will be a new key.
Within that warehouse key, each zone will be an array that is the length of shelves available.

---
![image](https://user-images.githubusercontent.com/78133003/234143753-41da81cc-a455-40d6-b712-20cc228663e5.png)
---
![image](https://user-images.githubusercontent.com/78133003/234143920-a10429b9-e121-4115-a52f-71f9bcc4d9dd.png)
