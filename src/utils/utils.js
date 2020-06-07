
export const getLoggedUserId = (users, userName)=>{
    for (let user of Object.values(users)) {
        if (user.name === userName) {
          return user.id;
        }
      }

}

export const getLoggedUserAvatarUrl = (users, userName) => {
  for (let user of Object.values(users)) {
    if (user.name === userName) {
      return user.avatarURL.name;
    }
  }
};