import React, {useEffect, useState} from 'react';

export default function() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/hhimanshu")
    .then(res => res.json())
    .then(user => setUser(user))
  })

  return <>
    <h1>Github Details</h1>
    <h2>User Name: {user.login}</h2>
    <h2>Company: <a href={user.blog} target="_blank">Bonsaiilabs</a></h2>
  </>
}
