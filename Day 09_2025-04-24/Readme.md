
# ---------- 🍃🌿🟢MongoDB Tutorial🟢🌿🍃 ----------

## 🗄️How to create a database

1. Open MongoDB Compass.

2. Click “Create Database”

3. Database Name: Ex : LibraryDB

4. Collection Name: Ex : Books

5. Click Create Database.

![1.png](./Outputs/1.png)
![2.png](./Outputs/2.png)


## Queries 

1. First, open the MongoDB shell
   
   ![shell.png](./Outputs/shell.png)


| Purpose | Query| Output |  
|-------|--------|--------| 
|✅ To Show All Databases| show databases; |![3.png](./Outputs/3.png)|  
|✅ To Show All Collections| show collections; |![4.png](./Outputs/4.png)|  
|✅ Switch to a Database | use LibraryDB; |![5.png](./Outputs/5.png)|     
|✅ Add data to MongoDB without using the shell |🔹 Steps: <br>1. Open MongoDB Compass.<br>2. Select your database.<br>3. Click on your collection<br>4. Click “Insert Document”<br>4. Enter data.<br>5. Click Insert<br>|![6.png](./Outputs/6.png)|
| | |![7.png](./Outputs/7.png)| 
| | |![8.png](./Outputs/8.png)| 
|✅ Add data to MongoDB using the shell | | | 
|🔹 Add single data|![9.png](./Outputs/9.png)|![11.png](./Outputs/11.png)| 
| | |![10.png](./Outputs/10.png)| 
|🔹 Add Multiple data|![12.png](./Outputs/12.png)|![13.png](./Outputs/13.png)| 
| | |![14.png](./Outputs/14.png)| 
|✅Find a document using MongoDB Command Shell|db.Books.find({genre: "Programming"})|![15.png](./Outputs/15.png) | 
|✅Using findOne to find a specific document<br>🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹<br>In here display only first one|db.Books.findOne({genre: "Database"})|![16.png](./Outputs/16.png)|
|✅Greater than, less than, equal, not equal| | |
|🔹 Using MongoDB Shell|db.Books.find({pages: {$gt: 300}})|![17.png](./Outputs/17.png)|
| |db.Books.find({pages: {$lt: 300}})|![18.png](./Outputs/18.png)|
| |db.Books.find({title: {$eq: "PHP for Beginners"}})|![19.png](./Outputs/19.png)|
| |db.Books.find({genre: {$ne: "Technology"}})|![20.png](./Outputs/20.png)|
|🔹 Using Compass|{ "pages": { "$gt": 300 } }|![21.png](./Outputs/21.png)|
| |{ "pages": { "$lt": 300 } }|![22.png](./Outputs/22.png)|
| |{ "title": { "$eq": "PHP for Beginners" } }|![23.png](./Outputs/23.png)|
| |{ "genre": { "$ne": "Technology" } }|![24.png](./Outputs/24.png)|
|✅Find a book that has JS in tags|db.Books.find({tags: {$in: ["JS"]}})|![25.png](./Outputs/25.png)|
|✅Find a book with MongoDB or PHP tags|db.Books.find({tags: {$in: ["MongoDB", "PHP"]}})|![26.png](./Outputs/26.png)|
|✅Find books without Node or VS tags|db.Books.find({tags: {$nin: ["Node", "VS"]}})|![27.png](./Outputs/27.png)|
|✅Sort data|{ "rating": 1 }  -> Acending order<br>{ "rating": -1 }  -> Decending Order| |
|🔹Sort data using Shell|db.Books.find().sort({rating: 1})<br>🔹🔹Acending order|![28.png](./Outputs/28.png)|
| |db.Books.find().sort({pages: -1})<br>🔹🔹Decending order|![29.png](./Outputs/29.png)|
| |db.Books.find({tags: {$in: ["VS"]}}).sort({rating: 1})|![30.png](./Outputs/30.png)|
