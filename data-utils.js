export function addFriend(name, friends) {
    const newFriend = {
        name: name || `Friend #${Math.floor(Math.random() * 1000)}`,
        satisfaction: 1
    };
    
    friends.push(newFriend);
    // may need to return information here, but not positive yet
}

// should we remove "default" from the function below?
export default function findFriendByName(name, friends) {
    for (friend of friends) {
        if (friend.name = name) {
            return friend;
        }
    }
}