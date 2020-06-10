
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

export const getQuestionOfUser = (users, question)=>{
  return Object.values(users).filter(
    (user) => user.id === question.author
  )
  
};
