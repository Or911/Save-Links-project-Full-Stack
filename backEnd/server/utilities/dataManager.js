const list = require("../model/ListSchema");
const listDB = require("../model/ListSchema");
const UsersDB = require("../model/UserSchema");

function getListDataOfUser(id){
  return UsersDB.findById(id)
}

async function findDataOfUser(listsURL){
 let data =  await listDB.aggregate([
    { $match: {'_id': { $in: listsURL}} },
    {
      $group: {
        _id: "$category",
        lists:{ $addToSet: {name:'$name' ,url: '$url' , _id : '$_id'}} ,
        
      },
    },
  ])
return data

  }

  function addListToUser(userID , listID){
   return UsersDB.findByIdAndUpdate(userID ,{$push : {listsURL: listID}})
  }

  async function getList(user){
    let userData = await getListDataOfUser(user.id)
    if(!userData){return Error}
    let dataOfUser = await findDataOfUser(userData.listsURL)
    return dataOfUser
    }


function addList(user, data){
  let list = new listDB(data)
  if(data.name ==="" || data.url==="" ){throw Error}
  list.dateCreated = Date()
 list.save()
 return addListToUser(user.id ,list.id)
}

function deleteList(user , listID){
 return listDB.findByIdAndDelete(listID).then(()=> {return { successes: "successes"}} )
}

module.exports = { getList ,addList ,deleteList};
