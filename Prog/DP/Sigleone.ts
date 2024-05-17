let instance: any;
class DBConn {


    private constructor() {

    }


    static getInstance() {

        if (!instance) {
            console.log("Create new Instance")
            instance = new DBConn();
        }

        return instance;
    }
}


console.log(DBConn.getInstance());
console.log(DBConn.getInstance());




