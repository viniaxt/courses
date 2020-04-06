# Firebase - noSQL db

  ## Collection: 

  - Group of objects called documents
  - You can think of it as a table

  ## QueryReference and QuerySnapshot

  - Firestore lib give us back __one of them__

    `Query: "A request we make to firestore to give us something from de db"`

    ### QueryReference:
    > "A QueryReference object is an object that represents the "current" place in the database. It doesn't have the actual data of the collection or document. It just tell us details about it (i.e.: id, path, ...)"

    Usage: 
    ```js
      firestore.doc('/users/:userid')
      firestore.collections('/users')
    ```

    #### DocumentReference vs CollectionReference

      ##### DocumentReference (.doc)
      > Returns - beside all other attributes - an attribute called parent, that is the collection reference representig the collection that this document is in

      Used to perform our 

      ___C___ reate => set()

      ___R___ etrieve => get() => returns us a snapshotObject

      ___U___ update => update()

      ___D___ delete => delete
      
      methods

      ```js
      // returns documentSnapshot
      firestore.doc('/users/:userid').get()
      ```

      ##### CollectionReference (.collection)
      > 

      ```js
      // returns a querySnapshot
      firestore.collections('/users').get()
      ```

    ### QuerySnapshot:

    #### documentSnapshot

    The documentSnapshot allows us to:

    - ___.exists___
    
      Check if a document exists at this query using the .exists property (bool)"

    - ___.data()___

      Get the actual properties on the object by calling .data() method, which returns us a JSON object of the document

    
  