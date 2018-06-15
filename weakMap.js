// weakMap
// 1. weakMap will allow garbage collection, if the key has no reference
// 2. It's not a iterable, so you can't loop over it and only has get, set and delete

/*let aStrongMap = new Map();
let friend = {name: `Jim`};
aStrongMap.set(friend, `Best Friend`);
console.log(aStrongMap.get(friend));

friend = null;
console.log(aStrongMap.entries());*/

/*let aWeakMap = new WeakMap();
let friend = {friend: `Bill`};
aWeakMap.set(friend, `Best Friend`);
console.log(aWeakMap.get(friend));

friend = null;
console.log(aWeakMap.get(friend));
*/

const userData = {
	numberOfUsers: 2,
	status: 200,
	users: [
		{
			name: `Rob`,
			number: `1-515-555-1234`
		},
		{
			name: `Jim`,
			number: `1-515-555-9876`
		}
	]
}

let aWeakMap = new WeakMap();

function updateUsers(userData){
	userData.users.forEach((user)=>{
		aWeakMap.set(user, `Stuff`);
	})
}

updateUsers(userData);
console.log(aWeakMap.get(userData.users[1]));
// Some AJAX/HTTP/socket happens
/*userData.users[0] = null;
updateUsers(userData);
console.log(aWeakMap.get(userData.users[0]));*/